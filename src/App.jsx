import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Navigationbar from './pages/Navigationbar.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

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
