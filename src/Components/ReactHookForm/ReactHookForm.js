import { useForm } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ReactHookForm.css"
import { constructionCharacter } from "./dataWarHammer"
import { constructionCareer } from "./dataWarHammer"

import ComboBoxAutoComplete from "../Mui/Autocomplete/Playground"


const racesList = [
    { name: 'Humain' },
    { name: 'Nain' },
    { name: 'Halfling' },
    { name: 'Haut Elfe' },
    { name: 'Elfe Sylvain' },
];

const classList = [
    { name: 'Citadin' },
    { name: 'Courtisan' },
    { name: 'Guerrier' },
    { name: 'Lettré' },
    { name: 'Riverain' },
    { name: 'Roublard' },
    { name: 'Rural' }
];

export default function ReactHookForm() {

    const [raceState, setRaceState] = useState("")
    const [classState, setClassState] = useState("")
    const [careerState, setCareerState] = useState("")
    const [filteredCareer, setFilteredCareer] = useState([])
    const [fileteredCareerSuperiorState, setFilteredCareerSuperiorState] = useState([])
    const [filteredCareerPlanState, setFilteredCareerPlanState] = useState("")
    const [filteredStatutState, setFilteredStatutState] = useState("")
    const [careerObjectState, setCareerObjectState] = useState("")

    const [characters, setCharacters] = useState([
        {
            id: uuidv4(),
            date: "16/09/1987",
            name: "seb",
            race: "Nain",
            class: "Guerrier",
            career: "prout",
            careerPlan: "prout",
            statut: "prout",
            age: 36,
            height: 126,
            hair: "brun",
            eyes: "bleus"
        }
    ])

    const { register, handleSubmit, control } = useForm()

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

    const onRaceChange = (newRace) => {
        setRaceState(newRace)
        console.log("usef", newRace)
    }

    const onClassChange = (newClass) => {
        setClassState(newClass)
        console.log(classState)
    }

    const careerOnInput = (e) => {
        setCareerState(e)
    }

    const careerPlanOnInput = (e) => {
        setFilteredCareerPlanState(e)
        //console.log(filteredCareerPlanState)
    }

    function camelCase(str) {
        // converting all characters to lowercase
        let ans = str.toLowerCase();

        // Returning string to camelcase
        return ans.split(" ").reduce((s, c) => s
            + (c.charAt(0).toUpperCase() + c.slice(1)));

    }

    useEffect(() => {
        console.log("new", raceState)
    }, [raceState])

    // useEffect(() => {
    //     if (raceState !== "" && classState !== "") {
    //         setFilteredCareer(constructionCharacter[raceState][classState])
    //     }
    // }, [raceState, classState])

    // useEffect(() => {
    //     if (careerState !== "") {
    //         setFilteredCareerSuperiorState(constructionCareer[careerState])
    //         //console.log(fileteredCareerSuperiorState)
    //     }
    // }, [careerState])

    // useEffect(() => {
    //     if (filteredCareerPlanState !== "") {
    //         const lowerCasePlanState = camelCase(filteredCareerPlanState)
    //         setCareerObjectState(constructionCareer[careerState][lowerCasePlanState])
    //         setFilteredStatutState(careerObjectState.statut)
    //     }
    // }, [filteredCareerPlanState])

    const arrClass = Object.keys(constructionCharacter.humain)

    return (
        <>
            {/* <ComboBoxAutoComplete item={itemClass} /> */}
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
                        {/* <option value="">Choisis une couleur de cheveux</option> */}
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
                    <ComboBoxAutoComplete itemsList={racesList} onItemChange={onRaceChange} name="race" rules={{ required: true }} control={control} />
                    {/* <label>Race</label>                
                    <select {...register("race", { required: true })} onChange={e => raceOnInput(e.target.value)}>
                        <option value="">Choisis une race</option>
                        <option value="humain">Humain</option>
                        <option value="halfeling">Halfeling</option>
                        <option value="nain">Nain</option>
                        <option value="hautElfe">Haut Elfe</option>
                        <option value="elfeSylvain">Elfe Sylvain</option>
                    </select> */}
                    {/* <ComboBoxAutoComplete itemsList={classList} onItemChange={onClassChange} {...register("class", { required: true })}/>   */}
                    {/* <label>Classe</label>
                    <select {...register("class", { required: true })} onChange={e => classOnInput(e.target.value)}>
                        {<option value="">Choisis une classe</option>}
                        {arrClass.map(classe => {
                            return (
                                <option value={classe}>{classe}</option>
                            )
                        })}
                    </select> */}
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
                    <select {...register("careerPlan", { required: true })} onChange={e => careerPlanOnInput(e.target.value)}>
                        <option value="">Choisir une spécialisation</option>
                        {Object.values(fileteredCareerSuperiorState).map(careerSuperior => {
                            return (
                                <option value={careerSuperior.name}>{careerSuperior.name}</option>
                            )
                        })}
                    </select>
                    <label>Statut</label>
                    <input type="text" defaultValue={filteredStatutState} {...register("statut", { required: true })} />
                    <button type="submit">Validage</button>
                </div>
            </form>
            {careerObjectState === "" ? (
                <section>
                    <p>Choisir une carriere pour voir les talents</p>
                </section>
            ) : (
                <section className="wrapperSkillz">
                    <h3>Compétences pour {careerObjectState.name}</h3>
                    <ul>
                        {careerObjectState.competences.map(competences => {
                            return (
                                <li>{competences}</li>
                            )
                        })}
                    </ul>
                    <h3>Talents pour {careerObjectState.name}</h3>
                    <ul>
                        {careerObjectState.talents.map(talents => {
                            return (
                                <li>{talents}</li>
                            )
                        })}
                    </ul>
                    <h3>Possessions pour {careerObjectState.name}</h3>
                    <ul>
                        {careerObjectState.possessions.map(possessions => {
                            return (
                                <li>{possessions}</li>
                            )
                        })}
                    </ul>

                </section>
            )}

        </>
    )
}