class EgypteAntique extends Epoque {
    constructor() {
        super(
           "Égypte Antique",
            "Explorez les mystères de l'Égypte Antique.",
            "Déchiffrez les hiéroglyphes pour découvrir les phrases cachées.",
            "un scarabée d'or"
        );
        
        this.phrases = [
            "Le petit chat dort au soleil",
            "La bave de crapaud n'atteint pas la blanche colombe",
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
}
