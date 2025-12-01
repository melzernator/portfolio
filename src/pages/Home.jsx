import { Link } from 'react-router-dom'
import { useState, useRef, useEffect, useMemo } from 'react'
import '../App.css'

function MenuTile({ to, children, gridArea }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const gradientAngle = 135 + tilt.rotateY * 10 - tilt.rotateX * 10;
  const brightness = 1 + Math.abs(tilt.rotateX + tilt.rotateY) * 0.03;

  const TileContent = (
    <div 
      ref={cardRef}
      className="project-card menu-tile"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: tilt.rotateX === 0 ? 'transform 0.5s ease, background-image 0.5s ease' : 'none',
        backgroundImage: `
          linear-gradient(#000000, #000000),
          linear-gradient(${gradientAngle}deg, 
            rgba(255, 255, 255, ${0.8 * brightness}) 0%,
            rgba(255, 255, 255, ${0.5 * brightness}) 25%,
            rgba(255, 255, 255, ${0.3 * brightness}) 50%,
            rgba(255, 255, 255, ${0.2 * brightness}) 75%,
            rgba(255, 255, 255, ${0.4 * brightness}) 100%)
        `,
        gridArea: gridArea,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  );

  return to ? (
    <Link to={to} className="project-card-link" style={{ gridArea }}>
      {TileContent}
    </Link>
  ) : (
    TileContent
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 5;
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const gradientAngle = 135 + tilt.rotateY * 10 - tilt.rotateX * 10;
  const brightness = 1 + Math.abs(tilt.rotateX + tilt.rotateY) * 0.03;

  return (
    <Link to={`/work/${project.slug}`} className="project-card-link">
      <div 
        ref={cardRef}
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: tilt.rotateX === 0 ? 'transform 0.5s ease, background-image 0.5s ease' : 'none',
          backgroundImage: `
            linear-gradient(#000000, #000000),
            linear-gradient(${gradientAngle}deg, 
              rgba(255, 255, 255, ${0.8 * brightness}) 0%,
              rgba(255, 255, 255, ${0.5 * brightness}) 25%,
              rgba(255, 255, 255, ${0.3 * brightness}) 50%,
              rgba(255, 255, 255, ${0.2 * brightness}) 75%,
              rgba(255, 255, 255, ${0.4 * brightness}) 100%)
          `,
        }}
      >
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
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const workPage1Projects = useMemo(() => [
    { id: 'braun-desk-fan', slug: 'hl-3', title: 'Braun Desk Fan', image: '/deskfan.png' },
    { id: 'a-table', slug: 'a-table', title: 'A Table', image: '/fens.png' },
    { id: 'breath-conductor', slug: 'lumenhale', title: 'Breath Conductor', image: '/table.png' },
  ], []);

  const workPage2Projects = useMemo(() => [
    { id: 'scale', slug: 'scale', title: 'Scale', image: '/scale.png' },
    { id: 'lamp', slug: 'lamp', title: 'Lamp', image: '/lamp.png' },
    { id: 'gaia', slug: 'gaia', title: 'Gaia', image: '/gaia.png' },
  ], []);

  // Auto-complete animation for 3 pages
  useEffect(() => {
    if (isAnimatingRef.current) return;
    
    // Snap to nearest page: 0, 1, or 2
    let target;
    if (progress < 0.33) target = 0;
    else if (progress < 0.67) target = 0.5;
    else target = 1;
    
    if (Math.abs(progress - target) < 0.01) return;

    const animateToTarget = () => {
      isAnimatingRef.current = true;
      const start = progress;
      const distance = target - start;
      const duration = 300;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const t = Math.min(elapsed / duration, 1);
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

  // Wheel listener
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      isAnimatingRef.current = false;
      
      const { deltaY } = e;
      let next = progress + deltaY * 0.0015;
      if (next < 0) next = 0;
      if (next > 1) next = 1;
      setProgress(next);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [progress]);

  // Calculate opacities for 3 pages
  const page1Opacity = progress < 0.5 ? 1 - (progress * 2) : 0;
  const page2Opacity = progress < 0.5 ? (progress * 2) : (2 - progress * 2);
  const page3Opacity = progress > 0.5 ? ((progress - 0.5) * 2) : 0;
  
  const page1Pointer = progress < 0.25 ? 'auto' : 'none';
  const page2Pointer = progress >= 0.25 && progress < 0.75 ? 'auto' : 'none';
  const page3Pointer = progress >= 0.75 ? 'auto' : 'none';

  return (
    <main className="work-main scroll-pages-root" ref={containerRef}>
      <div className="scroll-pages-stack">
        {/* Page 1 - Menu tiles */}
        <div
          className="work-grid home-page-1"
          style={{
            opacity: page1Opacity,
            transform: 'translateY(-50%)',
            pointerEvents: page1Pointer,
          }}
        >
          <MenuTile gridArea="1 / 1 / 2 / 2">
            <h1 style={{ 
              fontSize: '10rem', 
              fontWeight: 700, 
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Einfach
            </h1>
          </MenuTile>
          <MenuTile gridArea="1 / 2 / 3 / 3">
            <div style={{ 
              padding: '2rem', 
              fontSize: '0.9rem', 
              lineHeight: 1.6,
              textAlign: 'left',
              maxWidth: '100%',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}>
              <p style={{ margin: '0 0 1rem 0' }}>
                <strong>Einfach</strong> is an independent design studio in Boulder, Colorado, founded in 2025 by Marvin Melzer.
              </p>
              <p style={{ margin: '0 0 2rem 0' }}>
                I design consumer products with a focus on simplicity and purpose, stripping away the unnecessary to reveal what truly matters.
              </p>
              <p style={{ margin: '0 0 2rem 0' }}>
                <strong>Contact:</strong> marvin@melzer.org
              </p>
              <div style={{ margin: 0 }}>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Capabilities:</p>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  <li>Industrial Design</li>
                  <li>Product Development</li>
                  <li>Prototyping & Testing</li>
                  <li>Design Strategy</li>
                </ul>
              </div>
            </div>
          </MenuTile>
          <MenuTile gridArea="2 / 1 / 3 / 2">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 600, 
              margin: 0 
            }}>
              Work
            </h2>
          </MenuTile>
        </div>

        {/* Page 2 - Work tiles page 1 */}
        <div
          className="work-grid home-page-1"
          style={{
            opacity: page2Opacity,
            transform: 'translateY(-50%)',
            pointerEvents: page2Pointer,
          }}
        >
          {workPage1Projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Page 3 - Work tiles page 2 */}
        <div
          className="work-grid home-page-2"
          style={{
            opacity: page3Opacity,
            transform: 'translateY(-50%)',
            pointerEvents: page3Pointer,
          }}
        >
          {workPage2Projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
