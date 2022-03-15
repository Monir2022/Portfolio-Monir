//Project files
import "../styles/card.css";
import Modal from "./Modal";

//NPM packages

import { useState } from "react";

export default function Card({ item }) {
  const {screenshot, projectName, discription, github, website, techonologies} = item;
  

  console.log(github);

  //local state
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  const techlist = techonologies.map((index, item) => (<li key={index}>{item}</li>));




  return (
    <div className="container">
      <img src={screenshot} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          <p>{projectName}</p>
          {github ? (
            <button onClick={() => Toggle()}>More</button>
          ) : (
            <p>Comming Soon</p>
          )}
          <Modal show={modal} close={Toggle} title={projectName}>
            <div className="modal-child">
              <img src={screenshot} alt="pict" className="modal-img" />
              <div className="discriptions">
                <p>{discription}</p>
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
