import "./Drawer.css"
import { useState } from "react"
import imgSwords from "./img/double-sword.svg"



export default function Drawer() {

    const [boolState, setBoolState] = useState(false)



    const dynamicMarginOnclick = () => {
        setBoolState(!boolState)
    }

    return (
        <div className={boolState ? "drawer-toggle" : "drawer"}>
            <img className="button-drawer" src={imgSwords} alt="double-sword" onClick={() => dynamicMarginOnclick()}/>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
                <li>menu5</li>
            </ul>
        </div>
    )
}