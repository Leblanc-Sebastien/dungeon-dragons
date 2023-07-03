import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TableCharacters from "./Components/TableCharacters/TableCharacters";
import Form from "./Components/Form/Form"
import "./App.css"

export default function App() {

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

/** delete caracter */

const deleteCaracter = (id) => {
  const caracterById = createdCaracters.findIndex(caracter => caracter.id === id)

  const newArrCaracter = [...createdCaracters]
  newArrCaracter.splice(caracterById, 1)

  setCreatedCaraters(newArrCaracter)
}

  return (
    <div className="App flex">
      <header className="header">
        <h1>Dungeons & dragons</h1>
      </header>  
      <main className="main-caracter-table">
        <Form createdCaracters={createdCaracters} setCreatedCaraters={setCreatedCaraters}/>

        {createdCaracters.length === 0 ? (
                <section className="no-character">
                    <p>Pas de personnage</p>
                </section>
            ) : (
                <TableCharacters charactersList={createdCaracters} deleteCaracter={deleteCaracter} />
            )}
      </main>               
      <footer className="footer"></footer>         
    </div>
  );
}

