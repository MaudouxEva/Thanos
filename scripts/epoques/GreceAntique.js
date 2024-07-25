class GreceAntique extends Epoque {
    constructor() {
        super("Grèce Antique", 
            "Explorez les mythes et légendes de la Grèce Antique.",
            "ZUT! Hercule a mangé un pot-au-feu pourri... Le pauvre vomit ses tripes. \n\nvous devez accomplir ses douze travaux mythiques à sa place. \n\nRépondez correctement pour avancer, mais attention, une mauvaise réponse pourrait réveiller la colère des dieux.", 
            "une amulette grecque"

        );

        /* liste des questions de la quête */
        this.questions = [
            {
                question: "I. Comment Héraclès tue-t-il le lion de Némée ?\n\n",
                options: [
                    "Il l'endort avec une herbe soporifique avant de l'étrangler.\n",
                    "Il le tue en lui enfonçant son bras dans la gorge, l’étouffant et lui brisant la mâchoire.\n",
                    "Il utilise une épée enchantée pour trancher sa tête invulnérable.\n"
                ],
                correctOption: 1
            },
            {
                question: "II. Quelle était la principale difficulté pour tuer l'Hydre de Lerne ?\n\n",
                options: [
                    "Ses têtes repoussaient dès qu'elles étaient coupées.\n",
                    "Elle pouvait se téléporter pour échapper aux attaques.\n",
                    "Elle avait la capacité de contrôler l'esprit de ses ennemis.\n"
                ],
                correctOption: 0
            },
            {
                question: "III. Pourquoi capturer la biche de Cérynie était-il un défi ?\n\n",
                options: [
                    "Elle pouvait se transformer en différents animaux pour échapper à ses poursuivants.\n",
                    "Elle était protégée par une meute de loups féroces.\n",
                    "Elle était extrêmement rapide et sacrée pour Artémis.\n",
                ],
                correctOption: 2
            },
            {
                question: "IV. Quelle stratégie Héraclès utilise-t-il pour capturer le sanglier d'Érymanthe ?\n\n",
                options: [
                    "Il le poursuit dans la neige et l'attrape avec un filet.\n",
                    "Il attire le sanglier avec une mélodie envoûtante jouée sur une lyre.\n",
                    "Il utilise une poudre magique pour le rendre docile.\n"
                ],
                correctOption: 0
            },
            {
                question: "V. Quelle méthode Héraclès utilise-t-il pour nettoyer les écuries d'Augias en une journée ?\n\n",
                options: [
                    "Il invoque des esprits de la nature pour emporter la saleté.\n",
                    "Il détourne le cours de deux rivières pour laver les écuries.\n",
                    "Il utilise un bâton magique qui transforme le fumier en or.\n"
                ],
                correctOption: 1
            },
            {
                question: "VI. Comment Héraclès fait-il fuir les oiseaux du lac Stymphale ?\n\n",
                options: [
                    "Il fait appel à des harpies pour les chasser du lac.\n",
                    "Il utilise des crotales de bronze pour les effrayer.\n",
                    "Il empoisonne l'eau du lac pour les forcer à partir.\n"
                ],
                correctOption: 1
            },
            {
                question: "VII. Quelle était la mission d'Héraclès avec le taureau de Crète ?\n\n",
                options: [
                    "Le convaincre de tirer le char du roi Minos.\n",
                    "Le dompter pour qu'il garde les portes du labyrinthe.\n",
                    "Le capturer et le ramener à Mycènes.\n",
                ],
                correctOption: 2
            },
            {
                question: "VIII. Pourquoi les chevaux de Diomède étaient-ils si dangereux ?\n\n",
                options: [
                    "Ils étaient carnivores et se nourrissaient de chair humaine.\n",
                    "Ils pouvaient voler et attaquer depuis les airs.\n",
                    "Ils avaient des sabots empoisonnés qui tuaient au moindre coup.\n"
                ],
                correctOption: 0
            },
            {
                question: "IX. Comment Héraclès obtient-il la ceinture d'Hippolyte, la reine des Amazones ?\n\n",
                options: [
                    "Il l'emporte après un duel épique contre Hippolyte.\n",
                    "Il la convainc de la lui donner pacifiquement.\n",
                    "Il la vole discrètement pendant une fête organisée par les Amazones.\n"
                ],
                correctOption: 1
            },
            {
                question: "X. Quelle créature gardait les boeufs de Géryon ?\n\n",
                options: [
                    "Un serpent de mer géant.\n",
                    "Un sphinx capable de poser des énigmes mortelles.\n",
                    "Un chien à deux têtes nommé Orthos.\n",
                ],
                correctOption: 2
            },
            {
                question: "XI. Qui aide Héraclès à obtenir les pommes d'or du jardin des Hespérides ?\n\n",
                options: [
                    "Hermès, le messager des dieux.\n",
                    "Thésée, le héros athénien.\n",
                    "Atlas, le titan qui porte le ciel sur ses épaules.\n",
                ],
                correctOption: 2
            },
            {
                question: "XII. Quelle condition Hadès impose-t-il à Héraclès pour capturer Cerbère ?\n\n",
                options: [
                    "Ne jamais revenir aux Enfers après cette mission.\n",
                    "Capturer Cerbère sans utiliser d'armes.\n",
                    "Ramener une fleur magique en échange de Cerbère.\n"
                ],
                correctOption: 1
            }
        ];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0; // Initialiser le compteur de bonnes réponses
    }

    afficherQuete() {
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex];
            const instructionsText = question.question + question.options.map((opt, index) => `${index + 1}. ${opt}`).join("\n");
            document.getElementById("instructions").innerText = instructionsText;
            document.getElementById("feedback").innerText = ""; // Clear feedback for new question
        } else {
            this.finQuete(this.correctAnswers >= 8); // Appeler la méthode de fin de quête
        }
    }

    verifierReponse(reponse) {
        const question = this.questions[this.currentQuestionIndex];
        const feedbackElement = document.getElementById("feedback");

        const typewriter = new Typewriter(feedbackElement, {
            loop: false,
            delay: 50,
        });

        let feedbackMessage;
        if (parseInt(reponse) - 1 === question.correctOption) {
            this.correctAnswers++; // Incrémenter le compteur de bonnes réponses
            feedbackMessage = "Bonne réponse !";
        } else {
            feedbackMessage = "Réponse incorrecte. \n\nLa bonne réponse est : \n\n" + question.options[question.correctOption];
        }

        typewriter
            .typeString(feedbackMessage)
            .callFunction(() => {
                setTimeout(() => {
                    this.currentQuestionIndex++;
                    this.afficherQuete();
                }, 1500); // Délai de 2 secondes pour permettre la lecture du feedback
            })
            .start();
    }

    finQuete(reussi) {
        const instructions = document.getElementById("instructions");
        const feedback = document.getElementById("feedback");
        feedback.innerText = "";

        if (reussi) {
            const typewriter = new Typewriter(instructions, {
                loop: false,
                delay: 50,
            });

            typewriter
                .typeString("\n\n\nFélicitations l'ami ! \n\nVous avez validé cette quête !\n\n\n")
                .pauseFor(500)
                .typeString(`En récompense, vous recevez : \n\n${this.recompense}`)
                .start();
                
            joueur.ajouterRecompense(this.recompense); // Ajouter la récompense au joueur
        } else {
            instructions.innerHTML = `
            <p>Quête échouée. \n\nVous devez réussir au minimum 8 travaux.<br></p>
            <p>Recommencer la quête? (oui / non)</p>
            `;
            contexteActuel = "reessayerQuete";
        }

       
    }
}