import {configureStore, createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'


const characterSlice = createSlice({
    name: "character",
    initialState:  [
        {
            id: uuidv4(),
            date: "16/09/1987",
            nom: "SuGii",
            race: "Nain",
            classe: "Guerrier",
            carriere: "Tueur de troll",
            age: "36",
            taille: "113",
            cheveux: "Chatain",
            yeux: "bleu"
        },
        {
            id: uuidv4(),
            date: "16/09/1989",
            nom: "Zizitop",
            race: "Elfe",
            classe: "Mage",
            carriere: "Mage du cul",
            age: "78",
            taille: "257",
            cheveux: "Blond",
            yeux: "LGBT"
        }
    ],
    reducers: {
       addCharacter: (state, action) => {
        const toDay = new Date()

            const newCharacter = {
                id: uuidv4(),
                date: toDay.getDate() + "/" + (toDay.getMonth() + 1) + "/" + toDay.getFullYear(),
                nom: action.payload,
                race: action.payload,
                classe: action.payload,
                carriere: action.payload,
                age: action.payload,
                taille: action.payload,
                cheveux: action.payload,
                yeux: action.payload
            }
            state.push(newCharacter)
        },
        deleteCharacter: (state , action) => {
            state = state.filter( character => character.id !== action.payload)
            console.log(state)
        },
        editCharacter: () => {} 
    }
})

export const store = configureStore({
    reducer: {
        character : characterSlice.reducer
    }
})