// Récupère l'élément d'entrée du joueur
const inputElement = document.getElementById("input");

// Définit un objet contenant les différentes époques disponibles associées à un num
const epoques = {
    1: new EgypteAntique(),
    2: new GreceAntique(),
    3: new MoyenAge()
};

// Affiche l'introduction narrative au démarrage du jeu.
afficherContexteNarratif();

// Gestion des événements clavier
inputElement.addEventListener("keypress", handleInitialInput);

// Gérer la première entrée utilisateur après le contexte narratif
function handleInitialInput(event) {
    if (event.key === "Enter") {
        event.preventDefault(); //empêche l'action par défaut (soumission de formulaire).
        const userInput = inputElement.value.trim();
        if (userInput) {
            inputElement.value = ""; // efface l'entrée
            afficherMenuEpoques(); 
            inputElement.removeEventListener("keypress", handleInitialInput);
            inputElement.addEventListener("keypress", handleMenuInput); // Remplace l'écouteur d'événements initial par celui du menu
        }
    }
}

// Gérer les entrées utilisateur pour sélectionner une époque.
function handleMenuInput(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const userInput = inputElement.value.trim();
        if (userInput) {
            inputElement.value = ""; // clear input
                if (userInput in epoques) {
                    afficherEpoque(epoques[userInput]);
                    inputElement.removeEventListener("keypress", handleMenuInput);
                    inputElement.addEventListener("keypress", handleQuestInput); // Remplace l'écouteur du menu par celui des quêtes
                } else {
                    afficherInstructions("Choix invalide. Veuillez entrer 1, 2 ou 3.");
                }
            }
        }
    }

    // Gérer les entrées utilisateur lors des quêtes
    function handleQuestInput(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const userInput = inputElement.value.trim();
            if (userInput) {
                inputElement.value = ""; // clear input
                if (epoqueActuelle) {
                    // Si une époque actuelle est définie (époqueActuelle), vérifie la réponse de l'utilisateur
                    epoqueActuelle.verifierReponse(userInput);
                }
            }
        }
    }
