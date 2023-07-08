import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import "./TableCharacters.css"

export default function TableCharacters() {

    const [createdCharacters, setCreatedCharaters] = useState([
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

    /** add character **/

    const addCharacter = (character) => {
        const newArrCharacter = [...createdCharacters]

        newArrCharacter.push(character)

        setCreatedCharaters(newArrCharacter)
    }

    /** delete character */

    const deleteCharacter = (id) => {
        const characterById = createdCharacters.findIndex(character => character.id === id)

        const newArrCharacter = [...createdCharacters]
        newArrCharacter.splice(characterById, 1)

        setCreatedCharaters(newArrCharacter)
    }

    return (
        <div className="main-character-table">
            {/* <a className="btn-add">Add a character</a> */}
            {createdCharacters.length === 0 ? (
                <section className="no-character">
                    <p>Pas de personnage</p>
                </section>
            ) : (
                <table className="table-character">
                    <thead>
                        <tr>
                            <th className="th-character" scope='col'>Date</th>
                            <th className="th-character" scope='col'>Nom</th>
                            <th className="th-character" scope='col'>Race</th>
                            <th className="th-character" scope='col'>Classe</th>
                            <th className="th-character" scope='col'>Carriere</th>
                            <th className="th-character" scope='col'>Age</th>
                            <th className="th-character" scope='col'>Taille</th>
                            <th className="th-character" scope='col'>Cheveux</th>
                            <th className="th-character" scope='col'>Yeux</th>
                        </tr>
                    </thead>
                    <tbody>
                        {createdCharacters.map((character) => {
                            return (
                                <tr key={character.id}>
                                    <td>{character.date}</td>
                                    <td>{character.nom}</td>
                                    <td>{character.race}</td>
                                    <td>{character.classe}</td>
                                    <td>{character.carriere}</td>
                                    <td>{character.age} ans</td>
                                    <td>{character.taille} cm</td>
                                    <td>{character.cheveux}</td>
                                    <td>{character.yeux}</td>
                                    <td><button className='btn-delete-table' onClick={() => (deleteCharacter(character.id))}> Del </button></td>
                                    <td><button className='btn-plus-table'> ... </button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
            }
        </div>
    )
}