import { useForm } from "react-hook-form"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function ReactHookForm() {

    const [characters, setCharacters] = useState([
        {
            id: uuidv4(),
            date: "16/09/1987",
            pseudo: "seb",
            gender: "Masculin",
            race: "Nain",
            classe: "Guerrier",
            age: 36
        }
    ])

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {

        const newArrCharacters = [...characters]
        const toDay = new Date()
        const newCharacter = {
            id: uuidv4(),
            date: toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear(),
            pseudo: data.pseudo,
            gender: data.gender,       
            race: data.race,
            classe: data.classe,
            age: data.age
        }

        newArrCharacters.push(newCharacter)
        setCharacters(newArrCharacters)
        console.log(characters)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={"Michel"}{...register("pseudo", { required: true, maxLength: 10, minLength: 2 })} />
            <select {...register("gender", { required: true })}>
                {/* <option value="">Choisis un genre</option> */}
                <option value="male">Masculin</option>
                <option value="female">Feminin</option>
                <option value="nonBinary">Non binaire</option>
                <option value="other">Autre...</option>
            </select>
            <select {...register("race", { required: true })}>
                {/* <option value="">Choisis une race</option> */}
                <option value="humain">Humain</option>
                <option value="nain">Nain</option>
                <option value="elfe">Elfe</option>
                <option value="halfeling">Halfeling</option>
            </select>
            <select {...register("classe", { required: true })}>
                {/* <option value="">Choisis une classe</option> */}
                <option value="guerrier">Guerrier</option>
                <option value="mage">Mage</option>
                <option value="voleur">Voleur</option>
                <option value="druide">Druide</option>
            </select>
            <input defaultValue={36} type="number" {...register("age", { required: true, maxLength: 4, minLength: 1 })} />
            <button type="submit">Validage</button>
        </form>
    )
}