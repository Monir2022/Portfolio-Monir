//Project files
import "../Styles/tech.css";
import Techstack from "./Techstack";
import techData from "../Data/technologyList.json";

export default function Tech() {
  const dynamicdata = techData.map((dt) => (
    <Techstack techName={dt.title} techimage={dt.logo} />
  ));

  return (
    <div className="tech">
      <h2 className="tech-title">Technologies I use and fimilliar</h2>
      <div className="tech-container">
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        <div className="tech-list">{dynamicdata}</div>
      </div>
    </div>
  );
}
