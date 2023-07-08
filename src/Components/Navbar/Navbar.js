import { Link } from "react-router-dom"
import "./Navbar.css"
import imgSwords from "./img/double-sword.svg"


export default function Navbar() {

    return (
        <nav className="navbar">
            <a href="/"><img className="img-double-sword" src={imgSwords} alt="double sword" /></a>
            <ul className="navbar-link">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`liste-de-personnages`}>Liste de personnages</Link></li>
                <li><Link to={`creation-de-personnage`}>Création de personnage</Link></li>
                <li><Link to={`contact`}>Contact</Link></li>
            </ul>
        </nav>
    )
}