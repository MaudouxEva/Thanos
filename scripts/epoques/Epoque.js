class Epoque {
    constructor(nom, description, recompense) {
        this.nom = nom;
        this.description = description;
        this.recompense = recompense;
    }

    afficherDescription() {
        return `${this.nom} : ${this.description}`;
    }

    afficherQuete() {
        throw new Error("Méthode 'afficherQuete()' non implémentée.");
    }

    realiserQuete() {
        throw new Error("Méthode 'realiserQuete()' non implémentée.");
    }
}

