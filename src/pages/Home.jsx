import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
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
        <div className="project-card-info">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-year">{project.year}</p>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="work-main">
      <div className="work-container">
        <h1 className="work-heading">Work</h1>
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
