import "../Styles/technologies.css";

export default function Techstack({techName, techimage}) {
    
    return (
        <div className="container">
        <img className="tech-img" src={techimage} alt="js" /> 
        <p>{techName}</p>
       </div>
    );
}
