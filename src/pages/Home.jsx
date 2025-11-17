import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { } from 'react'
import '../App.css'

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card-link">
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="work-main">
      <div className="work-container">
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
