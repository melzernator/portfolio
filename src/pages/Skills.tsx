import { useState } from 'react';

type Skill = {
  /** label on the front pill */
  front: string;
  /** title on the back side */
  back: string;
  /** grid size / aspect ratio variant */
  variant: 'sm' | 'wide' | 'tall' | 'lg';
  /** flip around horizontal (X) or vertical (Y) axis; default vertical */
  flip?: 'horizontal' | 'vertical';
  /** Figma layer name of the photo, so assets can be dropped in later */
  asset: string;
  meta: { label: string; value: string }[];
  /** Figma layer names of the small logos/icons on the back side */
  icons?: string[];
};

const skills: Skill[] = [
  {
    front: '3d modelling',
    back: '3d-modelling',
    variant: 'sm',
    asset: 'IMG_8148',
    meta: [
      { label: 'Experience', value: '5 years' },
      { label: 'Tools', value: 'fusion 360' },
      { label: 'Learning to use', value: 'solidworks' },
    ],
    icons: ['image 145'],
  },
  {
    front: '3d printing',
    back: '3D Printing',
    variant: 'sm',
    asset: 'image 137',
    meta: [
      { label: 'Experience', value: '5 years' },
      { label: 'Materials', value: 'PLA, PETG, TPU' },
      { label: 'Learning to use', value: 'resin printing' },
    ],
  },
  {
    front: 'rendering',
    back: 'Rendering',
    variant: 'sm',
    asset: 'image 138',
    meta: [
      { label: 'Experience', value: '1 year' },
      { label: 'Tools', value: 'KeyShot, Fusion360, Photoshop' },
      { label: 'Learning to use', value: 'Vizcom' },
    ],
    icons: ['image 146', 'screenshot 1', 'screenshot 2', 'screenshot 3'],
  },
  {
    front: 'cnc routing',
    back: 'cnc routing',
    variant: 'wide',
    flip: 'horizontal',
    asset: 'IMG_5198',
    meta: [
      { label: 'Experience', value: '6 cuts' },
      { label: 'Materials', value: 'wood, acrylic' },
      { label: 'Learning to use', value: '5 axis cnc routing for mould making' },
    ],
  },
  {
    front: 'cnc cutting',
    back: 'cnc cutting',
    variant: 'wide',
    flip: 'horizontal',
    asset: 'cnc-plasma',
    meta: [
      { label: 'Experience', value: '20 cuts' },
      { label: 'Materials', value: 'acrylic, cardboard, MDF, wood' },
      { label: 'Learning to use', value: '-' },
    ],
  },
  {
    front: 'cutting',
    back: 'cutting',
    variant: 'tall',
    asset: 'EE06D747',
    meta: [
      { label: 'Experience', value: '10 years' },
      { label: 'Tools', value: 'chainsaw, table saw, Dremel, router, angle grinder, drill press' },
      { label: 'Learning to do', value: 'glass cutting' },
    ],
  },
  {
    front: 'joining',
    back: 'joining',
    variant: 'tall',
    asset: 'image 95',
    meta: [
      { label: 'Experience', value: '10 years' },
      { label: 'Tools', value: 'welding, soldering, glueing' },
      { label: 'Learning to do', value: 'woodstretching' },
    ],
  },
  {
    front: 'finishing',
    back: 'finishing',
    variant: 'tall',
    asset: 'image 93',
    meta: [
      { label: 'Experience', value: '10 years' },
      { label: 'Tools', value: 'sand blasting, sanding' },
      { label: 'Learning to do', value: 'powder coating & polishing' },
    ],
  },
  {
    front: 'circuit design',
    back: 'circuit design',
    variant: 'lg',
    flip: 'horizontal',
    asset: 'IMG_8162',
    meta: [
      { label: 'Experience', value: '4 years' },
      { label: 'Tools', value: 'pen & paper, Fusion360, Altium' },
      { label: 'Learning to do', value: '-' },
    ],
    icons: ['image 144', 'image 147'],
  },
  {
    front: 'circuit assembly',
    back: 'circuit assembly',
    variant: 'lg',
    flip: 'horizontal',
    asset: 'image 130',
    meta: [
      { label: 'Experience', value: '4 years' },
      { label: 'Tools', value: 'soldering iron, reflow oven, pick & place, oscilloscope, multimeter' },
      { label: 'Learning to do', value: '-' },
    ],
  },
];

/* swap for an <img> once the asset files are added */
function AssetPlaceholder({ name }: { name: string }) {
  return (
    <div className="skills__placeholder">
      <span>{name}</span>
    </div>
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
          <div className="skills__flip">
            <div className="skills__face skills__face--front">
              <AssetPlaceholder name="image 139" />
              <span className="skills__label skills__label--plain">design</span>
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
              <div className="skills__design-assets">
                <div
                  className="skills__design-img"
                  style={{ left: '69.2%', top: '8.9%', width: '17.4%', height: '82.2%' }}
                >
                  <span>image 143</span>
                </div>
                <div
                  className="skills__design-img"
                  style={{ left: '89.7%', top: '18.9%', width: '6.9%', aspectRatio: '1 / 1' }}
                >
                  <span>image 140</span>
                </div>
                <div
                  className="skills__design-img"
                  style={{ left: '87.8%', top: '59.4%', width: '10.7%', aspectRatio: '1 / 1' }}
                >
                  <span>image 142</span>
                </div>
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
            <div className="skills__flip">
              <div className="skills__face skills__face--front">
                <AssetPlaceholder name={skill.asset} />
                <span className="skills__label">{skill.front}</span>
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
                    {skill.icons.map((icon) => (
                      <span key={icon} className="skills__icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
