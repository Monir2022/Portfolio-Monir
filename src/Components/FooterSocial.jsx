export default function FooterSocial({ item }) {
  return (
    <div>
      <a className="footerlink" href={item.href} >        
        <i id="icon" className={item.icon}></i>
      </a>
    </div>
  );
}
