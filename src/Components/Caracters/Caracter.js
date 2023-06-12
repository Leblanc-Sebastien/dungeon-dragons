import "./Caracter.css"

export default function Caracter(props) {

    return (
        <>
            <li><p>{props.pseudo} - {props.classe} - {props.age} ans</p>
            <button onClick={() => (props.deleteCaracter(props.id))}>Delete</button>
            </li>
        </>
    )
}