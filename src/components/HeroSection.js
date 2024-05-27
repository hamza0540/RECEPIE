import { Link } from "react-router-dom"
import CustomImage from "./Customimage"
export default function HeroSection(){
    const images =[
        "/img/gallery/img 1.jpg",
        "/img/gallery/img 2.jpg",
        "/img/gallery/img 3.jpg",
        "/img/gallery/img 4.jpg",
        "/img/gallery/img 5.jpg",
        "/img/gallery/img 6.jpg",
        "/img/gallery/img 7.jpg",
        "/img/gallery/img 8.jpg",
        "/img/gallery/img 9.jpg",
        
        
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title"> About Us</h1>
                <p className="info">
                Welcome to Sasta Khana! We're your go-to destination for diverse recipes, cooking tips, and food trends. Join our community of food enthusiasts to discover delicious dishes, share your culinary adventures, and become a kitchen pro. Let's savor the flavor together!
                </p>
                <button className="btn">
                    <Link to="/recipes">
                        Explore
                    </Link>
                </button>
            </div>
            <div className="col gallery">
                { images.map((src,index) => (
                    <CustomImage key={index} imgSrc={src} pt={"50%"}/>
                ))}
                
            </div>
        </div>
    )
}