import { useEffect } from 'react'
import './ProjectSign.css'

/* Hero */
const imgHero = "https://www.figma.com/api/mcp/asset/8ffb57f1-7297-43f0-832d-8677cb317bc2"

/* Design */
const imgDesignAnnotated = "https://www.figma.com/api/mcp/asset/dd4db48c-323e-4f23-9292-cc533a42a929"
const imgDesignColor     = "https://www.figma.com/api/mcp/asset/f41753fd-eb29-41b4-bb7c-50130c78fe5d"
const imgMaterial        = "https://www.figma.com/api/mcp/asset/1698c02f-f057-4e98-9cbd-043c2ccbd8f9"

/* Prototyping */
const imgProtoCNC     = "https://www.figma.com/api/mcp/asset/653560f9-7db5-4870-880a-37b0b54eba81"
const imgProtoProcess = "https://www.figma.com/api/mcp/asset/79d9db49-3911-4347-8bf9-167c0b7563f9"
const imgProtoAcrylic = "https://www.figma.com/api/mcp/asset/92e46c9a-b18d-4d5b-a85f-36f09e58d1a8"

/* Production */
const imgProdModel = "https://www.figma.com/api/mcp/asset/2b71da4e-67c7-4ed8-809f-19f33eb475f8"
const imgProdCNC   = "https://www.figma.com/api/mcp/asset/adfd8cf5-618c-452e-a6f8-b6d211bc43bc"

/* Build */
const imgBuildSoldering = "https://www.figma.com/api/mcp/asset/3d03b810-b39c-49db-852f-678e199c3e1a"
const imgBuildCNC       = "https://www.figma.com/api/mcp/asset/66ebc422-1f3b-4f85-b3ee-024d73369699"
const imgBuildLetters   = "https://www.figma.com/api/mcp/asset/92b57875-105b-458e-b40a-8c19055cee05"

/* Installation */
const imgInstallClamp   = "https://www.figma.com/api/mcp/asset/c9640064-3e88-439e-9191-8da990d718cd"
const imgInstallFull    = "https://www.figma.com/api/mcp/asset/9879c1f1-baf9-4e26-aec3-ccc03e6d436b"
const imgInstallDetail1 = "https://www.figma.com/api/mcp/asset/1837b375-968d-47e3-8ef9-a8133dd58ff1"
const imgInstallDetail2 = "https://www.figma.com/api/mcp/asset/2dd2352f-baef-44cf-839f-085a502a392a"

/* Test */
const imgTestNight   = "https://www.figma.com/api/mcp/asset/78922f1c-09b4-4618-99b0-83dc536ef82e"
const imgTestDay     = "https://www.figma.com/api/mcp/asset/6cad4b8a-6a2c-412f-9ad1-42d47b20e886"
const imgTestOrchids = "https://www.figma.com/api/mcp/asset/26c3062b-8307-43e2-a586-8046cc09913a"

/* Insights */
const imgInsight2 = "https://www.figma.com/api/mcp/asset/f742c4bb-10a8-4a1b-8733-adbc8f407f39"

export default function ProjectSign({ onClose }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page proj-page">
      <button className="proj-back-btn" onClick={onClose}>← back</button>

      <div className="page-scroll proj-scroll">

        {/* Hero */}
        <div className="proj-hero">
          <img src={imgHero} alt="Fens Cafe sign lit up at night" />
        </div>

        <div className="proj-content">

          {/* Context */}
          <div className="proj-context-grid">
            <div>
              <h2 className="proj-section-title">what?</h2>
              <p className="proj-body">design and manufacturing of a human sized sign with embedded lights</p>

              <h2 className="proj-section-title">when?</h2>
              <p className="proj-body">four months in 2025</p>

              <h2 className="proj-section-title">where?</h2>
              <p className="proj-body">Fens Cafe at the ATLAS institute in Boulder</p>

              <h2 className="proj-section-title">who?</h2>
              <p className="proj-body">
                Joel Swanson: design mentor<br />
                Marvin Melzer: design &amp; manufacturing<br />
                Fen: client (Cafe Owner)
              </p>
            </div>
            <div>
              <h2 className="proj-section-title">objectives</h2>
              <p className="proj-body">
                easy to read<br />
                aesthetic<br />
                transparent<br />
                easy to maintain
              </p>
            </div>
          </div>

          {/* Design */}
          <h2 className="proj-section-title">design</h2>
          <div className="proj-image proj-image--tall">
            <img src={imgDesignAnnotated} alt="Sign font with annotations" />
          </div>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgMaterial} alt="Material sample" />
            </div>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgDesignColor} alt="Color design" />
            </div>
          </div>

          {/* Prototyping */}
          <h2 className="proj-section-title">prototyping</h2>
          <p className="proj-body">it was crucial to dial in manufacturing techniques and materials to avoid wasting resources</p>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div className="proj-image" style={{marginTop: 0}}>
              <img src={imgProtoCNC} alt="CNC channel iteration" />
            </div>
            <div>
              <p className="proj-body">transparent 1/4" cast acrylic — thick enough to secure light stripes. cast acrylic resists melting more than extruded acrylic while cutting</p>
              <div className="proj-image">
                <img src={imgProtoProcess} alt="Acrylic process" />
              </div>
            </div>
          </div>
          <div className="proj-image">
            <img src={imgProtoAcrylic} alt="Acrylic material" />
          </div>

          {/* Production */}
          <h2 className="proj-section-title">production</h2>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div>
              <p className="proj-body">modeled in Fusion360 to narrow down exact dimensions</p>
              <div className="proj-image">
                <img src={imgProdModel} alt="Fusion360 model" />
              </div>
            </div>
            <div>
              <p className="proj-body">dialed in cutting speeds → acrylic does not melt or chip through carving</p>
              <div className="proj-image">
                <img src={imgProdCNC} alt="CNC cutting" />
              </div>
            </div>
          </div>

          {/* Build */}
          <h2 className="proj-section-title">build</h2>
          <p className="proj-body">hand soldered 250 transparent wires with minimal gauge to connect all light stripes</p>
          <div className="proj-3col" style={{marginTop: '16px'}}>
            <div className="proj-image-labeled">
              <img src={imgBuildSoldering} alt="Soldering" />
            </div>
            <div className="proj-image-labeled">
              <img src={imgBuildCNC} alt="CNC process" />
            </div>
            <div className="proj-image-labeled">
              <img src={imgBuildLetters} alt="Building one letter at a time" />
              <p className="proj-img-caption">building one letter at a time</p>
            </div>
          </div>

          {/* Installation */}
          <h2 className="proj-section-title">installation</h2>
          <p className="proj-body">using c-clamps mounted on window frame for non destructive mount</p>
          <div className="proj-image proj-image--tall">
            <img src={imgInstallFull} alt="Sign fully installed" />
          </div>
          <div className="proj-2col" style={{marginTop: '16px'}}>
            <div>
              <div className="proj-image" style={{marginTop: 0}}>
                <img src={imgInstallClamp} alt="Clamp detail" />
              </div>
              <p className="proj-img-caption" style={{marginTop: '8px'}}>keeping protective film on during production to prevent scratches</p>
            </div>
            <div>
              <div className="proj-image" style={{marginTop: 0}}>
                <img src={imgInstallDetail1} alt="Sign in window" />
              </div>
              <p className="proj-img-caption" style={{marginTop: '8px'}}>clamps hold sections in place — Soft Nylon tips prevent acrylic crazing</p>
            </div>
          </div>
          <div className="proj-image">
            <img src={imgInstallDetail2} alt="Installed sign close up" />
          </div>

          {/* Test */}
          <h2 className="proj-section-title">test</h2>
          <div className="proj-3col" style={{marginTop: '16px'}}>
            <div className="proj-image-labeled">
              <img src={imgTestNight} alt="Sign visible at night" />
              <p className="proj-img-caption">easy to read from a distance</p>
            </div>
            <div className="proj-image-labeled">
              <img src={imgTestDay} alt="Sign blends in from inside" />
              <p className="proj-img-caption">the sign blends in with its background when looked at from inside</p>
            </div>
            <div className="proj-image-labeled">
              <img src={imgTestOrchids} alt="Orchids with sunlight" />
              <p className="proj-img-caption">the orchids get plenty of sunlight</p>
            </div>
          </div>

          {/* Insights */}
          <div className="proj-2col" style={{marginTop: '40px'}}>
            <div>
              <h2 className="proj-section-title" style={{marginTop: 0}}>insight one</h2>
              <p className="proj-body">
                five months in, the switch died. customers started thinking the cafe was closed. it wasn't. the sign was just broken.<br /><br />
                idea: build a sign that only lights up to say closed. if it ever breaks again, regulars will just assume it's open.
              </p>
            </div>
            <div>
              <h2 className="proj-section-title" style={{marginTop: 0}}>insight two</h2>
              <p className="proj-body">remove acrylics paper cover first and then insert light stripes to avoid paper pieces getting stuck in channels</p>
              <div className="proj-image">
                <img src={imgInsight2} alt="Assembly insight" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


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
