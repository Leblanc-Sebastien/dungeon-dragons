import "./Navbar.css"
import imgSwords from "./img/double-sword.png"


export default function Navbar() {

    return (
        <nav className="navbar">
            <a href="#"><img className="img-double-sword" src={imgSwords} alt="double sword" /></a>
            <ul className="navbar-link">
                <li><a href="/">Home</a></li>
                <li><a href="#">Création de personnage</a></li>
                <li><a href="#">Infos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}