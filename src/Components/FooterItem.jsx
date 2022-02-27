
export default function FooterItem(href, icon) {
    const iconObject = require(`../Assets/Contact-icons/${icon}`);
    const iconURL = iconObject.default;


  return (
    <div>
        <li>
            <a target = "_blank" rel='noopener noreferrer' href={href}> <img src= {iconURL} alt= {" "}/> </a>
        </li>
    </div>
  )
}
