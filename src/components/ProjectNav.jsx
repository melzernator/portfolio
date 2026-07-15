import './ProjectNav.css'

export default function ProjectNav({ tabs, active, onNavigate, onClose }) {
  return (
    <nav className="project-nav">
      <button className="project-nav__close" onClick={onClose} aria-label="close">
        ✕
      </button>
      {tabs.map(tab => (
        <button
          key={tab}
          className={`project-nav__item ${active === tab ? 'project-nav__item--active' : ''}`}
          onClick={() => onNavigate(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  )
}
