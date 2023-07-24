export const constructionCharacter = {
    // citadin: {
    //     agitateur: ["humain", "nain", "halfling"],
    //     artisan: ["humain", "nain", "halfling", "haut elfe", "elfe sylvain"],
    //     bourgeois: ["humain", "nain", "halfling", "haut elfe"],
    //     enqueteur: ["humain", "nain", "halfling", "haut elfe"],
    //     marchand: ["humain", "nain", "halfling", "haut elfe"],
    //     mendiant: ["humain", "nain", "halfling"],
    //     milicien: ["humain", "nain", "halfling", "haut elfe"],
    //     ratier: ["humain", "nain", "halfling"]
    // },
    // courtisan: {
    //     artiste: ["humain", "nain", "halfling", "haut elfe", "elfe sylvain"],
    //     conseiller: ["humain", "nain", "halfling", "haut elfe"],
    //     duelliste: ["humain", "nain", "haut elfe", "elfe sylvain"],
    //     emissaire: ["humain", "nain", "halfling", "haut elfe", "elfe sylvain"],
    //     espion: ["humain", "nain", "halfling", "haut elfe", "elfe sylvain"],
    //     intendant: ["humain", "nain", "halfling", "haut elfe"],
    //     noble: ["humain", "nain", "haut elfe", "elfe sylvain"],
    //     serviteur: ["humain", "nain", "halfling"],
    // },
    humain: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"]
    },
    elfeSylvain: {
        citadin: ["artisan"],
        courtisan: ["artiste", "emissaire", "espion"]
    }
}

for (const classe in constructionCharacter) {
    if (classe === "humain") {
        console.log(typeof classe)
    }
}



class Race {

    constructor(name) {
        this.name = name
    }
}

class Classe {

    constructor(name, race) {
        this.name = name
        this.race = race
    }
}

class Career {
    constructor(name, classe) {
        this.name = name
        this.classe = classe
    }
}



