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

    finQuete(reussi) {
        const instructions = document.getElementById("instructions");
        const feedback = document.getElementById("feedback");
        feedback.innerText = "";

        if (reussi) {
            const typewriter = new Typewriter(instructions, {
                loop: false,
                delay: 50,
            });

            typewriter
                .typeString("Félicitations l'ami ! Vous avez validé cette quête !\n\n")
                .pauseFor(500)
                .typeString(`En récompense, vous recevez : ${this.recompense}`)
                .start();
                
            joueur.ajouterRecompense(this.recompense); // Ajouter la récompense au joueur
        } else {
            instructions.innerHTML = `
                Quête échouée. Vous devez réussir au moins 2 phrases sur 3.<br>
                Recommencer la quête? (oui / non)
            `;
            contexteActuel = "reessayerQuete";
        }

        epoqueActuelle = null; // Retourner à l'état de choix d'époque après la fin de la quête
    }
}
