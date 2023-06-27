import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TableCharacters from '../TableCharacters/TableCharacters.js';
import "./Form.css"

export default function Form() {

    // const [createdCaracters, setCreatedCaraters] = useState([
    //     { id: uuidv4(), pseudo: "SuGii", classe: "Guerrier", age: "36" }
    // ])

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

            const toDay = new Date()
            const NewCaracter = {
                id: uuidv4(),
                date: toDay.getDate() +"/"+ (toDay.getMonth() + 1) +"/"+ toDay.getFullYear(),
                nom: newPseudoCaracterInput,
                race: "??",
                classe: newClassCaracterInput,
                carriere: "Tueur de troll",
                age: newAgeCaracterInput, 
                taille: "113",
                cheveux: "Chatain",
                yeux: "bleu"
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
                        <label className="label-create-character">Nom :</label>                           
                        <input className="input-create-character" type="text" name="pseudo" value={newPseudoCaracterInput} onInput={e => setPseudo(e.target.value)} />                        
                        <label className="label-create-character">Race :</label>                           
                        <select name="race" id="race-select">
                            <option value="">Choisis une race</option>
                            <option value="humain">Humain</option>
                            <option value="nain">Nain</option>
                            <option value="elfe">Elfe</option>
                            <option value="halfeling">Halfeling</option>
                        </select> 
                        <label className="label-create-character">Classe :</label>  
                        <select name="classe" id="classe-select">
                            <option value="">Choisis une classe</option>
                            <option value="guerrier">Guerrier</option>
                            <option value="mage">Mage</option>
                            <option value="voleur">Voleur</option>
                            <option value="druide">Druide</option>
                        </select> 
                        <label className="label-create-character">Carrière :</label> 
                        <input className="input-create-character" type="text" name="carriere"/>                                                               
                        <label className="label-create-character">age :</label>  
                        <input className="input-create-character" type="number" name="age" value={newAgeCaracterInput} onInput={e => setAge(e.target.value)} />  
                        <label className="label-create-character">Taille :</label>     
                        <input className="input-create-character" type="number" />   
                        <label className="label-create-character">Cheveux :</label>  
                        <select name="cheveux" id="cheveux-select">
                            <option value="">Choisis une couleur</option>
                            <option value="blond">Blond</option>
                            <option value="brun">Brun</option>
                            <option value="chatain">Chatain</option>
                            <option value="roux">Roux</option>
                            <option value="lgbtq+">LGBTQ+</option>
                        </select> 
                        <label className="input-create-character">Yeux</label>
                        <select name="yeux" id="yeux-select">
                            <option value="">Choisis une couleur</option>
                            <option value="marron">Marron</option>
                            <option value="bleu">Bleu</option>
                            <option value="vert">Vert</option>
                            <option value="rouge">Rouge</option>
                            <option value="lgbtq+">LGBTQ+</option>
                        </select>                                                     
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