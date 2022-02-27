import AboutPhoto from "../Assets/Images/about-picture.png"
import "../Styles/about.css";

export default function About( ) {
    return (
        <div className="about">
            <h2>About me</h2>
            <div className="about-content">
                <div className="about-left">
                    <p>
                        Hi, I am Monir, a Frontend developer from Sweden. Welcome to my website, here you will all see all the projects I have developed so far and also what I will do in near future.
                    </p>
                    <p>
                        I am having deep learning about Javascript framework(React) from Novare Potential. I have also learned about Fullstack development from Code Institute.
                        You can go down to see my work more details.
                    </p>                    
                </div>
                <div className="about-right">
                    <img src = {AboutPhoto} alt = {" "}/>
                </div>
            </div>
            
        </div>
    );
}
