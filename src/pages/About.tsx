import cuLogo from '../assets/about/CUBoulder.png';
import atlasLogo from '../assets/about/atlas-black.gif';
import braunLogo from '../assets/about/braun.png';
import tudLogo from '../assets/about/TUDarmstadt.svg';
import flagUs from '../assets/about/usa.svg';
import flagDe from '../assets/about/deutschland.svg';

export default function About() {
  return (
    <div className="page about">
      <p className="about__intro">
        Marvin Melzer is a German craftsman with a passion for thoughtfully designed
        consumer products.
        <br />
        <br />
        Comfortable at the whiteboard and in the shop, he enjoys transforming ambitious
        ideas into functional prototypes.
        <br />
        <a href="mailto:marvin@melzer.org">press to contact</a>
      </p>

      <div className="about__timeline">
        <div className="about__entry">
          <span className="about__year">2 0 2 7</span>
          <div className="about__entry-body">
            <div className="about__logos">
              <img src={flagUs} alt="USA" style={{ height: 45, marginLeft: 2 }} />
              <img src={cuLogo} alt="CU Boulder" style={{ height: 45 }} />
              <img src={atlasLogo} alt="ATLAS Institute" style={{ height: 45 }} />
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
            <div className="about__logos" style={{ transform: 'translateY(8px)' }}>
              <img src={flagDe} alt="Germany" style={{ height: 45, marginLeft: 2 }} />
              <img src={braunLogo} alt="Braun" style={{ height: 65 }} />
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
            <div className="about__logos" style={{ transform: 'translateY(8px)' }}>
              <img src={flagDe} alt="Germany" style={{ height: 45, marginLeft: 2 }} />
              <img src={tudLogo} alt="TU Darmstadt" style={{ height: 60 }} />
            </div>
            <p>
              Bachelor of Science
              <br />
              Electrical Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
