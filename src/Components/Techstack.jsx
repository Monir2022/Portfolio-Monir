//Project files


export default function Techstack({ techName, techIcon }) {
  return (
    <div className="container">
      <img className="tech-img" src={techIcon} alt="js" />
      <p>{techName}</p>
    </div>
  );
}
