import './Home.css'
import BottomNav from '../components/BottomNav'

export default function Home({ onNavigate }) {
  return (
    <div className="page home-page">
      <div className="home-bg" />
      <div className="home-content">
        <h1 className="home-title">
          Marvin's<br />Portfolio
        </h1>
        <p className="home-subtitle">design and fabrication</p>
      </div>
      <BottomNav active="home" onNavigate={onNavigate} />
    </div>
  )
}
