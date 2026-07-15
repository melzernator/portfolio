import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Creations from './pages/Creations'
import Skills from './pages/Skills'
import About from './pages/About'
import ProjectSign from './pages/ProjectSign'
import ProjectFan from './pages/ProjectFan'

export default function App() {
  const [view, setView] = useState('home')
  const [project, setProject] = useState(null)
  const [projectTab, setProjectTab] = useState('context')

  function navigate(page) {
    setProject(null)
    setView(page)
  }

  function openProject(proj) {
    setProject(proj)
    setProjectTab('context')
  }

  function closeProject() {
    setProject(null)
    setView('creations')
  }

  if (project === 'sign') {
    return (
      <div className="app">
        <ProjectSign tab={projectTab} onTabChange={setProjectTab} onClose={closeProject} />
      </div>
    )
  }

  if (project === 'fan') {
    return (
      <div className="app">
        <ProjectFan tab={projectTab} onTabChange={setProjectTab} onClose={closeProject} />
      </div>
    )
  }

  return (
    <div className="app">
      {view === 'home' && <Home onNavigate={navigate} />}
      {view === 'creations' && <Creations onNavigate={navigate} onOpenProject={openProject} />}
      {view === 'skills' && <Skills onNavigate={navigate} />}
      {view === 'about' && <About onNavigate={navigate} />}
    </div>
  )
}
