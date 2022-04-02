export default function ModalChild({ item }) {
  const { photo, description, github, website, techonologies } = item;


  const techList = techonologies.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="modal-child">
      <img src={photo} alt="screenshot-project" className="modal-img" />
      <div className="project-details">
        <p>{description}</p>
        <h5>Technology used for this project</h5>
        <ul>{techList}</ul>
        <a href={website}>Website</a>
        <a href={github}> Git-repo </a>
      </div>
    </div>
  );
}
