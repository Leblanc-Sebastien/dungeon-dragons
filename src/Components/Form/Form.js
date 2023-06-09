import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Form.css"

export default function Form(){

    const [createdCaracters, setCreatedCaraters] = useState([
        {id : uuidv4(), pseudo : "SuGii" , classe : "Guerrier", age : "36"}
    ])

    const [newPseudoCaracterInput, setNewPseudoCaracterInput] = useState()
    const [newClassCaracterInput, setNewClassCaracterInput] = useState()
    const [newAgeCaracterInput, setNewAgeCaracterInput] = useState()

    const setPseudo = (e) => {
        setNewPseudoCaracterInput(e)
    }

    const setClass = (e) => {
        setNewClassCaracterInput(e)
    }

    const setAge = (e) => {
        setNewAgeCaracterInput(e)
    }
   
    /** submit button create new caracter**/
    const addNewCaracter = (e) => {
        e.preventDefault()

        const NewCaracter = {
            id : uuidv4(),
            pseudo : newPseudoCaracterInput,
            classe : newClassCaracterInput,
            age : newAgeCaracterInput
        }

        const newArrCaracter = [...createdCaracters]
        newArrCaracter.push(NewCaracter)

        setCreatedCaraters(newArrCaracter)

        setNewPseudoCaracterInput("")
        setNewClassCaracterInput("")
        setNewAgeCaracterInput("")

    }

    return(
        <>
            <h1>Création de personnage</h1>
            <form onSubmit={e => addNewCaracter(e)}>
                <label>
                    Pseuso :
                    <input type="text" name="pseudo" value={newPseudoCaracterInput} onInput={e => setPseudo(e.target.value)}/>
                </label>
                <label>
                    classe :
                    <input type="text" name ="classe" value={newClassCaracterInput} onInput={e => setClass(e.target.value)}/>
                </label> 
                <label>
                    age :
                    <input type="text" name ="age" value={newAgeCaracterInput} onInput={e => setAge(e.target.value)}/>
                </label>   
                <button>Valider</button>           
            </form>
        </>
    )
}