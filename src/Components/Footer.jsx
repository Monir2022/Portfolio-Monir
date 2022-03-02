//Project files
import DataContact from "../Data/Contact.json";
import FooterItem from "./FooterItem";
import "../Styles/footer.css";

export default function Footer() {
  const FooterItems = DataContact.filter(
    (item) => item.catagory === "contact"
  ).map((item) => (
    <FooterItem
      key={item.id}
      text={item.text}
      href={item.href}
      icon={item.icon}
    />
  ));

  const FooterContact = DataContact.filter(
    (item) => item.catagory === "footer"
  ).map((item) => (
    <a
      key={item.id}
      className="footerlink"
      target="_blank"
      rel=" noreferrer"
      href={item.href}
    >
      {" "}
      <i id="icon" className={item.icon}></i>
    </a>
  ));

  return (
    <>
      <div className="footer" id="footer">
        <h2 className="footer-title">Contact me</h2>
        <div className="footer-container">
          <p>
            Here is my contact information if you are interested in interviewing
            me.
          </p>
          <div className="footer-list">{FooterItems}</div>
        </div>
      </div>
      <div className="focon">
        <footer className="footerEnd">{FooterContact}</footer>
        <p className="copyright">© 2022 • Monir</p>
      </div>
    </>
  );
}
