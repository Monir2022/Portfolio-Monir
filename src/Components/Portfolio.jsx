//Project files
import "../Styles/projects.css";
import Card from "./Card";
import ProjectData from "../Data/Projects.json";

export default function Portfolio() {
  return (
    <div className="project" id="portfolio">
      <h2 className="project-title">Portfolio</h2>
      <div className="project-flex">
        <p className="project-text">
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>
        <div className="project-list">
          {ProjectData.map((dt) => (
            <Card key={dt.id}
              firstImg={dt.screenshot}
              repo={dt.repo}
              pname={dt.projectName}
              discription={dt.discription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
