import "./ButtonCustom.css"


export default function ButtonCustom(props){

    return(
        <>
            <button className={props.classCustom}>{props.value}</button>
        </>
    )
}