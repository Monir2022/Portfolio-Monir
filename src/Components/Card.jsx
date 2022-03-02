////Project files
import "../Styles/card.css";
import Modal from "./Modal";

//NPM Packages

import { useState } from "react";

export default function Card({ firstImg, pname, discription, repo, demo }) {
  const [modal, setModal] = useState(false);

  const ToggleModal = () => setModal(!modal);

  return (
    <div className="container">
      <img src={firstImg} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          <p>{pname}</p>
          <button onClick={() => ToggleModal()}>More</button>
          <Modal show={modal} close={ToggleModal} title={pname}>
            <div className="modal-child">
              <img src={firstImg} alt="pict" className="modal-img" />
              <div className="discriptions">
                <p>{discription}</p>
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
                  <h6>Demo Not Available</h6>
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
                  <h6>Comming Soon</h6>
                )}
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
