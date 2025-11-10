import { NavLink } from 'react-router-dom'

function Navigationbar() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }

  return (
    <nav style={{ padding: 20, display: 'flex', gap: 16 }} aria-label="Primary">
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>
    </nav>
  )
}

export default Navigationbar