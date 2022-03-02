import "../Styles/footeritem.css";
export default function FooterItem(href) {

  return (
    <div>
            <a className="footercontact" target = "_blank" rel=' noreferrer' href={href.href}> <i id="icon" className={href.icon} ></i> {href.text}</a>
    </div>
  )
}