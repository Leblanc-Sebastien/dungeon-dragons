import "./Drawer.css"


export default function Drawer(){

let dynamicMargin = "false"

const dynamicMarginOnclick = () => {
    dynamicMargin = !dynamicMargin
    console.log(dynamicMargin)  
}

    return(
        <div className={dynamicMargin ? "drawer" : "drawer-toggle"}>
            <button className="button-drawer" onClick={() => dynamicMarginOnclick()}>slide</button>
        </div>
    )
}