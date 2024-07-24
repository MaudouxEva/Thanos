// Récupère l'élément d'entrée du joueur et les boutons de navigation
const inputElement = document.getElementById("input");
const menuButton = document.getElementById("menuBtn");
const rewardsButton = document.getElementById("recompenseBtn");

// initialisation d'un nouveau joueur
const joueur = new Joueur();

let contexteActuel = "accueil"; // Pour suivre le contexte actuel
let epoqueActuelle = null;

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
    contexteActuel = "menu"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Choisissez une époque à explorer :\n\n\n" +
        "1. Égypte Antique\n\n" +
        "2. Grèce Antique\n\n" +
        "3. Moyen-Âge\n\n";
}

function afficherRecompenses() {
    contexteActuel = "recompenses"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Voici vos récompenses :\n\n";
    const recompensesText = joueur.afficherRecompenses();
    instructions.innerHTML += recompensesText;
}

function afficherQuete(epoque) {
    epoqueActuelle = epoque;
    contexteActuel = "quete"; // Mise à jour du contexte
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; 
    epoque.afficherQuete();
}

function afficherDescriptionEpoque(epoque) {
    const instructions = document.getElementById("instructions");
    const typewriter = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriter
        .typeString(`Vous avez choisi de voyager dans : ${epoque.nom}\n\n`)
        .pauseFor(500)
        .typeString(epoque.description + "\n\n")
        .pauseFor(500)
        .typeString(epoque.quete)
        .pauseFor(500)
        .start();
}