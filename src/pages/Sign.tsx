import { useState } from 'react';
import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const designAnnotated = img('sign/sign-design');
const orchid = img('sign/sign-orchid');
const orchids = img('sign/sign-orchids-1');
const prototype = img('sign/sign-prototype');
const prototyping2 = img('sign/sign-prototyping-2');
const renderImg = img('sign/sign-render');
const solderingImg = img('sign/sign-soldering');
const assemblingImg = img('sign/sign-assembly');
const signOff = img('sign/sign-off');
const signOn = img('sign/sign-on');
const outside1 = img('sign/sign-outside-2');
const inside = img('sign/sign-inside');
const daylight = img('sign/sign-daylight');
const insightImg = img('sign/sign-insight');
const insightImg2 = img('sign/sign-insight-2');
const installation2 = img('sign/installation-2');
const installation3 = img('sign/installation-3');
const installationRight = img('sign/installation-right');
const cncVideo = video('sign/sign-CNC');
const assemblingVideo = video('sign/sign-assembling');
const installation1 = video('sign/installation-1');

const CLIENT_WANTS = [
  'easy to read',
  'aesthetic',
  'transparent',
  'easy to maintain',
];

export default function Sign() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="page project sign">
      <BackButton />

      <section className="project__intro">
        <h1 className="page-title">sign</h1>
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
          <Zoomable className="project__hero">
            <img
              src={isOn ? signOn : signOff}
              alt={isOn ? 'Fens Cafe neon sign lit' : 'Fens Cafe neon sign unlit'}
            />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">what the client wants</h2>
        <ul className="sign__wants">
          {CLIENT_WANTS.map((want) => (
            <li key={want}>{want}</li>
          ))}
        </ul>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <div className="project__row project__row--fill-stack">
          <Zoomable as="figure" className="project__figure">
            <img src={designAnnotated} alt="Annotated sign design" />
          </Zoomable>
          <div className="project__col">
            <Zoomable as="figure" className="project__figure">
              <img src={orchids} alt="Orchids in the cafe" />
            </Zoomable>
            <Zoomable as="figure" className="project__figure">
              <img src={orchid} alt="Purple orchid blooms" />
            </Zoomable>
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
          <Zoomable as="figure" className="project__figure">
            <img src={prototype} alt="Neon prototype" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={prototyping2} alt="Neon prototyping" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">production</h2>
        <div className="project__row project__row--split project__row--sync-height">
          <Zoomable as="figure" className="project__figure">
            <img src={renderImg} alt="Sign render" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <video src={cncVideo} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <div className="project__row project__row--three">
          <Zoomable as="figure" className="project__figure">
            <img src={solderingImg} alt="Soldering light stripes" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <video
              className="sign__assemble-video"
              src={assemblingVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={assemblingImg} alt="Assembling the sign" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">installation</h2>
        <div className="project__row project__row--split project__row--fill-tall">
          <div className="project__col">
            <Zoomable as="figure" className="project__figure">
              <video src={installation1} autoPlay loop muted playsInline />
            </Zoomable>
            <Zoomable as="figure" className="project__figure">
              <img src={installation2} alt="Installing the sign" />
            </Zoomable>
            <Zoomable as="figure" className="project__figure">
              <img src={installation3} alt="Mounting the sign" />
            </Zoomable>
          </div>
          <Zoomable as="figure" className="project__figure">
            <img
              src={installationRight}
              alt="Installed sign on the cafe window"
            />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="project__row project__row--three">
          <Zoomable as="figure" className="project__figure">
            <img src={outside1} alt="Sign from a distance" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={inside} alt="Sign from inside" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={daylight} alt="Sign in daylight" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section sign__insights">
        <div className="sign__insight">
          <h2 className="project__heading">insight one</h2>
          <p className="project__text">
            five months in, the switch died. customers started thinking the cafe was
            closed. it wasn't. the sign was just broken. idea: build a sign that only
            lights up to say closed. if it ever breaks again, regulars will just assume
            it's open.
          </p>
        </div>
        <div className="sign__insight sign__insight--with-media">
          <h2 className="project__heading">insight two</h2>
          <p className="project__text">
            remove acrylics paper cover first and then insert light stripes to avoid
            paper pieces to be stuck in channels
          </p>
          <Zoomable as="figure" className="project__figure sign__insight-photo">
            <img src={insightImg} alt="Inserting light stripes into acrylic channels" />
          </Zoomable>
        </div>
        <Zoomable as="figure" className="project__figure sign__insight-aside">
          <img
            src={insightImg2}
            alt="Light stripes seated in acrylic channels"
          />
        </Zoomable>
      </section>
    </div>
  );
}
