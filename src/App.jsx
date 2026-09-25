import './App.css'

const stats = [
  { label: 'Current course', value: 'AA HL', tone: 'purple' },
  { label: 'Topics revised', value: '18', tone: 'teal' },
  { label: 'Homework due', value: '3', tone: 'amber' },
  { label: 'Accuracy', value: '82%', tone: 'green' },
]

const homework = [
  { title: 'Differentiation mini-task', due: 'Today, 4:30 PM', status: 'In progress' },
  { title: 'Sequences and series quiz', due: 'Tomorrow', status: 'Due soon' },
  { title: 'Trig identities recap', due: 'Friday', status: 'Ready to start' },
]

const topics = [
  { title: 'Differentiation', subtitle: 'Chain rule + tangents', level: 'Core' },
  { title: 'Sequences', subtitle: 'Arithmetic vs geometric', level: 'Applied' },
  { title: 'Probability', subtitle: 'Conditional chance', level: 'Exam' },
  { title: 'Vectors', subtitle: 'Lines and planes', level: 'Stretch' },
]

const recents = [
  'Integration techniques',
  'Markscheme: Polynomial functions',
  'Formula booklet: trigonometry',
  'Revision checklist: mock exam',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">IB</div>
          <div>
            <p className="brand-name">MathBridge</p>
            <span className="brand-sub">Student learning hub</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Review</a>
          <a href="#">Question bank</a>
          <a href="#">Homework</a>
          <a href="#">Resources</a>
        </nav>

        <button type="button" className="profile-pill">
          Aisha · AA HL
        </button>
      </header>

      <main className="dashboard">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">Welcome back</p>
            <h1>Keep your momentum going before the next assessment.</h1>
            <p className="hero-text">
              Review the concept, practise a targeted question, and check the markscheme
              before moving on.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn">Continue learning</button>
              <button type="button" className="secondary-btn">Open homework</button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="mini-card">
              <span>Current focus</span>
              <strong>Calculus</strong>
              <small>Chain rule practice set</small>
            </div>

            <div className="progress-ring" aria-label="Progress: 72 percent">
              <div className="progress-ring-inner">
                <span>72%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className={`stat-card ${stat.tone}`}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel">
            <div className="section-header">
              <h2>Homework</h2>
              <a href="#">View all</a>
            </div>

            <ul className="task-list">
              {homework.map((item) => (
                <li key={item.title} className="task-item">
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.due}</span>
                  </div>
                  <em>{item.status}</em>
                </li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <div className="section-header">
              <h2>Question bank</h2>
              <a href="#">Browse</a>
            </div>

            <div className="question-box">
              <p className="question-tag">Paper 1 · Calculator</p>
              <h3>Given f(x) = x^3 - 6x^2 + 9x, find the stationary points.</h3>
              <div className="question-meta">
                <span>Difficulty: 3/5</span>
                <span>10 mins</span>
              </div>
            </div>
          </article>
        </section>

        <section className="panel topic-panel">
          <div className="section-header">
            <h2>Explore by topic</h2>
            <a href="#">See all topics</a>
          </div>

          <div className="topic-grid">
            {topics.map((topic) => (
              <article key={topic.title} className="topic-card">
                <span className="topic-pill">{topic.level}</span>
                <h3>{topic.title}</h3>
                <p>{topic.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel recent-panel">
          <div className="section-header">
            <h2>Recently viewed</h2>
            <a href="#">Open recents</a>
          </div>

          <ul className="recent-list">
            {recents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
