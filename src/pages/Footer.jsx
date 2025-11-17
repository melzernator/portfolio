import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      padding: '40px 24px',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#666',
      marginTop: '60px'
    }}>
      <p>
        <a href="mailto:marvin@melzer.org" style={{ color: '#000', textDecoration: 'none' }}>
          marvin@melzer.org
        </a>
      </p>
    </footer>
  )
}
