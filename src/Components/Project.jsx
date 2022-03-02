import "../Styles/projects.css";
import Card from "./Card";
import ProjectData from "../Data/Projects.json";

export default function Project() {
  return (
    <div className="project">
      <h2 className="project-title">Projects</h2>
      <div className="project-flex">
        <p className="project-text">
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>
        <div className="project-list">
          {ProjectData.map((dt) => (
            <Card
              firstImg={dt.screenshot}
              repo={dt.repo}
              demo={dt.demo}
              pname={dt.projectName}
              discription={dt.discription}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
