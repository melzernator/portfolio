import { useState } from 'react';
import { img } from '../lib/img';
import { openInBackground } from '../lib/openInBackground';
import { video } from '../lib/video';

const designImg = img('skills/design');
const modellingImg = img('skills/3D-modelling');
const printingImg = img('skills/3d-printing');
const renderingImg = img('skills/rendering');
const cuttingImg = img('skills/cutting');
const joiningImg = img('skills/joining');
const finishingImg = img('skills/finishing');
const circuitDesignImg = img('skills/circuit design');
const solderingImg = img('skills/soldering');
const fusionLogo = img('skills/fusion');
const keyshotLogo = img('skills/keyshot');
const photoshopLogo = img('skills/photoshop');
const vizcomLogo = img('skills/vizcom');
const altiumLogo = img('skills/altium');
const figmaLogo = img('skills/figma');
const cncRoutingVideo = video('skills/cnc-routing');
const cncCuttingVideo = video('skills/cnc-cutting');

type Skill = {
  /** label on the front pill */
  front: string;
  /** title on the back side */
  back: string;
  /** grid size / aspect ratio variant */
  variant: 'sm' | 'wide' | 'tall' | 'lg';
  /** flip around horizontal (X) or vertical (Y) axis; default vertical */
  flip?: 'horizontal' | 'vertical';
  /** front-side media */
  src: string;
  media?: 'image' | 'video';
  meta: { label: string; value: string }[];
  /** tool logos shown on the back */
  icons?: { src: string; alt: string; href?: string }[];
};

const skills: Skill[] = [
  {
    front: '3d modelling',
    back: '3d modelling',
    variant: 'sm',
    src: modellingImg,
    meta: [
      { label: 'experience', value: '5 years' },
      { label: 'tools', value: 'fusion 360' },
      { label: 'learning to use', value: 'solidworks' },
    ],
    icons: [
      {
        src: fusionLogo,
        alt: 'fusion 360',
        href: 'https://www.autodesk.com/education/edu-software/fusion',
      },
    ],
  },
  {
    front: '3d printing',
    back: '3d printing',
    variant: 'sm',
    src: printingImg,
    meta: [
      { label: 'experience', value: '5 years' },
      { label: 'materials', value: 'pla, petg, tpu' },
      { label: 'learning to use', value: 'resin printing' },
    ],
  },
  {
    front: 'rendering',
    back: 'rendering',
    variant: 'sm',
    src: renderingImg,
    meta: [
      { label: 'experience', value: '1 year' },
      { label: 'tools', value: 'keyshot, fusion360, photoshop' },
      { label: 'learning to use', value: 'vizcom' },
    ],
    icons: [
      {
        src: fusionLogo,
        alt: 'fusion 360',
        href: 'https://www.autodesk.com/education/edu-software/fusion',
      },
      { src: photoshopLogo, alt: 'photoshop' },
      { src: keyshotLogo, alt: 'keyshot', href: 'https://www.keyshot.com/' },
      { src: vizcomLogo, alt: 'vizcom', href: 'https://vizcom.com' },
    ],
  },
  {
    front: 'cnc routing',
    back: 'cnc routing',
    variant: 'wide',
    flip: 'horizontal',
    src: cncRoutingVideo,
    media: 'video',
    meta: [
      { label: 'experience', value: '6 cuts' },
      { label: 'materials', value: 'wood, acrylic' },
      { label: 'learning to use', value: '5 axis cnc routing for mould making' },
    ],
  },
  {
    front: 'cnc cutting',
    back: 'cnc cutting',
    variant: 'wide',
    flip: 'horizontal',
    src: cncCuttingVideo,
    media: 'video',
    meta: [
      { label: 'experience', value: '20 cuts' },
      { label: 'materials', value: 'acrylic, cardboard, mdf, wood' },
      { label: 'learning to use', value: '-' },
    ],
  },
  {
    front: 'cutting',
    back: 'cutting',
    variant: 'tall',
    src: cuttingImg,
    meta: [
      { label: 'experience', value: '10 years' },
      { label: 'tools', value: 'chainsaw, table saw, dremel, router, angle grinder, drill press' },
      { label: 'learning to do', value: 'glass cutting' },
    ],
  },
  {
    front: 'joining',
    back: 'joining',
    variant: 'tall',
    src: joiningImg,
    meta: [
      { label: 'experience', value: '10 years' },
      { label: 'tools', value: 'welding, soldering, glueing' },
      { label: 'learning to do', value: 'woodstretching' },
    ],
  },
  {
    front: 'finishing',
    back: 'finishing',
    variant: 'tall',
    src: finishingImg,
    meta: [
      { label: 'experience', value: '10 years' },
      { label: 'tools', value: 'sand blasting, sanding' },
      { label: 'learning to do', value: 'powder coating & polishing' },
    ],
  },
  {
    front: 'circuit design',
    back: 'circuit design',
    variant: 'lg',
    flip: 'horizontal',
    src: circuitDesignImg,
    meta: [
      { label: 'experience', value: '4 years' },
      { label: 'tools', value: 'pen & paper, fusion360, altium' },
      { label: 'learning to do', value: '-' },
    ],
    icons: [
      {
        src: fusionLogo,
        alt: 'fusion 360',
        href: 'https://www.autodesk.com/education/edu-software/fusion',
      },
      {
        src: altiumLogo,
        alt: 'altium',
        href: 'https://www.altium.com/altium-designer',
      },
    ],
  },
  {
    front: 'circuit assembly',
    back: 'circuit assembly',
    variant: 'lg',
    flip: 'horizontal',
    src: solderingImg,
    meta: [
      { label: 'experience', value: '4 years' },
      { label: 'tools', value: 'soldering iron, reflow oven, pick & place, oscilloscope, multimeter' },
      { label: 'learning to do', value: '-' },
    ],
  },
];

function SkillMedia({ src, media = 'image', alt }: { src: string; media?: 'image' | 'video'; alt: string }) {
  if (media === 'video') {
    return <video src={src} autoPlay loop muted playsInline aria-hidden="true" />;
  }
  return <img src={src} alt={alt} />;
}

/** Decorative cue — whole card is the click target */
function FlipHint() {
  return (
    <span className="skills__flip-hint" aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5.5A5.5 5.5 0 0 1 12.5 4" />
        <path d="M13 3v2.5H10.5" />
        <path d="M13 10.5A5.5 5.5 0 0 1 3.5 12" />
        <path d="M3 13v-2.5h2.5" />
      </svg>
      <span>flip</span>
    </span>
  );
}

export default function Skills() {
  const [flipped, setFlipped] = useState<Set<string>>(() => new Set());

  const toggle = (key: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isFlipped = (key: string) => flipped.has(key);

  return (
    <div className="page skills">
      <h1 className="page-title">skills</h1>
      <div className="skills__grid">
        <button
          type="button"
          className={`skills__card skills__card--banner skills__card--flip-x ${isFlipped('design') ? 'is-flipped' : ''}`}
          onClick={() => toggle('design')}
          aria-pressed={isFlipped('design')}
          aria-label={isFlipped('design') ? 'Hide details for design' : 'Show details for design'}
        >
          <div className="skills__wiggle">
            <div className="skills__flip">
              <div className="skills__face skills__face--front">
                <SkillMedia src={designImg} alt="" />
                <span className="skills__label">design</span>
                <FlipHint />
              </div>
              <div className="skills__face skills__face--back skills__face--design">
                <div className="skills__design-intro">
                  <h2 className="skills__back-title">design</h2>
                  <p>asking why a couple of times can reveal the underlying design problem.</p>
                </div>
                <div className="skills__cloud">
                  <span style={{ left: '41.4%', top: '22%' }}>observation</span>
                  <span style={{ left: '32.6%', top: '46.9%' }}>testing</span>
                  <span style={{ left: '54.3%', top: '46.9%' }}>ideation</span>
                  <span style={{ left: '41.1%', top: '70.5%' }}>prototyping</span>
                </div>
                <img
                  className="skills__design-logo skills__icon--link"
                  src={figmaLogo}
                  alt="figma"
                  style={{ left: '89.7%', top: '18.9%', width: '6.9%' }}
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    openInBackground('https://www.figma.com');
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      openInBackground('https://www.figma.com');
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </button>

        {skills.map((skill) => (
          <button
            key={skill.front}
            type="button"
            className={`skills__card skills__card--${skill.variant} ${skill.flip === 'horizontal' ? 'skills__card--flip-x' : ''} ${isFlipped(skill.front) ? 'is-flipped' : ''}`}
            onClick={() => toggle(skill.front)}
            aria-pressed={isFlipped(skill.front)}
            aria-label={
              isFlipped(skill.front)
                ? `Hide details for ${skill.front}`
                : `Show details for ${skill.front}`
            }
          >
            <div className="skills__wiggle">
              <div className="skills__flip">
                <div className="skills__face skills__face--front">
                  <SkillMedia src={skill.src} media={skill.media} alt="" />
                  <span className="skills__label">{skill.front}</span>
                  <FlipHint />
                </div>
                <div className="skills__face skills__face--back">
                  <h2 className="skills__back-title">{skill.back}</h2>
                  <dl className="skills__back-meta">
                    {skill.meta.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {skill.icons && (
                    <div className="skills__icons">
                      {skill.icons.map((icon) =>
                        icon.href ? (
                          <img
                            key={icon.alt}
                            className="skills__icon skills__icon--link"
                            src={icon.src}
                            alt={icon.alt}
                            role="link"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              openInBackground(icon.href!);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                openInBackground(icon.href!);
                              }
                            }}
                          />
                        ) : (
                          <img key={icon.alt} className="skills__icon" src={icon.src} alt={icon.alt} />
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
