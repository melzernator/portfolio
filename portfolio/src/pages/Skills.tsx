import Nav from '../components/Nav';
import modeling from '../assets/figma/skills-3d-modeling.png';
import pcb from '../assets/figma/skills-pcb.png';
import cutting1 from '../assets/figma/skills-cutting-1.png';
import cutting2 from '../assets/figma/skills-cutting-2.png';
import soldering from '../assets/figma/skills-soldering.png';
import welding from '../assets/figma/skills-welding.png';

type Skill = {
  label: string;
  img: string;
  labelColor: 'black' | 'white';
  tall?: boolean;
};

const skills: Skill[] = [
  { label: '3D modeling', img: modeling, labelColor: 'white' },
  { label: 'PCB design', img: pcb, labelColor: 'black' },
  { label: 'cutting metal', img: cutting1, labelColor: 'black', tall: true },
  { label: '', img: cutting2, labelColor: 'black', tall: true },
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

      <Nav />
    </div>
  );
}
