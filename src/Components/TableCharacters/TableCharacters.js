import "./TableCharacters.css"

export default function TableCharacters(props) {

    return (
        <table className="table-caracter">
            <thead>
                <tr>
                    <th className="th-caracter" scope='col'>Date</th>
                    <th className="th-caracter" scope='col'>Nom</th>
                    <th className="th-caracter" scope='col'>Race</th>
                    <th className="th-caracter" scope='col'>Classe</th>
                    <th className="th-caracter" scope='col'>Carriere</th>
                    <th className="th-caracter" scope='col'>Age</th>
                    <th className="th-caracter" scope='col'>Taille</th>
                    <th className="th-caracter" scope='col'>Cheveux</th>
                    <th className="th-caracter" scope='col'>Yeux</th>
                </tr>
            </thead>
            <tbody>
                {props.charactersList.map((character) => {
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
                            <td><button className='btn-delete-table' onClick={() => (props.deleteCaracter(character.id))}> Del </button></td>
                            <td><button className='btn-plus-table'> ... </button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}