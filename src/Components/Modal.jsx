import ReactDom from "react-dom";
import "../Styles/modal.css";


const Modal = ({ show, close, title, children }) => {
  return ReactDom.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
             X {/* <img src={Close} alt="close" /> */}
            </button>
          </header>
          <main className="modal_content">{children}</main>
        </div>
      </div>
      
    </>,
    document.getElementById("modal")
  );
};

export default Modal;