import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const competitionVideo = video('atas/atas-competition-5');
const conceptVideo = video('atas/atas-concept-7');
const manufacturingVideo = video('atas/atas-manufacturing-1');
const testVideo = video('atas/atas-test-2');
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
        <Zoomable className="project__hero">
          <img src={hero} alt="Wheelchair attachment rolling through a puddle" />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">the problem</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <img src={problem1} alt="Wheelchair stuck in beach sand" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={hero2} alt="Wheelchair caster blocked by a rock on gravel" />
          </Zoomable>
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
          <Zoomable as="figure" className="project__figure">
            <img src={competition1} alt="Wheelchair with front attachment wheel" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={competition2} alt="Folded wheelchair with powered attachment" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={competition3} alt="Off-road front wheel attachment" />
          </Zoomable>
        </div>
        <div className="atas__grid3 atas__comp-row2">
          <Zoomable as="figure" className="project__figure">
            <img src={competition4} alt="All-terrain handcycle trike" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure atas__span2">
            <video src={competitionVideo} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">ideation</h2>
        <div className="atas__grid3">
          <Zoomable as="figure" className="project__figure">
            <img src={ideation1} alt="Cardboard arm mockup" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={ideation2} alt="Cardboard wheel mockup held in hand" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={ideation3} alt="Cardboard roller concept" />
          </Zoomable>
        </div>
        <div className="atas__grid4">
          <Zoomable as="figure" className="project__figure">
            <img src={ideation4} alt="First caster prototype held against the chair" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={ideation5} alt="Prototype mounted on the workbench" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={ideation6} alt="Laser-cut tri-wheel prototype" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={ideation7} alt="Tri-wheel prototype with template parts" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">concept</h2>
        <Zoomable as="figure" className="project__figure">
          <video src={conceptVideo} autoPlay loop muted playsInline />
        </Zoomable>
        <div className="atas__concept-top">
          <div className="atas__concept-col">
            <Zoomable as="figure" className="project__figure">
              <img src={concept1} alt="Wheelchair with the attachment on wet pavement" />
            </Zoomable>
          </div>
          <div className="atas__concept-col">
            <Zoomable as="figure" className="project__figure atas__figure--plain">
              <img src={concept2} alt="Tri-wheel assembly with springs" />
            </Zoomable>
          </div>
        </div>
        <div className="atas__grid3 atas__concept-bottom">
          <div className="atas__wheels">
            <Zoomable>
              <img src={concept4} alt="Shark wheel close-up" />
            </Zoomable>
            <Zoomable>
              <img src={concept3} alt="Shark wheel profile" />
            </Zoomable>
          </div>
          <Zoomable as="figure" className="project__figure">
            <img src={concept5} alt="Assembled caster with spring" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={concept6} alt="Assembly mounted next to the wheelchair wheel" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">manufacturing</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <video src={manufacturingVideo} autoPlay loop muted playsInline />
          </Zoomable>
          <Zoomable as="figure" className="project__figure atas__figure--plain">
            <img src={manufacturing2} alt="CAD drawing of the plate with dimensions" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">post processing</h2>
        <div className="atas__grid3">
          <Zoomable as="figure" className="project__figure">
            <img src={processing1} alt="Three cut plates before finishing" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={processing2} alt="Deburred plates" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={processing3} alt="Full set of finished plates" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">assembly</h2>
        <div className="atas__grid3">
          <Zoomable as="figure" className="project__figure">
            <img src={assembly1} alt="Hand-drawn assembly plan" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={assembly2} alt="All parts laid out before assembly" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={assembly3} alt="Assembling the caster unit" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="atas__test-row">
          <Zoomable as="figure" className="project__figure">
            <img src={test1} alt="Riding down a snowy slope with the attachment" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <video src={testVideo} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
      </section>
    </div>
  );
}
