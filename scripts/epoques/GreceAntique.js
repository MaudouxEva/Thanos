class GreceAntique extends Epoque {
    constructor() {
        super("la Grèce Antique", 
            "Explorez les mythes et légendes de la Grèce Antique.",
            "Hercule a mangé un pot-au-feu pourri... Le pauvre vomit ses tripes. Vous devez réaliser ses 12 travaux à sa place. \nSoyez aussi vif qu'une loutre !",

        );

        /* liste des questions de la quête */
        this.questions = [
            {
                question: "Comment Héraclès tue-t-il le lion de Némée ?\n\n",
                options: [
                    "Il le tue en lui enfonçant son bras dans la gorge, l’étouffant et lui brisant la mâchoire.\n",
                    "Il l'endort avec une herbe soporifique avant de l'étrangler.\n",
                    "Il utilise une épée enchantée pour trancher sa tête invulnérable.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle était la principale difficulté pour tuer l'Hydre de Lerne ?\n\n",
                options: [
                    "Ses têtes repoussaient dès qu'elles étaient coupées.\n",
                    "Elle pouvait se téléporter pour échapper aux attaques.\n",
                    "Elle avait la capacité de contrôler l'esprit de ses ennemis.\n"
                ],
                correctOption: 0
            },
            {
                question: "Pourquoi capturer la biche de Cérynie était-il un défi ?\n\n",
                options: [
                    "Elle était extrêmement rapide et sacrée pour Artémis.\n",
                    "Elle pouvait se transformer en différents animaux pour échapper à ses poursuivants.\n",
                    "Elle était protégée par une meute de loups féroces.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle stratégie Héraclès utilise-t-il pour capturer le sanglier d'Érymanthe ?\n\n",
                options: [
                    "Il le poursuit dans la neige et l'attrape avec un filet.\n",
                    "Il attire le sanglier avec une mélodie envoûtante jouée sur une lyre.\n",
                    "Il utilise une poudre magique pour le rendre docile.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle méthode Héraclès utilise-t-il pour nettoyer les écuries d'Augias en une journée ?\n\n",
                options: [
                    "Il détourne le cours de deux rivières pour laver les écuries.\n",
                    "Il invoque des esprits de la nature pour emporter la saleté.\n",
                    "Il utilise un bâton magique qui transforme le fumier en or.\n"
                ],
                correctOption: 0
            },
            {
                question: "Comment Héraclès fait-il fuir les oiseaux du lac Stymphale ?\n\n",
                options: [
                    "Il utilise des crotales de bronze pour les effrayer.\n",
                    "Il fait appel à des harpies pour les chasser du lac.\n",
                    "Il empoisonne l'eau du lac pour les forcer à partir.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle était la mission d'Héraclès avec le taureau de Crète ?\n\n",
                options: [
                    "Le capturer et le ramener à Mycènes.\n",
                    "Le convaincre de tirer le char du roi Minos.\n",
                    "Le dompter pour qu'il garde les portes du labyrinthe.\n"
                ],
                correctOption: 0
            },
            {
                question: "Pourquoi les chevaux de Diomède étaient-ils si dangereux ?\n\n",
                options: [
                    "Ils étaient carnivores et se nourrissaient de chair humaine.\n",
                    "Ils pouvaient voler et attaquer depuis les airs.\n",
                    "Ils avaient des sabots empoisonnés qui tuaient au moindre coup.\n"
                ],
                correctOption: 0
            },
            {
                question: "Comment Héraclès obtient-il la ceinture d'Hippolyte, la reine des Amazones ?\n\n",
                options: [
                    "Il la convainc de la lui donner pacifiquement.\n",
                    "Il l'emporte après un duel épique contre Hippolyte.\n",
                    "Il la vole discrètement pendant une fête organisée par les Amazones.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle créature gardait les boeufs de Géryon ?\n\n",
                options: [
                    "Un chien à deux têtes nommé Orthos.\n",
                    "Un serpent de mer géant.\n",
                    "Un sphinx capable de poser des énigmes mortelles.\n"
                ],
                correctOption: 0
            },
            {
                question: "Qui aide Héraclès à obtenir les pommes d'or du jardin des Hespérides ?\n\n",
                options: [
                    "Atlas, le titan qui porte le ciel sur ses épaules.\n",
                    "Hermès, le messager des dieux.\n",
                    "Thésée, le héros athénien.\n"
                ],
                correctOption: 0
            },
            {
                question: "Quelle condition Hadès impose-t-il à Héraclès pour capturer Cerbère ?\n\n",
                options: [
                    "Capturer Cerbère sans utiliser d'armes.\n",
                    "Ne jamais revenir aux Enfers après cette mission.\n",
                    "Ramener une fleur magique en échange de Cerbère.\n"
                ],
                correctOption: 0
            }
        ];
        this.currentQuestionIndex = 0;
    }

    
    realiserQuete() {
        
    } 


    // realiserQuete() {
    //     if (this.currentQuestionIndex >= this.questions.length) {
    //         this.afficherVictoire();
    //         return;
    //     }

    //     const question = this.questions[this.currentQuestionIndex];
    //     let questionText = `${question.question}\n`;
    //     question.options.forEach((option, index) => {
    //         questionText += `${index + 1}. ${option}\n`;
    //     });

    //     afficherInstructions(questionText);
    // }

    // verifierReponse(reponse) {
    //     const question = this.questions[this.currentQuestionIndex];
    //     if (parseInt(reponse) - 1 === question.correctOption) {
    //         this.currentQuestionIndex++;
    //     } else {
    //         afficherInstructions("Réponse incorrecte. Réessayez.");
    //     }
    //     this.afficherQuete();
    // }

    // afficherVictoire() {
    //     afficherInstructions("Félicitations ! Vous avez réussi les 12 travaux d'Héraclès !");
    // }
}