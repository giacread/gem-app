import { useRef, useState } from 'react'
import './HomeStudies.css'

const nav = ['Home', 'Review', 'Question Bank', 'Homework', 'Past Papers', 'Resources']
const paths = {
 Home: 'm3 10 9-7 9 7v10H3ZM9 20v-7h6v7',
 Review: 'M12 5v16M3 4h5l4 2 4-2h5v15h-5l-4 2-4-2H3Z',
 'Question Bank': 'M4 4h16v16H4ZM8 8h8M8 12h5M8 16h3',
 Homework: 'M8 5H4v16h16V5h-4M8 3h8v5H8Zm0 11 3 3 5-6',
 'Past Papers': 'M7 3h10l3 3v14H7ZM4 7v16h12M11 10h5M11 14h5',
 Resources: 'M3 6h7l2 3h9v11H3Z',
 search: 'M20 20l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
 bell: 'M6 9a6 6 0 0 1 12 0v6l2 3H4l2-3ZM10 21h4',
 settings: 'M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6',
 arrow: 'M4 12h16m-6-6 6 6-6 6',
 clip: 'm9 14 7-7a3 3 0 0 1 4 4L10 21a5 5 0 0 1-7-7L14 3',
 close: 'm6 6 12 12M6 18 18 6',
 menu: 'M4 6h16M4 12h16M4 18h16',
 clock: 'M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
}
function Icon({name, size=20}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.Review}/></svg> }
const tasks = [
 {title:'Differentiation practice', area:'Calculus', kind:'Homework', date:'8 Oct', time:'16:00', status:'In progress', text:'Complete questions 1–10. Show your working for each answer.'},
 {title:'Functions assessment', area:'Functions', kind:'Assessment', date:'9 Oct', time:'09:00', status:'Not started', text:'Review composite and inverse functions before the classroom assessment.'},
 {title:'Integration techniques', area:'Calculus', kind:'Study task', date:'12 Oct', time:'17:00', status:'Scheduled', text:'Review the methods summary and work through the guided examples.'},
]
const recent = [
 {title:'The chain rule', area:'Review · Calculus', when:'Today', icon:'Review', text:'Resume lesson 5 of 6 in Differentiation.'},
 {title:'Differentiation · Set 2', area:'Question Bank · Calculus', when:'Yesterday', icon:'Question Bank', text:'Resume at question 4 of 10.'},
 {title:'IB Mathematics formula booklet', area:'Resources · Reference', when:'Yesterday', icon:'Resources', text:'Return to the calculus section of the formula booklet.'},
 {title:'May 2023 · Paper 1', area:'Past Papers · AA HL', when:'3 Oct', icon:'Past Papers', text:'Return to your paper at question 6.'},
]
function SectionHeading({title,action,onAction}) {return <div className="section-heading"><h2>{title}</h2>{action&&<button className="text-button" onClick={onAction}>{action}<Icon name="arrow" size={16}/></button>}</div>}
function App() {
 const [query,setQuery]=useState('')
 const [modal,setModal]=useState(null)
 const [large,setLarge]=useState(false)
 const [contrast,setContrast]=useState(false)
 const [read,setRead]=useState(false)
 const [menu,setMenu]=useState(false)
 const dialog=useRef(null)
 const returnFocus=useRef(null)
 const open=(title,text,type='detail')=>{returnFocus.current=document.activeElement;setModal({title,text,type});dialog.current.showModal()}
 const close=()=>{dialog.current.close();setModal(null);returnFocus.current?.focus()}
 const go=name=>open(name,`Explore ${name.toLowerCase()} for IB Mathematics · Analysis & approaches · HL.`, 'collection')
 const message=()=>{setRead(true);open('Differentiation support session','Mr. Taylor · 6 October, 10:30\n\nLet’s work through differentiation together. Join our optional support session on Thursday, 8 October at 16:00. Bring your questions on the chain rule.\n\nAttached: Chain rule worksheet · PDF')}
 const searchItems=[...recent,...tasks.map(t=>({...t,area:t.kind+' · '+t.area,icon:'Homework'})),{title:'Differentiation support session',area:'Teacher messages',icon:'Review',text:'Thursday, 8 October at 16:00 with Mr. Taylor.'}]
 const results=searchItems.filter(x=>(x.title+' '+x.area).toLowerCase().includes(query.toLowerCase()))

 const continueCard=<section className="continue-card panel"><div className="lesson-info"><span className="eyebrow">Continue learning</span><p className="lesson-context">Review / Topic 5 · Calculus</p><h2>Differentiation</h2><p className="lesson-description">The chain rule, one step at a time.</p><button className="primary" onClick={()=>open('The chain rule','Differentiation · Topic 5: Calculus\n\nContinue lesson 5 of 6.\n\nFor y = f(g(x)), multiply the derivative of the outer function by the derivative of the inner function.\n\nExample: for y = (3x + 1)², the derivative is 6(3x + 1).')}>Continue <Icon name="arrow" size={18}/></button></div><div className="lesson-progress"><span className="progress-label">Topic progress</span><strong>4 <span>of 6</span></strong><p>lessons completed</p><progress max="6" value="4" aria-label="4 of 6 lessons completed"/><span className="meta">Next: The chain rule</span></div></section>
 const taskPanel=<section className="tasks-section"><SectionHeading title="Upcoming tasks" action="View all" onAction={()=>go('Homework')}/><div className="task-list">{tasks.map((t,i)=><button key={t.title} className="task-row" onClick={()=>open(t.title,`${t.kind} · ${t.area}\nDue ${t.date} 2026, ${t.time} · Europe/Rome\nStatus: ${t.status}\n\n${t.text}`)}><span className="date-tile"><b>{t.date.split(' ')[0]}</b><span>Oct</span></span><span className="task-info"><strong>{t.title}</strong><span>{t.kind} · {t.area}</span><small>{t.date} 2026 · {t.time} CEST</small></span><span className={'status status-'+i}>{t.status}</span><Icon name="arrow" size={16}/></button>)}</div><p className="timezone">All times Europe/Rome</p></section>
 const messages=<section className="messages-section"><SectionHeading title="Teacher messages" action={read?'All read':'1 unread'} onAction={message}/><div className={'message-card '+(!read?'unread':'')}><div className="message-author"><span className="avatar teacher-avatar">MT</span><span><strong>Mr. Taylor</strong><small>Today · 10:30</small></span>{!read&&<span className="unread-dot" aria-label="Unread"/>}</div><button className="message-content" onClick={message}><h3>Differentiation support session</h3><p>Let’s work through the chain rule together. Thursday at 16:00 — bring your questions.</p></button><button className="attachment" onClick={()=>open('Chain rule worksheet','Teacher attachment · PDF\n\nIllustrative worksheet preview:\n1. Differentiate y = (3x + 1)².\n2. Differentiate y = (x² + 2)³.\nShow your working for each answer.')}><Icon name="clip" size={16}/>Chain rule worksheet<small>PDF</small></button><button className="text-button" onClick={message}>Read message<Icon name="arrow" size={16}/></button></div><button className="message-secondary" onClick={()=>open('Preparing for Friday','Mr. Taylor · Yesterday\n\nPlease revisit composite and inverse functions before Friday’s assessment. The summary sheet is in Resources.')}><span><strong>Preparing for Friday</strong><small>Mr. Taylor · Yesterday</small></span><Icon name="arrow" size={16}/></button></section>
 const quick=<section className="quick-section"><SectionHeading title="Quick access"/><div className="quick-grid">{['Review','Question Bank','Homework','Resources','Past Papers'].map(n=><button key={n} onClick={()=>go(n)}><span className="quick-icon"><Icon name={n}/>{n==='Homework'&&<span className="alert-dot" aria-label="Outstanding homework"/>}</span><strong>{n}</strong><Icon name="arrow" size={16}/></button>)}</div></section>
 const activity=<section className="activity-section"><SectionHeading title="Recent activity"/><div className="activity-list">{recent.map(r=><button key={r.title} onClick={()=>open(r.title,r.area+'\n\n'+r.text)}><span className="activity-icon"><Icon name={r.icon}/></span><span className="activity-info"><strong>{r.title}</strong><small>{r.area}</small></span><span className="meta">{r.when}</span><Icon name="arrow" size={16}/></button>)}</div></section>
 return <div className={`home-studies ${large?'large-text':''} ${contrast?'high-contrast':''}`}>
  <a className="skip-link" href="#main">Skip to content</a>
  <div className="app-shell"><aside className={'sidebar '+(menu?'menu-open':'')}><a className="brand" href="#main" aria-label="Gem home"><svg width="29" height="32" viewBox="0 0 30 32" fill="none" aria-hidden="true"><path d="m15 2 4 10 9 4-9 4-4 10-4-10-9-4 9-4Z" stroke="currentColor" strokeWidth="1.5"/></svg>gem</a><nav aria-label="Main navigation">{nav.map(n=><button key={n} aria-current={n==='Home'?'page':undefined} onClick={()=>{setMenu(false);if(n!=='Home')go(n)}}><Icon name={n}/>{n}{n==='Homework'&&<span className="badge">2</span>}</button>)}</nav><div className="rail-bottom"><span className="rail-note">A little focus.<br/>Lasting progress.</span><div className="rail-profile"><span className="avatar">G</span><span><strong>Giacomo</strong><small>Student workspace</small></span></div></div></aside>
  <div className="workspace"><header className="topbar"><button className="menu-button icon-button" onClick={()=>{setMenu(!menu)}} aria-label="Toggle navigation" aria-expanded={menu}><Icon name="menu"/></button><span className="breadcrumb">Home</span><div className="search-wrap"><Icon name="search" size={18}/><label className="sr-only" htmlFor="global-search">Search Gem</label><input id="global-search" placeholder="Search topics, questions, resources…" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==='Escape')setQuery('')}}/>{query&&<div className="search-results"><strong>{results.length} results</strong>{results.map(r=><button key={r.title} onClick={()=>{open(r.title,r.area+'\n\n'+r.text);setQuery('')}}><Icon name={r.icon}/><span>{r.title}<small>{r.area}</small></span></button>)}{results.length===0&&<p>No matching items. Try “calculus” or “paper”.</p>}</div>}</div><div className="top-actions"><button className="icon-button notification" aria-label={read?'Notifications':'Notifications, 1 unread'} onClick={()=>open('Notifications',read?'You’re all caught up.':'New message from Mr. Taylor: Differentiation support session on Thursday, 8 October at 16:00.','notifications')}><Icon name="bell"/>{!read&&<i/>}</button><button className="icon-button" aria-label="Display settings" onClick={()=>open('Display settings','','settings')}><Icon name="settings"/></button><button className="avatar profile-button" aria-label="Your profile" onClick={()=>open('Giacomo','Student workspace\nIB Mathematics · Analysis & approaches · Higher level')}>G</button></div></header>
  <main id="main"><div className="welcome"><div><p className="eyebrow">Your learning space</p><h1>Welcome back, Giacomo.</h1><p>A little focus. Lasting progress.</p></div><div className="today"><Icon name="clock" size={16}/><span>Tuesday, 6 October</span></div></div><div className="content-grid">{continueCard}{taskPanel}{messages}{quick}{activity}</div><footer><span>IB Mathematics · AA HL</span><span>Space to think. Tools to move forward.</span></footer></main></div></div>
  <dialog ref={dialog} onCancel={e=>{e.preventDefault();close()}} onClick={e=>{if(e.target===dialog.current)close()}}><div className="dialog-heading"><span className="eyebrow">Gem · Preview</span><button className="icon-button" onClick={close} aria-label="Close dialog"><Icon name="close"/></button></div><h2>{modal?.title}</h2>{modal?.type==='settings'?<div className="settings"><label><span>Larger text<small>Increase the reading size throughout Gem.</small></span><input type="checkbox" checked={large} onChange={e=>setLarge(e.target.checked)}/></label><label><span>Stronger contrast<small>Darken secondary text and separators.</small></span><input type="checkbox" checked={contrast} onChange={e=>setContrast(e.target.checked)}/></label></div>:<p className="dialog-copy">{modal?.text}</p>}{modal?.type==='collection'&&<div className="collection-items">{(modal.title==='Homework'?tasks:recent).map(r=><button key={r.title} onClick={()=>setModal({...modal,title:r.title,text:r.text,type:'detail'})}>{r.title}<Icon name="arrow" size={16}/></button>)}</div>}{modal?.type==='notifications'&&!read&&<button className="primary" onClick={message}>Read teacher message<Icon name="arrow" size={16}/></button>}<p className="preview-note">Design preview with illustrative content.</p></dialog>
 </div>
}
export default App
