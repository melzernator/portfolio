import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const hero = img('bludolph/heroshot');
const sketches = img('bludolph/sketches');
const skiing = img('bludolph/skiing');
const head = img('bludolph/head');
const prototype1 = img('bludolph/prototype-1');
const prototype2 = img('bludolph/prototype-2');
const injection1 = img('bludolph/injectionmolding-1');
const injection2 = img('bludolph/injectionmolding-2');
const assembly1 = video('bludolph/assembly-1');
const assembly2 = video('bludolph/assembly-2');
const bubblyHorse = img('bludolph/bubbly-horse');
const scoredHorse = img('bludolph/scored-horse');
const goodHorse = img('bludolph/good-horse');
const sale1 = img('bludolph/sale-1');
const sale2 = img('bludolph/sale-2');
const sale3 = img('bludolph/sale-3');
const pano = img('bludolph/pano');

/** width / height — figures in a row share one height, so wider media get more room */
const LANDSCAPE = 4 / 3;
const PORTRAIT = 3 / 4;
const WIDE = 16 / 9;

export default function Bludolph() {
  return (
    <div className="page project bludolph">
      <BackButton />

      <div className="construction-banner" role="status">
        <span>under construction</span>
      </div>

      <section className="project__intro">
        <h1 className="bludolph__title">bludolph</h1>
        <div className="project__facts">
          <h2>what?</h2>
          <p>
            a holiday ornament forever on the naughty list: a tiny Blucifer
            with glowing red eyes, injection molded from recycled food-grade
            industrial drums
          </p>
          <h2>why?</h2>
          <p>
            designing, producing and selling a product made from recycled
            material, from first sketch to market stall
          </p>
          <h2>when?</h2>
          <p>fall 2026</p>
          <h2>where?</h2>
          <p>Boulder, Colorado</p>
          <h2>who?</h2>
          <p>Marvin Melzer &amp; Veronica Dryer</p>
        </div>
        <Zoomable className="project__hero">
          <img
            src={hero}
            alt="A rearing blue Bludolph horse with glowing red eyes above rows of blue ornaments with red LED eyes"
          />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <Zoomable as="figure" className="project__figure">
          <img
            src={sketches}
            alt="Pinned-up sketches: ornament concepts, a Krampus horse, Bludolph, a skiing horse, and a Blucifer vs. holiday word list"
          />
        </Zoomable>
        <div className="bludolph__row">
          <div className="bludolph__cell" style={{ flex: PORTRAIT }}>
            <Zoomable as="figure" className="project__figure">
              <img
                src={skiing}
                alt="Blue rearing horse prototype on skis holding a ski pole"
              />
            </Zoomable>
            <p className="caption">too complex</p>
          </div>
          <div className="bludolph__cell" style={{ flex: PORTRAIT }}>
            <Zoomable as="figure" className="project__figure">
              <img
                src={head}
                alt="Simplified Bludolph head with a glowing red LED eye, wired to a bench power supply"
              />
            </Zoomable>
          </div>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <div className="bludolph__row">
          <Zoomable as="figure" className="project__figure" style={{ flex: PORTRAIT }}>
            <img src={prototype2} alt="3D-printed Bludolph head prototype on a workbench" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: PORTRAIT }}>
            <img src={prototype1} alt="Two halves of a 3D-printed Bludolph prototype" />
          </Zoomable>
        </div>
        <div className="bludolph__row">
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={injection2} alt="Rows of blue injection molded test shots laid out on paper" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={injection1} alt="Blue Bludolph ornament next to its open mold" />
          </Zoomable>
        </div>
        <div className="bludolph__row">
          <Zoomable as="figure" className="project__figure" style={{ flex: WIDE }}>
            <video src={assembly1} autoPlay loop muted playsInline />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: WIDE }}>
            <video src={assembly2} autoPlay loop muted playsInline />
          </Zoomable>
        </div>
        <div className="bludolph__row">
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={bubblyHorse} alt="Molded ornament with a bubbly, pitted surface" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={scoredHorse} alt="Molded ornament with scored, scratched surface" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={goodHorse} alt="Clean, glossy finished Bludolph ornament" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">sell</h2>
        <div className="bludolph__row">
          <Zoomable as="figure" className="project__figure" style={{ flex: LANDSCAPE }}>
            <img src={sale3} alt="Crowd in front of the market booth" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: PORTRAIT }}>
            <img src={sale1} alt="Marvin presenting the Bludolph display board at the booth" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure" style={{ flex: PORTRAIT }}>
            <img src={sale2} alt="Handing a Bludolph ornament to a customer across the checkout table" />
          </Zoomable>
        </div>
        <Zoomable as="figure" className="project__figure bludolph__pano">
          <img src={pano} alt="Panorama of the market booth with all student product displays" />
        </Zoomable>
      </section>
    </div>
  );
}
