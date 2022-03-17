export default function ModalChild({ item }) {
  const { photo, description, github, website, techonologies } = item;

  const techList = techonologies.map((item) => <li> {item} </li>);

  const Website = website && (
    <a className="demo_src" href={website}>
      Visit website </a>   
  );

  const Github = github && (
    <a className="demo_src" href={github}>
      Git repository  </a>
  );
 

  return (
    <div className="modal-child">
      <img src={photo} alt="pict" className="modal-img" />
      <div className="discriptions">
        <p>{description}</p>
        <h5>Technology used for this project</h5>
        <ul>{techList}</ul>
        {Website}
        {Github}
        {!github && <p>Comming Soon</p>}
      </div>
    </div>
  );
}
