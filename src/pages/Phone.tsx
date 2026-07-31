import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';

const hero1 = img('phone/phone-hero-1');
const hero2 = img('phone/phone-hero-2');
const hero3 = img('phone/phone-hero-3');
const why = img('phone/phone-why');
const manufacturing1 = img('phone/phone-manufacturing-1');
const manufacturing2 = img('phone/phone-manufacturing-2');
const assembly1 = img('phone/phone-assembly-1');
const assembly2 = img('phone/phone-assembly-2');
const assembly3 = img('phone/phone-assembly-3');
const assembly4 = img('phone/phone-assembly-4');
const test = img('phone/phone-test');

export default function Phone() {
  return (
    <div className="page project phone">
      <BackButton />

      <section className="project__intro">
        <h1 className="phone__title">iPhone walnut</h1>
        <div className="phone__facts">
          <div className="project__facts">
            <h2>what?</h2>
            <p>
              removing the glass of an iPhones back and replacing it with a piece of
              wood
            </p>
            <h2>why?</h2>
            <p>
              I don’t like using my iPhone without a case. Of course, my back glass
              eventually cracked.
            </p>
          </div>
          <div className="phone__facts-split">
            <div className="project__facts phone__facts-meta">
              <h2>when?</h2>
              <p>one week -2025</p>
              <h2>where?</h2>
              <p>Boulder, Colorado</p>
              <h2>who?</h2>
              <p>Marvin Melzer: designer</p>
            </div>
            <Zoomable as="figure" className="project__figure phone__cracked">
              <img src={why} alt="Cracked iPhone back glass" />
            </Zoomable>
          </div>
        </div>
        <Zoomable className="project__hero">
          <img src={hero1} alt="iPhone with walnut wood back — this is not a case" />
        </Zoomable>
      </section>

      <div className="phone__details">
        <Zoomable as="figure" className="project__figure">
          <img src={hero2} alt="Walnut phone back, top-down view" />
        </Zoomable>
        <Zoomable as="figure" className="project__figure">
          <img src={hero3} alt="Walnut back flush with the phone frame" />
        </Zoomable>
      </div>

      <section className="project__section">
        <h2 className="project__heading">manufacturing</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <img
              src={manufacturing1}
              alt="Prototyping phone backs in different materials"
            />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={manufacturing2} alt="Laser cutting walnut veneer" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">assembling</h2>
        <div className="phone__assemble-top">
          <Zoomable as="figure" className="project__figure">
            <img
              src={assembly1}
              alt="Disassembled phone parts laid out on the workbench"
            />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={assembly2} alt="Assembling the walnut back onto the phone" />
          </Zoomable>
        </div>
        <div className="project__row phone__assemble-bottom">
          <Zoomable as="figure" className="project__figure">
            <img src={assembly3} alt="Clamping while glue dries" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img
              src={assembly4}
              alt="Note about borrowing clamps and a 3D printer"
            />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <Zoomable as="figure" className="project__figure">
          <img
            src={test}
            alt="Walnut back bulging where the wood expands as the phone heats up"
          />
        </Zoomable>
      </section>
    </div>
  );
}
