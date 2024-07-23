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
                default:
                    console.error("Contexte inconnu : " + contexteActuel);
            }
        }
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

    const buttons = instructions.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            handleMenuInput(userInput);
        });
    }
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
