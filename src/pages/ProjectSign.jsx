import { useState, useEffect } from 'react'
import './ProjectSign.css'
import ProjectNav from '../components/ProjectNav'

/* Context page images */
const imgGroup2 = "https://www.figma.com/api/mcp/asset/8628464e-a019-4c6d-8bb3-cf2a00b07360"

/* Design page images */
const imgFont = "https://www.figma.com/api/mcp/asset/438867f1-9e84-431c-8e76-6a983f5b3c4f"
const imgColor = "https://www.figma.com/api/mcp/asset/196984ee-e939-4eea-9fce-ba65ee364ffe"

/* Build page images */
const imgDimensions = "https://www.figma.com/api/mcp/asset/1c37f281-6632-452a-be2f-9a620b5aa8b4"
const imgCarving = "https://www.figma.com/api/mcp/asset/adfd8cf5-618c-452e-a6f8-b6d211bc43bc"
const imgSoldering = "https://www.figma.com/api/mcp/asset/a2cbd9c1-d721-473b-b712-5b5dbb23a474"
const imgInstallation = "https://www.figma.com/api/mcp/asset/bff7fcb8-da59-47d0-a05c-1c89b4ebb4d3"
const imgCNC = "https://www.figma.com/api/mcp/asset/66ebc422-1f3b-4f85-b3ee-024d73369699"
const imgInstall2 = "https://www.figma.com/api/mcp/asset/bbd37ed2-a357-4b9e-8ab0-8a2750a38e48"
const imgInstall3 = "https://www.figma.com/api/mcp/asset/14b433fb-130d-4240-8719-5a14550843af"

/* Result page images */
const imgVisible = "https://www.figma.com/api/mcp/asset/e20b027b-1404-43fd-afc1-b8201d204c21"
const imgNotVisible = "https://www.figma.com/api/mcp/asset/e1feef3c-6f3f-491b-b8a4-3b5d6b39d2f0"
const imgDaylight = "https://www.figma.com/api/mcp/asset/b6803238-aa42-4957-9680-c617bf950964"
const imgDaylight2 = "https://www.figma.com/api/mcp/asset/19919eac-0a02-421b-a222-6eee9010e23e"
const imgInsight = "https://www.figma.com/api/mcp/asset/576c3303-5efc-43d2-adcd-be34c25b5343"

const TABS = ['context', 'design', 'build', 'result']

function Context() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">context</h1>
      <div className="proj-context-cols">
        <div>
          <h2 className="proj-section-title">what</h2>
          <p className="proj-body">design and manufacturing of a human sized sign with embedded lights</p>

          <h2 className="proj-section-title">who</h2>
          <p className="proj-body">
            Joel Swanson: design mentor<br />
            Marvin Melzer: design &amp; manufacturing<br />
            Fen: client (Cafe Owner)
          </p>

          <h2 className="proj-section-title">where</h2>
          <p className="proj-body">— </p>

          <h2 className="proj-section-title">when</h2>
          <p className="proj-body">2025 - 4 months</p>
        </div>

        <div>
          <h2 className="proj-section-title">objectives</h2>
          <p className="proj-body">
            easy to read from far distance<br /><br />
            aesthetically pleasing<br /><br />
            not blocking light for plants and interior<br /><br />
            fits in cafes window<br /><br />
            easy to maintain
          </p>
        </div>
      </div>
    </div>
  )
}

function Design() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">design</h1>
      <p className="proj-body proj-intro">
        this sign used 50' of LED stripes and 60s feet of acrylic. it was crucial to
        decide on right material, color and lights before moving to the build to avoid
        wasting materials
      </p>

      <h2 className="proj-section-title">materials</h2>

      <h3 className="proj-sub-title">lights</h3>
      <p className="proj-body">LED light stripes are cheap and easy to cut to match a letter design</p>

      <h3 className="proj-sub-title">light holder</h3>
      <p className="proj-body">
        the window provides daylight to customers and plants → transparent material as backing<br /><br />
        cast acrylic cuts cleaner and resists melting<br />
        cast acrylic is more scratch resistant
      </p>

      <h2 className="proj-section-title">font</h2>
      <p className="proj-body">
        the light stripes are thin compared to the size of the sign → multi stroke font
        increases brightness of sign
      </p>
      <div className="proj-image">
        <img src={imgFont} alt="Font comparison" />
      </div>

      <h2 className="proj-section-title">colors</h2>
      <p className="proj-body">
        Fen has many orchids in her cafe → use <span style={{color:'#f90f9b'}}>pink</span>
      </p>
      <div className="proj-image">
        <img src={imgColor} alt="Color scheme" />
      </div>
    </div>
  )
}

function Build() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">create</h1>

      <h2 className="proj-section-title">dimensions</h2>
      <p className="proj-body">modeled in Fusion360 to narrow down exact dimensions</p>
      <div className="proj-image">
        <img src={imgDimensions} alt="Sign dimensions" />
      </div>

      <h2 className="proj-section-title">carving channels</h2>
      <p className="proj-body">
        CNC routed channels in 1/4" cast acrylic. the channel thickness is dialed in tight,
        so light stripes stay in place without glue. no glue enables easy repairability
      </p>
      <div className="proj-image">
        <img src={imgCarving} alt="CNC carving" />
      </div>
      <div className="proj-image">
        <img src={imgCNC} alt="CNC process" />
      </div>

      <h2 className="proj-section-title">light integration</h2>
      <p className="proj-body">hand soldered 250 wires to connect all light stripes</p>
      <div className="proj-image">
        <img src={imgSoldering} alt="Soldering" />
      </div>

      <h2 className="proj-section-title">installation</h2>
      <p className="proj-body">
        C-Clamps mounted on window frame hold the sign in place<br />
        → everything is removable without a trace
      </p>
      <div className="proj-image">
        <img src={imgInstallation} alt="Installation" />
      </div>
      <div className="proj-image">
        <img src={imgInstall2} alt="Installed sign" />
      </div>
      <div className="proj-image">
        <img src={imgInstall3} alt="Sign in place" />
      </div>
    </div>
  )
}

function Result() {
  return (
    <div className="proj-content">
      <h1 className="proj-main-title">result</h1>

      <h2 className="proj-section-title">visible</h2>
      <p className="proj-body">the sign is easy to read from a distance</p>
      <div className="proj-image">
        <img src={imgVisible} alt="Sign visible at night" />
      </div>

      <h2 className="proj-section-title">not visible</h2>
      <p className="proj-body">the sign blends in with its background when looked at from inside</p>
      <div className="proj-image">
        <img src={imgNotVisible} alt="Sign not visible from inside" />
      </div>

      <h2 className="proj-section-title">🌞 daylight</h2>
      <p className="proj-body">the orchids are happy (:</p>
      <div className="proj-image">
        <img src={imgDaylight} alt="Sign in daylight" />
      </div>
      <div className="proj-image">
        <img src={imgDaylight2} alt="Sign in daylight 2" />
      </div>

      <h2 className="proj-section-title">insight one</h2>
      <p className="proj-body">
        five months in, the switch died. customers started thinking the cafe was closed.
        it wasn't. the sign was just broken.<br /><br />
        idea: build a sign that only lights up to say closed. if it ever breaks again,
        regulars will just assume it's open.
      </p>

      <h2 className="proj-section-title">insight two</h2>
      <p className="proj-body">
        remove acrylics paper cover first and then insert light stripes to avoid
        paper pieces to be stuck in channels
      </p>
      <div className="proj-image">
        <img src={imgInsight} alt="Assembly insight" />
      </div>
    </div>
  )
}

export default function ProjectSign({ tab, onTabChange, onClose }) {
  const scrollEl = { context: null, design: null, build: null, result: null }

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
