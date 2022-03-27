export default function ModalChild({ item }) {
  const { photo, description, github, website, techonologies, isCompleted } =
    item;

  const techList = techonologies.map((item) => (
    <ul key={item}>
      <li> {item} </li>
    </ul>
  ));
  
  const websiteLink = website && (
    <a className="demo_src" href={website}>
      Visit website
    </a>
  );

  const githubLink = github && (
    <a className="demo_src" href={github}>
      Git repository
    </a>
  );

  return (
    <div className="modal-child">
      <img src={photo} alt="screenshot-project" className="modal-img" />
      <div className="discriptions">
        <p>{description}</p>
        <h5>Technology used for this project</h5>
        {techList}
        {websiteLink}
        {githubLink}
        {!isCompleted && <p>Comming Soon</p>}
      </div>
    </div>
  );
}
