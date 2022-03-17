//Project files
import Techstack from "./Techstack";
import techData from "../Data/technologyList.json";

export default function Tech() {
  const technologyData = techData.map((item) => (
    <Techstack key={item.id} techName={item.title} techIcon={item.logo} />
  ));

  return (
    <div className="tech" id="tech stack">
      <h2 className="tech-title">Technologies</h2>
      <div className="tech-container">
        <p>
          Here is the techology that I already know and also starting to learn.
        </p>
        <div className="tech-list">{technologyData}</div>
      </div>
    </div>
  );
}
