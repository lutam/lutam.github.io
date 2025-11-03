import { Link } from "react-router";
import "./header.css";
import ToggleTheme from "./ToggleTheme";

export default function Header() {

  return (
    <header className="App-header">
      <div className="header-links">
        <Link to="/" className="header-link">
          about
        </Link>
        <Link to="/skills" className="header-link">
          skills
        </Link>
        {/* <Link to="/work" className="header-link">
          work
        </Link>
        <Link to="/projects" className="header-link">
          projects
        </Link> */}

    
        <ToggleTheme />
      </div>
    </header>
  );
}
