import Screen from "../Screen";
import "./../App.css";
import SkillCard from "./SkillCard";

const CORE = [
  { name: "HTML", level: 3, slug: "html" },
  { name: "CSS", level: 3, slug: "css" },

  { name: "JavaScript", level: 3, slug: "javascript" },
  { name: "TypeScript", level: 3, slug: "typescript" },
  { name: "PHP", level: 2, slug: "php" },
  { name: "Python", level: 2, slug: "python" },
  { name: "C++", level: 1, slug: "cpp" },
];

const FRONTEND = [
  { name: "React", level: 3, slug: "react" },
  { name: "Vue.js", level: 3, slug: "vuejs" },
  { name: "React Native", level: 3, slug: "reactnative" },
  { name: "SCSS", level: 3, slug: "scss" },
  { name: "Material UI", level: 3, slug: "materialui" },
  { name: "React Query", level: 3, slug: "reactquery" },
  { name: "Three.js", level: 2, slug: "threejs" },

  { name: "Next.js", level: 2, slug: "nextjs" },
  { name: "Angular 2+", level: 1, slug: "angular" },
];

const BACKEND = [
  { name: "Node.js", level: 3, slug: "nodejs" },
  { name: "Express.js", level: 3, slug: "expressjs" },
  { name: "Chalice", level: 2, slug: "chalice" },
  { name: "PostgreSQL", level: 2, slug: "postgresql" },

  { name: "NoSQL", level: 2, slug: "nosql" },
  { name: "GraphQL", level: 2, slug: "graphql" },
  { name: "Laravel", level: 2, slug: "laravel" },
];

const INFRA = [
  { name: "AWS", level: 3, slug: "aws" },
  { name: "AWS CDK", level: 3, slug: "awscdk" },
  { name: "CI/CD", level: 3, slug: "cicd" },
  { name: "GitHub Actions", level: 3, slug: "githubactions" },
];

const TOOLS = [
  { name: "Git", level: 3, slug: "git" },
  { name: "Jest", level: 3, slug: "jest" },
  { name: "Cypress", level: 2, slug: "cypress" },
];

const color = ["one", "two", "three", "four", "five", "six", "seven"];

export default function Skills() {
  const coreStart = Math.floor(Math.random() * color.length);
  const frontendStart = Math.floor(Math.random() * color.length);
  const backendStart = Math.floor(Math.random() * color.length);
  const infraStart = Math.floor(Math.random() * color.length);
  const toolsStart = Math.floor(Math.random() * color.length);

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
            <SkillCard
              skill={skill}
              colorClass={color[(coreStart + i) % color.length]}
            />
          ))}
        </div>
      </div>
      <div className="row mt-large">
        <div className="col col-1">
          <h2>FRONTEND</h2>
        </div>
      </div>
      <div className="row ">
        <div className="colcol-1 mt-large skill-grid">
          {FRONTEND.map((skill, i) => (
            <SkillCard
              skill={skill}
              colorClass={color[(frontendStart + i) % color.length]}
            />
          ))}
        </div>
      </div>

      <div className="row mt-large">
        <div className="col col-1">
          <h2>BACKEND</h2>
        </div>
      </div>
      <div className="row ">
        <div className="colcol-1 mt-large skill-grid">
          {BACKEND.map((skill, i) => (
            <SkillCard
              skill={skill}
              colorClass={color[(backendStart + i) % color.length]}
            />
          ))}
        </div>
      </div>

      <div className="row mt-large">
        <div className="col col-1">
          <h2>INFRASTRUCTURE & DEVOPS</h2>
        </div>
      </div>
      <div className="row ">
        <div className="colcol-1 mt-large skill-grid">
          {INFRA.map((skill, i) => (
            <SkillCard
              skill={skill}
              colorClass={color[(infraStart + i) % color.length]}
            />
          ))}
        </div>
      </div>

      <div className="row mt-large">
        <div className="col col-1">
          <h2>TOOLS & TESTING</h2>
        </div>
      </div>
      <div className="row ">
        <div className="colcol-1 mt-large skill-grid">
          {TOOLS.map((skill, i) => (
            <SkillCard
              skill={skill}
              colorClass={color[(toolsStart + i) % color.length]}
            />
          ))}
        </div>
      </div>
    </Screen>
  );
}
