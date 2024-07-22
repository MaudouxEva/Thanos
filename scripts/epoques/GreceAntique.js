// class GreceAntique extends Epoque {
//     constructor() {
//         super("Grèce Antique", "Explorez les mythes et légendes de la Grèce Antique.", "Bouclier d'Achille");
//     }

//     afficherQuete() {
//         return "Quête de la Grèce Antique : Trouvez le Bouclier d'Achille.";
//     }

//     realiserQuete() {
//         console.log("Vous avez trouvé le Bouclier d'Achille !");
//         return this.recompense;
//     }
// }


class GreceAntique extends Epoque {
    constructor() {
        super("Grèce Antique", "Explorez les mythes et légendes de la Grèce Antique.");
        this.questions = [
            {
                question: "Comment Héraclès tue-t-il le lion de Némée ?",
                options: [
                    "Il le tue en lui enfonçant son bras dans la gorge, l’étouffant et lui brisant la mâchoire.",
                    "Il l'endort avec une herbe soporifique avant de l'étrangler.",
                    "Il utilise une épée enchantée pour trancher sa tête invulnérable."
                ],
                correctOption: 0
            },
            {
                question: "Quelle était la principale difficulté pour tuer l'Hydre de Lerne ?",
                options: [
                    "Ses têtes repoussaient dès qu'elles étaient coupées.",
                    "Elle pouvait se téléporter pour échapper aux attaques.",
                    "Elle avait la capacité de contrôler l'esprit de ses ennemis."
                ],
                correctOption: 0
            },
            {
                question: "Pourquoi capturer la biche de Cérynie était-il un défi ?",
                options: [
                    "Elle était extrêmement rapide et sacrée pour Artémis.",
                    "Elle pouvait se transformer en différents animaux pour échapper à ses poursuivants.",
                    "Elle était protégée par une meute de loups féroces."
                ],
                correctOption: 0
            },
            {
                question: "Quelle stratégie Héraclès utilise-t-il pour capturer le sanglier d'Érymanthe ?",
                options: [
                    "Il le poursuit dans la neige et l'attrape avec un filet.",
                    "Il attire le sanglier avec une mélodie envoûtante jouée sur une lyre.",
                    "Il utilise une poudre magique pour le rendre docile."
                ],
                correctOption: 0
            },
            {
                question: "Quelle méthode Héraclès utilise-t-il pour nettoyer les écuries d'Augias en une journée ?",
                options: [
                    "Il détourne le cours de deux rivières pour laver les écuries.",
                    "Il invoque des esprits de la nature pour emporter la saleté.",
                    "Il utilise un bâton magique qui transforme le fumier en or."
                ],
                correctOption: 0
            },
            {
                question: "Comment Héraclès fait-il fuir les oiseaux du lac Stymphale ?",
                options: [
                    "Il utilise des crotales de bronze pour les effrayer.",
                    "Il fait appel à des harpies pour les chasser du lac.",
                    "Il empoisonne l'eau du lac pour les forcer à partir."
                ],
                correctOption: 0
            },
            {
                question: "Quelle était la mission d'Héraclès avec le taureau de Crète ?",
                options: [
                    "Le capturer et le ramener à Mycènes.",
                    "Le convaincre de tirer le char du roi Minos.",
                    "Le dompter pour qu'il garde les portes du labyrinthe."
                ],
                correctOption: 0
            },
            {
                question: "Pourquoi les chevaux de Diomède étaient-ils si dangereux ?",
                options: [
                    "Ils étaient carnivores et se nourrissaient de chair humaine.",
                    "Ils pouvaient voler et attaquer depuis les airs.",
                    "Ils avaient des sabots empoisonnés qui tuaient au moindre coup."
                ],
                correctOption: 0
            },
            {
                question: "Comment Héraclès obtient-il la ceinture d'Hippolyte, la reine des Amazones ?",
                options: [
                    "Il la convainc de la lui donner pacifiquement.",
                    "Il l'emporte après un duel épique contre Hippolyte.",
                    "Il la vole discrètement pendant une fête organisée par les Amazones."
                ],
                correctOption: 0
            },
            {
                question: "Quelle créature gardait les boeufs de Géryon ?",
                options: [
                    "Un chien à deux têtes nommé Orthos.",
                    "Un serpent de mer géant.",
                    "Un sphinx capable de poser des énigmes mortelles."
                ],
                correctOption: 0
            },
            {
                question: "Qui aide Héraclès à obtenir les pommes d'or du jardin des Hespérides ?",
                options: [
                    "Atlas, le titan qui porte le ciel sur ses épaules.",
                    "Hermès, le messager des dieux.",
                    "Thésée, le héros athénien."
                ],
                correctOption: 0
            },
            {
                question: "Quelle condition Hadès impose-t-il à Héraclès pour capturer Cerbère ?",
                options: [
                    "Capturer Cerbère sans utiliser d'armes.",
                    "Ne jamais revenir aux Enfers après cette mission.",
                    "Ramener une fleur magique en échange de Cerbère."
                ],
                correctOption: 0
            }
        ];
        this.currentQuestionIndex = 0;
       
    }

    afficherQuete() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.afficherVictoire();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        let questionText = `${question.question}\n`;
        question.options.forEach((option, index) => {
            questionText += `${index + 1}. ${option}\n`;
        });

        afficherInstructions(questionText);
    }

    verifierReponse(reponse) {
        const question = this.questions[this.currentQuestionIndex];
        if (parseInt(reponse) - 1 === question.correctOption) {
            this.currentQuestionIndex++;
        } else {
            afficherInstructions("Réponse incorrecte. Réessayez.");
        }
        this.afficherQuete();
    }

    afficherVictoire() {
        afficherInstructions("Félicitations ! Vous avez réussi les 12 travaux d'Héraclès !");
    }
}

