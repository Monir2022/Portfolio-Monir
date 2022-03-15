//Project files
import Modal from "./Modal";
//NPM packages
import { useState } from "react";

export default function Card({ item }) {
  const { photo, projectName, description, github, website, techonologies } =
    item;

  //local state
  const [modal, setModal] = useState(false);
  //method
  function onToggleModal() {
    setModal(!modal);
  }
  //Properties
  const techlist = techonologies.map((item) => (
    <li key={item.index}> {item} </li>
  ));

  return (
    <div className="container">
      <img src={photo} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          <p>{projectName}</p>
          {github ? (
            <button onClick={() => setModal()}>View details</button>
          ) : (
            <p>Comming Soon</p>
          )}
          <Modal show={modal} close={onToggleModal} title={projectName}>
            <div className="modal-child">
              <img src={photo} alt="pict" className="modal-img" />
              <div className="discriptions">
                <p>{description}</p>
                <ul>{techlist}</ul>
                {website ? (
                  <a
                    className="demo_src"
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
                ) : (
                  <p>Demo Not Available</p>
                )}
                {github ? (
                  <a
                    className="demo_src"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    View Source
                  </a>
                ) : (
                  <p>Comming Soon</p>
                )}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
