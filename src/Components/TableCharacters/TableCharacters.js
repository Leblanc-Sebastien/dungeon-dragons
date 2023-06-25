import "./TableCharacters.css"

export default function TableCharacters(props) {

    return (
        <table className="table-caracter">
            <thead>
                <th className="th-caracter" scope='col'>Pseudo</th>
                <th className="th-caracter" scope='col'>Classe</th>
                <th className="th-caracter" scope='col'>Age</th>
            </thead>
            <tbody>
                {props.charactersList.map((caracter) => {
                    return (
                        <tr>
                            <td>{caracter.pseudo}</td>
                            <td>{caracter.classe}</td>
                            <td>{caracter.age}</td>
                            <td><button className='btn-delete-table' onClick={() => (props.deleteCaracter(caracter.id))}> Del </button></td>
                            <td><button className='btn-plus-table'> ... </button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}