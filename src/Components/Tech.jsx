
export default function Tech({title, image, id}) {
  //const imageSrc = require (`../Assets/Technology-icons/${image}`).default;
    
  return (
      
    <div className= "tech">
      <div className="tech-item">
      <img src = {image} alt={title}/>
        <h4>{title}</h4>
        {id}
      </div>        
    </div>
  )
}
