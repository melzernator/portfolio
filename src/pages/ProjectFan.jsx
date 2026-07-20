import { useEffect } from 'react'
import './ProjectSign.css'
import './ProjectFan.css'

/* Hero + renders */
const imgHero           = "https://www.figma.com/api/mcp/asset/930aee27-ced2-4a6d-89dc-4f8b177530b0"
const imgRenderLaying   = "https://www.figma.com/api/mcp/asset/f19c18c0-b029-4143-afa6-0dd11d18fff5"
const imgRenderStanding = "https://www.figma.com/api/mcp/asset/c5607e41-8710-49de-bddf-59bf8a07ade4"

/* Old fan */
const imgOldFanLeft  = "https://www.figma.com/api/mcp/asset/c9a06269-bf4a-494c-96c9-61521be8b2ba"
const imgOldFanRight = "https://www.figma.com/api/mcp/asset/8147f138-7dc1-4af1-a72a-221e639aef12"

/* Design */
const imgBladeRatio = "https://www.figma.com/api/mcp/asset/c6d2cc31-765b-4f48-b9e0-cd47160d7cd6"

/* Build */
const imgPrototype  = "https://www.figma.com/api/mcp/asset/7e480925-46e7-480b-afa3-b6842dcef273"
const imgClosed     = "https://www.figma.com/api/mcp/asset/f50650bf-c9ad-44ac-9e6f-dd28b3bc844a"
const imgRotate     = "https://www.figma.com/api/mcp/asset/0e72e3b8-60fb-49c0-9de1-8ffade4e0a79"
const imgClosedSide = "https://www.figma.com/api/mcp/asset/1c3b5264-6d47-4976-ab93-697527b42b4f"

export default function ProjectFan({ onClose }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page proj-page">
      <button className="proj-back-btn" onClick={onClose}>← back</button>

      <div className="page-scroll proj-scroll">

        {/* Hero */}
        <div className="proj-hero">
          <img src={imgHero} alt="Braun HL-70 fan redesign render" />
        </div>

        <div className="proj-content">

          {/* Context */}
          <div className="proj-context-grid">
            <div>
              <h2 className="proj-section-title">what?</h2>
              <p className="proj-body">redesign of the Hl70 — a desk fan from braun designed in 1971</p>

              <h2 className="proj-section-title">when?</h2>
              <p className="proj-body">two weeks in 2024</p>

              <h2 className="proj-section-title">where?</h2>
              <p className="proj-body">during my internship at Braun in Germany</p>

              <h2 className="proj-section-title">who?</h2>
              <p className="proj-body">
                Jordan Groskamp: advision &amp; rendering<br />
                Marvin Melzer: design &amp; fabrication
              </p>

              <h2 className="proj-section-title">objective</h2>
              <p className="proj-body">redesign the fan</p>
            </div>
            <div>
              <h2 className="proj-section-title">why redesign?</h2>
              <p className="proj-body">
                <span className="proj-mono">1971</span>: people have one desk<br /><br />
                <span className="proj-mono">2024</span>: people have many desks<br /><br />
                problem: fan is not portable
              </p>
              <p className="proj-body" style={{marginTop: '16px'}}>how might we redesign the form to add portability?</p>
            </div>
          </div>

          {/* Old fan */}
          <h2 className="proj-section-title">old fan</h2>
          <p className="proj-body">the HL70 designed by Reinhold Weiss and Jürgen Greubel in 1971 to be a desk fan for office desks</p>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgOldFanLeft} alt="HL-70 front view" />
            </div>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgOldFanRight} alt="HL-70 side view" />
            </div>
          </div>

          {/* Design */}
          <h2 className="proj-section-title">design</h2>
          <p className="proj-body">the rotational stand doubles as a protective cover</p>
          <p className="proj-body" style={{marginTop: '8px'}}>modern motors are smaller with equal performance → increase wingspan for more airflow</p>
          <div className="proj-image">
            <img src={imgBladeRatio} alt="Blade ratio comparison" />
          </div>

          {/* Build + Render */}
          <h2 className="proj-section-title">build</h2>
          <p className="proj-body">printed 3D model created in Fusion360 with manufacturing constraints in mind</p>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div>
              <div className="proj-image" style={{marginTop: 0}}>
                <img src={imgPrototype} alt="3D printed prototype — open position" />
              </div>
              <p className="proj-img-caption" style={{marginTop: '8px'}}>open position</p>
              <div className="proj-image">
                <img src={imgClosed} alt="Prototype — closed for transport" />
              </div>
              <p className="proj-img-caption" style={{marginTop: '8px'}}>closed position for transportation</p>
            </div>
            <div>
              <p className="proj-body">render</p>
              <p className="proj-img-caption">rendered by Jordan Groskamp</p>
              <div className="proj-image">
                <img src={imgHero} alt="Fan render — front open" />
              </div>
            </div>
          </div>
          <div className="proj-image">
            <img src={imgRotate} alt="Rotate to adjust airflow direction" />
          </div>
          <p className="proj-img-caption" style={{marginTop: '8px'}}>rotate to adjust air flow direction</p>
          <div className="proj-image">
            <img src={imgClosedSide} alt="Fan closed — side view" />
          </div>
          <p className="proj-img-caption" style={{marginTop: '8px'}}>closed — side view</p>
          <div className="proj-2col" style={{marginTop: '24px'}}>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgRenderLaying} alt="Fan render — laying down" />
            </div>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgRenderStanding} alt="Fan render — standing closed" />
            </div>
          </div>
          <p className="proj-img-caption" style={{marginTop: '8px'}}>rendered by Jordan Groskamp</p>

          {/* Insights */}
          <div className="proj-2col" style={{marginTop: '40px'}}>
            <div>
              <h2 className="proj-section-title" style={{marginTop: 0}}>insight one</h2>
              <p className="proj-body">I learned to balance ideation &amp; execution. to achieve faster results.</p>
            </div>
            <div>
              <h2 className="proj-section-title" style={{marginTop: 0}}>insight two</h2>
              <p className="proj-body">I extended my R&amp;D internship to get involved with Industrial Design. This project confirmed that design shall transition from my hobby to my career.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
