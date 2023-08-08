import { useState } from 'react'
import { useEffect } from 'react'
import './InputCustom.css'


export default function InputCustom(props){

    const [itemState, setItemState] = useState('')

    useEffect(() => {
        props.onItemChange(itemState)
    },[itemState])

    return(
        <>  <label>{props.itemLabel}</label>
            <input
            required 
            type={props.itemType} 
            placeholder={props.placeHolder} 
            minLength={props.itemMinLength}
            maxLength={props.itemMaxLength}
            onChange={e => setItemState(e.target.value)}/>
        </>
    )
}