//Project files
import DataContact from "../Data/Contact.json";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {

  //Properties
  const filterContact = DataContact.filter(item => item.catagory === "contact" );
//Components
  const footerContact = filterContact.map((item) => (
    <FooterContact key={item.id} item={item} />

  ));
  //Properties
  const filterSocial = DataContact.filter(item => item.catagory === "social");
  
  //Components
  const footerSocial = filterSocial.map((item) => (
    <FooterSocial key={item.id} item={item} />
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
          <div className="footer-list">{footerContact}</div>
        </div>
      </div>
      <div className="focon">
        <footer className="footer-end">{footerSocial}</footer>
        <p className="copyright"> © 2022 • Monir</p>
      </div>
    </>
  );
}
