import DataContact from "../Data/Contact.json";
import FooterItem from "./FooterItem";


export default function Footer() {
  const FooterItems = DataContact.filter(
    (item) => item.catagory === "footer"
  ).map((item)=> <FooterItem key = {item.id} href= {item.href} icon= {item.icon} />);
  
  return (
    <footer>
      <ul><h3>My name is Monir</h3></ul>
    </footer>
  )
}
