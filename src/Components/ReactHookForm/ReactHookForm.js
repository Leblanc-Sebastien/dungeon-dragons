import { useForm } from "react-hook-form"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./ReactHookForm.css"

export default function ReactHookForm() {

    const [characters, setCharacters] = useState([
        {
            id: uuidv4(),
            date: "16/09/1987",
            name: "seb",
            race: "Nain",
            class: "Guerrier",
            career: "prout",
            echelon: "prout",
            careerPlan: "prout",
            statut: "prout",
            age: 36,
            height: 126,
            hair: "brun",
            eyes: "bleus"
        }
    ])

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        
        const newArrCharacters = [...characters]
        const toDay = new Date()
        const newCharacter = {
            id: uuidv4(),
            date: toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear(),
            name: data.name,       
            race: data.race,
            class: data.class,
            career: data.career,
            echelon: data.echelon,
            careerPlan: data.careerPlan,
            statut : data.statut,
            age: data.age,
            height: data.height,
            hair : data.hair,
            eyes: data.eyes
        }

        newArrCharacters.push(newCharacter)
        setCharacters(newArrCharacters)
        console.log(characters)
    }

    return (   
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={"Michel"}{...register("name", { required: true, maxLength: 10, minLength: 2 })} />           
            <select {...register("race", { required: true })}>
                {/* <option value="">Choisis une race</option> */}
                <option value="humain">Humain</option>
                <option value="nain">Nain</option>
                <option value="elfe">Elfe</option>
                <option value="halfeling">Halfeling</option>
            </select>
            <select {...register("class", { required: true })}>
                {/* <option value="">Choisis une classe</option> */}
                <option value="guerrier">Guerrier</option>
                <option value="mage">Mage</option>
                <option value="voleur">Voleur</option>
                <option value="druide">Druide</option>
            </select>
            <input defaultValue={"Tueur de troll"}{...register("career", {required: true, maxLength:20, minLength: 2})} />
            <input defaultValue={"6"}{...register("echelon", {required: true, maxLength:20, minLength: 1})} />
            <input defaultValue={"Tueur de troll supérieur"}{...register("careerPlan", {required: true, minLength: 2})} />
            <input defaultValue={"vivant"}{...register("statut", {required: true, maxLength:20, minLength: 2})} />
            <input defaultValue={36} type="number" {...register("age", { required: true, maxLength: 4, minLength: 1 })} />
            <input defaultValue={123} type="number" {...register("height", { required: true, maxLength: 3, minLength: 1 })} />
            <select {...register("hair", { required: true })}>
                {/* <option value="">Choisis une couleur de cheveux</option> */}
                <option value="brun">Brun</option>
                <option value="blond">Blond</option>
                <option value="roux">Roux</option>
                <option value="chatain">Chatain</option>
                <option value="lgbt+">LGBT+</option>
            </select>
            <select {...register("eyes", { required: true })}>
                {/* <option value="">Choisis une couleur d'yeux</option> */}
                <option value="noir">Noir</option>
                <option value="bleu">bleu</option>
                <option value="vert">vert</option>
                <option value="marron">marron</option>
                <option value="rouge">Rouge</option>
                <option value="lgbt+">LGBT+</option>
            </select>
            <button type="submit">Validage</button>
        </form>      
    )
}