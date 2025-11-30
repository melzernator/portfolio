import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useState, useMemo, useRef, useEffect } from 'react'
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
  // Scroll-driven progress: 0 = Page 1 fully visible, 1 = Page 2 fully visible
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const page1Items = useMemo(() => projects, []);
  const page2Items = useMemo(() => ([
    { id: 'lamp', slug: 'lamp', title: 'Lamp', image: '/lamp.png' },
    { id: 'scale', slug: 'scale', title: 'Scale', image: '/scale.png' },
    { id: 'gaia', slug: 'gaia', title: 'Gaia', image: '/gaia.png' },
  ]), []);

  // Auto-complete animation when user stops scrolling
  useEffect(() => {
    if (isAnimatingRef.current) return;
    
    const threshold = 0.5;
    const target = progress < threshold ? 0 : 1;
    
    // Already at target
    if (progress === target) return;

    // Start animation after scroll stops
    const animateToTarget = () => {
      isAnimatingRef.current = true;
      const start = progress;
      const distance = target - start;
      const duration = 300; // ms
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1);
        // Ease out quad
        const eased = 1 - (1 - t) * (1 - t);
        const newProgress = start + distance * eased;
        
        setProgress(newProgress);

        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          setProgress(target);
          isAnimatingRef.current = false;
        }
      };

      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(animateToTarget, 150);
    return () => clearTimeout(timeout);
  }, [progress]);

  // Wheel listener to adjust progress without actual vertical scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      // Prevent normal scroll
      e.preventDefault();
      
      // Stop any ongoing auto-animation
      isAnimatingRef.current = false;
      
      const { deltaY } = e;
      // Positive deltaY -> user scrolls up (towards Page 2)
      let next = progress + deltaY * 0.0015; // sensitivity factor
      // Clamp between 0 and 1
      if (next < 0) next = 0;
      if (next > 1) next = 1;
      setProgress(next);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [progress]);

  // Derive styles from progress
  const page1Opacity = 1 - progress;
  const page2Opacity = progress;

  const page1Pointer = progress < 0.5 ? 'auto' : 'none';
  const page2Pointer = progress >= 0.5 ? 'auto' : 'none';

  const page1Class = 'work-grid home-page-1';
  const page2Class = 'work-grid home-page-2';

  return (
    <main className="work-main scroll-pages-root" ref={containerRef}>
      <div className="scroll-pages-stack">
        {/* Page 1 */}
        <div
          className={page1Class}
          style={{
            opacity: page1Opacity,
            transform: `translateY(-50%)`,
            pointerEvents: page1Pointer,
          }}
        >
          {page1Items.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* Page 2 */}
        <div
          className={page2Class}
          style={{
            opacity: page2Opacity,
            transform: `translateY(-50%)`,
            pointerEvents: page2Pointer,
          }}
        >
          {page2Items.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
