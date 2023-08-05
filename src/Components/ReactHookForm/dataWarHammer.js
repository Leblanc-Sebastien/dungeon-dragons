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
            name: "Pamphletaire",
            statut: "bronze 1",
            competences : ["competence de pamphletaire1","competence de pamphletaire2","competence de pamphletaire3","competence de pamphletaire4"],
            talents : ["talents de pamphletaire1","talents de pamphletaire2","talents de pamphletaire3","talents de pamphletaire4",],
            possessions: ["possesion de pamphletaire1","possesion de pamphletaire2","possesion de pamphletaire3","possesion de pamphletaire4",]
        },
        agitateur: {
            name: "Agitateur",
            statut: "bronze 2",
            competences : [],
            talents : [],
            possessions: []
        },
        fauteurDeTrouble: {
            name: "Fauteur de trouble",
            statut: "bronze 3",
            competences : [],
            talents : [],
            possessions: []
        },
        demagogue: {
            name: "Demagogue",
            statut: "bronze 5",
            competences : [],
            talents : [],
            possessions: []
        }
    },
    artisan : {
        apprenti: {
            name: "Apprenti",
            statut: "bronze 2",
            competences : [],
            talents : [],
            possessions: []
        },
        artisan: {
            name: "Artisan",
            statut: "argent 1",
            competences : ["michel1", "michel2", "michel3"],
            talents : [],
            possessions: []
        },
        maitreArtisan: {
            name: "Maitre artisan",
            statut: "argent 3",
            competences : [],
            talents : [],
            possessions: []
        },
        maitreDeGuilde: {
            name: "Maitre de guilde",
            statut: "or 1",
            competences : ["michel4", "michel5"],
            talents : [],
            possessions: []
        }
    },
    bourgeois : {
        greffier: {
            name: "Greffier",
            statut: "argent 1",
            competences : [],
            talents : [],
            possessions: []
        },
        bourgeois: {
            name: "Bourgeois",
            statut: "argent 2",
            competences : [],
            talents : [],
            possessions: []
        },
        conseillerMunicipal: {
            name: "Conseiller municipal",
            statut: "argent 5",
            competences : [],
            talents : [],
            possessions: []
        },
        bourgmestre: {
            name: "Bourgmestre",
            statut: "or 1",
            competences : [],
            talents : [],
            possessions: []
        }
    }
}
