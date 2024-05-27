import { Link } from "react-router-dom";

export default function ImproveSkills(){
    const list = [
        "Learn New Recepies",
        "Write Your Own Recepies",
        "Know Nutrition Facts",
        "Get Cooking Tips",
        "Experiment With Food",
        "Meal Planning Services",
        "Culinary Workshops",
        "Seasonal Ingredient Guides",
        "Recipe Exchange Community",
        "Food Preservation Workshops"
    ]
    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img 10.jpg" alt=""/>
                </div>
            <div className="col typography">
                <h1 className="title"> Learn With Us </h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                ))}
                <Link to="/account"><button className="btn">Sign Up</button></Link>
            </div>
            
        </div>
    )
}