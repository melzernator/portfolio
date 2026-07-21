import BackButton from '../components/BackButton';
import renderOpen from '../assets/fan/fan-render-open.webp';
import hl70a from '../assets/fan/HL70-1.webp';
import hl70b from '../assets/fan/HL70-2.webp';
import bladeRatio from '../assets/fan/blade-ratio.webp';
import functionVideo from '../assets/fan/fan-function.mp4';
import printFront from '../assets/fan/fan-print-front.webp';
import printClosed from '../assets/fan/fan-print-closed.webp';
import printSide from '../assets/fan/fan-print-side.webp';
import printClosedSide from '../assets/fan/fan-pint-closed-side.webp';
import renderLaying from '../assets/fan/fan-render-laying.webp';
import renderStanding from '../assets/fan/fan-render-standing.webp';

export default function Fan() {
  return (
    <div className="page project fan">
      <BackButton />

      <section className="project__intro">
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
          <h2>objective</h2>
          <p>redesign the fan</p>
        </div>
        <img className="project__hero" src={renderOpen} alt="Redesigned fan render" />
      </section>

      <section className="project__section">
        <h2 className="project__heading">why redesign?</h2>
        <div className="project__row project__row--three">
          <div className="project__text-block">
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
            <figcaption className="caption">
              the HL70 designed by Reinhold Weiss and Jürgen Greubel in{' '}
              <strong>1971</strong>
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={hl70b} alt="HL70 on an office desk" />
            <figcaption className="caption">a fan for office desks</figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <p className="project__text project__text--full">
          how might we redesign the form to add portability?
        </p>
        <div className="project__row">
          <figure className="project__figure project__figure--wide">
            <video src={functionVideo} autoPlay loop muted playsInline />
            <figcaption className="caption">
              the rotational stand doubles as a protective cover
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={bladeRatio} alt="Blade ratio sketch" />
            <figcaption className="caption">
              modern motors are smaller with equal performance → increase wingspan for
              more airflow
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <div className="project__row project__row--split">
          <h2 className="project__heading">build</h2>
          <h2 className="project__heading project__heading--center">render</h2>
        </div>
        <div className="project__row">
          <div className="project__col">
            <p className="project__text">
              printed 3D model created in Fusion360 with manufacturing constraints in
              mind
            </p>
            <figure className="project__figure">
              <img src={printFront} alt="3D print in open position" />
              <figcaption className="caption">open position</figcaption>
            </figure>
            <figure className="project__figure">
              <img src={printClosed} alt="3D print in closed position" />
              <figcaption className="caption">
                closed position for transportation
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={printSide} alt="Rotating the fan" />
              <figcaption className="caption">
                rotate to adjust air flow direction
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={printClosedSide} alt="Closed 3D print, side view" />
              <figcaption className="caption">closed - side view</figcaption>
            </figure>
          </div>
          <div className="project__col project__col--wide">
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
