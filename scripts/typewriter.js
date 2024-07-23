/* gestion de l'affichage avec effet typewriter : contexte narratif, texte des époques */

function afficherContexteNarratif() {
    const instructions = document.getElementById("instructions");
    const typewriter = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriter
        .typeString('Bienvenue à bord du Vaisseau Temporel "Thanos".')
        .pauseFor(1000)
        .typeString(' \nNous sommes actuellement bloqués dans le passé, sans possibilité de retour immédiat au présent.')
        .pauseFor(1000)
        .typeString(' \nVotre mission est de naviguer à travers les époques, d\'affronter les défis de chaque époque et d\'acquérir des artefacts précieux.')
        .pauseFor(1000)
        .typeString(' \nLe voyage ne sera pas facile, mais avec chaque époque traversée, et son lot d\'épreuves, vous vous rapprocherez un peu plus de votre objectif ultime : revenir en un morceau dans le présent.')
        .pauseFor(1000)
        .typeString('\n\nTapez n\'importe quelle commande pour commencer...')
        .start();
}

function afficherTexteEpoques() {
    const instructions = document.getElementById("instructions");
    const typewriter = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriter
        .typeString("Choisissez une époque à explorer :\n")
        .pauseFor(500)
        .typeString("1. Égypte Antique\n")
        .pauseFor(500)
        .typeString("2. Grèce Antique\n")
        .pauseFor(500)
        .typeString("3. Moyen-Âge\n")
        .start();
}


function afficherEpoque(epoque) {
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = ""; 

    const typewriter = new Typewriter(instructions, {
        loop: false,
        delay: 50,
    });

    typewriter
        .typeString(`Vous avez choisi de voyager dans : ${epoque.nom}`)
        .pauseFor(500)
        .typeString(epoque.description)
        .pauseFor(500)
        .typeString(epoque.afficherQuete())
        .start();
}

