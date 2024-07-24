class MoyenAge extends Epoque {
    constructor() {
        super(
            "Moyen Âge",
            "Explorez les mystères et légendes du Moyen Âge.",
            "Affrontez une licorne enchantée et apaisez-la sans la blesser mortellement.",
            "Corne de Licorne Enchantée"
        );

        this.reinitialiserQuete();
    }

    reinitialiserQuete() {
        this.licorneVie = 100;
        this.joueurVie = 100;
        this.apaisement = 0;
        this.queteReussie = false;
    }

    afficherQuete() {
        if (this.queteReussie) {
            this.finQuete(true);
            return;
        }

        document.getElementById("instructions").innerHTML = `
            <p class="titre">Vous devez apaiser la licorne enchantée sans la blesser mortellement.</p>
            <div class="infos-combat">
                <div class="stat">
                    <p>Statistiques des joueurs</p>
                    <p>Vie de la licorne: ${this.licorneVie}</p>
                    <p>Vie du joueur: ${this.joueurVie}</p>
                    <p>Niveau d'apaisement: ${this.apaisement}</p>
                </div>
                <div class="actions">
                    <p>Actions disponibles</p>
                    <p>1. Attaque Mesurée (A)</p>
                    <p>2. Défense (D)</p>
                    <p>3. Chant Enchanteur (C)</p>
                </div>
            </div>
        `;
    }

    verifierReponse(reponse) {
        const feedbackElement = document.getElementById("feedback");
        reponse = reponse.toUpperCase();

        let actionMessage = "";

        if (reponse === "A") {
            actionMessage = this.attaqueMesuree();
        } else if (reponse === "D") {
            actionMessage = this.defense();
        } else if (reponse === "C") {
            actionMessage = this.chantEnchanteur();
        } else {
            actionMessage = "Action invalide. Veuillez entrer A, D ou C.";
        }

        const typewriter = new Typewriter(feedbackElement, {
            loop: false,
            delay: 50,
        });

        typewriter
            .typeString(actionMessage)
            .pauseFor(500)
            .typeString(`\nLa licorne enchantée vous inflige ${this.licorneAttaque()} dégâts.`)
            .start();

        setTimeout(() => {
            feedbackElement.innerText = "";
        }, 2000);

        this.verifierEtatCombat();
    }

    attaqueMesuree() {
        const degats = Math.floor(Math.random() * 10) + 5; // Dégâts entre 5 et 15
        this.licorneVie -= degats;
        this.apaisement += 5; // Augmente le niveau d'apaisement
        return `Vous avez effectué une attaque mesurée et infligé ${degats} dégâts à la licorne.`;
    }

    defense() {
        const reductionDegats = Math.floor(Math.random() * 5) + 5; // Réduit les dégâts de la prochaine attaque de 5 à 10
        this.joueurVie += reductionDegats; // Augmente la vie du joueur pour simuler une réduction des dégâts
        return `Vous vous êtes défendu et avez réduit les dégâts de ${reductionDegats} points.`;
    }

    chantEnchanteur() {
        const apaisementGain = Math.floor(Math.random() * 15) + 10; // Gain d'apaisement entre 10 et 25
        this.apaisement += apaisementGain;
        return `Vous avez chanté une mélodie apaisante et augmenté le niveau d'apaisement de ${apaisementGain} points.`;
    }

    licorneAttaque() {
        const degats = Math.floor(Math.random() * 10) + 5; // Dégâts entre 5 et 15
        this.joueurVie -= degats;
        return degats;
    }

    verifierEtatCombat() {
        if (this.licorneVie <= 0) {
            this.finQuete(false);
        } else if (this.joueurVie <= 0) {
            this.finQuete(false);
        } else if (this.apaisement >= 100) {
            this.finQuete(true);
        } else {
            this.afficherQuete();
        }
    }

    finQuete(reussi) {
        const instructions = document.getElementById("instructions");
        const feedback = document.getElementById("feedback");
        feedback.innerText = "";

        if (reussi) {
            this.queteReussie = true; // Marquer la quête comme réussie
            const typewriter = new Typewriter(instructions, {
                loop: false,
                delay: 50,
            });

            typewriter
                .typeString("Félicitations l'ami ! Vous avez apaisé la licorne enchantée.")
                .pauseFor(500)
                .typeString(`\n\nEn récompense, vous recevez : \n\n${this.recompense}.`)
                .start();
                
            joueur.ajouterRecompense(this.recompense); // Ajouter la récompense au joueur
        } else {
            instructions.innerHTML = `
            Quête échouée. La licorne est soit trop blessée, soit vous êtes trop épuisé.<br>
            Recommencer la quête? (oui / non)
            `;
            contexteActuel = "reessayerQuete";
        }
    }
}
