import { useState, useRef, useEffect, useMemo } from 'react'
import '../App.css'

function MenuTile({ children, gridArea }) {
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

  return TileContent;
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
  );
}

function MiniProjectCard({ project, size = 'medium', hoveredImage, setHoveredImage }) {
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
    setHoveredImage(project.id);
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
    setHoveredImage(null);
  };

  const gradientAngle = 135 + tilt.rotateY * 10 - tilt.rotateX * 10;
  const brightness = 1 + Math.abs(tilt.rotateX + tilt.rotateY) * 0.03;

  const borderRadius = size === 'medium' ? '16px' : '8px';
  const imageBorderRadius = size === 'medium' ? '15px' : '7.5px';

  return (
    <div style={{ textDecoration: 'none', display: 'block', height: '100%', width: '100%' }}>
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
            aspectRatio: '16 / 6',
            objectFit: 'cover',
            display: 'block',
            filter: hoveredImage && hoveredImage !== project.id
              ? 'grayscale(100%) blur(4px)'
              : isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            transition: 'filter 200ms ease',
            objectPosition: project.id === 'gaia' ? 'center 45%' : 'center center',
          }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const workPage1Projects = useMemo(() => [
    { id: 'braun-desk-fan', slug: 'hl-3', title: 'Braun Desk Fan', image: '/deskfan.png' },
    { id: 'a-table', slug: 'a-table', title: 'A Table', image: '/fens.png' },
  ], []);

  const workPage2Projects = useMemo(() => [
    { id: 'gaia', slug: 'gaia', title: 'Gaia', image: '/gaia.png' },
    { id: 'lamp', slug: 'lamp', title: 'Lamp', image: '/lamp.png' },
    { id: 'scale', slug: 'scale', title: 'Scale', image: '/scale.png' },
  ], []);

  return (
    <main className="work-main scroll-pages-root">
      <div className="scroll-pages-stack">
        {/* Page 1 - Menu tiles */}
        <div
          className="work-grid home-page-1"
          style={{
            transform: 'translateY(-50%)',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: 'auto 53px',
            gap: '15px',
            width: 'calc(100% - 70px)',
            maxWidth: 'calc(1600px - 70px)',
          }}
        >
          <MenuTile gridArea="1 / 1 / 2 / 2">
            <h1 style={{ 
              fontSize: '12rem', 
              fontWeight: 700, 
              margin: 0,
              letterSpacing: '-0.02em',
              textAlign: 'left',
              paddingLeft: '2rem'
            }}>
              Einfach
            </h1>
          </MenuTile>
          <MenuTile gridArea="1 / 2 / 2 / 3">
            <div style={{ 
              padding: '1rem', 
              fontSize: '0.9rem', 
              lineHeight: 1.6,
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '120px',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}>
              <p style={{ margin: '0 0 1rem 0' }}>
                <strong>Einfach</strong> is an independent design studio in Boulder, Colorado, founded in 2025 by Marvin Melzer.
              </p>
              <p style={{ margin: 0 }}>
                I design consumer products with a focus on simplicity and purpose, stripping away the unnecessary to reveal what truly matters.
              </p>
            </div>
          </MenuTile>
          <div style={{ 
            gridArea: '2 / 1 / 3 / 3',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gridTemplateRows: '1fr 1fr',
            gap: '7.5px',
            width: '100%',
            height: '100%',
          }}>
            <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
              <MiniProjectCard project={workPage1Projects[1]} size="medium" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
            </div>
            <div style={{ gridColumn: '2 / 3', display: 'grid', gridTemplateRows: '1fr 1fr', gap: '3.75px' }}>
              <div style={{ gridRow: '1 / 2' }}>
                <MiniProjectCard project={workPage1Projects[0]} size="medium" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
              </div>
              <div style={{ gridRow: '2 / 3', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.75px' }}>
                <div>
                  <MiniProjectCard project={workPage2Projects[0]} size="small" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
                </div>
                <div>
                  <MiniProjectCard project={workPage2Projects[1]} size="small" hoveredImage={hoveredImage} setHoveredImage={setHoveredImage} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2 - Removed, content moved to page 1 */}
      </div>
    </main>
  )
}
