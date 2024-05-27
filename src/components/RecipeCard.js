import { useNavigate } from "react-router-dom"
import CustomImage from "./Customimage"
export default function RecipeCard({recipe}){
    const navigate = useNavigate();
    console.log({recipe});
    return(
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="70%" />
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">
                    Tantalizing bites of culinary delight</p>
                <p className="view-btn" onClick={()=>{
                    navigate("/recipes/"+recipe.id)
                }
            }>
                    View Recipe
                </p>
            </div>
        </div>
    )
}