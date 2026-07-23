import cuLogo from '../assets/about/CUBoulder.png';
import atlasLogo from '../assets/about/atlas-black.gif';
import braunLogo from '../assets/about/braun.png';
import tudLogo from '../assets/about/TUDarmstadt.svg';
import flagUs from '../assets/about/usa.svg';
import flagDe from '../assets/about/deutschland.svg';

export default function About() {
  return (
    <div className="page about">
      <h1 className="page-title">about</h1>

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
              <img className="about__logo about__logo--flag" src={flagUs} alt="USA" />
              <img className="about__logo" src={cuLogo} alt="CU Boulder" />
              <img className="about__logo" src={atlasLogo} alt="ATLAS Institute" />
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
            <div className="about__logos about__logos--lift">
              <img className="about__logo about__logo--flag" src={flagDe} alt="Germany" />
              <img className="about__logo about__logo--braun" src={braunLogo} alt="Braun" />
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
            <div className="about__logos about__logos--lift">
              <img className="about__logo about__logo--flag" src={flagDe} alt="Germany" />
              <img className="about__logo about__logo--tud" src={tudLogo} alt="TU Darmstadt" />
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
