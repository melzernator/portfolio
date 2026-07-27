import BackButton from '../components/BackButton';
import { img } from '../lib/img';
import functionVideo from '../assets/fan/fan-function.mp4';

const renderOpen = img('fan/fan-render-open');
const hl70a = img('fan/HL70-1');
const hl70b = img('fan/HL70-2');
const bladeRatio = img('fan/blade-ratio');
const printFront = img('fan/fan-print-front');
const printClosed = img('fan/fan-print-closed');
const printSide = img('fan/fan-print-side');
const printClosedSide = img('fan/fan-pint-closed-side');
const renderLaying = img('fan/fan-render-laying');
const renderStanding = img('fan/fan-render-standing');

export default function Fan() {
  return (
    <div className="page project fan">
      <BackButton />

      <section className="project__intro">
        <div>
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
        </div>
        <img className="project__hero" src={renderOpen} alt="Redesigned fan render" />
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
          <figure className="project__figure">
            <img src={hl70a} alt="Braun HL70 from 1971" />
            <figcaption className="caption caption--overlay caption--tl caption--black">
              the HL70 designed by Reinhold Weiss and Jürgen Greubel in{' '}
              <strong>1971</strong>
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={hl70b} alt="HL70 on an office desk" />
            <figcaption className="caption caption--overlay caption--tl caption--black">
              a fan for office desks
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <p className="project__text project__text--full">
          how might we redesign the form to add portability?
        </p>
        <div className="fan__design">
          <figure className="project__figure">
            <video src={functionVideo} autoPlay loop muted playsInline />
          </figure>
          <div>
            <figure className="project__figure fan__blade">
              <img src={bladeRatio} alt="Blade ratio sketch" />
            </figure>
            <p className="caption">
              modern motors are smaller with equal performance → increase wingspan for
              more airflow
            </p>
          </div>
        </div>
        <div className="fan__renders">
          <figure className="project__figure">
            <img src={renderOpen} alt="Render, open front" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={renderLaying} alt="Render, laying on desk" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={renderStanding} alt="Render, closed standing" />
            <figcaption className="caption caption--overlay caption--bl">
              rendered by Jordan Groskamp
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <div className="fan__build">
          <figure className="project__figure fan__build-hero">
            <img src={printFront} alt="3D print in open position" />
          </figure>
          <figure className="project__figure fan__build-wide">
            <img src={printClosed} alt="3D print in closed position, laying on a desk" />
          </figure>
          <div className="fan__build-row">
            <figure className="project__figure">
              <img src={printSide} alt="3D print, rotating the fan" />
            </figure>
            <figure className="project__figure">
              <img src={printClosedSide} alt="Closed 3D print, side view" />
            </figure>
          </div>
        </div>
      </section>

      <section className="project__section project__insights">
        <div>
          <h2 className="project__heading">insight one</h2>
          <p className="project__text">
            I learned to balance ideation &amp; execution. to achieve faster results.
          </p>
        </div>
        <div>
          <h2 className="project__heading">insight two</h2>
          <p className="project__text">
            I extended my R&amp;D internship to get involved with Industrial Design. This
            project confirmed that design shall transition from my hobby to my career.
          </p>
        </div>
      </section>
    </div>
  );
}
