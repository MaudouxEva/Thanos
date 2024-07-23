let historiqueEcrans = [];

function afficherMenuEpoques() {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; // supprime les précédentes instructions
    afficherTexteEpoques();
}

function afficherEpoque(epoque) {
    epoqueActuelle = epoque;
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; 
    epoque.afficherQuete();
}

function afficherInstructions(message) {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = message;
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
