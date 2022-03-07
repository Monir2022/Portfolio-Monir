//Project files
import "../Styles/footeritem.css";
export default function FooterItem(href) {
  return (
    <div>
      <a
        className="footercontact"
        target="_blank"
        rel=" noreferrer"
        href={href.href}
      >
        {/* I mention about those empty spaces before -1 */}{" "}
        <i id="icon" className={href.icon}></i> {href.text}
      </a>
    </div>
  );
}
