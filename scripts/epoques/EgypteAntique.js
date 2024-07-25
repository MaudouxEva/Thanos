class EgypteAntique extends Epoque {
    constructor() {
        super(
           "Égypte Antique",
            "Explorez les mystères de l'Égypte Antique.",
            "La grande pyramide de Gizeh renferme des symboles sacrés qui racontent l'histoire des pharaons et divinités. \n\nDéchiffrez les hiéroglyphes et découvrez la phrase secrète pour progresser dans votre aventure. \n\nMais attention, chaque erreur pourrait déclencher une malédiction !",
            "Scarabé Doré"
        );
        
        this.phrases = [
            "le petit chat dort au soleil",
            "la bave de crapaud n'atteint pas la blanche colombe",
            "les singes de la foret dansent à Liège"
        ];
        this.phraseIndex = 0;
        this.motsTrouves = [];
        this.tentativesRatees = 0;
        this.phrasesReussies = 0;
    }

    afficherQuete() {
        const phrase = this.phrases[this.phraseIndex];
        const motsPhrase = phrase.split(' ');
        const phraseAvecMotsTrouves = motsPhrase
            .map(mot => this.motsTrouves.includes(mot) ? mot : '_'.repeat(mot.length))
            .join(' ');

        document.getElementById("instructions").innerHTML = `
            <p class="hieroglyph">${phrase}</p>
            <p>${phraseAvecMotsTrouves}</p>
        `;
    }

    verifierReponse(reponse) {
        const phrase = this.phrases[this.phraseIndex];
        const motsPhrase = phrase.split(' ');
        const feedbackElement = document.getElementById("feedback");

        if (motsPhrase.includes(reponse)) {
            if (!this.motsTrouves.includes(reponse)) {
                this.motsTrouves.push(reponse);
                feedbackElement.innerText = "Vous avez trouvé un mot !";
            } else {
                feedbackElement.innerText = "Ce mot a déjà été trouvé.";
            }
        } else {
            this.tentativesRatees++;
            feedbackElement.innerText = `Ce mot n'est pas présent dans la phrase. Tentatives restantes : ${10 - this.tentativesRatees}`;
        }

        // Effacer le feedback après 2 secondes
        setTimeout(() => {
            feedbackElement.innerText = "";
        }, 2000);

        // Vérifier si toutes les tentatives ont été utilisées
        if (this.tentativesRatees >= 10) {
            this.passerPhraseSuivante(false);
        } else {
            const tousMotsTrouves = motsPhrase.every(mot => this.motsTrouves.includes(mot));
            if (tousMotsTrouves) {
                this.passerPhraseSuivante(true);
            } else {
                this.afficherQuete();
            }
        }
    }

    passerPhraseSuivante(reussie) {
        if (reussie) {
            this.phrasesReussies++;
        }

        this.phraseIndex++;
        this.motsTrouves = [];
        this.tentativesRatees = 0;

        if (this.phraseIndex < this.phrases.length) {
            this.afficherQuete();
        } else {
            this.finQuete(this.phrasesReussies >= 2); // Appeler la méthode de fin de quête
        }
    }

    finQuete(reussi) {
        const instructions = document.getElementById("instructions");
        const feedback = document.getElementById("feedback");
        feedback.innerText = "";

        if (reussi) {
            const typewriter = new Typewriter(instructions, {
                loop: true,
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
            <p>Quête échouée. \n\nVous devez déchiffrer au moins 2 phrases sur 3.<br></p>
            <p>Recommencer la quête? (oui / non)</p>
            `;
            contexteActuel = "reessayerQuete";
        }

        
    }
}

