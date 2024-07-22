class MoyenAge extends Epoque {
    constructor() {
        super("Moyen-Âge", "Participez aux tournois des chevaliers et explorez les châteaux forts.", "Épée de Lancelot");
    }

    afficherQuete() {
        return "Quête du Moyen-Âge : Trouvez l'Épée de Lancelot.";
    }

    realiserQuete() {
        console.log("Vous avez trouvé l'Épée de Lancelot !");
        return this.recompense;
    }
}


