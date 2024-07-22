class Epoque {
    constructor(nom, description, quete, recompense) {
        this.nom = nom;
        this.description = description;
        this.quete = quete;
        this.recompense = recompense;
    }

    afficherDescription() {
        return `${this.nom} : ${this.description}`;
    }

    afficherQuete() {
        return `\n\nValeureux guerrier, voici votre quête : ${this.quete}`;
    }
}