import './App.css'

const navItems = [
  { label: 'Home', active: true, icon: '⌂' },
  { label: 'Review', icon: '◫' },
  { label: 'Question Bank', icon: '▣' },
  { label: 'Homework', icon: '◫', badge: 3 },
  { label: 'Past Papers', icon: '▤' },
  { label: 'Resources', icon: '▧' },
]

const tasks = [
  { title: 'Homework: Differentiation practice', detail: 'Complete Questions 1–10 (Topic 4)', due: 'Due tomorrow', tone: 'blue' },
  { title: 'Past Paper: May 2023 Paper 1', detail: 'Attempt and submit for marking', due: 'Due in 3 days', tone: 'lavender' },
  { title: 'Review: Integration techniques', detail: 'Watch the summary video and make notes', due: 'Due in 5 days', tone: 'neutral' },
]

const accessCards = [
  { title: 'Review', text: 'Revise key concepts and watch summary videos.', type: 'blue' },
  { title: 'Question Bank', text: 'Practise by topic, with instant feedback.', type: 'neutral' },
  { title: 'Homework', text: 'View and complete your homework tasks.', type: 'purple' },
  { title: 'Resources', text: 'Notes, formula sheets and helpful links.', type: 'green' },
  { title: 'Past Papers', text: 'Build confidence with real questions.', type: 'lavender' },
]

const activity = [
  { type: 'watch', label: 'Watched lesson', meta: 'Differentiation — The Chain Rule', time: '2 hours ago' },
  { type: 'check', label: 'Completed questions', meta: 'Topic 4 — Practice Set 2 (8/8 correct)', time: '5 hours ago' },
  { type: 'download', label: 'Downloaded resource', meta: 'IB Mathematics Formula Sheet', time: '1 day ago' },
  { type: 'notes', label: 'Reviewed notes', meta: 'Integration — Methods Summary', time: '2 days ago' },
  { type: 'paper', label: 'Attempted past paper', meta: 'May 2022 Paper 1 (65%)', time: '3 days ago' },
]

const teacherMessage = {
  name: 'Mr. Taylor', when: '2 days ago', badge: 'TS', title: 'Topic 4 support session', body: 'Hi everyone! I’ll be running an optional support session on Differentiation this Thursday at 4pm. We’ll go through common questions and exam tips. Hope to see you there!',
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">✦</div>
          <span className="brand-name">Gem</span>
        </div>

        <label className="search-box" aria-label="Search">
          <span className="search-icon">⌕</span>
          <input type="text" value="Search topics, questions, or resources..." readOnly />
        </label>

        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Notifications">◔</button>
          <button type="button" className="icon-button" aria-label="Messages">◍</button>
          <button type="button" className="avatar-button" aria-label="Profile">G</button>
        </div>
      </header>

      <div className="page-body">
        <aside className="sidebar">
          <nav className="sidebar-nav" aria-label="Sidebar navigation">
            {navItems.map((item) => (
              <button type="button" key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
              </button>
            ))}
          </nav>

          <div className="sidebar-orbit" aria-hidden="true">
            <div className="orbit-core" />
          </div>
        </aside>

        <main className="main-panel">
          <div className="content-scroll">
            <h1 className="greeting">Good morning!</h1>

            <section className="hero-card">
              <div className="hero-graphic" aria-hidden="true" />

              <div className="hero-copy">
                <div className="inline-label">Continue learning</div>
                <div className="topic-tag">Topic 4</div>
                <h2>Differentiation</h2>
                <button type="button" className="primary-button">
                  Resume lesson <span>→</span>
                </button>
              </div>

              <div className="progress-panel">
                <div className="progress-ring" aria-label="Progress 68 percent">
                  <div className="progress-ring-inner">68%</div>
                </div>
                <ul className="progress-list">
                  <li><span className="dot green" /> Lessons completed <strong>4 / 6</strong></li>
                  <li><span className="dot blue" /> Practice questions <strong>124</strong></li>
                  <li><span className="dot mint" /> Study streak <strong>12 days</strong></li>
                </ul>
              </div>
            </section>

            <section className="section-block">
              <div className="section-header">
                <h3>Upcoming tasks</h3>
                <button type="button" className="header-link">View all →</button>
              </div>

              <div className="task-list">
                {tasks.map((task) => (
                  <div key={task.title} className={`task-row ${task.tone}`}>
                    <div className="task-icon">▣</div>
                    <div className="task-copy">
                      <div className="task-title">{task.title}</div>
                      <div className="task-detail">{task.detail}</div>
                    </div>
                    <div className="task-due">{task.due}</div>
                    <div className="task-arrow">›</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-block">
              <div className="section-header">
                <h3>Teacher messages</h3>
                <button type="button" className="header-link">View all →</button>
              </div>

              <div className="teacher-card">
                <div className="teacher-meta">
                  <div className="teacher-badge">{teacherMessage.badge}</div>
                  <div className="teacher-copy">
                    <div className="teacher-name">{teacherMessage.name} <span>{teacherMessage.when}</span></div>
                    <div className="teacher-title">{teacherMessage.title}</div>
                  </div>
                  <button type="button" className="more-button" aria-label="More options">•••</button>
                </div>

                <p className="teacher-body">{teacherMessage.body}</p>
              </div>
            </section>

            <section className="section-block">
              <div className="section-header">
                <h3>Quick access</h3>
              </div>

              <div className="access-grid">
                {accessCards.slice(0, 3).map((card) => (
                  <article key={card.title} className={`access-card ${card.type}`}>
                    <div className="access-icon">▣</div>
                    <div className="access-copy">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                    <span className="access-arrow">→</span>
                  </article>
                ))}
              </div>

              <div className="access-grid secondary-grid">
                {accessCards.slice(3).map((card) => (
                  <article key={card.title} className={`access-card ${card.type}`}>
                    <div className="access-icon">▣</div>
                    <div className="access-copy">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                    <span className="access-arrow">→</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="section-block activity-block">
              <div className="section-header">
                <h3>Recent activity</h3>
                <button type="button" className="header-link">View all →</button>
              </div>

              <div className="activity-list">
                {activity.map((item) => (
                  <div key={`${item.type}-${item.meta}`} className="activity-item">
                    <span className={`activity-icon ${item.type}`} />
                    <span className="activity-label">{item.label}</span>
                    <span className="activity-meta">{item.meta}</span>
                    <span className="activity-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
