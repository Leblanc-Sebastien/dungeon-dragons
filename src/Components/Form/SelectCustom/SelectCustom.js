import { useEffect, useState } from 'react'
import './SelectCustom.css'
import { v4 as uuidv4 } from 'uuid';
import SnackBarCustom from '../SnackBarCustom/SnackBarCustom';

export default function SelectCustom(props) {

    const [itemState, setItemState] = useState('')
    const [messageState, setMessageState] = useState('')

    useEffect(() => {
        const validationTest = props.itemsList.filter((item) => item.name === itemState).length
        if (validationTest !== 0) {
            const itemObjectFiltered = props.itemsList.find( element => element.name === itemState)
            props.onItemChange(itemObjectFiltered)
            setMessageState('')
            console.log("oui =>", messageState)
        }
        else{
            setMessageState(props.errorMessage)
            console.log("non =>", messageState)
        }
    }, [itemState, messageState])

    return (
        <>
            <label>{props.itemLabel}</label>
            <select name={props.itemLabel} id={uuidv4()} className={props.classCustom} onChange={e => setItemState(e.target.value)}>
                <option value="">Choisir une {props.itemLabel}</option>
                {props.itemsList.map((race) => {
                    return (
                        <option key={race.id} value={race.name} >{race.name}</option>
                    )
                })}
            </select>
            {messageState === '' ? (
                <></>       
            ): (
                <SnackBarCustom 
                message={messageState}
                />  
            )}
        </>
    )
}