import { useForm } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ReactHookForm.css"
import { constructionCharacter as constructionCharacter } from "./dataWarHammer"
import { constructionCareer as constructionCareer } from "./dataWarHammer"

export default function ReactHookForm() {

    const [raceState, setRaceState] = useState("")
    const [classState, setClassState] = useState("")
    const [careerState, setCareerState] = useState("")
    const [filteredCareer, setFilteredCareer] = useState([])
    const [fileteredCareerSuperiorState, setFilteredCareerSuperiorState] = useState([])

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
            statut: data.statut,
            age: data.age,
            height: data.height,
            hair: data.hair,
            eyes: data.eyes
        }
        newArrCharacters.push(newCharacter)
        setCharacters(newArrCharacters)
        //console.log(characters)
    }

    const raceOnInput = (e) => {
        setRaceState(e)
    }

    const classOnInput = (e) => {
        setClassState(e)
    }

    const careerOnInput = (e) => {
        setCareerState(e)
        //console.log(JSON.stringify(careerState))
    }

    useEffect(() => {
        if (raceState !== "" && classState !== "") {
            setFilteredCareer(constructionCharacter[raceState][classState])
        }
    }, [raceState, classState])

    useEffect(() => {
        if (careerState !== "") {
            setFilteredCareerSuperiorState(constructionCareer[careerState])
            console.log(fileteredCareerSuperiorState)
        }
    }, [careerState])

    const arrClass = Object.keys(constructionCharacter.humain)

    return (
        <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div></div>
            <div className="formPart1">
                <label>Nom</label>
                <input defaultValue={"Michel"}{...register("name", { required: true, maxLength: 10, minLength: 2 })} />
                <label>Age</label>
                <input defaultValue={36} type="number" {...register("age", { required: true, maxLength: 4, minLength: 1 })} />
                <label>Taille</label>
                <input defaultValue={123} type="number" {...register("height", { required: true, maxLength: 3, minLength: 1 })} />
                <label>Cheveux</label>
                <select {...register("hair", { required: true })}>
                    <option value="">Choisis une couleur de cheveux</option>
                    <option value="brun">Brun</option>
                    <option value="blond">Blond</option>
                    <option value="roux">Roux</option>
                    <option value="chatain">Chatain</option>
                    <option value="lgbt+">LGBT+</option>
                </select>
                <label>Yeux</label>
                <select {...register("eyes", { required: true })}>
                    {/* <option value="">Choisis une couleur d'yeux</option> */}
                    <option value="noir">Noir</option>
                    <option value="bleu">bleu</option>
                    <option value="vert">vert</option>
                    <option value="marron">marron</option>
                    <option value="rouge">Rouge</option>
                    <option value="lgbt+">LGBT+</option>
                </select>
            </div>
            <div className="formPart2">
                <label>Race</label>
                <select {...register("race", { required: true })} onChange={e => raceOnInput(e.target.value)}>
                    <option value="">Choisis une race</option>
                    <option value="humain">Humain</option>
                    <option value="halfeling">Halfeling</option>
                    <option value="nain">Nain</option>
                    <option value="hautElfe">Haut Elfe</option>
                    <option value="elfeSylvain">Elfe Sylvain</option>
                </select>
                <label>Classe</label>
                <select {...register("class", { required: true })} onChange={e => classOnInput(e.target.value)}>
                    {<option value="">Choisis une classe</option>}
                    {arrClass.map(classe => {
                        return (
                            <option value={classe}>{classe}</option>
                        )
                    })}
                </select>
                <label>Carrière</label>
                <select {...register("career", { required: true })} onChange={e => careerOnInput(e.target.value)}>
                    <option value="">Choisir une carrière</option>
                    {filteredCareer.map(career => {
                        return (
                            <option value={career}>{career}</option>
                        )
                    })}
                </select>
                <label>Plan de carrière</label>
                <select {...register("careerPlan", { required: true })}>
                    {/* {fileteredCareerSuperiorState.map(careerSuperior => {
                        return(
                            <option value={careerSuperior}>{careerSuperior}</option>
                        )
                    })} */}
                </select>
                <label>Echelon</label>
                <select {...register("echelon", { required: true })}>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Argent</option>
                    <option value="gold">Or</option>
                </select>
                <label>Statut</label>
                <select {...register("statut", { required: true })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Validage</button>
            </div>
        </form>
    )
}