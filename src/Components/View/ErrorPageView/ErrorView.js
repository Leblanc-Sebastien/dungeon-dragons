import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"
import imgSwords from "./img/double-sword.svg"

import "./ErrorView.css"

export default function ErrorPage() {

    const error = useRouteError()
    console.log(error)

    return (
        <div className="errorView-container">
            <img className="img-double-sword-errorView" src={imgSwords} alt="double sword" />
            <p>Cette page n'existe pas! <Link to={'/'}>"Home"</Link></p>
            
        </div>
    )
}