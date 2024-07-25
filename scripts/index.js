// Récupère l'élément d'entrée du joueur et les boutons de navigation
const inputElement = document.getElementById("input");
const menuButton = document.getElementById("menuBtn");
const rewardsButton = document.getElementById("recompenseBtn");

// initialisation d'un nouveau joueur
const joueur = new Joueur();

let contexteActuel = "accueil"; // Pour suivre le contexte actuel
let epoqueActuelle = null;
let typewriterInstance = null; // Stocker l'instance de Typewriter

// Définit un objet contenant les différentes époques disponibles associées à un num
const epoques = {
    1: new EgypteAntique(),
    2: new GreceAntique(),
    3: new MoyenAge()
};

// Affiche l'introduction narrative au démarrage du jeu.
afficherContexteNarratif();

// Ajouter des gestionnaires d'événements pour les boutons
menuButton.addEventListener("click", afficherMenuEpoques);
rewardsButton.addEventListener("click", afficherRecompenses);

// Gestion des événements clavier
inputElement.addEventListener("keypress", handleInput);
document.addEventListener("keydown", handleSkip); // Global keydown event

function handleSkip(event) {
    if (event.shiftKey && event.code === "KeyS") {
        if (typewriterInstance) {
            typewriterInstance.stop(); // Arrête le typewriter
            typewriterInstance.elements.cursor.style.display = 'none'; // Masquer le curseur
            typewriterInstance.state.strings.forEach(str => {
                typewriterInstance.elements.wrapper.innerHTML += str; // Affiche tout le texte
            });
            typewriterInstance = null; // Réinitialiser l'instance après affichage
        }
    }
}

function handleInput(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // empêche l'action par défaut (soumission de formulaire).
        const userInput = inputElement.value.trim();
        if (userInput) {
            inputElement.value = ""; // efface l'entrée
            switch (contexteActuel) {
                case "accueil":
                    afficherMenuEpoques();
                    contexteActuel = "menu";
                    break;
                case "menu":
                    handleMenuInput(userInput);
                    break;
                case "description":
                    afficherQuete(epoqueActuelle);
                    contexteActuel = "quete";
                    break;
                case "quete":
                    handleQuestInput(userInput);
                    break;
                case "reessayerQuete":
                    handleReessayerQuete(userInput);
                    break;
                default:
                    console.error("Contexte inconnu : " + contexteActuel);
            }
        }
    }
}

function handleReessayerQuete(userInput) {
    if (userInput.toLowerCase() === "oui") {
        if (epoqueActuelle instanceof EgypteAntique) {
            epoqueActuelle = new EgypteAntique(); // Réinitialiser l'époque actuelle
        } else if (epoqueActuelle instanceof GreceAntique) {
            epoqueActuelle = new GreceAntique(); // Réinitialiser l'époque actuelle
        } else if (epoqueActuelle instanceof MoyenAge) {
            epoqueActuelle = new MoyenAge(); // Réinitialiser l'époque actuelle
        }
        if (!epoqueActuelle.queteReussie) {
            afficherDescriptionEpoque(epoqueActuelle);
            contexteActuel = "description";
        } else {
            afficherInstructions("Vous avez déjà réussi cette quête.");
            setTimeout(() => {
                afficherMenuEpoques();
                contexteActuel = "menu";
            }, 2000);
        }
    } else if (userInput.toLowerCase() === "non") {
        afficherMenuEpoques();
        contexteActuel = "menu";
    } else {
        afficherInstructions("Veuillez répondre par 'oui' ou 'non'.");
    }
}

function handleMenuInput(userInput) {
    if (userInput in epoques) {
        epoqueActuelle = epoques[userInput];
        afficherDescriptionEpoque(epoqueActuelle);
        contexteActuel = "description";
    } else {
        afficherInstructions("Choix invalide. Veuillez entrer 1, 2 ou 3.");
    }
}

function handleQuestInput(userInput) {
    if (epoqueActuelle) {
        epoqueActuelle.verifierReponse(userInput);
    }
}

function afficherMenuEpoques() {
    const img_banniere = document.querySelector('.banniere');
    img_banniere.style.display = 'none'; // Cacher la bannière

    contexteActuel = "menu"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Choisissez une époque à explorer :\n\n\n" +
        "1. Égypte Antique\n\n" +
        "2. Grèce Antique\n\n" +
        "3. Moyen-Âge\n\n";
}

function afficherRecompenses() {
    const img_banniere = document.querySelector('.banniere');
    img_banniere.style.display = 'none'; // Cacher la bannière

    contexteActuel = "recompenses"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Voici vos récompenses :\n\n";
    const recompensesText = joueur.afficherRecompenses();
    instructions.innerHTML += recompensesText;
}

function afficherQuete(epoque) {
    const img_banniere = document.querySelector('.banniere');
    img_banniere.style.display = 'none'; // Cacher la bannière

    epoqueActuelle = epoque;
    contexteActuel = "quete"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; 
    epoque.afficherQuete();
}

function afficherDescriptionEpoque(epoque) {
    const img_banniere = document.querySelector('.banniere');
    const instructions = document.getElementById("instructions");
    let imageSrc = "";
    let imageId = "";

    switch (epoque.nom) {
        case "Égypte Antique":
            imageSrc = "egypte-ban.jpg";
            imageId = "banniere-egypte"; // Id pour Égypte Antique
            break;
        case "Grèce Antique":
            imageSrc = "grece-ban.jpg";
            imageId = "banniere-grece"; // Id pour Grèce Antique
            break;
        case "Moyen Âge":
            imageSrc = "moyen-age-ban.jpg";
            imageId = "banniere-moyen-age"; // Id pour Moyen Âge
            break;
    }

    img_banniere.src = './images/' + imageSrc;
    img_banniere.alt = "Bannière " + epoque.nom;
    img_banniere.classList.add("banniere");
    img_banniere.id = imageId; // Ajouter l'id
    img_banniere.style.display = 'block'; // Afficher la bannière

    instructions.innerHTML = ""; // Clear previous instructions

    typewriterInstance = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriterInstance
        .typeString(`Vous avez choisi de voyager dans : ${epoque.nom}\n\n`)
        .pauseFor(500)
        .typeString(epoque.description + "\n\n")
        .pauseFor(500)
        .typeString(epoque.quete)
        .pauseFor(500)
        .callFunction(() => {
            typewriterInstance = null; // Réinitialiser l'instance après typage
        })
        .start();
}

function afficherContexteNarratif() {
    const instructions = document.getElementById("instructions");
    typewriterInstance = new Typewriter(instructions, {
        loop: false,
        delay: 75,
    });

    typewriterInstance
        .typeString('Bienvenue à bord du Vaisseau Temporel "Thanos".')
        .pauseFor(1000)
        .typeString(' \nNous sommes actuellement bloqués dans le passé, sans possibilité de retour immédiat au présent.')
        .pauseFor(1000)
        .typeString(' \nVotre mission est de naviguer à travers les époques, d\'affronter les défis de chaque époque et d\'acquérir des artefacts précieux.')
        .pauseFor(1000)
        .typeString(' \nLe voyage ne sera pas facile, mais avec chaque époque traversée, et son lot d\'épreuves, vous vous rapprocherez un peu plus de votre objectif ultime : revenir en un morceau dans le présent.')
        .pauseFor(1000)
        .typeString('\n\nTapez n\'importe quelle commande pour commencer...')
        .callFunction(() => {
            typewriterInstance = null; // Réinitialiser l'instance après typage
        })
        .start();
}

function afficherTexteEpoques() {
    const instructions = document.getElementById("instructions");
    typewriterInstance = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriterInstance
        .typeString("Choisissez une époque à explorer :\n")
        .pauseFor(500)
        .typeString("1. Égypte Antique\n")
        .pauseFor(500)
        .typeString("2. Grèce Antique\n")
        .pauseFor(500)
        .typeString("3. Moyen-Âge\n")
        .callFunction(() => {
            typewriterInstance = null; // Réinitialiser l'instance après typage
        })
        .start();
}

function afficherMessageRecompense(recompense) {
    const instructions = document.getElementById("instructions");
    typewriterInstance = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriterInstance
        .typeString("Félicitations l'ami ! Vous avez validé cette quête !\n\n")
        .pauseFor(500)
        .typeString(`En récompense, vous recevez : ${recompense}`)
        .callFunction(() => {
            typewriterInstance = null; // Réinitialiser l'instance après typage
        })
        .start();
}
