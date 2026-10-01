import './App.css'

const navItems = [
  { label: 'Home', active: true, icon: 'home' },
  { label: 'Review', icon: 'book' },
  { label: 'Question Bank', icon: 'file' },
  { label: 'Homework', icon: 'clipboard', badge: 3 },
  { label: 'Past Papers', icon: 'file' },
  { label: 'Resources', icon: 'folder' },
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

function Icon({ name, className = '' }) {
  const paths = {
    home: <><path d="m3 10 9-8 9 8" /><path d="M5 9v12h5v-7h4v7h5V9" fill="currentColor" /></>,
    book: <><path d="M12 5v16M12 5C8 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1Z" /></>,
    file: <><path d="M6 2h9l4 4v16H5V3Z" /><path d="M14 2v5h5M8 11h8M8 15h8M8 18h5M8 7h2" /></>,
    clipboard: <><path d="M8 5H5v17h14V5h-3M8 10h8" /><rect x="8" y="2" width="8" height="5" rx="2" /></>,
    folder: <><path d="M3 7V4h7l2 3h9v14H3Z" /><path d="M3 10h18" /></>,
    search: <><circle cx="10" cy="10" r="6.5" /><path d="m15 15 5 5" /></>,
    bell: <><path d="M5 9a7 7 0 0 1 14 0v6l2 3H3l2-3ZM9 21h6M12 2V1" /></>,
    settings: <><path d="m9 3 1-2h4l1 2 2 1 2 0 2 3-1 2v3l1 2-2 3-2 0-2 1-1 3h-4l-1-3-2-1H5l-2-3 1-2V9L3 7l2-3h2Z" /><circle cx="12" cy="11" r="3" /></>,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    watch: <><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4Z" fill="currentColor" stroke="none" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  }
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.file}</svg>
}

function LessonArt() {
  return <svg className="lesson-art" viewBox="0 0 514 242" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="wave" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#a8e7ea" stopOpacity=".1" /><stop offset="1" stopColor="#9ac5ff" stopOpacity=".5" /></linearGradient>
      <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#96c9f4" strokeWidth=".5" /></pattern>
      <radialGradient id="gridFade"><stop stopColor="white" stopOpacity=".8" /><stop offset="1" stopColor="white" stopOpacity="0" /></radialGradient>
      <mask id="gridMask"><rect width="514" height="242" fill="url(#gridFade)" /></mask>
    </defs>
    <path d="M0 242C150 220 214 196 295 165S405 96 514 52V242Z" fill="url(#wave)" />
    <path d="M130 242C216 203 256 148 295 165S371 253 514 38V242Z" fill="url(#wave)" />
    <path d="M0 242C183 188 250 145 302 185S415 243 514 242Z" fill="#e8fcff" opacity=".5" />
    <rect x="215" width="299" height="242" fill="url(#grid)" mask="url(#gridMask)" />
    <path d="M301 242V163M421 242V60" stroke="#9bd3ef" strokeWidth=".7" />
    <path d="M225 181Q270 168 301 163C340 145 341 82 372 79C391 80 406 123 421 130" fill="none" stroke="white" strokeWidth="4" />
    <path d="M225 181Q270 168 301 163C340 145 341 82 372 79C391 80 406 123 421 130" fill="none" stroke="#3544ff" strokeWidth="1.3" />
    {[[301,163],[372,79],[421,130],[421,60]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill="#3d44ff" stroke="white" strokeWidth="1.5" />)}
  </svg>
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <svg className="brand-mark" viewBox="0 0 28 32" fill="none" aria-hidden="true"><path d="M14 2 18 11 26 16 18 20 14 30 10 20 2 16 10 11Z" stroke="#4558ff" strokeWidth=".8"/><path d="m14 7 6 9-6 9-6-9Z" stroke="#7786ff"/><path d="m14 9 3 7-3 7-3-7Z" fill="#84e3db"/><path d="M2 16h24M14 2v28M8 10l12 12M20 10 8 22" stroke="#636cff" strokeWidth=".5"/></svg>
          <span className="brand-name">Gem</span>
        </div>

        <label className="search-box" aria-label="Search">
          <span className="search-icon"><Icon name="search" /></span>
          <input type="search" placeholder="Search topics, questions, or resources..." />
        </label>

        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Notifications"><Icon name="bell" /><span className="notification-dot" /></button>
          <button type="button" className="avatar-button" aria-label="Profile">G</button>
          <button type="button" className="icon-button settings-button" aria-label="Settings"><Icon name="settings" /></button>
        </div>
      </header>

      <div className="page-body">
        <aside className="sidebar">
          <nav className="sidebar-nav" aria-label="Sidebar navigation">
            {navItems.map((item) => (
              <button type="button" key={item.label} aria-label={item.label} aria-current={item.active ? 'page' : undefined} className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon"><Icon name={item.icon} /></span>
                <span className="nav-label">{item.label}</span>
                {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
              </button>
            ))}
          </nav>

          <div className="sidebar-orbit" aria-hidden="true">
            <div className="orbit-core" />
          </div>
        </aside>

        <main className="main-panel">
          <div className="content-scroll" tabIndex={0} aria-label="Homepage content">
            <div className="dashboard-content">
            <h1 className="greeting">Good morning!</h1>

            <section className="hero-card">
              <div className="lesson-panel">
              <LessonArt />

              <div className="hero-copy">
                <div className="inline-label">Continue learning</div>
                <div className="topic-tag">Topic 4</div>
                <h2>Differentiation</h2>
                <button type="button" className="primary-button">
                  Resume lesson <Icon name="arrow" />
                </button>
              </div>

              </div>
              <div className="progress-panel">
                <p className="progress-heading">Your progress</p>
                <div className="progress-ring" aria-label="Progress 68 percent">
                  <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" fill="none" stroke="#e2edff" strokeWidth="11" /><circle cx="50" cy="50" r="44" fill="none" stroke="#43cdc5" strokeWidth="11" strokeDasharray="188 277" strokeLinecap="round" /></svg>
                  <div className="progress-ring-inner">68%</div>
                </div>
                <ul className="progress-list">
                  <li><span className="dot green" aria-hidden="true">✓</span> Lessons completed <strong>4 / 6</strong></li>
                  <li><span className="dot blue" aria-hidden="true">✓</span> Practice questions <strong>124</strong></li>
                  <li><span className="dot mint" aria-hidden="true">✓</span> Study streak <strong>12 days</strong></li>
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
                    <div className="task-icon"><Icon name={task.tone === 'neutral' ? 'book' : 'file'} /></div>
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
                    <div className="access-icon"><Icon name={navItems.find(item => item.label === card.title)?.icon} /></div>
                    {card.title === 'Homework' && <span className="access-badge">3</span>}
                    <div className="access-copy">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                    <span className="access-arrow"><Icon name="arrow" /></span>
                  </article>
                ))}
              </div>

              <div className="access-grid secondary-grid">
                {accessCards.slice(3).map((card) => (
                  <article key={card.title} className={`access-card ${card.type}`}>
                    <div className="access-icon"><Icon name={navItems.find(item => item.label === card.title)?.icon} /></div>
                    {card.title === 'Homework' && <span className="access-badge">3</span>}
                    <div className="access-copy">
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </div>
                    <span className="access-arrow"><Icon name="arrow" /></span>
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
                    <span className={`activity-icon ${item.type}`}><Icon name={item.type === 'notes' ? 'book' : item.type} /></span>
                    <span className="activity-label">{item.label}</span>
                    <span className="activity-meta">{item.meta}</span>
                    <span className="activity-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>
            </div>
            <div className="footer-art" aria-hidden="true" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
