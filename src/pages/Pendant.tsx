import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const hero = img('pendant/pendant-hero');
const designLanguage = img('pendant/pendant-design-language');
const prototyping1 = img('pendant/pendant-prototyping-1');
const prototyping2 = img('pendant/pendant-prototyping-2');
const manufacturing1 = video('pendant/pendant-manufacturing-1');
const manufacturing2 = video('pendant/pendant-manufacturing-2');
const manufacturing3 = img('pendant/pendant-manufacturing-3');
const manufacturing4 = video('pendant/pendant-manufacturing-4');
const result1 = img('pendant/pendant-test-1');
const result2 = img('pendant/pendant-test-2');

export default function Pendant() {
  return (
    <div className="page project pendant">
      <BackButton />

      <section className="project__intro">
        <h1 className="pendant__title">parachute pendant</h1>
        <div className="project__facts">
          <h2>what?</h2>
          <p>design of a wearable voice recorder for Parachute</p>
          <h2>what is parachute?</h2>
          <p>
            parachute is a startup based in Boulder. Its core product is a voice
            first note taking system which learns the user. By simply inputting
            your written or spoken notes the system makes sense of it all.
          </p>
          <p>
            Parachute is an open source venture that values transparency and
            simplicity and aims to boost your creativity by organizing your
            thoughts.
          </p>
          <h2>why?</h2>
          <p>
            getting experience in a startup environment and advancing my skills
            in industrial design and prototyping
          </p>
          <h2>when?</h2>
          <p>Jan 2026 - May 2026</p>
          <h2>where?</h2>
          <p>Boulder, Colorado</p>
          <h2>who?</h2>
          <p>Marvin Melzer: design and hardware development</p>
        </div>
        <Zoomable className="project__hero">
          <img
            src={hero}
            alt="Parachute pendant worn on a braided cord, translucent casing showing the battery and circuit"
          />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design language</h2>
        <Zoomable as="figure" className="project__figure">
          <img
            src={designLanguage}
            alt="Design language references: dunes, zen garden, water ripples, matte surfaces, and crystal forms"
          />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">prototyping</h2>
        <Zoomable as="figure" className="project__figure">
          <img
            src={prototyping1}
            alt="Grid of physical pendant prototypes in clear, white, black, and blue materials"
          />
        </Zoomable>
        <Zoomable as="figure" className="project__figure pendant__figure--spaced">
          <img
            src={prototyping2}
            alt="Exploded CAD render showing the pendant shell, purple PCB, and battery"
          />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">manufacturing</h2>
        <div className="project__row pendant__mfg">
          <Zoomable as="figure" className="project__figure">
            <video src={manufacturing1} autoPlay loop muted playsInline />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <video src={manufacturing2} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
        <div className="project__row pendant__mfg">
          <Zoomable as="figure" className="project__figure">
            <img
              src={manufacturing3}
              alt="Custom purple comma-shaped PCBs resting on cooling fans"
            />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <video src={manufacturing4} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">result</h2>
        <Zoomable as="figure" className="project__figure">
          <img
            src={result1}
            alt="Exhibition visitors looking at the Parachute Pendant presentation board"
          />
        </Zoomable>
        <Zoomable as="figure" className="project__figure pendant__figure--spaced">
          <img
            src={result2}
            alt="Finished pendant worn over a linen shirt, clear shell with visible electronics"
          />
        </Zoomable>
      </section>
    </div>
  );
}
