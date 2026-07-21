import BackButton from '../components/BackButton';
import hero from '../assets/sign/sign-render.webp';
import designAnnotated from '../assets/sign/sign-design.webp';
import orchids from '../assets/sign/sign-orchids-1.webp';
import prototype from '../assets/sign/sign-prototype.webp';
import cncVideo from '../assets/sign/sign-CNC.mp4';
import solderingImg from '../assets/sign/sign-soldering.webp';
import assemblingImg from '../assets/sign/sign-assembling.webp';
import assemblingVideo from '../assets/sign/sign-assembling.mp4';
import assemblyImg from '../assets/sign/sign-assembly.webp';
import fastener from '../assets/sign/sign-fastener.webp';
import clamp from '../assets/sign/sign-clamp.webp';
import outside1 from '../assets/sign/sign-outside-1.webp';
import outside2 from '../assets/sign/sign-outside-2.webp';
import inside from '../assets/sign/sign-inside.webp';
import daylight from '../assets/sign/sign-daylight.webp';
import insightImg from '../assets/sign/sign-insight.webp';

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
          <figure className="project__figure">
            <img src={orchids} alt="Orchids in the cafe" />
            <figcaption className="caption">
              pink matches the orchids in the cafe
            </figcaption>
          </figure>
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
            <img src={prototype} alt="Neon prototype" />
            <figcaption className="caption caption--overlay caption--tl">
              color matches design — iterating channel thickness → light stripes are held
              by tension
            </figcaption>
          </figure>
          <figure className="project__figure project__figure--wide">
            <video src={cncVideo} autoPlay loop muted playsInline />
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
          <img className="project__figure" src={solderingImg} alt="Soldering light stripes" />
          <figure className="project__figure">
            <video src={assemblingVideo} autoPlay loop muted playsInline />
            <figcaption className="caption caption--overlay caption--bl">
              building one letter at a time
            </figcaption>
          </figure>
          <img className="project__figure" src={assemblingImg} alt="Assembling the sign" />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">installation</h2>
        <div className="project__row">
          <div className="project__col">
            <figure className="project__figure">
              <img src={assemblyImg} alt="Sign sections during assembly" />
              <figcaption className="caption">
                keeping the protective paper film on as long as possible to protect
                acrylic from scratches during production
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={clamp} alt="C-clamps mounted on window frame" />
              <figcaption className="caption">
                using c-clamps mounted on window frame for non destructive mount
              </figcaption>
            </figure>
            <figure className="project__figure">
              <img src={fastener} alt="Clamp detail" />
              <figcaption className="caption">
                clamps hold the signs sections in place — soft Nylon tips prevent acrylic
                crazing
              </figcaption>
            </figure>
          </div>
          <img className="project__figure project__figure--wide" src={outside2} alt="Installing the sign" />
        </div>
      </section>

      <section className="project__section">
        <h2 className="project__heading">test</h2>
        <div className="project__row project__row--three">
          <figure className="project__figure">
            <img src={outside1} alt="Sign from a distance" />
            <figcaption className="caption caption--overlay caption--tl">
              easy to read from a distance
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={inside} alt="Sign from inside" />
            <figcaption className="caption caption--overlay caption--tl">
              the sign blends in with its background when looked at from inside
            </figcaption>
          </figure>
          <figure className="project__figure">
            <img src={daylight} alt="Sign in daylight" />
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
          <img className="project__figure" src={insightImg} alt="Paper stuck in channels" style={{ marginTop: 16 }} />
        </div>
      </section>
    </div>
  );
}
