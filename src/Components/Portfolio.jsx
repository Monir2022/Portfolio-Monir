//Project files
import Card from "./Card";
import ProjectData from "../Data/Projects.json";

export default function Portfolio() {

  //Components
  const ProjectList = ProjectData.map((item) => (
    <Card key={item.id} item={item} />
  ));

  return (
    <div className="project" id="portfolio">
      <h2 className="project-title">Portfolio</h2>
      <div className="project-flex">
        <p className="project-text">
          Here are the projects I will be making during the Frontend course at
          Novare Potential.
        </p>
        <div className="project-list">{ProjectList}</div>
      </div>
    </div>
  );
}
