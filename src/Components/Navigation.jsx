//Project files
import monirlogo from "../assets/images/logo.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#hero">
          <img src={monirlogo} alt={"My logo "} />
        </a>
      </div>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#tech stack">Tech stack</a>
        </li>

        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
