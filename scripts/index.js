/* initialisations + gestion des événements globaux (event click sur le clavier) */
const inputElement = document.getElementById("input");

const epoques = {
    1: new EgypteAntique(),
    2: new GreceAntique(),
    3: new MoyenAge()
};

// Initialise les instructions d'accueil
afficherContexteNarratif();

// Ajouter un écouteur d'événements pour capturer l'entrée de l'utilisateur
inputElement.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const userInput = inputElement.value.trim();
        if (userInput) {
            inputElement.value = ""; // clear input
            historiqueEcrans.push(afficherMenuEpoques);
            console.log(historiqueEcrans)
            afficherMenuEpoques();
        }
    }
});