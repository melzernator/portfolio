import { img } from '../lib/img';
import atlasLogo from '../assets/about/atlas-white.gif';

const cuLogo = img('about/CUBoulder');
const braunLogo = img('about/braun-white');
const tudLogo = img('about/TUDarmstadt-white');
const flagUs = img('about/usa');
const flagDe = img('about/deutschland');
const marvinPortrait = img('about/marvin');

export default function About() {
  return (
    <div className="page about">
      <h1 className="page-title">about</h1>

      <div className="about__layout">
        <p className="about__intro">
          Hi, I am Marvin Melzer a German craftsman with a passion for thoughtfully
          designed consumer products.
          <br />
          <br />
          I am comfortable both ideating at the whiteboard and manufacturing in the shop.
          I enjoy transforming ambitious ideas into functional prototypes.
          <br />
          <br />
          I am currently looking for prototyping roles.
          <br />
          here is my mail:{' '}
          <a href="mailto:marvin@melzer.org">marvin [at] melzer [dot] org</a>
        </p>

        <img
          className="about__portrait"
          src={marvinPortrait}
          alt="Marvin Melzer"
        />

        <div className="about__timeline">
          <div className="about__entry">
            <span className="about__year">2 0 2 7</span>
            <div className="about__entry-body">
              <div className="about__logos">
                <img className="about__logo about__logo--flag" src={flagUs} alt="USA" />
                <img className="about__logo" src={cuLogo} alt="CU Boulder" />
                <img className="about__logo about__logo--atlas" src={atlasLogo} alt="ATLAS Institute" />
              </div>
              <p>
                Master of Science
                <br />
                Creative Tech &amp; Design
              </p>
            </div>
          </div>

          <div className="about__entry about__entry--mid">
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

          <div className="about__entry about__entry--end">
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
    </div>
  );
}
