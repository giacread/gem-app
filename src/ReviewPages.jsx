import { lastReviewed, reviewHref, reviewUnits } from './reviewData'
import './ReviewPages.css'

function Arrow({ back = false }) {
  return <svg className={back ? 'back-arrow' : ''} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
}

export default function ReviewPages({ unit, topic }) {
  if (unit) return <div className="review-page unit-page">
    <a className="review-back" href={reviewHref()}><Arrow back />All units</a>
    <header className="review-heading unit-heading">
      <p className="unit-kicker">Unit {unit.id}</p>
      <h1 tabIndex={-1}>{unit.title}</h1>
      <p>Build your understanding, one topic at a time.</p>
    </header>
    <section aria-labelledby="topics-heading">
      <div className="review-section-heading"><h2 id="topics-heading">Topics</h2><span>{unit.topics.length} topics</span></div>
      <p className="topic-availability">Lesson content is being added. Topics will open here when ready.</p>
      <ol className="review-topic-list">
        {unit.topics.map(item => <li key={item.id} id={`topic-${item.id}`} tabIndex={item.id === topic?.id ? -1 : undefined} className={`review-topic-row ${item.id === topic?.id ? 'resume-topic' : ''}`}>
          <span className="review-number">{item.id}</span>
          <div className="review-topic-copy"><span>{item.title}</span>{item.id === topic?.id && <small>{item.id === lastReviewed.topicId ? 'Where you left off · The chain rule' : 'Selected topic'}</small>}</div>
          {item.hlOnly && <span className="hl-only">HL ONLY</span>}
        </li>)}
      </ol>
    </section>
  </div>

  const lastUnit = reviewUnits.find(item => item.id === lastReviewed.unitId)
  return <div className="review-page">
    <header className="review-heading"><h1 tabIndex={-1}>Review</h1><p>Pick up where you left off, or explore a unit.</p></header>
    <section className="review-resume" aria-labelledby="continue-studying">
      <div className="review-resume-copy">
        <h2 id="continue-studying">Continue studying</h2>
        <p className="review-context">Unit {lastUnit.id} · {lastUnit.title} / {lastReviewed.topicTitle}</p>
        <h3>{lastReviewed.lessonTitle}</h3>
        <p>Pick up from your last lesson.</p>
        <a className="primary" href={reviewHref(lastUnit.id, lastReviewed.topicId)}>Continue studying<Arrow /></a>
      </div>
      <div className="lesson-progress review-progress">
        <span className="progress-label">{lastReviewed.topicTitle} progress</span>
        <strong>{lastReviewed.completed} of {lastReviewed.total}</strong>
        <p>lessons completed</p>
        <progress max={lastReviewed.total} value={lastReviewed.completed} aria-label={`${lastReviewed.completed} of ${lastReviewed.total} lessons completed`} />
        {lastReviewed.isSample && <span className="meta">Sample progress</span>}
      </div>
    </section>
    <section aria-labelledby="all-units-heading">
      <div className="review-section-heading"><h2 id="all-units-heading">All units</h2><span>{reviewUnits.length} units</span></div>
      <ol className="review-unit-list">
        {reviewUnits.map(item => <li key={item.id}><a className="review-unit-row" href={reviewHref(item.id)}>
          <span className="review-number">{String(item.id).padStart(2, '0')}</span>
          <span className="review-unit-copy"><small>Unit {item.id}</small><span>{item.title}</span></span>
          <span className="explore-unit"><span>Explore unit</span><Arrow /></span>
        </a></li>)}
      </ol>
    </section>
  </div>
}
