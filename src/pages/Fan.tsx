import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const renderOpen = img('fan/fan-render-open');
const hl70a = img('fan/HL70-1');
const hl70b = img('fan/HL70-2');
const bladeRatio = img('fan/blade-ratio');
const printFront = img('fan/fan-print-front');
const printClosed = img('fan/fan-print-closed');
const printSide = img('fan/fan-print-side');
const test1 = img('fan/test-1');
const test2 = img('fan/test-2');
const renderLaying = img('fan/fan-render-laying');
const renderStanding = img('fan/fan-render-standing');
const functionVideo = video('fan/fan-function');

export default function Fan() {
  return (
    <div className="page project fan">
      <BackButton />

      <section className="project__intro">
        <h1 className="fan__title">HL-3</h1>
        <div className="project__facts">
          <h2>what?</h2>
          <p>redesign of the Hl70 - a desk fan from braun designed in 1971</p>
          <h2>when?</h2>
          <p>two weeks in 2024</p>
          <h2>where?</h2>
          <p>during my internship at Braun in Germany</p>
          <h2>who?</h2>
          <p>
            Jordan Groskamp: advision &amp; rendering
            <br />
            Marvin Melzer: design &amp; fabrication
          </p>
        </div>
        <Zoomable className="project__hero">
          <img src={renderOpen} alt="Redesigned fan render" />
        </Zoomable>
      </section>

      <section className="project__section">
        <div className="fan__why">
          <div>
            <h2 className="project__heading">why redesign this?</h2>
            <p className="project__text">
              <strong>1971</strong>: people have one desk
              <br />
              <br />
              <strong>2024</strong>: people have many desks
              <br />
              <br />
              problem: fan is not portable
            </p>
          </div>
          <Zoomable as="figure" className="project__figure">
            <img src={hl70a} alt="Braun HL70 from 1971" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={hl70b} alt="HL70 on an office desk" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <div className="fan__design">
          <Zoomable as="figure" className="project__figure">
            <video src={functionVideo} autoPlay loop muted playsInline />
          </Zoomable>
          <Zoomable as="figure" className="project__figure fan__blade">
            <img src={bladeRatio} alt="Blade ratio sketch" />
          </Zoomable>
        </div>
        <div className="fan__renders">
          <Zoomable as="figure" className="project__figure">
            <img src={renderOpen} alt="Render, open front" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={renderLaying} alt="Render, laying on desk" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={renderStanding} alt="Render, closed standing" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <Zoomable as="figure" className="project__figure">
          <img src={printFront} alt="3D print in open position" />
        </Zoomable>
        <div className="project__row project__row--match-height">
          <Zoomable as="figure" className="project__figure">
            <img src={printClosed} alt="3D print in closed position, laying on a desk" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={printSide} alt="3D print, side view" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <img src={test1} alt="Packing the fan into a backpack" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={test2} alt="Fan tucked into a backpack side pocket" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">insight one</h2>
        <p className="project__text project__text--half">
          I learned that balancing ideation and execution is important to achieve fast
          results.
        </p>
      </section>

      <section className="project__section">
        <h2 className="project__heading">insight two</h2>
        <p className="project__text project__text--half">
          I extended my R&amp;D internship to get involved with Industrial Design. This
          project confirmed that design shall transition from my hobby to my career.
        </p>
      </section>
    </div>
  );
}
