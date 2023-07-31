export const constructionCharacter = {
    humain: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"],
        guerrier: ["cavalier", "chevalier", "garde", "gladiateur", "prêtre guerrier", "soldat", "spadassin"],
        itinerant: ["chasseur de Primes", "cocher", "colporteur", "flagellant", "messager", "patrouilleur routier", "répurgateur", "saltimbanque"],
        lettré: ["apothicaire", "érudit", "ingénieur", "juriste", "médecin", "nonne", "prêtre", "sorcier"],
        riverain: ["batelier", "contrebandier", "débardeur", "femme du fleuve", "marin", "naufrageur", "nautonier", "patrouilleur fluvial"],
        roublard: ["charlatan", "entremetteur", "hors-la-loi", " pilleur de tombes", "rançonneur", "receleur", "sorcier sauvage", "voleur"],
        rural: ["bailli", "chasseur", "éclaireur", "herboriste", "mineur", "mystique", "sorcier de village", "villageois"]
    },
    halfeling: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "emissaire", "espion", "intendant", "noble", "serviteur"],
        guerrier: ["garde", "gladiateur", "soldat",],
        itinerant: ["chasseur de Primes", "cocher", "colporteur", "messager", "patrouilleur routier", "saltimbanque"],
        lettré: ["apothicaire", "érudit", "ingénieur", "juriste", "médecin"],
        riverain: ["batelier", "contrebandier", "débardeur", "femme du fleuve", "marin", "nautonier", "patrouilleur fluvial"],
        roublard: ["charlatan", "entremetteur", "hors-la-loi", " pilleur de tombes", "rançonneur", "receleur", "voleur"],
        rural: ["bailli", "chasseur", "éclaireur", "herboriste", "mineur", "villageois"]
    },
    nain: {
        citadin: ["agitateur", "artisan", "bourgeois", "enqueteur", "marchand", "mendiant", "milicien", "ratier"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble", "serviteur"],
        guerrier: ["garde", "gladiateur", "soldat", "spadassin", "tueur"],
        itinerant: ["chasseur de Primes", "cocher", "colporteur", "messager", "saltimbanque"],
        lettré: ["apothicaire", "érudit", "ingénieur", "juriste", "médecin"],
        riverain: ["batelier", "contrebandier", "débardeur", "femme du fleuve", "marin", "naufrageur", "nautonier"],
        roublard: ["hors-la-loi", "rançonneur", "receleur", "voleur"],
        rural: ["bailli", "chasseur", "éclaireur", "mineur", "villageois"]
    },
    hautElfe: {
        citadin: ["artisan", "bourgeois", "enqueteur", "marchand", "milicien"],
        courtisan: ["artiste", "conseiller", "duelliste", "emissaire", "espion", "intendant", "noble"],
        guerrier: ["cavalier", "chevalier", "garde", "gladiateur", "soldat", "spadassin"],
        itinerant: ["chasseur de Primes", "messager", "saltimbanque"],
        lettré: ["apothicaire", "érudit", "juriste", "médecin", "sorcier"],
        riverain: ["batelier", "contrebandier", "marin"],
        roublard: ["charlatan", "entremetteur", "hors-la-loi"],
        rural: ["chasseur", "éclaireur", "herboriste"]
    },
    elfeSylvain: {
        citadin: ["artisan"],
        courtisan: ["artiste", "conseiller", "emissaire", "espion", "noble"],
        guerrier: ["cavalier", "chevalier", "garde", "gladiateur", "soldat"],
        itinerant: ["chasseur de Primes", "messager", "saltimbanque"],
        lettré: ["érudit", "sorcier"],
        riverain: ["naufrageur"],
        roublard: ["hors-la-loi"],
        rural: ["chasseur", "éclaireur", "herboriste", "mystique"]
    }
}

export const constructionCareer = {
    agitateur :{
        pamphletaire: {
            name: "pamphletaire",
            statut: "bronze 1",
            competences : [],
            talents : [],
            possessions: []
        },
        agitateur: {
            name: "agitateur",
            statut: "bronze 2",
            competences : [],
            talents : [],
            possessions: []
        },
        fauteurDeTrouble: {
            name: "fauteur de trouble",
            statut: "bronze 3",
            competences : [],
            talents : [],
            possessions: []
        },
        demagogue: {
            name: "démagogue",
            statut: "bronze 5",
            competences : [],
            talents : [],
            possessions: []
        }
    },
    artisan : {
        apprenti: {
            name: "apprenti",
            statut: "bronze 2",
            competences : [],
            talents : [],
            possessions: []
        },
        artisan: {
            name: "artisan",
            statut: "argent 1",
            competences : [],
            talents : [],
            possessions: []
        },
        maitreArtisan: {
            name: "maitre artisan",
            statut: "argent 3",
            competences : [],
            talents : [],
            possessions: []
        },
        maitreDeGuilde: {
            name: "maitre de guilde",
            statut: "or 1",
            competences : [],
            talents : [],
            possessions: []
        }
    },
    bourgeois : {
        greffier: {
            name: "greffier",
            statut: "argent 1",
            competences : [],
            talents : [],
            possessions: []
        },
        bourgeois: {
            name: "bourgeois",
            statut: "argent 2",
            competences : [],
            talents : [],
            possessions: []
        },
        conseillerMunicipal: {
            name: "conseiller municipal",
            statut: "argent 5",
            competences : [],
            talents : [],
            possessions: []
        },
        bourgmestre: {
            name: "bourgmestre",
            statut: "or 1",
            competences : [],
            talents : [],
            possessions: []
        }
    }
}



class Race {

    constructor(name) {
        this.name = name
    }
}

class Classe extends Race {

    constructor(name, race) {
        this.name = name
        this.race = race
    }
}

class Career extends Classe {
    constructor(name, classe) {
        this.name = name
        this.classe = classe
    }
}