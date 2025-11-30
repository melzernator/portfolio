import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
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

export default function Home() {
  return (
    <main className="work-main scroll-pages-root">
      <div className="scroll-pages-stack">
        <div className="work-grid home-page-1" style={{ transform: 'translateY(-50%)' }}>
          <MenuTile gridArea="1 / 1 / 2 / 2">
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: 700, 
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Einfach
            </h1>
          </MenuTile>
          <MenuTile to="/work" gridArea="1 / 2 / 3 / 3">
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 600, 
              margin: 0 
            }}>
              Work
            </h2>
          </MenuTile>
          <MenuTile gridArea="2 / 1 / 3 / 2">
            {/* Empty tile */}
          </MenuTile>
        </div>
      </div>
    </main>
  )
}
