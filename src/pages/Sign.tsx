import { useState } from 'react';
import BackButton from '../components/BackButton';
import designAnnotated from '../assets/sign/sign-design.webp';
import orchid from '../assets/sign/sign-orchid.webp';
import orchids from '../assets/sign/sign-orchids-1.webp';
import prototype from '../assets/sign/sign-prototype.webp';
import prototyping2 from '../assets/sign/sign-prototyping-2.webp';
import renderImg from '../assets/sign/sign-render.webp';
import cncVideo from '../assets/sign/sign-CNC.mp4';
import solderingImg from '../assets/sign/sign-soldering.webp';
import assemblingImg from '../assets/sign/sign-assembly.webp';
import assemblingVideo from '../assets/sign/sign-assembling.mp4';
import signOff from '../assets/sign/sign-off.webp';
import signOn from '../assets/sign/sign-on.webp';
import outside1 from '../assets/sign/sign-outside-2.webp';
import inside from '../assets/sign/sign-inside.webp';
import daylight from '../assets/sign/sign-daylight.webp';
import insightImg from '../assets/sign/sign-insight.webp';
import installation1 from '../assets/sign/installation-1.mp4';
import installation2 from '../assets/sign/installation-2.webp';
import installation3 from '../assets/sign/installation-3.webp';
import installationRight from '../assets/sign/installation-right.webp';

export default function Sign() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="page project sign">
      <BackButton />

      <section className="project__intro">
        <div className="project__facts">
          <h2>what?</h2>
          <p>design and manufacturing of a human sized sign with embedded lights</p>
          <h2>when?</h2>
          <p>four months in 2025</p>
          <h2>where?</h2>
          <p>Fens Cafe at the ATLAS institute in Boulder</p>
          <h2>who?</h2>
          <p>
            Joel Swanson: design mentor
            <br />
            Marvin Melzer: design &amp; manufacturing
            <br />
            Fen: client (Cafe Owner)
          </p>
          <h2>objectives</h2>
          <p>
            easy to read
            <br />
            aesthetic
            <br />
            transparent
            <br />
            easy to maintain
          </p>
        </div>
        <div className="sign__hero">
          <button
            type="button"
            className={`sign__power${isOn ? ' is-on' : ''}`}
            aria-pressed={isOn}
            aria-label={isOn ? 'Turn sign off' : 'Turn sign on'}
            onClick={() => setIsOn((on) => !on)}
          >
            <span className="sign__power-track" aria-hidden="true">
              <span className="sign__power-knob" />
            </span>
            <span className="sign__power-label">{isOn ? 'on' : 'off'}</span>
          </button>
          <img
            className="project__hero"
            src={isOn ? signOn : signOff}
            alt={isOn ? 'Fens Cafe neon sign lit' : 'Fens Cafe neon sign unlit'}
          />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <div className="project__row project__row--fill-stack">
          <figure className="project__figure">
            <img src={designAnnotated} alt="Annotated sign design" />
          </figure>
          <div className="project__col">
            <figure className="project__figure">
              <img src={orchids} alt="Orchids in the cafe" />
            </figure>
            <figure className="project__figure">
              <img src={orchid} alt="Purple orchid blooms" />
            </figure>
          </div>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">prototyping</h2>
        <div className="project__row project__row--split project__row--split-even">
          <p className="project__text">
            it was crucial to dial in manufacturing techniques and materials to avoid
            wasting resources
          </p>
          <p className="project__text project__text--wide">
            transparent 1/4” cast acrylic. thick enough to secure light stripes
            <br />
            cast acrylic resists melting more than extruded acrylic while cutting
          </p>
        </div>
        <div className="project__row project__row--match-height">
          <figure className="project__figure">
            <img src={prototype} alt="Neon prototype" />
          </figure>
          <figure className="project__figure">
            <img src={prototyping2} alt="Neon prototyping" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">production</h2>
        <div className="project__row project__row--split project__row--sync-height">
          <figure className="project__figure">
            <img src={renderImg} alt="Sign render" />
          </figure>
          <figure className="project__figure">
            <video src={cncVideo} autoPlay loop muted playsInline />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <p className="project__text project__text--full">
          hand soldered 250 transparent wires with minimal gauge to connect all light
          stripes
        </p>
        <div className="project__row project__row--three">
          <img className="project__figure" src={solderingImg} alt="Soldering light stripes" />
          <figure className="project__figure">
            <video src={assemblingVideo} autoPlay loop muted playsInline />
          </figure>
          <img className="project__figure" src={assemblingImg} alt="Assembling the sign" />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">installation</h2>
        <div className="project__row project__row--split project__row--fill-tall">
          <div className="project__col">
            <video
              className="project__figure"
              src={installation1}
              autoPlay
              loop
              muted
              playsInline
            />
            <figure className="project__figure">
              <img src={installation2} alt="Installing the sign" />
              <figcaption className="caption caption--overlay caption--tl">
                non destructive mount
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={installation3} alt="Mounting the sign" />
              <figcaption className="caption caption--overlay caption--tl caption--black caption--third">
                clamps hold the sign sections in place
                <br />
                soft nylon tips prevent acrylic crazing
              </figcaption>
            </figure>
          </div>
          <figure className="project__figure">
            <img
              src={installationRight}
              alt="Installed sign on the cafe window"
            />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="project__row project__row--three">
          <figure className="project__figure">
            <img src={outside1} alt="Sign from a distance" />
            <figcaption className="caption">easy to read</figcaption>
          </figure>
          <figure className="project__figure">
            <img src={inside} alt="Sign from inside" />
            <figcaption className="caption">unobtrusive</figcaption>
          </figure>
          <figure className="project__figure">
            <img src={daylight} alt="Sign in daylight" />
            <figcaption className="caption">flowers get daylight</figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section project__insights">
        <div>
          <h2 className="project__heading">insight one</h2>
          <p className="project__text">
            five months in, the switch died. customers started thinking the cafe was
            closed. it wasn't. the sign was just broken. idea: build a sign that only
            lights up to say closed. if it ever breaks again, regulars will just assume
            it's open.
          </p>
        </div>
        <div>
          <h2 className="project__heading">insight two</h2>
          <p className="project__text">
            remove acrylics paper cover first and then insert light stripes to avoid
            paper pieces to be stuck in channels
          </p>
          <img className="project__figure" src={insightImg} alt="Paper stuck in channels" style={{ marginTop: 16 }} />
        </div>
      </section>
    </div>
  );
}
