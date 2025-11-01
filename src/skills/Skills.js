import Screen from "../Screen";
import "./../App.css";
import SkillCard from "./SkillCard";

const CORE = [
  { name: "HTML", level: 3, slug: "html" },
  { name: "CSS", level: 3, slug: "css" },

  { name: "JavaScript", level: 3, slug: "javascript" },
  { name: "TypeScript", level: 3, slug: "typescript" },
  { name: "Python", level: 2, slug: "python" },
  { name: "C++", level: 1, slug: "cpp" },
];

const color = ["one", "two", "three", "four", "five", "seven", "eight"];

export default function Skills() {
  return (
    <Screen>
      <div className="row mt-large">
        <div className="col col-1">
          <h1>Skills</h1>
        </div>
      </div>

      <div className="row">
        <div className="col col-1">
          <p className="justify mt-large">
            My current set of tools… for now. The list changes as fast as
            JavaScript frameworks.
          </p>
        </div>
      </div>

      <div className="row mt-large">
        <div className="col col-1">
          ●●● Expert &nbsp; ●●○ Proficient &nbsp; ●○○ Familiar
        </div>
      </div>

      <div className="row mt-large">
        <div className="col col-1">
          <h2>CORE</h2>
        </div>
      </div>
      <div className="row ">
        <div className="colcol-1 mt-large skill-grid">
          {CORE.map((skill, i) => (
            <SkillCard skill={skill} colorClass={color[i % color.length]} />
          ))}
        </div>
      </div>
    </Screen>
  );
}
