import './BottomNav.css'

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="bottom-nav">
      <button
        className={`nav-item nav-item--logo ${active === 'home' ? 'nav-item--active' : ''}`}
        onClick={() => onNavigate('home')}
      >
        M
      </button>
      <button
        className={`nav-item ${active === 'creations' ? 'nav-item--active' : ''}`}
        onClick={() => onNavigate('creations')}
      >
        creations
      </button>
      <button
        className={`nav-item ${active === 'skills' ? 'nav-item--active' : ''}`}
        onClick={() => onNavigate('skills')}
      >
        skills
      </button>
      <button
        className={`nav-item ${active === 'about' ? 'nav-item--active' : ''}`}
        onClick={() => onNavigate('about')}
      >
        about
      </button>
    </nav>
  )
}
