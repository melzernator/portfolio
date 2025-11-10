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

  // container fixed to top-right
  const navStyle = {
    position: 'fixed',
    top: 12,
    right: 16,
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    zIndex: 50,
  }

  return (
    <nav style={navStyle} aria-label="Primary">
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
    </nav>
  )
}

export default Navigationbar