class MoyenAge extends Epoque {
    constructor() {
        super(
            "Moyen Âge",
            "Explorez les mystères et légendes du Moyen Âge.",
            "Une licorne enchantée, autrefois bienveillante, sème désormais la terreur à cause d'un sort maléfique. \nVotre mission est de l'apaiser sans la blesser mortellement. Atteignez le niveau d'apaisement nécessaire avant que l'une de vos vies ne s'épuise.\n\nSoyez aussi vif qu'une loutre !",
            "Corne de licorne enchantée"
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
            loop: true,
            delay: 50,
        });

        typewriter
            .typeString(actionMessage)
            .pauseFor(500)
            .typeString(`\n\nLa licorne vous inflige ${this.licorneAttaque()} dégâts.`)
            .start();

        setTimeout(() => {
            feedbackElement.innerText = "";
        }, 8000);

        this.verifierEtatCombat();
    }

    attaqueMesuree() {
        const degats = Math.floor(Math.random() * 10) + 5; // Dégâts entre 5 et 15
        this.licorneVie -= degats;
        this.apaisement += 5; // Augmente le niveau d'apaisement
        return `Vous attaquez et infligez ${degats} dégâts à la licorne.`;
    }

    defense() {
        const reductionDegats = Math.floor(Math.random() * 5) + 5; // Réduit les dégâts de la prochaine attaque de 5 à 10
        this.joueurVie += reductionDegats; // Augmente la vie du joueur pour simuler une réduction des dégâts
        return `Vous vous défendez et réduisez ${reductionDegats} points de dégâts.`;
    }

    chantEnchanteur() {
        const apaisementGain = Math.floor(Math.random() * 15) + 10; // Gain d'apaisement entre 10 et 25
        this.apaisement += apaisementGain;
        return `Vous chantez une jolie mélodie et apaisez la licorne de ${apaisementGain} points.`;
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
            .typeString("\n\n\nFélicitations l'ami ! \n\nVous avez validé cette quête !\n\n\n")
            .pauseFor(500)
            .typeString(`En récompense, vous recevez : \n\n${this.recompense}`)
            .start();
            joueur.ajouterRecompense(this.recompense); // Ajouter la récompense au joueur
        } else {
            instructions.innerHTML = `
            <p>Quête échouée. \n\nSoit vous avez tué la pauvre licorne, soit vous êtes morts comme une larve.</p>
            <p>Recommencer la quête? (oui / non)</p>
            `;
            contexteActuel = "reessayerQuete";
        }
    }
}
