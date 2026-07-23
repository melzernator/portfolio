import BackButton from '../components/BackButton';
import hero from '../assets/atas/atas-hero.png';
import hero2 from '../assets/atas/atas-hero-2.png';
import problem1 from '../assets/atas/atas-problem-1.png';
import competition1 from '../assets/atas/atas-competition-1.png';
import competition2 from '../assets/atas/atas-competition-2.png';
import competition3 from '../assets/atas/atas-competition-3.png';
import competition4 from '../assets/atas/atas-competition-4.png';
import competitionVideo from '../assets/atas/atas-competition-5.mp4';
import ideation1 from '../assets/atas/atas-ideation-1.png';
import ideation2 from '../assets/atas/atas-ideation-2.png';
import ideation3 from '../assets/atas/atas-ideation-3.png';
import ideation4 from '../assets/atas/atas-ideation-4.png';
import ideation5 from '../assets/atas/atas-ideation-5.png';
import ideation6 from '../assets/atas/atas-ideation-6.png';
import ideation7 from '../assets/atas/atas-ideation-7.png';
import concept1 from '../assets/atas/atas-concept-1.png';
import concept2 from '../assets/atas/atas-concept-2.png';
import concept3 from '../assets/atas/atas-concept-3.png';
import concept4 from '../assets/atas/atas-concept-4.png';
import concept5 from '../assets/atas/atas-concept-5.png';
import concept6 from '../assets/atas/atas-concept-6.png';
import manufacturingVideo from '../assets/atas/atas-manufacturing-1.mov';
import manufacturing2 from '../assets/atas/atas-manufacturing-2.png';
import processing1 from '../assets/atas/atas-processing-1.png';
import processing2 from '../assets/atas/atas-processing-2.png';
import processing3 from '../assets/atas/atas-processing-3.png';
import assembly1 from '../assets/atas/atas-assembly-1.png';
import assembly2 from '../assets/atas/atas-assembly-2.png';
import assembly3 from '../assets/atas/atas-assembly-3.png';
import test1 from '../assets/atas/atas-test-1.png';

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
        <div className="project__facts">
          <h2>what?</h2>
          <p>design of a wheelchair modification to enable off road terrain accessibility</p>
          <h2>why?</h2>
          <p>to gain experience in product design</p>
          <h2>when?</h2>
          <p>four months in 2026</p>
          <h2>where?</h2>
          <p>during a class at CU Boulder in Colorado</p>
          <h2>who?</h2>
          <p>
            Marvin Melzer: designer
            <br />
            Bob: client
            <br />
            Jared Arp: Teacher
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
        <div className="atas__concept-top">
          <div className="atas__concept-col">
            <p className="project__text">
              The system adds mobility to wheelchairs without permanently changing the
              chair. It uses a low-profile geometry to avoid footrest interference, and
              returns to standard indoor use when not needed.
            </p>
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
            <p className="caption">
              the wide shark wheel profile improves traction and helps channel mud and
              water away from rolling surface
            </p>
            <div className="atas__wheels-row">
              <img src={concept3} alt="Shark wheel profile" />
              <img src={concept4} alt="Shark wheel close-up" />
            </div>
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
        <div className="atas__grid3">
          <figure className="project__figure">
            <img src={test1} alt="Riding down a snowy slope with the attachment" />
          </figure>
        </div>
      </section>
    </div>
  );
}
