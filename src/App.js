import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TableCharacters from "./Components/TableCharacters/TableCharacters";
import Form from "./Components/Form/Form"
import "./App.css"

export default function App() {

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
    <div className="App flex">
      <header className="header">
        <h1>Dungeons & dragons</h1>
      </header>  
      <main className="main-character-table">
        <Form onAddCharacter={addCharacter}/>

        {createdCharacters.length === 0 ? (
                <section className="no-character">
                    <p>Pas de personnage</p>
                </section>
            ) : (
                <TableCharacters charactersList={createdCharacters} onDeleteCharacter={deleteCharacter} />
            )}
      </main>               
      <footer className="footer"></footer>         
    </div>
  );
}

