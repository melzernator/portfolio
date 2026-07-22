import Nav from '../components/Nav';
import signImg from '../assets/figma/creations-sign.png';
import fanImg from '../assets/figma/creations-fan.png';

export default function Creations() {
  return (
    <div className="page creations">
      <h1 className="page-title">creations</h1>
      <p className="page-subtitle">tap on objects to see how I made them</p>

      <a href="/creations/sign" className="creations__object creations__object--sign">
        <img src={signImg} alt="Fens Cafe sign" />
      </a>
      <a href="/creations/fan" className="creations__object creations__object--fan">
        <img src={fanImg} alt="Braun HL70 fan redesign" />
      </a>

      <Nav />
    </div>
  );
}
