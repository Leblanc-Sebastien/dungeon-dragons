import "./TableCharacters.css"

export default function TableCharacters(props) {

    return (
        <table className="table-caracter">
            <thead>
                <th className="th-caracter" scope='col'>Date</th>
                <th className="th-caracter" scope='col'>Nom</th>
                <th className="th-caracter" scope='col'>Race</th>
                <th className="th-caracter" scope='col'>Classe</th>
                <th className="th-caracter" scope='col'>Carriere</th>
                <th className="th-caracter" scope='col'>Age</th>
                <th className="th-caracter" scope='col'>Taille</th>
                <th className="th-caracter" scope='col'>Cheveux</th>
                <th className="th-caracter" scope='col'>Yeux</th>
            </thead>
            <tbody>
                {props.charactersList.map((caracter) => {
                    return (
                        <tr> 
                            <td>{caracter.date}</td>   
                            <td>{caracter.nom}</td>
                            <td>{caracter.race}</td>
                            <td>{caracter.classe}</td>
                            <td>{caracter.carriere}</td>
                            <td>{caracter.age}</td>
                            <td>{caracter.taille} cm</td>
                            <td>{caracter.cheveux}</td>
                            <td>{caracter.yeux}</td>
                            <td><button className='btn-delete-table' onClick={() => (props.deleteCaracter(caracter.id))}> Del </button></td>
                            <td><button className='btn-plus-table'> ... </button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}