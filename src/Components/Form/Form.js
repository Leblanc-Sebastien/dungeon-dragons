import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Form.css"
import { racesList, classList } from './Data/dataWh';
import SelectCustom from './SelectCustom/SelectCustom';
import InputCustom from './InputCustom/InputCustom'
import ButtonCustom from './ButtonCustom/ButtonCustom';


export default function Form() {

    const [raceState, setRaceState] = useState('')
    const [classeState, setClasseState] = useState('')
    const [nameState, setNameState] = useState('')
    const [ageState, setAgeState] = useState('')
    const [characterState, setCharacterState] = useState({})

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

    const onNewCharacter = (e) => {
        e.preventDefault()
        if(nameState !== '' && ageState !== '' && raceState !== '' && classeState !== ''){
            const newCharacter = {
                name: nameState,
                age: ageState,
                race: raceState,
                classe: classeState
            }
        setCharacterState(newCharacter)
        }        
    }

    useEffect(() => {
            console.log(characterState)     
    }, [characterState])

    return (
        <div className='wrapper-form'>
            <form action="" onSubmit={(e) => onNewCharacter(e)}>
                <SelectCustom 
                    classCustom={"input-style"}
                    itemsList={racesList}
                    itemLabel={"Race"}
                    placeHolder={'Choisir une race'}
                    onItemChange={onRaceChange}
                    errorMessage={"La race n'est pas conforme !"}
                />
                <SelectCustom
                    classCustom={"input-style"}
                    itemsList={classList}
                    itemLabel={"Classe"}
                    placeHolder={'Choisir une classe'}
                    onItemChange={onClasseChange}
                    errorMessage={"La classe n'est pas conforme !"}
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
                <ButtonCustom
                    classCustom={"button-style"} 
                    value={"Validation"}  
                    disabled 
                />
            </form>
        </div>
    )
}