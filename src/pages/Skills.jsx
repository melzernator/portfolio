import './Skills.css'
import BottomNav from '../components/BottomNav'

const imgModelingImg = "https://www.figma.com/api/mcp/asset/6bcc5245-63c8-4005-8303-29feee1b0ff6"
const imgCuttingLeft = "https://www.figma.com/api/mcp/asset/0d4a30a3-d394-42f1-960c-61eae564b8c2"
const imgCuttingRight = "https://www.figma.com/api/mcp/asset/87307131-5df0-42fa-af59-0645222c07c2"
const imgPCBImg = "https://www.figma.com/api/mcp/asset/52c5a8a0-5ab9-45e2-82d4-879157e18758"
const imgWeldingImg = "https://www.figma.com/api/mcp/asset/4eebfac3-8f7c-4084-ad86-19f7537adc07"
const imgSolderingImg = "https://www.figma.com/api/mcp/asset/3a9d38ef-3056-4a34-a4cf-00d1e990adda"

export default function Skills({ onNavigate }) {
  return (
    <div className="page skills-page">
      <div className="page-scroll">
        <h1 className="page-title">skills</h1>

        {/* Asking why - full width */}
        <section className="skill-section">
          <h2 className="skill-title">asking why</h2>
          <p className="skill-body">
            uncovering layers of 'why' helps reveal the real design problem
          </p>
        </section>

        <div className="skills-grid">
          <div className="skills-col">
            {/* 3D modeling */}
            <section className="skill-section">
              <h2 className="skill-title">3D modeling</h2>
              <p className="skill-meta">5 years of experience</p>
              <div className="skill-image-full">
                <img src={imgModelingImg} alt="3D modeling" />
              </div>
            </section>

            {/* Cutting metal */}
            <section className="skill-section">
              <h2 className="skill-title">cutting metal</h2>
              <div className="skill-image-pair">
                <img src={imgCuttingLeft} alt="cutting metal" />
                <img src={imgCuttingRight} alt="metal grinding" />
              </div>
            </section>

            {/* Soldering */}
            <section className="skill-section">
              <h2 className="skill-title">soldering wires</h2>
              <div className="skill-image-full">
                <img src={imgSolderingImg} alt="soldering" />
              </div>
            </section>
          </div>

          <div className="skills-col">
            {/* PCB design */}
            <section className="skill-section">
              <h2 className="skill-title">PCB design</h2>
              <p className="skill-meta">3 years of experience</p>
              <div className="skill-image-full">
                <img src={imgPCBImg} alt="PCB design" />
              </div>
            </section>

            {/* Welding */}
            <section className="skill-section">
              <h2 className="skill-title">welding</h2>
              <div className="skill-image-full">
                <img src={imgWeldingImg} alt="welding" />
              </div>
            </section>
          </div>
        </div>
      </div>
      <BottomNav active="skills" onNavigate={onNavigate} />
    </div>
  )
}
