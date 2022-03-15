//Project files
import "../styles/modal.css";

//NPM Packages
import ReactDom from "react-dom";

export default function Modal({ show, close, title, children }) {
  return ReactDom.createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
              X
            </button>
          </header>
          <main className="modal_content">{children}</main>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
