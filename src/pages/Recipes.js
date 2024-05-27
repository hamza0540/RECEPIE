import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes(){
    const recipes = [
        {
            "id": 1,
            "title": "Veg Olive Pizza",
            "image": "/img/gallery/img 3.jpg",
            "description": "A delightful vegetarian pizza topped with fresh olives, bell peppers, onions, and melted mozzarella cheese on a crispy crust.",
            "recipe": [
                "Preheat oven to 475°F (245°C).",
                "Spread pizza sauce on the dough.",
                "Add sliced olives, bell peppers, and onions.",
                "Sprinkle with mozzarella cheese.",
                "Bake for 12-15 minutes until crust is golden brown."
            ]
        },
        {
            "id": 2,
            "title": "Momos",
            "image": "/img/gallery/img 5.jpg",
            "description": "Steamed dumplings filled with a savory mixture of minced vegetables, herbs, and spices, served with a spicy dipping sauce.",
            "recipe": [
                "Prepare filling with minced veggies and spices.",
                "Fill dough wrappers with the mixture.",
                "Fold and seal the momos.",
                "Steam for 10-12 minutes.",
                "Serve with spicy dipping sauce."
            ]
        },
        {
            "id": 3,
            "title": "Chicken Biryani",
            "image": "/img/gallery/img 1.jpg",
            "description": "A fragrant and flavorful rice dish cooked with tender chicken pieces, aromatic spices, and saffron-infused basmati rice.",
            "recipe": [
                "Marinate chicken with yogurt and spices.",
                "Cook basmati rice with saffron.",
                "Layer rice and chicken in a pot.",
                "Cook on low heat until flavors meld.",
                "Garnish with fried onions and fresh herbs."
            ]
        },
        {
            "id": 4,
            "title": "Veg SpringRolls",
            "image": "/img/gallery/img 2.jpg",
            "description": "Crispy and golden-brown spring rolls stuffed with a delicious mix of sautéed vegetables and served with a tangy dipping sauce.",
            "recipe": [
                "Prepare filling with sautéed vegetables.",
                "Place filling in spring roll wrappers.",
                "Roll tightly and seal edges.",
                "Fry until golden brown.",
                "Serve with tangy dipping sauce."
            ]
        },
        {
            "id": 5,
            "title": "Noodles",
            "image": "/img/gallery/img 4.jpg",
            "description": "A flavorful and quick dish made with stir-fried noodles, mixed vegetables, and a savory sauce.",
            "recipe": [
                "Cook noodles according to package instructions.",
                "Stir-fry mixed vegetables.",
                "Add cooked noodles and sauce.",
                "Toss to combine.",
                "Serve hot."
            ]
        },
        {
            "id": 6,
            "title": "Cheese & Veggie Wrap",
            "image": "/img/gallery/img 6.jpg",
            "description": "A delicious wrap filled with fresh vegetables, creamy cheese, and a tangy dressing, perfect for a quick and healthy meal.",
            "recipe": [
                "Lay tortilla flat and add cheese.",
                "Add fresh vegetables.",
                "Drizzle with tangy dressing.",
                "Roll tightly into a wrap.",
                "Cut in half and serve."
            ]
        },
        {
            "id": 7,
            "title": "Donut",
            "image": "/img/gallery/img 7.jpg",
            "description": "A soft and fluffy donut coated with a sweet glaze, perfect for satisfying your sweet tooth.",
            "recipe": [
                "Prepare dough and let it rise.",
                "Cut into donut shapes.",
                "Fry until golden brown.",
                "Dip in sweet glaze.",
                "Allow to set before serving."
            ]
        },
        {
            "id": 8,
            "title": "Jalebi",
            "image": "/img/gallery/img 8.jpg",
            "description": "A popular Indian dessert made of deep-fried batter soaked in a sugary syrup, known for its crispy texture and sweet taste.",
            "recipe": [
                "Prepare batter and let it ferment.",
                "Pipe batter into hot oil in spiral shapes.",
                "Fry until golden and crispy.",
                "Soak in warm sugar syrup.",
                "Serve hot."
            ]
        },
        {
            "id": 9,
            "title": "Shakes",
            "image": "/img/gallery/img 9.jpg",
            "description": "Creamy and refreshing shakes made with fresh fruits, milk, and a touch of sweetness, perfect for a cool treat.",
            "recipe": [
                "Combine fresh fruits and milk in a blender.",
                "Add sweetener if desired.",
                "Blend until smooth.",
                "Pour into glasses.",
                "Serve chilled."
            ]
        },
        {
            "id": 10,
            "title": "Dal Chawal",
            "image": "/img/gallery/img 10.jpg",
            "description": "A comforting and wholesome dish made with cooked lentils (dal) and rice (chawal), flavored with aromatic spices.",
            "recipe": [
                "Cook lentils with spices.",
                "Cook rice separately.",
                "Prepare tempering with spices and add to dal.",
                "Serve dal over rice.",
                "Garnish with fresh cilantro."
            ]
        }
    ]
    .sort(() => Math.random() - 0.5)

    return(
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
                {/* <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/> */}
                {recipes.map((recipe, index)=> (
                    <RecipeCard key={index} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}