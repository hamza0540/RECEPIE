import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Account", // Changed "Home" to "Settings"
            path: "/account", 
            icon: faCog
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">S<span>ast</span>a Khana</a>
                <div className="nav-links">
                    {links.map(link => (
                        <Link to={link.path} key={link.name}>{link.name}</Link>
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links}/>}
            {/* <Sidebar links={links} /> */}
        </>
    );
}
