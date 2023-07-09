import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom"

import "./ErrorView.css"

export default function ErrorPage() {

    const error = useRouteError()
    console.log(error)

    return (
        <div>
            <h2>404</h2>
            <Link to={'/'}>Home</Link>
        </div>
    )
}