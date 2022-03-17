//Project files
import AboutPhoto from "../assets/images/monir.jpg";


export default function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-title">About me</h2>
      <div className="about-content">
        <div className="about-left">
          <p>
            Hi, I am Monir, a Frontend developer from Sweden. Welcome to my
            website, here you will all see all the projects I have developed so
            far and also what I will do in near future.
          </p>
          <p>
            I am having deep learning about Javascript framework(React) from
            Novare Potential. I have also learned about Fullstack development
            from Code Institute. You can go down to see my work more details.
          </p>
        </div>
        <div className="about-right">
          <img className="myimg" src={AboutPhoto} alt=" " />
        </div>
      </div>
    </div>
  );
}
