//Project files
import Modal from "./Modal";
//NPM packages
import { useState } from "react";
import ModalChild from "./ModalChild";

export default function Card({ item }) {
  const { photo, projectName, github } = item;

  //local state
  const [modal, setModal] = useState(false);

  //method
  function onToggleModal() {
    setModal(!modal);
  }
  const viewCard = github ? (
    <button onClick={() => onToggleModal()}>View details</button>
  ) : (
    <p>Comming Soon</p>
  );
  return (
    <div className="container">
      <img src={photo} alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">
          <p>{projectName}</p>
          {viewCard}
          <Modal show={modal} close={onToggleModal} title={projectName}>
            <ModalChild item={item} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
