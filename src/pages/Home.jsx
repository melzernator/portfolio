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
          style={project.id === 'gaia' ? { objectPosition: 'center 45%' } : {}}
        />
      </div>
    </Link>
  );
}

function MiniProjectCard({ project, size = 'medium' }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Multiply by 2 to match the tilt intensity of larger tiles
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const gradientAngle = 135 + tilt.rotateY * 10 - tilt.rotateX * 10;
  const brightness = 1 + Math.abs(tilt.rotateX + tilt.rotateY) * 0.03;

  const borderRadius = size === 'medium' ? '16px' : '8px';
  const imageBorderRadius = size === 'medium' ? '15px' : '7.5px';

  return (
    <Link to={`/work/${project.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%', width: '100%' }}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(500px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
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
          backgroundBlendMode: 'overlay, normal',
          backgroundSize: '100% 100%, 100% 100%',
          boxShadow: `
            0 0 0 0.5px rgba(255, 255, 255, 0.08),
            0 2px 6px rgba(255, 255, 255, 0.05),
            0 6px 16px rgba(255, 255, 255, 0.08),
            inset 0 0.5px 1px rgba(255, 255, 255, 0.25),
            inset 0 -0.5px 0.5px rgba(255, 255, 255, 0.05)
          `,
          borderRadius: borderRadius,
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: 'auto',
            objectFit: 'cover',
            display: 'block',
            filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 200ms ease',
            objectPosition: project.id === 'gaia' ? 'center 45%' : 'center center',
          }}
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
  ], []);

  const workPage2Projects = useMemo(() => [
    { id: 'gaia', slug: 'gaia', title: 'Gaia', image: '/gaia.png' },
    { id: 'lamp', slug: 'lamp', title: 'Lamp', image: '/lamp.png' },
    { id: 'scale', slug: 'scale', title: 'Scale', image: '/scale.png' },
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
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '15px',
            width: 'calc(100% - 70px)',
            maxWidth: 'calc(1600px - 70px)',
          }}
        >
          <MenuTile gridArea="1 / 1 / 2 / 3">
            <h1 style={{ 
              fontSize: '20rem', 
              fontWeight: 700, 
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Einfach
            </h1>
          </MenuTile>
          <MenuTile gridArea="2 / 2 / 3 / 3">
            <div style={{ 
              padding: '2rem', 
              fontSize: '0.9rem', 
              lineHeight: 1.6,
              textAlign: 'left',
              maxWidth: '100%',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              height: '100%'
            }}>
              <p style={{ margin: '0 0 1rem 0' }}>
                <strong>Einfach</strong> is an independent design studio in Boulder, Colorado, founded in 2025 by Marvin Melzer.
              </p>
              <p style={{ margin: 0 }}>
                I design consumer products with a focus on simplicity and purpose, stripping away the unnecessary to reveal what truly matters.
              </p>
            </div>
          </MenuTile>
          <MenuTile gridArea="2 / 1 / 3 / 2">
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '7.5px',
              padding: '15px',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
                <MiniProjectCard project={workPage1Projects[0]} size="medium" />
              </div>
              <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}>
                <MiniProjectCard project={workPage1Projects[1]} size="medium" />
              </div>
              <div style={{ 
                gridColumn: '1 / 2', 
                gridRow: '2 / 3',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '3.75px',
              }}>
                <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2', aspectRatio: '16 / 9' }}>
                  <MiniProjectCard project={workPage2Projects[0]} size="small" />
                </div>
                <div style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}>
                  <MiniProjectCard project={workPage2Projects[1]} size="small" />
                </div>
                <div style={{ gridColumn: '1 / 2', gridRow: '2 / 3', aspectRatio: '16 / 9' }}>
                  <MiniProjectCard project={workPage2Projects[2]} size="small" />
                </div>
              </div>
            </div>
          </MenuTile>
        </div>

        {/* Page 2 - Removed, content moved to page 1 */}
      </div>
    </main>
  )
}
