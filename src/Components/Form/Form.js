import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TableCharacters from '../TableCharacters/TableCharacters.js';
import "./Form.css"

export default function Form() {

    const [createdCaracters, setCreatedCaraters] = useState([
        {
            id: uuidv4(),
            date: "16/09/1987",
            nom: "SuGii",
            race: "Nain",
            classe: "Guerrier",
            carriere: "Tueur de troll",
            age: "36",
            taille: "113",
            cheveux: "Chatain",
            yeux: "bleu"
        }
    ])

    const [newNameCharacterInput, setNewNameCharacterInput] = useState("")
    const [newRaceCharacterInput, setNewRaceCharacterInput] = useState("")
    const [newClassCharacterInput, setNewClassCharacterInput] = useState("")
    const [newCareerCharacterInput, setNewCareerCharacterInput] = useState("")
    const [newAgeCharacterInput, setNewAgeCharacterInput] = useState("")
    const [newheightCharacterInput, setNewHeightCharacterInput] = useState("")
    const [newHairColorCharacterInput, setNewHairColorCharacterInput] = useState("")
    const [newEyesColorCharacterInput, setNewEyesColorCharacterInput] = useState("")

    const setName = (e) => {
        setNewNameCharacterInput(e)
    }

    const setRace = (e) => {
        setNewRaceCharacterInput(e)
    }

    const setClass = (e) => {
        setNewClassCharacterInput(e)
    }
    const setCareer = (e) => {
        setNewCareerCharacterInput(e)
    }

    const setAge = (e) => {
        setNewAgeCharacterInput(e)
    }

    const setHeight = (e) => {
        setNewHeightCharacterInput(e)
    }

    const setHairColor = (e) => {
        setNewHairColorCharacterInput(e)
    }

    const setEyesColor = (e) => {
        setNewEyesColorCharacterInput(e)
    }

    /** submit button create new caracter**/
    const addNewCaracter = (e) => {
        e.preventDefault()
        if (newNameCharacterInput !== "" && newClassCharacterInput !== "" && newAgeCharacterInput !== "") {

            const toDay = new Date()

            const NewCaracter = {
                id: uuidv4(),
                date: toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear(),
                nom: newNameCharacterInput,
                race: newRaceCharacterInput,
                classe: newClassCharacterInput,
                carriere: newCareerCharacterInput,
                age: newAgeCharacterInput,
                taille: newheightCharacterInput,
                cheveux: newHairColorCharacterInput,
                yeux: newEyesColorCharacterInput
            }

            const newArrCaracter = [...createdCaracters]
            newArrCaracter.push(NewCaracter)

            setCreatedCaraters(newArrCaracter)

            setNewNameCharacterInput("")
            setNewCareerCharacterInput("")
            setNewAgeCharacterInput("")
            setNewHeightCharacterInput("")
            document.getElementById("form-create-character").reset();
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
                    <form className="form-create-character" id="form-create-character" onSubmit={e => addNewCaracter(e)}>
                        <label className="label-create-character">Nom :</label>
                        <input className="input-create-character" type="text" name="pseudo" value={newNameCharacterInput} onInput={e => setName(e.target.value)} />
                        <label className="label-create-character">Race :</label>
                        <select name="race" id="race-select" onChange={e => setRace(e.target.value)}>
                            <option value="">Choisis une race</option>
                            <option value="humain">Humain</option>
                            <option value="nain">Nain</option>
                            <option value="elfe">Elfe</option>
                            <option value="halfeling">Halfeling</option>
                        </select>
                        <label className="label-create-character">Classe :</label>
                        <select name="classe" id="classe-select" onChange={e => setClass(e.target.value)}>
                            <option value="">Choisis une classe</option>
                            <option value="guerrier">Guerrier</option>
                            <option value="mage">Mage</option>
                            <option value="voleur">Voleur</option>
                            <option value="druide">Druide</option>
                        </select>
                        <label className="label-create-character">Carrière :</label>
                        <input className="input-create-character" type="text" name="carriere" value={newCareerCharacterInput} onInput={e => setCareer(e.target.value)} />
                        <label className="label-create-character">age :</label>
                        <input className="input-create-character" type="text" name="age" value={newAgeCharacterInput} onInput={e => setAge(e.target.value)} />
                        <label className="label-create-character">Taille :</label>
                        <input className="input-create-character" type="text" name="taille" value={newheightCharacterInput} onInput={e => setHeight(e.target.value)} />
                        <label className="label-create-character">Cheveux :</label>
                        <select name="cheveux" id="cheveux-select" onChange={e => setHairColor(e.target.value)}>
                            <option value="">Choisis une couleur</option>
                            <option value="blond">Blond</option>
                            <option value="brun">Brun</option>
                            <option value="chatain">Chatain</option>
                            <option value="roux">Roux</option>
                            <option value="chauve+">Chauve</option>
                            <option value="lgbtq+">LGBTQ+</option>
                        </select>
                        <label className="input-create-character">Yeux</label>
                        <select name="yeux" id="yeux-select" onChange={e => setEyesColor(e.target.value)}>
                            <option value="">Choisis une couleur</option>
                            <option value="marron">Marron</option>
                            <option value="bleu">Bleu</option>
                            <option value="vert">Vert</option>
                            <option value="rouge">Rouge</option>
                            <option value="lgbtq+">LGBTQ+</option>
                        </select>
                        <input type="reset" />
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