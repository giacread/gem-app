// Topic order and HL boundaries supplied by the course owner.
const curriculum = [
  ['Number and algebra', 9, [
    'Scientific notation',
    'Arithmetic sequences and series; sigma notation',
    'Geometric sequences and series',
    'Compound interest and depreciation',
    'Integer exponents and introductory logarithms',
    'Approximations, bounds, estimation and percentage error',
    'Loan amortization and annuities',
    'Solving simultaneous and polynomial equations using technology',
    'Logarithm laws',
    'Rational exponents',
    'Infinite geometric series',
    'Cartesian complex numbers and Argand diagrams',
    'Polar and exponential complex numbers; combining sinusoids',
    'Matrix algebra, determinants, inverses and simultaneous equations',
    'Eigenvalues, eigenvectors and matrix diagonalization',
  ]],
  ['Functions', 7, [
    'Straight-line equations; parallel and perpendicular lines',
    'Function notation, domain, range and introductory inverses',
    'Drawing and interpreting function graphs',
    'Graph features and intersections',
    'Modelling: linear, quadratic, cubic, exponential, variation and sinusoidal functions',
    'Selecting, fitting, evaluating and using models',
    'Composite functions and inverse functions',
    'Graph transformations',
    'Further models: logarithmic, logistic, piecewise, phase-shifted sinusoidal and half-life',
    'Logarithmic scaling and linearization',
  ]],
  ['Geometry and trigonometry', 7, [
    '3D distances, midpoints, angles, volumes and surface areas',
    'Trigonometric ratios, sine/cosine rules and triangle areas',
    'Trigonometric applications: bearings, elevation and depression',
    'Arcs and sectors',
    'Perpendicular bisectors',
    'Voronoi diagrams',
    'Radians',
    'Unit circle, identities, ambiguous sine rule and trigonometric equations',
    'Matrix transformations, area scaling and fractals',
    'Vector fundamentals',
    'Vector equations of lines',
    'Vector kinematics',
    'Scalar/vector products and vector components',
    'Graph theory fundamentals',
    'Adjacency matrices, walks and transition matrices',
    'Network algorithms: Eulerian/Hamiltonian routes, minimum spanning trees, Chinese postman and travelling salesman',
  ]],
  ['Statistics and probability', 12, [
    'Populations, sampling, data types, bias and outliers',
    'Frequency tables, histograms, cumulative frequency and box plots',
    'Averages, dispersion and effects of data transformations',
    'Pearson correlation and linear regression',
    'Probability fundamentals and expected frequencies',
    'Combined, conditional and independent events; probability diagrams',
    'Discrete random variables and expected values',
    'Binomial distribution',
    'Normal distribution',
    'Spearman rank correlation',
    'Hypothesis testing: chi-squared tests and two-sample t-tests',
    'Data-collection design, reliability, validity and chi-squared categorization',
    'Nonlinear regression, residuals and coefficient of determination',
    'Random-variable transformations/combinations and unbiased estimators',
    'Sampling distributions and central limit theorem',
    'Confidence intervals',
    'Poisson distribution',
    'Further hypothesis tests; critical regions; Type I/II errors',
    'Markov chains and steady-state probabilities',
  ]],
  ['Calculus', 9, [
    'Limits and introductory derivatives',
    'Increasing and decreasing functions',
    'Differentiating integer powers',
    'Tangents and normals',
    'Introductory integration and areas',
    'Stationary points and local extrema',
    'Optimization',
    'Trapezoidal rule',
    'Further derivatives; chain/product/quotient rules; related rates',
    'Second derivatives, concavity and inflection points',
    'Further integration and substitution',
    'Enclosed areas and volumes of revolution',
    'Displacement, velocity and acceleration',
    'Differential-equation modelling and separation of variables',
    'Slope fields',
    'Euler’s method, including coupled equations',
    'Phase portraits and equilibrium behaviour',
    'Second-order differential equations',
  ]],
]

export const reviewUnits = curriculum.map(([title, hlStart, titles], index) => ({
  id: index + 1,
  title,
  topics: titles.map((title, topicIndex) => ({
    id: `${index + 1}.${topicIndex + 1}`,
    title,
    hlOnly: topicIndex + 1 >= hlStart,
  })),
}))

// Existing demonstration progress, until lesson content and student records exist.
// Visiting a unit must never change a student's last lesson or completion count.
export const lastReviewed = {
  unitId: 5,
  topicId: '5.9',
  topicTitle: 'Differentiation',
  lessonTitle: 'The chain rule',
  completed: 4,
  total: 6,
  isSample: true,
}

export function reviewHref(unitId, topicId) {
  return `#/review${unitId ? `/${unitId}` : ''}${topicId ? `/${topicId}` : ''}`
}

export function parseRoute(hash) {
  if (!hash.startsWith('#/review')) return { page: 'home' }
  if (hash === '#/review') return { page: 'review' }
  const match = /^#\/review\/([1-5])(?:\/([1-5]\.\d+))?$/.exec(hash)
  const unit = match && reviewUnits.find(unit => unit.id === Number(match[1]))
  if (!unit) return { page: 'review' }
  const topic = unit.topics.find(topic => topic.id === match[2])
  return { page: 'review', unit, topic }
}
