import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Form.css"
import { racesList, classList } from './Data/dataWh';
import SelectCustom from './SelectCustom/SelectCustom';
import InputCustom from './InputCustom/InputCustom'

export default function Form() {

    const [raceState, setRaceState] = useState('')
    const [classeState, setClasseState] = useState('')
    const [nameState, setNameState] = useState('')
    const [ageState, setAgeState] = useState('')

    const onRaceChange = (newRace) => {
        setRaceState(newRace)
    }

    const onClasseChange = (newClasse) => {
        setClasseState(newClasse)
    }

    const onNameChange = (newName) => {
        setNameState(newName)
    }

    const onAgeChange = (newAge) => {
        setAgeState(newAge)
    }

    useEffect(() => {
        if (raceState !== '') {
            console.log(raceState)
        }
        if (classeState !== '') {
            console.log(classeState)
        }
        if (nameState != '') {
            console.log(nameState)
        }
        if (ageState != '') {
            console.log(ageState)
        }
    }, [raceState, classeState, nameState, ageState])

    return (
        <div className='wrapper-form'>
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
                <InputCustom
                    classCustom={"input-style"}
                    itemLabel={'Nom'}
                    itemType={'text'}
                    itemMaxLength={10}
                    itemMinLength={2}
                    placeHolder={'Choisir un nom'}
                    onItemChange={onNameChange}
                />
                <InputCustom
                    classCustom={"input-style"}
                    itemLabel={'Age'}
                    itemType={'number'}
                    itemMaxLength={3}
                    itemMinLength={1}
                    placeHolder={'Choisir un age'}
                    onItemChange={onAgeChange}
                />
            </form>
        </div>
    )
}