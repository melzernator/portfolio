import { NavLink } from 'react-router-dom'

function Navigationbar() {
  const baseLink = {
    color: '#000',
    textDecoration: 'none',
    transition: 'font-size 120ms ease, opacity 120ms ease',
    display: 'inline-block',
    lineHeight: 1,
  }

  const navBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    zIndex: 50,
    background: 'transparent',
    boxSizing: 'border-box',
  }

  const nameStyle = {
    fontWeight: 700,
    fontSize: '1rem',
    color: '#111',
    letterSpacing: '0.02em',
  }

  const linksStyle = {
    display: 'flex',
    gap: 24,
    alignItems: 'center',
  }

  return (
    <nav style={navBarStyle} aria-label="Primary">
      <NavLink to="/" style={{ ...nameStyle, textDecoration: 'none', color: '#111' }}>
        Marvin Melzer
      </NavLink>
      <div style={linksStyle}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...baseLink,
            fontSize: isActive ? '1rem' : '0.95rem',
            opacity: isActive ? 1 : 0.6,
            fontWeight: isActive ? 600 : 400,
          })}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...baseLink,
            fontSize: isActive ? '1rem' : '0.95rem',
            opacity: isActive ? 1 : 0.6,
            fontWeight: isActive ? 600 : 400,
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigationbar