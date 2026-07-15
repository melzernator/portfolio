import './Creations.css'
import BottomNav from '../components/BottomNav'

const imgSign = "https://www.figma.com/api/mcp/asset/56f9e920-09a5-4f88-aef6-74fdc53cfd16"
const imgFan = "https://www.figma.com/api/mcp/asset/c4c20387-da28-4cbb-b7a7-1076e082f186"

export default function Creations({ onNavigate, onOpenProject }) {
  return (
    <div className="page creations-page">
      <div className="page-scroll">
        <h1 className="page-title">creations</h1>
        <p className="page-subtitle">tap on objects to see how I made them</p>

        <div className="creations-canvas">
          {/* Sign project - top right, tilted */}
          <button
            className="creation-item creation-item--sign"
            onClick={() => onOpenProject('sign')}
            aria-label="Fen's Caffe sign project"
          >
            <img src={imgSign} alt="Fen's Caffe illuminated sign" />
          </button>

          {/* Fan project - bottom left, tilted */}
          <button
            className="creation-item creation-item--fan"
            onClick={() => onOpenProject('fan')}
            aria-label="Braun fan redesign project"
          >
            <img src={imgFan} alt="Braun HL-70 fan redesign" />
          </button>
        </div>
      </div>
      <BottomNav active="creations" onNavigate={onNavigate} />
    </div>
  )
}
