//Project files
import "../Styles/card.css";
import Modal from "./Modal";

//NPM packages

import { useState } from "react";

// Component length -1
// You are passing 5 arguments to the card -1
export default function Card({
  firstImg,
  projectName,
  discription,
  repo,
  demo,
  tech,
}) {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);
  const techlist = tech.map((item) => <li key={item}>{item}</li>);

  // This component is ultra hard to read for another devloper. There is a lot of nesting and a lot of scrolling neccesary to read it. You should have refactor it
  return (
    <div className="container">
      <img src={firstImg} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          <p>{projectName}</p>
          {repo ? (
            <button onClick={() => Toggle()}>More</button>
          ) : (
            <p>Comming Soon</p>
          )}
          <Modal show={modal} close={Toggle} title={projectName}>
            <div className="modal-child">
              <img src={firstImg} alt="pict" className="modal-img" />
              <div className="discriptions">
                <p>{discription}</p>
                <ul>{techlist}</ul>
                {demo ? (
                  <a
                    className="demo_src"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
                ) : (
                  <p>Demo Not Available</p>
                )}
                {repo ? (
                  <a
                    className="demo_src"
                    href={repo}
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
