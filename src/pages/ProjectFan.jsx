import { useEffect } from 'react'
import './ProjectFan.css'
import ProjectNav from '../components/ProjectNav'

/* Design page images */
const imgFanOrigLeft = "https://www.figma.com/api/mcp/asset/3f2da5e1-8a25-4fec-a045-943fc89369bb"
const imgFanOrigRight = "https://www.figma.com/api/mcp/asset/3a56252b-e649-4780-8523-c5cd8aa91f1d"
const imgBladeRatio = "https://www.figma.com/api/mcp/asset/629233d4-d847-4ef9-9909-04f6a3ad716a"

/* Result page images */
const imgRender = "https://www.figma.com/api/mcp/asset/a5ca2a79-7155-4907-84e2-17f507864c0d"
const imgPrototype = "https://www.figma.com/api/mcp/asset/6289ac92-cfb0-4042-abac-1e0a7d409884"

const TABS = ['context', 'design', 'build', 'result']

function Context() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">context</h1>

      <h2 className="proj-section-title">what</h2>
      <p className="proj-body">redesign of the Hl70 - a desk fan from braun designed in 1971</p>

      <h2 className="proj-section-title">people</h2>
      <p className="proj-body">
        Jordan Groskamp: advision &amp; rendering<br />
        Marvin Melzer: design &amp; fabrication
      </p>

      <h2 className="proj-section-title">where</h2>
      <p className="proj-body">Braun Household in Germany</p>

      <h2 className="proj-section-title">when</h2>
      <p className="proj-body">2024 - two weeks</p>

      <h2 className="proj-section-title">objectives</h2>
      <p className="proj-body">
        identify if the fan needs a redesign<br /><br />
        redesign the fan
      </p>
    </div>
  )
}

function Design() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">design</h1>

      <h2 className="proj-section-title">HL-70</h2>
      <p className="proj-body">
        designed by Reinhold Weiss and Jürgen Greubel in 1971 to be a desk fan for office desks.
      </p>
      <div className="proj-image-pair">
        <img src={imgFanOrigLeft} alt="HL-70 fan original" />
        <img src={imgFanOrigRight} alt="HL-70 fan detail" />
      </div>

      <h2 className="proj-section-title">why redesign</h2>
      <p className="proj-body">
        <span className="proj-mono">1971</span>: people have one desk<br /><br />
        <span className="proj-mono">2024</span>: people have many desks<br /><br />
        problem: fan is not portable
      </p>

      <h2 className="proj-section-title">adding portability</h2>
      <p className="proj-body">
        the fan requires a cover to guide the airflow<br /><br />
        how might we redesign this cover to function as a stand and protective cover?
      </p>

      <h2 className="proj-section-title">tech opportunity</h2>
      <div className="proj-image-side-by-side">
        <p className="proj-body">
          modern motors are smaller<br />
          → increase wingspan for more airflow
        </p>
        <div className="proj-image-small">
          <img src={imgBladeRatio} alt="Blade ratio comparison" />
        </div>
      </div>
    </div>
  )
}

function Build() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">build</h1>

      <h2 className="proj-section-title">3d modelling</h2>
      <p className="proj-body">
        modeled in Fusion360 with the help of the 3d files from the original fan
      </p>
    </div>
  )
}

function Result() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">result</h1>

      <h2 className="proj-section-title">render</h2>
      <p className="proj-body proj-caption">rendered by Jordan Groskamp</p>
      <div className="proj-image">
        <img src={imgRender} alt="Fan render" />
      </div>

      <h2 className="proj-section-title">3d print</h2>
      <p className="proj-body proj-caption">modeled in Fusion360 and 3D printed</p>
      <div className="proj-image">
        <img src={imgPrototype} alt="3D printed prototype" />
      </div>

      <p className="proj-body" style={{marginTop: '24px'}}>
        the rotational stand doubles as a protective cover!<br />
        adds portability without compromising simplicity
      </p>

      <h2 className="proj-section-title">insights</h2>
      <p className="proj-body">
        balance ideation &amp; execution<br />
        less is more<br />
        product design: hobby → career
      </p>
    </div>
  )
}

export default function ProjectFan({ tab, onTabChange, onClose }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tab])

  const renderTab = () => {
    switch (tab) {
      case 'context': return <Context />
      case 'design': return <Design />
      case 'build': return <Build />
      case 'result': return <Result />
      default: return <Context />
    }
  }

  return (
    <div className="page proj-page">
      <div className="page-scroll proj-scroll">
        {renderTab()}
      </div>
      <ProjectNav
        tabs={TABS}
        active={tab}
        onNavigate={onTabChange}
        onClose={onClose}
      />
    </div>
  )
}
