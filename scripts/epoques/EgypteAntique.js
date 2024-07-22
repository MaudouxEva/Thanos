class EgypteAntique extends Epoque {
    constructor() {
        super("Égypte Antique", "Explorez les mystères des pharaons et des pyramides.", "Amulette d'Anubis");
    }

    afficherQuete() {
        return "Quête de l'Égypte Antique : Trouvez l'Amulette d'Anubis.";
    }

    realiserQuete() {
        console.log("Vous avez trouvé l'Amulette d'Anubis !");
        return this.recompense;
    }
}

