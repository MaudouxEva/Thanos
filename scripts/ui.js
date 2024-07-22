let historiqueEcrans = [];

function afficherInstructions(texte) {
    const instructions = document.getElementById("instructions");
    instructions.innerText = texte;
}

function afficherMenuEpoques() {
    historiqueEcrans.push(afficherMenuEpoques);
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; // clear current instructions
    afficherTexteEpoques();

    const inputElement = document.getElementById("input");

    // Supprimer les anciens écouteurs pour éviter les duplications
    const newInputElement = inputElement.cloneNode(true);
    inputElement.parentNode.replaceChild(newInputElement, inputElement);

    newInputElement.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const userInput = newInputElement.value.trim();
            if (userInput in epoques) {
                newInputElement.value = ""; // clear input
                historiqueEcrans.push(() => afficherEpoque(epoques[userInput]));
                afficherEpoque(epoques[userInput]);
            } else {
                instructions.innerHTML = "Choix invalide. Veuillez entrer 1, 2 ou 3.";
            }
        }
    });
}

// function afficherEpoque(epoque) {
//     const instructions = document.getElementById("instructions");
//     instructions.innerHTML = ""; // Clear current instructions
//     const typewriter = new Typewriter(instructions, {
//         loop: false,
//         delay: 50,
//     });

//     typewriter
//         .typeString(`Vous avez choisi : ${epoque.nom}\n`)
//         .pauseFor(500)
//         .typeString(epoque.description)
//         .start();
// }

function afficherEpoque(epoque) {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; // clear current instructions
    epoque.afficherQuete();

    const inputElement = document.getElementById("input");
    const handleAnswer = function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const userInput = inputElement.value.trim();
            if (userInput) {
                inputElement.value = ""; // clear input
                epoque.verifierReponse(userInput);
            }
        }
    };

    inputElement.removeEventListener("keypress", handleAnswer); // Remove previous event listener
    inputElement.addEventListener("keypress", handleAnswer);
}

function revenirEcranPrecedent() {
    if (historiqueEcrans.length > 1) {
        historiqueEcrans.pop();
        const ecranPrecedent = historiqueEcrans[historiqueEcrans.length - 1];
        ecranPrecedent();
    }
}

// Ajouter un gestionnaire d'événements global pour la touche Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        revenirEcranPrecedent();
    }
});
