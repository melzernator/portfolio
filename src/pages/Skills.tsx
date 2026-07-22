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
};

const skills: Skill[] = [
  { label: '3D design', img: modeling, labelColor: 'white' },
  { label: 'PCB design', img: pcb, labelColor: 'black' },
  { label: 'cutting metal', img: flex, labelColor: 'black', tall: true },
  { label: '', img: dremel, labelColor: 'black', tall: true },
  { label: 'soldering wires', img: soldering, labelColor: 'white', tall: true },
  { label: 'welding', img: welding, labelColor: 'white', tall: true },
];

export default function Skills() {
  return (
    <div className="page skills">
      <h1 className="page-title">skills</h1>

      <div className="skills__grid">
        {skills.map((skill, i) => (
          <figure key={i} className={`skills__card ${skill.tall ? 'skills__card--tall' : ''}`}>
            <img src={skill.img} alt={skill.label || 'skill'} />
            {skill.label && (
              <figcaption className={`skills__label skills__label--${skill.labelColor}`}>
                {skill.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
