import BackButton from '../components/BackButton';
import Zoomable from '../components/Zoomable';
import { img } from '../lib/img';
import { video } from '../lib/video';

const headshot = img('brick-lamp/headshot');
const detail1 = img('brick-lamp/detail-1');
const detail2 = img('brick-lamp/detail-2');
const detail3 = img('brick-lamp/detail-3');
const process1 = img('brick-lamp/process-1');
const process2 = img('brick-lamp/process-2');
const lasercutting = video('brick-lamp/lasercutting');
const usecase1 = img('brick-lamp/usecase-1');
const usecase2 = img('brick-lamp/usecase-2');

export default function BrickLamp() {
  return (
    <div className="page project brick-lamp">
      <BackButton />

      <section className="project__intro">
        <h1 className="brick-lamp__title">brick lamp</h1>
        <Zoomable className="project__hero">
          <img src={headshot} alt="Lit red 2x2 brick lamp" />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">detail</h2>
        <div className="project__row project__row--three">
          <Zoomable as="figure" className="project__figure">
            <img src={detail1} alt="Brick lamp base sitting on a wooden shelf" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={detail2} alt="Studs on top of the brick lamp engraved LEON" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={detail3} alt="Cable exiting the side of the brick lamp" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">process</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <img src={process1} alt="Assembling the brick lamp studs on a cutting mat" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={process2} alt="Workshop table with brick lamp parts and acrylic offcuts" />
          </Zoomable>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">lasercutting</h2>
        <Zoomable as="figure" className="project__figure">
          <video src={lasercutting} autoPlay loop muted playsInline />
        </Zoomable>
      </section>

      <section className="project__section">
        <h2 className="project__heading">usecase</h2>
        <div className="project__row">
          <Zoomable as="figure" className="project__figure">
            <img src={usecase1} alt="Brick lamp glowing on a bedside table" />
          </Zoomable>
          <Zoomable as="figure" className="project__figure">
            <img src={usecase2} alt="Brick lamp glowing on a wooden surface" />
          </Zoomable>
        </div>
      </section>
    </div>
  );
}
