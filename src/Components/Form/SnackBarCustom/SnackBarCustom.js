import "./SnackBarCustom.css"


export default function SnackBarCustom(props){

    return(
        <section className="snackBar">{props.message}</section>
    )
}