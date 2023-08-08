import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Form.css"
import { racesList, classList} from './Data/dataWh';
import SelectCustom from './SelectCustom/SelectCustom';

export default function Form() {

    const [raceState, setRaceState] = useState('')
    const [classeState, setClasseState] = useState('')

    const onRaceChange = (newRace) => {
        setRaceState(newRace)  
    }

    const onClasseChange = (newClasse) => {
        setClasseState(newClasse)     
    }

    useEffect(() =>{
        if(raceState !== ''){
            console.log(raceState)
        }
        if(classeState !== ''){
            console.log(classeState)
        }       
    }, [raceState,classeState])

    return (
        <>  
            <form action="">
                <SelectCustom 
                    itemsList={racesList} 
                    itemLabel={"Race"}
                    onItemChange={onRaceChange}
                />
                <SelectCustom 
                    itemsList={classList} 
                    itemLabel={"Classe"}
                    onItemChange={onClasseChange}
                />
            </form>           
        </>
    )
}