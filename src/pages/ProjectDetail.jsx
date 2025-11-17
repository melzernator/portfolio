import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import '../styles/ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const navigate = useNavigate()

  if (!project) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Project not found</h1>
        <Link to="/">← Back to work</Link>
      </div>
    )
  }

  // Get related projects (other projects)
  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2)

  return (
    <main className="project-detail">
      <article className="project-content">
        {/* Hero section */}
        <section className="project-hero">
          <img src={project.image} alt={project.title} className="hero-image" />
        </section>

        {/* Title and metadata */}
        <section className="project-header">
          <h1>{project.title}</h1>
          <p className="project-year">{project.year}</p>
          <div className="project-skills">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* Motivation */}
        {project.content.motivation && (
          <section className="project-section">
            <h2>Motivation</h2>
            <p>{project.content.motivation}</p>
          </section>
        )}

        {/* Context */}
        {project.content.context && (
          <section className="project-section">
            <h3>Context</h3>
            <p>{project.content.context}</p>
          </section>
        )}

        {/* Problems */}
        {project.content.problems && project.content.problems.length > 0 && (
          <section className="project-section">
            <h3>Problems</h3>
            <ul>
              {project.content.problems.map((problem, idx) => (
                <li key={idx}>{problem}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Goals */}
        {project.content.goals && project.content.goals.length > 0 && (
          <section className="project-section">
            <h3>Design Goals</h3>
            <ul>
              {project.content.goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Solution */}
        {project.content.solution && (
          <section className="project-section">
            <h3>Solution</h3>
            <p>{project.content.solution}</p>
          </section>
        )}

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <section className="related-projects">
            <h2>You may also like</h2>
            <div className="related-grid">
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/work/${p.slug}`} className="related-item">
                  <img src={p.image} alt={p.title} />
                  <h3>{p.title} {p.year}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Back to work link */}
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <Link to="/">← Back to work</Link>
      </div>
    </main>
  )
}
