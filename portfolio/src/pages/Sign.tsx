import BackButton from '../components/BackButton';
import hero from '../assets/figma/sign-hero.png';
import designAnnotated from '../assets/figma/sign-design.png';
import orchid from '../assets/figma/sign-orchid.png';
import cafe from '../assets/figma/sign-cafe.png';
import proto1 from '../assets/figma/sign-proto-1.png';
import proto2 from '../assets/figma/sign-proto-2.png';
import proto3 from '../assets/figma/sign-proto-3.png';
import fusion from '../assets/figma/sign-fusion.png';
import buildLetter from '../assets/figma/sign-build-letter.png';
import build2 from '../assets/figma/sign-build-2.png';
import installPaper from '../assets/figma/sign-install-paper.png';
import installBig from '../assets/figma/sign-install-big.png';
import clamp1 from '../assets/figma/sign-clamp-1.png';
import clamp2 from '../assets/figma/sign-clamp-2.png';
import test1 from '../assets/figma/sign-test-1.png';
import test2 from '../assets/figma/sign-test-2.png';
import test3 from '../assets/figma/sign-test-3.png';
import insight2 from '../assets/figma/sign-insight-2.png';

export default function Sign() {
  return (
    <div className="page project sign">
      <BackButton />

      <section className="project__intro">
        <div className="project__facts">
          <h2>what?</h2>
          <p>design and manufacturing of a human sized sign with embedded lights</p>
          <h2>when?</h2>
          <p>four months in 2025</p>
          <h2>where?</h2>
          <p>Fens Cafe at the ATLAS institute in Boulder</p>
          <h2>who?</h2>
          <p>
            Joel Swanson: design mentor
            <br />
            Marvin Melzer: design &amp; manufacturing
            <br />
            Fen: client (Cafe Owner)
          </p>
          <h2>objectives</h2>
          <p>
            easy to read
            <br />
            aesthetic
            <br />
            transparent
            <br />
            easy to maintain
          </p>
        </div>
        <img className="project__hero" src={hero} alt="Fens Cafe neon sign" />
      </section>

      <section className="project__section">
        <h2 className="project__heading">design</h2>
        <div className="project__row">
          <figure className="project__figure project__figure--wide">
            <img src={designAnnotated} alt="Annotated sign design" />
            <figcaption className="caption caption--overlay caption--tl">
              stroke weight matches light stripe thickness · multiple strokes make the
              letters more visible · pink matches the orchids in the cafe · white goes
              well with pink
            </figcaption>
          </figure>
          <div className="project__col">
            <img className="project__figure" src={orchid} alt="Orchids in the cafe" />
            <img className="project__figure" src={cafe} alt="Sketch of the sign" />
          </div>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">prototyping</h2>
        <div className="project__row project__row--split">
          <p className="project__text">
            it was crucial to dial in manufacturing techniques and materials to avoid
            wasting resources
          </p>
          <p className="project__text project__text--wide">
            transparent 1/4” cast acrylic. thick enough to secure light stripes
            <br />
            cast acrylic resists melting more than extruded acrylic while cutting
          </p>
        </div>
        <div className="project__row">
          <figure className="project__figure">
            <img src={proto1} alt="Neon prototype" />
            <figcaption className="caption caption--overlay caption--tl">
              color matches design — iterating channel thickness → light stripes are held
              by tension
            </figcaption>
          </figure>
          <img className="project__figure project__figure--wide" src={proto2} alt="Acrylic channel prototype" />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">production</h2>
        <div className="project__row">
          <figure className="project__figure">
            <img src={fusion} alt="Fusion360 model" />
            <figcaption className="caption caption--overlay caption--tl caption--white">
              modeled in Fusion360 to narrow down exact dimensions
            </figcaption>
          </figure>
          <figure className="project__figure project__figure--wide">
            <img src={proto3} alt="CNC cutting acrylic" />
            <figcaption className="caption caption--overlay caption--bl">
              dialed in cutting speeds → acrylic does not melt or chip though carving
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">build</h2>
        <p className="project__text project__text--full">
          hand soldered 250 transparent wires with minimal gauge to connect all light
          stripes
        </p>
        <div className="project__row project__row--three">
          <img className="project__figure" src={buildLetter} alt="Soldering light stripes" />
          <img className="project__figure" src={build2} alt="Assembling the sign" />
          <figure className="project__figure">
            <img src={insight2} alt="Building one letter at a time" />
            <figcaption className="caption caption--overlay caption--bl">
              building one letter at a time
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">installation</h2>
        <div className="project__row">
          <div className="project__col">
            <figure className="project__figure">
              <img src={installPaper} alt="Protective paper film" />
              <figcaption className="caption">
                keeping the protective paper film on as long as possible to protect
                acrylic from scratches during production
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={clamp1} alt="C-clamps mounted on window frame" />
              <figcaption className="caption caption--overlay caption--tl">
                using c-clamps mounted on window frame for non destructive mount
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={clamp2} alt="Clamp detail" />
              <figcaption className="caption">
                clamps hold the signs sections in place — soft Nylon tips prevent acrylic
                crazing
              </figcaption>
            </figure>
          </div>
          <img className="project__figure project__figure--wide" src={installBig} alt="Installing the sign" />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="project__row project__row--three">
          <figure className="project__figure">
            <img src={test1} alt="Sign from a distance" />
            <figcaption className="caption caption--overlay caption--tl">
              easy to read from a distance
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={test2} alt="Sign from inside" />
            <figcaption className="caption caption--overlay caption--tl">
              the sign blends in with its background when looked at from inside
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={test3} alt="Orchids in sunlight" />
            <figcaption className="caption caption--overlay caption--tl caption--black">
              the orchids get plenty of sunlight
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="project__section project__insights">
        <div>
          <h2 className="project__heading">insight one</h2>
          <p className="project__text">
            five months in, the switch died. customers started thinking the cafe was
            closed. it wasn't. the sign was just broken. idea: build a sign that only
            lights up to say closed. if it ever breaks again, regulars will just assume
            it's open.
          </p>
        </div>
        <div>
          <h2 className="project__heading">insight two</h2>
          <p className="project__text">
            remove acrylics paper cover first and then insert light stripes to avoid
            paper pieces to be stuck in channels
          </p>
        </div>
      </section>
    </div>
  );
}
