import Screen from "./Screen";
import "./App.css";

export default function About() {
  return (
    <Screen>
      <div className="row">
        <div className="col col-1">
          <h1>SKILLS</h1>
        </div>
      </div>

      <div className="row">
        <div className="col col-1">
          <p className="justify">
            I have a strong background in computer science and web development,
            with a passion for creating innovative solutions that push the
            boundaries of what's possible on the web. My work spans various
            domains, including interactive art, data visualization, and machine
            learning applications.
          </p>
        </div>
      </div>
    </Screen>
  );
}
