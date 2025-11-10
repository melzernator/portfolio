import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Navigationbar from './pages/Navigationbar.jsx'

// Small inline components so routes reference valid elements
function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  )
}

function NotFound() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404 — Not Found</h2>
      <p>The page you requested does not exist.</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* fallback route */}
      </Routes>
    </>
  )
}

export default App
