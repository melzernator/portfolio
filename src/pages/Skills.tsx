import { useState } from 'react';
import modeling from '../assets/skills/3D-design.webp';
import pcb from '../assets/skills/pcb-design.webp';
import flex from '../assets/skills/flex.webp';
import dremel from '../assets/skills/dremel.webp';
import soldering from '../assets/skills/soldering.webp';
import welding from '../assets/skills/welding.webp';

type Skill = {
  label: string;
  img: string;
  labelColor: 'black' | 'white';
  tall?: boolean;
  headline: string;
  years: string;
  tools: string;
  programs: string;
};

const skills: Skill[] = [
  {
    label: '3D design',
    img: modeling,
    labelColor: 'white',
    headline: '3D Design & Modeling',
    years: '6 years',
    tools: 'Calipers, 3D printer, resin printer, filament dryer',
    programs: 'Fusion 360, Blender, KeyShot',
  },
  {
    label: 'PCB design',
    img: pcb,
    labelColor: 'black',
    headline: 'PCB Design',
    years: '4 years',
    tools: 'Soldering station, multimeter, microscope, reflow oven',
    programs: 'Altium Designer, KiCad, EasyEDA',
  },
  {
    label: 'cutting metal',
    img: flex,
    labelColor: 'black',
    tall: true,
    headline: 'Metal Cutting',
    years: '5 years',
    tools: 'Angle grinder, bandsaw, plasma cutter, files',
    programs: 'Fusion 360 (CAM), SheetCam',
  },
  {
    label: 'detailing',
    img: dremel,
    labelColor: 'black',
    tall: true,
    headline: 'Precision Detailing',
    years: '7 years',
    tools: 'Dremel, rotary bits, sandpaper, hand files',
    programs: '—',
  },
  {
    label: 'soldering wires',
    img: soldering,
    labelColor: 'white',
    tall: true,
    headline: 'Soldering & Wiring',
    years: '8 years',
    tools: 'Soldering iron, helping hands, wire strippers, heat gun',
    programs: 'Altium Designer, KiCad',
  },
  {
    label: 'welding',
    img: welding,
    labelColor: 'white',
    tall: true,
    headline: 'Welding',
    years: '3 years',
    tools: 'MIG welder, TIG welder, clamps, grinding discs',
    programs: '—',
  },
];

export default function Skills() {
  const [flipped, setFlipped] = useState<Set<number>>(() => new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="page skills">
      <h1 className="page-title">skills</h1>
      <div className="skills__grid">
        {skills.map((skill, i) => {
          const isFlipped = flipped.has(i);
          return (
            <button
              key={i}
              type="button"
              className={`skills__card ${skill.tall ? 'skills__card--tall' : ''} ${isFlipped ? 'is-flipped' : ''}`}
              onClick={() => toggle(i)}
              aria-pressed={isFlipped}
              aria-label={isFlipped ? `Hide details for ${skill.headline}` : `Show details for ${skill.headline}`}
            >
              <div className="skills__flip">
                <div className="skills__face skills__face--front">
                  <img src={skill.img} alt={skill.label} />
                  <span className={`skills__label skills__label--${skill.labelColor}`}>
                    {skill.label}
                  </span>
                </div>
                <div className="skills__face skills__face--back">
                  <h2 className="skills__back-title">{skill.headline}</h2>
                  <dl className="skills__back-meta">
                    <div>
                      <dt>Experience</dt>
                      <dd>{skill.years}</dd>
                    </div>
                    <div>
                      <dt>Tools</dt>
                      <dd>{skill.tools}</dd>
                    </div>
                    <div>
                      <dt>Programs</dt>
                      <dd>{skill.programs}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
