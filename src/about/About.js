import Screen from "../Screen";
import "./../App.css";
import MiniGame from "../mini-game/MiniGame";

export default function About() {
  return (
    <Screen>
      <div className="row mt-large">
        <div className="col col-2 ">
          <h1>
            Hello! <br /> I'm Ludovico
          </h1>
          <p className="justify mt-large">
            I'm a <strong>JavaScript developer</strong>, driving teams building
            awesome web applications with modern front-end frameworks, Node, and
            AWS.
            <br /> Crafting the web since <code>&lt;table&gt;</code> layouts
            were the next big thing.
          </p>
        </div>

        <div className="col col-2">
          <MiniGame />
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col col-1">
          <p className="justify">
            I build <strong>end-to-end</strong> solutions: designing{" "}
            <strong>interfaces</strong>, building <strong>APIs</strong>, and
            shipping reliable products to the <strong>cloud</strong>. I love
            using the right tools to turn messy ideas into something robust,
            efficient, and alive. <br />
            JavaScript is my native language, TypeScript keeps me honest, and
            React and Node are my daily habitat.
          </p>

          <p className="justify mt-large">
            I step into <strong>technical leadership</strong> — setting
            standards, reviewing code, and helping other developers grow. I
            enjoy <strong>shaping architectures</strong> and making decisions
            that keep projects simple, maintainable, and enjoyable. I care about
            clear communication, shared ownership, and building a team culture
            that enables everyone to do their best work and{" "}
            <strong>deliver value</strong>.
          </p>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col col-1">
          <p className="justify">
            I enjoy working closely with designers, turning ideas into polished
            features. I focus on building software that is{" "}
            <strong>maintainable</strong> and <strong>understandable</strong>{" "}
            for developers and genuinely <strong>useful</strong> for users.
            <br />I believe the best work happens in teams where{" "}
            <strong>communication</strong>
            is open and frequent, pairing is used effectively to solve problems,
            and everyone tackles the same challenge together.
          </p>
        </div>
      </div>
    </Screen>
  );
}
