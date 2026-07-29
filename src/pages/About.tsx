import { img } from '../lib/img';
import { useTheme } from '../lib/theme';
import atlasLogoBlack from '../assets/about/atlas-black.gif';
import atlasLogoWhite from '../assets/about/atlas-white.gif';

const cuLogo = img('about/CUBoulder');
const braunLogoBlack = img('about/braun-black');
const braunLogoWhite = img('about/braun-white');
const tudLogoBlack = img('about/TUDarmstadt-black');
const tudLogoWhite = img('about/TUDarmstadt-white');
const flagUs = img('about/usa');
const flagDe = img('about/deutschland');
const marvinPortrait = img('about/marvin');

export default function About() {
  const dark = useTheme() === 'dark';
  const atlasLogo = dark ? atlasLogoWhite : atlasLogoBlack;
  const braunLogo = dark ? braunLogoWhite : braunLogoBlack;
  const tudLogo = dark ? tudLogoWhite : tudLogoBlack;

  return (
    <div className="page about">
      <h1 className="page-title">about</h1>

      <div className="about__layout">
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
