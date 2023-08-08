import { useEffect, useState } from 'react'
import './SelectCustom.css'
import { v4 as uuidv4 } from 'uuid';

export default function SelectCustom(props) {

    const [itemState, setItemState] = useState('')

    useEffect(() => {
        const validationTest = props.itemsList.filter((item) => item.name === itemState).length
        console.log(validationTest, itemState)
        if (validationTest !== 0) {
            props.onItemChange(itemState)
        }
    }, [itemState])

    return (
        <>
            <label>{props.itemLabel}</label>
            <select name={props.itemLabel} id={uuidv4()} onChange={e => setItemState(e.target.value)}>
                <option value={props.itemLabel}>Choisir une {props.itemLabel}</option>
                {props.itemsList.map((race) => {
                    return (
                        <option key={race.id} value={race.name} >{race.name}</option>
                    )
                })}
            </select>
        </>
    )
}