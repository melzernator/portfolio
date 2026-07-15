import './About.css'
import BottomNav from '../components/BottomNav'

const imgPortrait = "https://www.figma.com/api/mcp/asset/8c3988ab-ce90-4e5b-bf2d-a2d379160b92"
const imgUCB = "https://www.figma.com/api/mcp/asset/2acea4fa-01ea-4413-874a-86417b556361"
const imgAtlas = "https://www.figma.com/api/mcp/asset/4fe393a9-35b9-4fb4-8168-3e9ac3cc2efc"
const imgBraun = "https://www.figma.com/api/mcp/asset/bb4f52c0-626f-4221-bcba-ef855ff71636"
const imgTU = "https://www.figma.com/api/mcp/asset/ae368b5c-6e8d-438a-ae39-55d0166fd8eb"
const imgDE = "https://www.figma.com/api/mcp/asset/45f98099-4fd8-4225-a799-dab62da1509a"
const imgUS = "https://www.figma.com/api/mcp/asset/aefc37ba-7412-4d8d-95cf-47fac81e597e"

export default function About({ onNavigate }) {
  return (
    <div className="page about-page">
      <div className="page-scroll">
        <h1 className="page-title">about</h1>

        <p className="about-bio">
          Marvin Melzer is a German craftsman with a passion for thoughtfully
          designed consumer products.
          <br /><br />
          Comfortable at the whiteboard and in the shop, he enjoys transforming
          ambitious ideas into functional prototypes.
        </p>

        <div className="about-timeline">
          <div className="about-portrait">
            <img src={imgPortrait} alt="Marvin Melzer" />
          </div>

          <div className="about-entries">
            <div className="about-entry">
              <div className="about-year">
                <span>2027</span>
              </div>
              <div className="about-entry-content">
                <div className="about-entry-logos">
                  <img src={imgUCB} alt="UC Berkeley" className="logo-ucb" />
                  <img src={imgAtlas} alt="CU Boulder" className="logo-atlas" />
                  <img src={imgUS} alt="US" className="logo-flag" />
                </div>
                <p className="about-entry-text">Master of Science<br />Creative Tech &amp; Design</p>
              </div>
            </div>

            <div className="about-entry">
              <div className="about-year">
                <span>2025</span>
              </div>
              <div className="about-entry-content">
                <div className="about-entry-logos">
                  <img src={imgBraun} alt="Braun" className="logo-braun" />
                  <img src={imgDE} alt="Germany" className="logo-flag" />
                </div>
                <p className="about-entry-text">Internship 7 months<br />R&amp;D and Design</p>
              </div>
            </div>

            <div className="about-entry">
              <div className="about-year">
                <span>2024</span>
              </div>
              <div className="about-entry-content">
                <div className="about-entry-logos">
                  <img src={imgTU} alt="TU Darmstadt" className="logo-tu" />
                  <img src={imgDE} alt="Germany" className="logo-flag" />
                </div>
                <p className="about-entry-text">Bachelor of Science<br />Electrical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="about" onNavigate={onNavigate} />
    </div>
  )
}
