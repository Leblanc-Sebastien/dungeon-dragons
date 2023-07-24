export const constructionCharacter = {
    humain: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"]
    },
    elfeSylvain: {
        citadin: ["artisan"],
        courtisan: ["artiste", "emissaire", "espion"]
    }
}

//let careerFilteredByraceAndClass = []


// export const careerFiltered = (arrCreation, race, classe) =>{ 
//     let careerFilteredByraceAndClass = arrCreation[race][classe]
//     return careerFilteredByraceAndClass
// }

// console.log(careerFiltered(constructionCharacter ,"elfeSylvain", "citadin"))

class Race {

    constructor(name) {
        this.name = name
    }
}

class Classe extends Race{

    constructor(name, race) {
        this.name = name
        this.race = race
    }
}

class Career extends Classe{
    constructor(name, classe) {
        this.name = name
        this.classe = classe
    }
}