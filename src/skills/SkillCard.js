import "./SkillCard.css";

export default function SkillCard({ skill, colorClass }) {

  return (
    <div className={`skill-card border-${colorClass}`}>
        <div className="skill-card-inner">
          <p>{skill.name}</p>
          <p className="balls">{Array(skill.level).fill('●').join('')} {Array(3 - skill.level).fill('○').join('')}</p>
        </div>
    </div>
  );
}
