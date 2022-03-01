import DataTechnologies from "../Data/technologyList"



import Tech from "./Tech";
export default function Techsttack() {
    const TechnologiesList = DataTechnologies.map((item)=> (
        <Tech key = {item.id} title = {item.title} image = {item.logo} id = {item.id}/>
    ))
    return (
        <div className="technologies">
            <h2>Technologies</h2>
            <div>
                <div>
                <p>Here are the tecnologies I already now and I going to learn in near future</p>
                </div>
                <div>
                    {TechnologiesList}
                </div>
            </div>
                       
        </div>
    );
}
