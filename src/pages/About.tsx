import Nav from '../components/Nav';
import cuLogo from '../assets/figma/about-cu.png';
import atlasLogo from '../assets/figma/about-atlas.png';
import braunLogo from '../assets/figma/about-braun.png';
import tudLogo from '../assets/figma/about-tud.png';
import flagUs from '../assets/figma/about-flag-us.png';
import flagDe from '../assets/figma/about-flag-de.png';
import portrait from '../assets/figma/about-portrait.png';

export default function About() {
  return (
    <div className="page about">
      <h1 className="page-title">about</h1>

      <img className="about__portrait" src={portrait} alt="Portrait of Marvin Melzer" />

      <p className="about__intro">
        Marvin Melzer is a German craftsman with a passion for thoughtfully designed
        consumer products.
        <br />
        <br />
        Comfortable at the whiteboard and in the shop, he enjoys transforming ambitious
        ideas into functional prototypes.
      </p>

      <div className="about__timeline">
        <div className="about__entry">
          <span className="about__year">2 0 2 7</span>
          <div className="about__entry-body">
            <div className="about__logos">
              <img src={cuLogo} alt="CU Boulder" style={{ height: 54 }} />
              <img src={atlasLogo} alt="ATLAS Institute" style={{ height: 47 }} />
              <img src={flagUs} alt="USA" style={{ height: 48 }} />
            </div>
            <p>
              Master of Science
              <br />
              Creative Tech &amp; Design
            </p>
          </div>
        </div>

        <div className="about__entry">
          <span className="about__year">2 0 2 5</span>
          <div className="about__entry-body">
            <div className="about__logos">
              <img src={braunLogo} alt="Braun" style={{ height: 61 }} />
              <img src={flagDe} alt="Germany" style={{ height: 48 }} />
            </div>
            <p>
              Internship 7 months
              <br />
              R&amp;D and Design
            </p>
          </div>
        </div>

        <div className="about__entry">
          <span className="about__year">2 0 2 4</span>
          <div className="about__entry-body">
            <div className="about__logos">
              <img src={tudLogo} alt="TU Darmstadt" style={{ height: 54 }} />
              <img src={flagDe} alt="Germany" style={{ height: 48 }} />
            </div>
            <p>
              Bachelor of Science
              <br />
              Electrical Engineering
            </p>
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
}
