import BackButton from '../components/BackButton';
import { img } from '../lib/img';
import competitionVideo from '../assets/atas/atas-competition-5.mp4';
import conceptVideo from '../assets/atas/atas-concept-7.mov';
import manufacturingVideo from '../assets/atas/atas-manufacturing-1.mp4';
import testVideo from '../assets/atas/atas-test-2.mov';

const hero = img('atas/atas-hero');
const hero2 = img('atas/atas-hero-2');
const problem1 = img('atas/atas-problem-1');
const competition1 = img('atas/atas-competition-1');
const competition2 = img('atas/atas-competition-2');
const competition3 = img('atas/atas-competition-3');
const competition4 = img('atas/atas-competition-4');
const ideation1 = img('atas/atas-ideation-1');
const ideation2 = img('atas/atas-ideation-2');
const ideation3 = img('atas/atas-ideation-3');
const ideation4 = img('atas/atas-ideation-4');
const ideation5 = img('atas/atas-ideation-5');
const ideation6 = img('atas/atas-ideation-6');
const ideation7 = img('atas/atas-ideation-7');
const concept1 = img('atas/atas-concept-1');
const concept2 = img('atas/atas-concept-2');
const concept3 = img('atas/atas-concept-3');
const concept4 = img('atas/atas-concept-4');
const concept5 = img('atas/atas-concept-5');
const concept6 = img('atas/atas-concept-6');
const manufacturing2 = img('atas/atas-manufacturing-2');
const processing1 = img('atas/atas-processing-1');
const processing2 = img('atas/atas-processing-2');
const processing3 = img('atas/atas-processing-3');
const assembly1 = img('atas/atas-assembly-1');
const assembly2 = img('atas/atas-assembly-2');
const assembly3 = img('atas/atas-assembly-3');
const test1 = img('atas/atas-test-1');

const CLIENT_WANTS = [
  'keep four wheel dynamic',
  'maximum clearance',
  'minimal turning radius',
  'durable',
  'quickly switch between indoor and outdoor mode',
];

export default function Atas() {
  return (
    <div className="page project atas">
      <BackButton />

      <section className="project__intro">
        <h1 className="page-title">A.T.A.S.</h1>
        <div className="project__facts">
          <h2>what?</h2>
          <p>
            design of a wheelchair modification to enable off road terrain
            accessibility - <strong>A</strong>ll <strong>T</strong>errain{' '}
            <strong>A</strong>ccess <strong>S</strong>ystem
          </p>
          <h2>why?</h2>
          <p>to include disabled people outdoors through design</p>
          <h2>when?</h2>
          <p>four months in 2026</p>
          <h2>where?</h2>
          <p>Boulder, Colorado</p>
          <h2>who?</h2>
          <p>
            Marvin Melzer: designer
            <br />
            Bob: client
          </p>
        </div>
        <img className="project__hero" src={hero} alt="Wheelchair attachment rolling through a puddle" />
      </section>

      <section className="project__section">
        <h2 className="project__heading">the problem</h2>
        <div className="project__row">
          <figure className="project__figure">
            <img src={problem1} alt="Wheelchair stuck in beach sand" />
          </figure>
          <figure className="project__figure">
            <img src={hero2} alt="Wheelchair caster blocked by a rock on gravel" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">what the client wants</h2>
        <ul className="atas__wants">
          {CLIENT_WANTS.map((want) => (
            <li key={want}>{want}</li>
          ))}
        </ul>
      </section>

      <section className="project__section">
        <h2 className="project__heading">why other solutions don&rsquo;t work</h2>
        <div className="atas__grid3">
          <figure className="project__figure">
            <img src={competition1} alt="Wheelchair with front attachment wheel" />
          </figure>
          <figure className="project__figure">
            <img src={competition2} alt="Folded wheelchair with powered attachment" />
          </figure>
          <figure className="project__figure">
            <img src={competition3} alt="Off-road front wheel attachment" />
          </figure>
        </div>
        <div className="atas__grid3 atas__comp-row2">
          <figure className="project__figure">
            <img src={competition4} alt="All-terrain handcycle trike" />
          </figure>
          <figure className="project__figure atas__span2">
            <video src={competitionVideo} autoPlay loop muted playsInline />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">ideation</h2>
        <div className="atas__grid3">
          <figure className="project__figure">
            <img src={ideation1} alt="Cardboard arm mockup" />
          </figure>
          <figure className="project__figure">
            <img src={ideation2} alt="Cardboard wheel mockup held in hand" />
          </figure>
          <figure className="project__figure">
            <img src={ideation3} alt="Cardboard roller concept" />
          </figure>
        </div>
        <div className="atas__grid4">
          <figure className="project__figure">
            <img src={ideation4} alt="First caster prototype held against the chair" />
          </figure>
          <figure className="project__figure">
            <img src={ideation5} alt="Prototype mounted on the workbench" />
          </figure>
          <figure className="project__figure">
            <img src={ideation6} alt="Laser-cut tri-wheel prototype" />
          </figure>
          <figure className="project__figure">
            <img src={ideation7} alt="Tri-wheel prototype with template parts" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">concept</h2>
        <figure className="project__figure">
          <video src={conceptVideo} autoPlay loop muted playsInline />
        </figure>
        <div className="atas__concept-top">
          <div className="atas__concept-col">
            <figure className="project__figure">
              <img src={concept1} alt="Wheelchair with the attachment on wet pavement" />
            </figure>
          </div>
          <div className="atas__concept-col">
            <figure className="project__figure atas__figure--plain">
              <img src={concept2} alt="Tri-wheel assembly with springs" />
            </figure>
          </div>
        </div>
        <div className="atas__grid3 atas__concept-bottom">
          <div className="atas__wheels">
            <img src={concept4} alt="Shark wheel close-up" />
            <img src={concept3} alt="Shark wheel profile" />
          </div>
          <figure className="project__figure">
            <img src={concept5} alt="Assembled caster with spring" />
          </figure>
          <figure className="project__figure">
            <img src={concept6} alt="Assembly mounted next to the wheelchair wheel" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">manufacturing</h2>
        <div className="project__row">
          <figure className="project__figure">
            <video src={manufacturingVideo} autoPlay loop muted playsInline />
          </figure>
          <figure className="project__figure atas__figure--plain">
            <img src={manufacturing2} alt="CAD drawing of the plate with dimensions" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">post processing</h2>
        <div className="atas__grid3">
          <figure className="project__figure">
            <img src={processing1} alt="Three cut plates before finishing" />
          </figure>
          <figure className="project__figure">
            <img src={processing2} alt="Deburred plates" />
          </figure>
          <figure className="project__figure">
            <img src={processing3} alt="Full set of finished plates" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">assembly</h2>
        <div className="atas__grid3">
          <figure className="project__figure">
            <img src={assembly1} alt="Hand-drawn assembly plan" />
          </figure>
          <figure className="project__figure">
            <img src={assembly2} alt="All parts laid out before assembly" />
          </figure>
          <figure className="project__figure">
            <img src={assembly3} alt="Assembling the caster unit" />
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="atas__test-row">
          <figure className="project__figure">
            <img src={test1} alt="Riding down a snowy slope with the attachment" />
          </figure>
          <figure className="project__figure">
            <video src={testVideo} autoPlay loop muted playsInline />
          </figure>
        </div>
      </section>
    </div>
  );
}
