function afficherMenuEpoques() {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; // Supprime les précédentes instructions
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

function afficherRecompenses() {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Voici vos récompenses :\n\n";
    // Ajoutez ici le code pour afficher les récompenses du joueur
}

