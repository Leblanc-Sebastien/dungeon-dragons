export const constructionCharacter = {
    humain: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"]
    },
    halfeling: {
        citadin: ["agitateur","mendiant", "milicien", "ratier"],
        courtisan: ["duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"]
    },
    nain : {
        citadin: ["artisan", "bourgeois", "enqueteur", "ratier"],
        courtisan: ["artiste", "conseiller","espion", "intendant","serviteur"],
    },
    HautElfe: {
        citadin: ["agitateur", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion"]
    },
    elfeSylvain: {
        citadin: ["artisan"],
        courtisan: ["artiste", "emissaire", "espion"]
    }
}

export const constructionCareer = {
    agitateur : ["agitateur1", "agitateur2"],
    artisan : ["artisan1", "artisan2"],
    bourgeois: ["bourgeois1", "bourgeois2"],
    enqueteur: ["enqueteur1", "enqueteur2"],
    marchand: ["marchand1", "marchand2"],
    mendiant : ["mendiant1", "mendiant2"],
    milicien: ["milicien1", "milicien2"],
    ratier : ["ratier1", "ratier2"],
    artiste: ["artiste1", "artiste2"],
    conseiller: ["conseiller1", "conseiller2"],
    duelliste: ["duelliste1", "duelliste2"],
    emissaire: ["emissaire1", "emissaire2"],
    espion : ["espion1", "espion2"],
    intendant: ["intendant1", "intendant2"], 
    noble: ["noble1", "noble2"],
    serviteur : ["serviteur1", "serviteur2"]
}

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