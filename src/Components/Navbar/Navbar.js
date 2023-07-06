import "./Navbar.css"


export default function Navbar() {

    return (
        <nav className="navbar">
            <a href="#"><img src="./img/double-sword.png" alt="double sword" /></a>
            <ul className="navbar-link">
                <li><a href="/"></a>Lien 1</li>
                <li><a href="#"></a>Lien 2</li>
                <li><a href="#"></a>Lien 3</li>

            </ul>
        </nav>
    )
}