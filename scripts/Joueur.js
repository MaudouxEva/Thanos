class Joueur {
    constructor() {
        this.recompenses = this.recupererRecompenses();
    }

    ajouterRecompense(recompense) {
        if (!this.recompenses.includes(recompense)) { // Vérifie si la récompense est déjà dans le tableau
            this.recompenses.push(recompense);
            this.sauvegarderRecompenses();
        }
    }

    sauvegarderRecompenses() {
        localStorage.setItem('recompenses', JSON.stringify(this.recompenses));
    }

    recupererRecompenses() {
        const recompenses = localStorage.getItem('recompenses');
        return recompenses ? JSON.parse(recompenses) : [];
    }

    afficherRecompenses() {
        return this.recompenses.length > 0
            ? this.recompenses.join('\n')
            : "Aucune récompense obtenue pour le moment.";
    }
}
