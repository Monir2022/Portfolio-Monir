//Project files

export default function FooterContact({ item }) {
  return (
    <div>
      <a className="footercontact" href={item.href}>
        <i id="icon" className={item.icon}></i> {item.text}
      </a>
    </div>
  );
}
