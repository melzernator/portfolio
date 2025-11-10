import { NavLink } from 'react-router-dom'

function Navigationbar() {
  // base styles for links
  const baseLink = {
    color: '#000', // black
    textDecoration: 'none',
    transition: 'font-size 120ms ease, opacity 120ms ease',
    display: 'inline-block',
    lineHeight: 1,
  }

  // container fixed to top, full width, flex row
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
    background: 'rgba(255,255,255,0.95)',
    boxSizing: 'border-box',
  }

  const nameStyle = {
    fontWeight: 700,
    fontSize: '1.2rem',
    color: '#111',
    letterSpacing: '0.02em',
  }

  const linksStyle = {
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  }

  return (
    <nav style={navBarStyle} aria-label="Primary">
      <div style={nameStyle}>marvin melzer</div>
      <div style={linksStyle}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            ...baseLink,
            fontSize: isActive ? '1.25rem' : '0.95rem', // active larger
            opacity: isActive ? 1 : 0.85,
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            ...baseLink,
            fontSize: isActive ? '1.25rem' : '0.95rem', // active larger
            opacity: isActive ? 1 : 0.85,
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigationbar