import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TableCharacters from '../TableCharacters/TableCharacters.js';
import "./Form.css"

export default function Form() {

    const [createdCaracters, setCreatedCaraters] = useState([
        { id: uuidv4(), pseudo: "SuGii", classe: "Guerrier", age: "36" },
        { id: uuidv4(), pseudo: "Michel", classe: "Mage", age: "67" },
        { id: uuidv4(), pseudo: "Gimli", classe: "Tueur de troll", age: "159" },
        { id: uuidv4(), pseudo: "Gandoulfi", classe: "Mage des profondeurs des anus", age: "19867" },
    ])

    const [newPseudoCaracterInput, setNewPseudoCaracterInput] = useState("")
    const [newClassCaracterInput, setNewClassCaracterInput] = useState("")
    const [newAgeCaracterInput, setNewAgeCaracterInput] = useState("")

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
        if (newPseudoCaracterInput !== "" && newClassCaracterInput !== "" && newAgeCaracterInput !== "") {
            const NewCaracter = {
                id: uuidv4(),
                pseudo: newPseudoCaracterInput,
                classe: newClassCaracterInput,
                age: newAgeCaracterInput
            }

            const newArrCaracter = [...createdCaracters]
            newArrCaracter.push(NewCaracter)

            setCreatedCaraters(newArrCaracter)

            setNewPseudoCaracterInput("")
            setNewClassCaracterInput("")
            setNewAgeCaracterInput("")
        }
    }
    /** delete caracter */

    const deleteCaracter = (id) => {
        const caracterById = createdCaracters.findIndex(caracter => caracter.id === id)

        const newArrCaracter = [...createdCaracters]
        newArrCaracter.splice(caracterById, 1)

        setCreatedCaraters(newArrCaracter)
    }

    return (
        <>
            <a className="btn-add" href="#popup">Add a character</a>
            <div id="popup">
                <div className="popup-content">
                    <h2>Création de personnage</h2>
                    <form className="form-create-character" onSubmit={e => addNewCaracter(e)}>
                        <label className="label-create-character">
                            Pseudo :
                            <input className="input-create-character" type="text" name="pseudo" value={newPseudoCaracterInput} onInput={e => setPseudo(e.target.value)} />
                        </label>
                        <label className="label-create-character">
                            classe :
                            <input className="input-create-character" type="text" name="classe" value={newClassCaracterInput} onInput={e => setClass(e.target.value)} />
                        </label>
                        <label className="label-create-character">
                            age :
                            <input className="input-create-character" type="text" name="age" value={newAgeCaracterInput} onInput={e => setAge(e.target.value)} />
                        </label>
                        <button className="btn-validate">Valider</button>
                    </form>
                    <a href="#" className="close-popup">X</a>
                </div>
            </div>
            {/* <ul className="box">
                {createdCaracters.map((caracter, index) => {
                    return (<Caracter key={index} pseudo={caracter.pseudo} classe={caracter.classe} age={caracter.age} id={caracter.id} deleteCaracter={deleteCaracter} />)
                })}
            </ul> */}
            {createdCaracters.length === 0 ? (
                <section className="no-character">
                    <p>Pas de personnage</p>
                </section>             
            ) : (
                <TableCharacters charactersList={createdCaracters} deleteCaracter={deleteCaracter} />
            )}
        </>
    )
}