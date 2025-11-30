import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useState, useMemo } from 'react'
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
  const [page, setPage] = useState(1); // 1 or 2

  // Page 1 shows existing projects (now 3 items)
  const page1Items = useMemo(() => projects, []);

  // Page 2 shows the remaining images: scale, lamp, gaia, forks
  const page2Items = useMemo(() => ([
    { id: 'scale', slug: 'scale', title: 'Scale', image: '/scale.png' },
    { id: 'lamp', slug: 'lamp', title: 'Lamp', image: '/lamp.png' },
    { id: 'gaia', slug: 'gaia', title: 'Gaia', image: '/gaia.png' },
    { id: 'forks', slug: 'forks', title: 'Forks', image: '/forks.png' },
  ]), []);

  const activeItems = page === 1 ? page1Items : page2Items;
  const gridClass = page === 1 ? 'work-grid home-page-1' : 'work-grid';

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(2, p + 1));

  return (
    <main className="work-main">
      <div className="work-container">
        <div className={gridClass}>
          {activeItems.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Arrow buttons */}
        <div style={{
          position: 'absolute',
          top: 8,
          right: 16,
          display: 'flex',
          gap: '8px'
        }}>
          <button
            aria-label="Previous"
            onClick={goPrev}
            disabled={page === 1}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              background: page === 1 ? '#f5f5f5' : '#fff',
              cursor: page === 1 ? 'default' : 'pointer'
            }}
          >
            ←
          </button>
          <button
            aria-label="Next"
            onClick={goNext}
            disabled={page === 2}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              background: page === 2 ? '#f5f5f5' : '#fff',
              cursor: page === 2 ? 'default' : 'pointer'
            }}
          >
            →
          </button>
        </div>
      </div>
    </main>
  )
}
