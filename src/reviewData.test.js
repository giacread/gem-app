import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lastReviewed, parseRoute, reviewHref, reviewUnits } from './reviewData.js'

test('all five units retain the supplied topic counts and HL boundaries', () => {
  assert.deepEqual(reviewUnits.map(unit => unit.title), [
    'Number and algebra', 'Functions', 'Geometry and trigonometry',
    'Statistics and probability', 'Calculus',
  ])
  assert.deepEqual(reviewUnits.map(unit => unit.topics.length), [15, 10, 16, 19, 18])
  assert.deepEqual(reviewUnits.map(unit => unit.topics.find(topic => topic.hlOnly).id), ['1.9', '2.7', '3.7', '4.12', '5.9'])
  assert.deepEqual(reviewUnits.map(unit => unit.topics.filter(topic => topic.hlOnly).length), [7, 4, 10, 8, 10])
  const ids = reviewUnits.flatMap(unit => unit.topics.map(topic => topic.id))
  assert.equal(new Set(ids).size, 78)
})

test('every unit and topic link resolves on a direct visit or reload', () => {
  for (const unit of reviewUnits) {
    assert.equal(parseRoute(reviewHref(unit.id)).unit, unit)
    for (const topic of unit.topics) {
      const route = parseRoute(reviewHref(unit.id, topic.id))
      assert.equal(route.unit, unit)
      assert.equal(route.topic, topic)
    }
  }
  assert.deepEqual(parseRoute('#/review'), { page: 'review' })
  assert.deepEqual(parseRoute('#/home'), { page: 'home' })
  assert.deepEqual(parseRoute('#balanced'), { page: 'home' })
})

test('invalid units and mismatched topic ids fall back safely', () => {
  for (const hash of ['#/review/0', '#/review/6', '#/review/anything', '#/review/1/1.1/extra']) {
    assert.deepEqual(parseRoute(hash), { page: 'review' })
  }
  assert.equal(parseRoute('#/review/1/5.9').topic, undefined)
  assert.equal(parseRoute('#/review/1/1.99').topic, undefined)
})

test('resume resolves to chain rule topic and browsing never changes lesson progress', () => {
  const before = { ...lastReviewed }
  const route = parseRoute(reviewHref(lastReviewed.unitId, lastReviewed.topicId))
  assert.equal(route.unit.title, 'Calculus')
  assert.equal(route.topic.id, '5.9')
  for (const unit of reviewUnits) parseRoute(reviewHref(unit.id))
  assert.deepEqual(lastReviewed, before)
  assert.ok(lastReviewed.completed <= lastReviewed.total)
})
