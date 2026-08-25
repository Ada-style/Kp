// Kpékpé Learnia — Données Pédagogiques Officielles (V2 + RAG Architecture)

export const CURRICULUM_DATA = {
  classes: [
    // Collège
    { id: "6e", name: "Classe de 6ème", cycle: "Collège", niveau: "6e" },
    { id: "5e", name: "Classe de 5ème", cycle: "Collège", niveau: "5e" },
    { id: "4e", name: "Classe de 4ème", cycle: "Collège", niveau: "4e", default: true },
    { id: "3e", name: "Classe de 3ème (BEPC)", cycle: "Collège", niveau: "3e", exam: true },

    // Lycée
    { id: "2nde-a", name: "Seconde A (Littéraire)", cycle: "Lycée", niveau: "2nde" },
    { id: "2nde-cd", name: "Seconde CD (Scientifique)", cycle: "Lycée", niveau: "2nde" },
    { id: "1ere-a", name: "Première A (Littéraire)", cycle: "Lycée", niveau: "1ere" },
    { id: "1ere-c", name: "Première C (Maths & Sciences)", cycle: "Lycée", niveau: "1ere" },
    { id: "1ere-d", name: "Première D (Sciences de la Vie)", cycle: "Lycée", niveau: "1ere" },
    { id: "tle-a", name: "Terminale A (Baccalauréat)", cycle: "Lycée", niveau: "Terminale", exam: true },
    { id: "tle-c", name: "Terminale C (Baccalauréat)", cycle: "Lycée", niveau: "Terminale", exam: true },
    { id: "tle-d", name: "Terminale D (Baccalauréat)", cycle: "Lycée", niveau: "Terminale", exam: true }
  ],

  subjects: [
    {
      id: "maths",
      name: "Mathématiques",
      code: "MATH",
      icon: "calculator",
      color: "#00963F",
      bgColor: "#ECFAF1",
      progress: 48,
      totalChapters: 8,
      completedChapters: 2,
      currentChapterId: "fonctions-affines",
      description: "Algèbre, géométrie, fonctions et résolution de problèmes logiques.",
      coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "anglais",
      name: "Anglais",
      code: "ENG",
      icon: "languages",
      color: "#3182BD",
      bgColor: "#EBF5FB",
      progress: 62,
      totalChapters: 8,
      completedChapters: 1,
      currentChapterId: "daily-routines",
      description: "Grammaire, vocabulaire, compréhension orale et expression écrite.",
      coverImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "physique",
      name: "Physique-Chimie",
      code: "PC",
      icon: "zap",
      color: "#E53935",
      bgColor: "#FDEDEC",
      progress: 73,
      totalChapters: 6,
      completedChapters: 1,
      currentChapterId: "loi-ohm",
      description: "Électricité, mécanique, chimie des solutions et énergie.",
      coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "svt",
      name: "SVT",
      code: "SVT",
      icon: "leaf",
      color: "#12A34D",
      bgColor: "#EAF7EE",
      progress: 35,
      totalChapters: 6,
      completedChapters: 1,
      currentChapterId: "photosynthese",
      description: "Biologie, sciences du vivant, environnement et santé.",
      coverImage: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "francais",
      name: "Français",
      code: "FR",
      icon: "book-open",
      color: "#8E44AD",
      bgColor: "#F4ECF7",
      progress: 81,
      totalChapters: 7,
      completedChapters: 2,
      currentChapterId: "argumentation",
      description: "Littérature, grammaire, expression et analyse de textes.",
      coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
    }
  ],

  chapters: {
    "maths": [
      {
        id: "nombres-relatifs",
        number: 1,
        title: "Nombres relatifs et opérations",
        status: "completed",
        progress: 100,
        summary: "Addition, soustraction, multiplication et ordre de priorité sur les entiers relatifs."
      },
      {
        id: "calcul-litteral",
        number: 2,
        title: "Calcul littéral et factorisation",
        status: "completed",
        progress: 100,
        summary: "Développement, identités remarquables et factorisations simples."
      },
      {
        id: "fonctions-affines",
        number: 3,
        title: "Fonctions affines",
        subtitle: "Comprends comment une variation transforme une représentation graphique.",
        status: "in_progress",
        progress: 68,
        featured: true,
        estimatedTime: "25 min",
        xpReward: 120,
        ragBriefing: {
          accroche: "Bonjour Kofi ! Bienvenue sur la séance des Fonctions affines.",
          resumeExpress: [
            "Une fonction affine s'écrit f(x) = ax + b.",
            "'a' est le coefficient directeur (la pente) et 'b' est l'ordonnée à l'origine (valeur pour x=0).",
            "Sa représentation graphique est toujours une droite.",
            "Si a > 0 la fonction est croissante, si a < 0 elle est décroissante, et si b = 0 c'est une fonction linéaire f(x) = ax."
          ],
          actionsSuggerees: [
            { label: "1. Lire le cours complet", tab: "comprendre" },
            { label: "2. Manipuler le graphique interactif", tab: "explorer" },
            { label: "3. Réviser les flashcards", tab: "memoriser" },
            { label: "4. Démarrer le quiz", tab: "entrainer" }
          ]
        },
        content: {
          comprendre: {
            introduction: "Une fonction affine est un modèle mathématique fondamental qui décrit une relation où une quantité évolue de façon régulière et proportionnelle à partir d'une valeur de départ.",
            notions: [
              {
                id: "notion-1",
                badge: "Notion clé 1",
                titre: "Formule générale d'une fonction affine",
                formule: "f(x) = ax + b",
                explication: "Toute fonction affine associe à un nombre x le nombre f(x) obtenu en multipliant x par le coefficient directeur 'a', puis en ajoutant l'ordonnée à l'origine 'b'.",
                details: [
                  "a est appelé le coefficient directeur (ou pente). Il mesure le taux d'accroissement.",
                  "b est l'ordonnée à l'origine. C'est la valeur de f(x) lorsque x = 0 (le point où la droite coupe l'axe vertical des ordonnées)."
                ],
                exempleLocal: {
                  titre: "Exemple de la vie courante : Tarif d'un Zémidjan à Lomé",
                  contexte: "Un conducteur de moto-taxi applique une prise en charge fixe de 200 FCFA au démarrage, puis facture 150 FCFA par kilomètre parcouru (x).",
                  calcul: "Prix(x) = 150x + 200",
                  analyse: "Ici, a = 150 (taux par km) et b = 200 (valeur initiale). Si tu parcours 4 km : Prix(4) = 150 × 4 + 200 = 600 + 200 = 800 FCFA."
                }
              },
              {
                id: "notion-2",
                badge: "Notion clé 2",
                titre: "Sens de variation et signe de la pente 'a'",
                explication: "L'allure de la droite dépend uniquement du signe du coefficient directeur a :",
                variations: [
                  {
                    condition: "Si a > 0",
                    nom: "Fonction strictement croissante",
                    description: "La droite 'monte' de gauche à droite. Plus x augmente, plus f(x) augmente.",
                    badgeClass: "badge-green"
                  },
                  {
                    condition: "Si a < 0",
                    nom: "Fonction strictement décroissante",
                    description: "La droite 'descend' de gauche à droite. Plus x augmente, plus f(x) diminue.",
                    badgeClass: "badge-red"
                  },
                  {
                    condition: "Si a = 0",
                    nom: "Fonction constante (f(x) = b)",
                    description: "La droite est parfaitement horizontale. f(x) garde la même valeur pour tout x.",
                    badgeClass: "badge-blue"
                  }
                ]
              },
              {
                id: "notion-3",
                badge: "Notion clé 3",
                titre: "Cas particulier : La fonction linéaire (b = 0)",
                formule: "f(x) = ax",
                explication: "Lorsque b = 0, la fonction affine devient une fonction linéaire. Sa droite passe obligatoirement par l'origine du repère O(0, 0). C'est le modèle de la proportionnalité pure (ex : achat de mangues à 100 FCFA l'unité, Prix(x) = 100x)."
              }
            ],
            pointsCles: [
              "La représentation graphique d'une fonction affine est TOUJOURS une droite.",
              "Pour tracer une droite, il suffit de calculer les coordonnées de DEUX points distincts.",
              "Le coefficient directeur se calcule avec la formule : a = (yB - yA) / (xB - xA)."
            ],
            piegeAEviter: "Attention à ne pas inverser l'axe des abscisses (x horizontal) et l'axe des ordonnées (y vertical). L'ordonnée à l'origine 'b' se lit toujours sur l'axe vertical !"
          },

          explorer: {
            type: "affine_graph",
            initialValues: { a: 2, b: 3 },
            presets: [
              { label: "Exemple type (a = 2, b = 3)", a: 2, b: 3, note: "Pente positive, passe par (0, 3)" },
              { label: "Linéaire (b = 0)", a: 1.5, b: 0, note: "Passe par l'origine O(0,0)" },
              { label: "Pente négative (a = -1.5, b = 4)", a: -1.5, b: 4, note: "Droite descendante" },
              { label: "Constante (a = 0, b = -2)", a: 0, b: -2, note: "Ligne horizontale à y = -2" },
              { label: "Tarif Zemidjan (a = 1.5, b = 2)", a: 1.5, b: 2, note: "Échelle x100 FCFA" }
            ],
            instruction: "Déplace les curseurs de 'a' et 'b' ou fais glisser le point A sur la droite pour observer la transformation de la représentation graphique en temps réel."
          },

          memoriser: {
            ficheSynthese: {
              titre: "Fiche Mémo : Fonctions Affines",
              code: "f(x) = ax + b",
              lignes: [
                { cle: "Forme générale", val: "f(x) = ax + b" },
                { cle: "a (pente)", val: "Coefficient directeur : a = (yB - yA) / (xB - xA)" },
                { cle: "b (ordonnée)", val: "Ordonnée à l'origine : point (0, b)" },
                { cle: "a > 0", val: "Droite croissante (monte)" },
                { cle: "a < 0", val: "Droite décroissante (descend)" },
                { cle: "a = 0", val: "Droite horizontale (fonction constante f(x) = b)" },
                { cle: "b = 0", val: "Passe par l'origine (fonction linéaire f(x) = ax)" }
              ],
              astuce: "Moyen mnémotechnique : 'b' comme 'Base' (valeur de départ au point x = 0)."
            },
            carteMentale: {
              centre: "Fonctions Affines\nf(x) = ax + b",
              branches: [
                {
                  id: "b1",
                  titre: "Éléments clés",
                  color: "#00963F",
                  feuilles: [
                    "a : Coefficient directeur (taux)",
                    "b : Ordonnée à l'origine (0, b)",
                    "x : Variable indépendante"
                  ]
                },
                {
                  id: "b2",
                  titre: "Sens de variation",
                  color: "#3182BD",
                  feuilles: [
                    "a > 0 ↗ Croissante",
                    "a < 0 ↘ Décroissante",
                    "a = 0 ➔ Constante"
                  ]
                },
                {
                  id: "b3",
                  titre: "Graphique",
                  color: "#E53935",
                  feuilles: [
                    "Toujours une droite",
                    "2 points suffisent",
                    "Pente = Δy / Δx"
                  ]
                },
                {
                  id: "b4",
                  titre: "Cas Particuliers",
                  color: "#8E44AD",
                  feuilles: [
                    "b = 0 : Linéaire (passe par O)",
                    "a = 0 : Constante (horizontale)"
                  ]
                }
              ]
            },
            flashcards: [
              {
                id: "fc-1",
                question: "Quelle est la forme générale d'une fonction affine ?",
                reponse: "f(x) = ax + b, où 'a' est le coefficient directeur et 'b' l'ordonnée à l'origine.",
                theme: "Définition"
              },
              {
                id: "fc-2",
                question: "Que représente le nombre 'b' sur le graphique ?",
                reponse: "C'est l'ordonnée à l'origine, c'est-à-dire l'endroit où la droite coupe l'axe vertical (axe des y) au point (0, b).",
                theme: "Graphique"
              },
              {
                id: "fc-3",
                question: "Si a < 0, quel est le sens de variation de la fonction ?",
                reponse: "La fonction est strictement décroissante : sa représentation graphique descend de gauche à droite.",
                theme: "Variations"
              },
              {
                id: "fc-4",
                question: "Comment appelle-t-on une fonction affine où b = 0 ?",
                reponse: "C'est une fonction linéaire f(x) = ax. Sa droite passe obligatoirement par l'origine O(0,0).",
                theme: "Cas particulier"
              },
              {
                id: "fc-5",
                question: "Quelle est la formule pour calculer le coefficient directeur 'a' à partir de deux points A(xA, yA) et B(xB, yB) ?",
                reponse: "a = (yB - yA) / (xB - xA) avec xA ≠ xB.",
                theme: "Calcul"
              }
            ]
          },

          entrainer: {
            totalQuestions: 5,
            questions: [
              {
                id: "q-1",
                type: "qcm",
                consigne: "Soit la fonction affine f(x) = 3x - 5. Quel est son coefficient directeur ?",
                options: [
                  { id: "opt-1", texte: "3", correct: true },
                  { id: "opt-2", texte: "-5", correct: false },
                  { id: "opt-3", texte: "5", correct: false },
                  { id: "opt-4", texte: "3x", correct: false }
                ],
                explication: "Dans la forme f(x) = ax + b, le coefficient directeur est le nombre multiplié par x, soit a = 3."
              },
              {
                id: "q-2",
                type: "qcm",
                consigne: "Une droite représentant la fonction g(x) = -2x + 4 coupe l'axe des ordonnées au point :",
                options: [
                  { id: "opt-1", texte: "(0, 4)", correct: true },
                  { id: "opt-2", texte: "(4, 0)", correct: false },
                  { id: "opt-3", texte: "(0, -2)", correct: false },
                  { id: "opt-4", texte: "(-2, 4)", correct: false }
                ],
                explication: "Pour x = 0, g(0) = -2(0) + 4 = 4. Le point d'intersection est donc (0, 4)."
              },
              {
                id: "q-3",
                type: "vrai_faux",
                consigne: "La fonction h(x) = -4x + 7 est croissante sur ℝ car le terme constant 7 est positif.",
                options: [
                  { id: "vf-v", texte: "Vrai", correct: false },
                  { id: "vf-f", texte: "Faux", correct: true }
                ],
                explication: "Faux ! Le sens de variation dépend exclusivement du signe du coefficient directeur 'a'. Comme a = -4 < 0, la fonction est strictement décroissante."
              },
              {
                id: "q-4",
                type: "qcm",
                consigne: "Un abonnement à la bibliothèque coûte 1000 FCFA d'adhésion annuelle plus 200 FCFA par livre emprunté (x). Quelle est l'expression du coût total C(x) ?",
                options: [
                  { id: "opt-1", texte: "C(x) = 200x + 1000", correct: true },
                  { id: "opt-2", texte: "C(x) = 1000x + 200", correct: false },
                  { id: "opt-3", texte: "C(x) = 1200x", correct: false },
                  { id: "opt-4", texte: "C(x) = 200 + 1000x", correct: false }
                ],
                explication: "Le coût fixe de départ est b = 1000 FCFA et le coût variable par livre est a = 200 FCFA. Donc C(x) = 200x + 1000."
              },
              {
                id: "q-5",
                type: "calcul",
                consigne: "Calcule l'image de x = 4 par la fonction f(x) = 3x - 2.",
                reponseAttendue: "10",
                explication: "f(4) = 3 × 4 - 2 = 12 - 2 = 10."
              }
            ]
          },

          tuteur: {
            intro: "Bonjour Kofi ! Je suis Kpékpé, ton tuteur pour le chapitre des Fonctions affines. Que souhaites-tu approfondir ou réviser ensemble ?",
            suggestions: [
              "Résume-moi l'essentiel du chapitre en 3 points",
              "Donne-moi un exemple concret avec la vie quotidienne à Lomé",
              "Comment calculer le coefficient directeur avec deux points ?",
              "Génère une fiche de mémorisation personnalisée"
            ],
            socraticRules: {
              "difference": "Pense à une course en moto-taxi : 'b' est la somme fixe payée au démarrage (à 0 km), tandis que 'a' s'ajoute à chaque kilomètre parcouru. Dans l'expression f(x) = ax + b, quel terme varie en fonction de la distance x ?",
              "calcul": "Pour trouver 'a', on calcule la variation verticale sur la variation horizontale : a = (yB - yA) / (xB - xA). Si tu as les points (1, 5) et (3, 9), quelle est la différence des ordonnées ?",
              "marche": "Si un panier de base coûte 500 FCFA et chaque ananas coûte 300 FCFA, quelle relation donne le montant pour x ananas ?",
              "lineaire": "Si l'ordonnée à l'origine b = 0, la formule s'écrit f(x) = ax. La droite passera nécessairement par l'origine O(0,0)."
            }
          }
        }
      },
      {
        id: "theoreme-pythagore",
        number: 4,
        title: "Théorème de Pythagore et réciproque",
        status: "not_started",
        progress: 0,
        summary: "Calcul de longueurs dans le triangle rectangle et démonstration d'orthogonalité."
      },
      {
        id: "statistiques",
        number: 5,
        title: "Statistiques et fréquences",
        status: "not_started",
        progress: 0,
        summary: "Moyenne, médiane, fréquences cumulées et diagrammes en bâtons."
      },
      {
        id: "droites-remarquables",
        number: 6,
        title: "Triangles et droites remarquables",
        status: "locked",
        progress: 0,
        summary: "Médiatrices, hauteurs, médianes et cercle circonscrit."
      },
      {
        id: "equations-1er-degre",
        number: 7,
        title: "Équations du premier degré",
        status: "locked",
        progress: 0,
        summary: "Résolution algébrique d'équations à une inconnue et mise en équation de problèmes."
      },
      {
        id: "probabilites",
        number: 8,
        title: "Probabilités élémentaires",
        status: "locked",
        progress: 0,
        summary: "Événements certains, impossibles, arbres de probabilités et tirages équiprobables."
      }
    ],

    "anglais": [
      {
        id: "introducing-yourself",
        number: 1,
        title: "Introducing yourself & greetings",
        status: "completed",
        progress: 100,
        summary: "Personal identity, nationalities, polite expressions and self-description."
      },
      {
        id: "daily-routines",
        number: 2,
        title: "Daily routines & hobbies",
        subtitle: "Master the present simple tense to describe your everyday activities.",
        status: "in_progress",
        progress: 65,
        estimatedTime: "20 min",
        xpReward: 90
      }
    ],

    "physique": [
      {
        id: "etats-matiere",
        number: 1,
        title: "Les états de la matière",
        status: "completed",
        progress: 100,
        summary: "Solide, liquide, gaz, changements d'état et conservation de la masse."
      },
      {
        id: "loi-ohm",
        number: 2,
        title: "Circuit électrique et Loi d'Ohm",
        subtitle: "Comprends la relation entre tension U, intensité I et résistance R.",
        status: "in_progress",
        progress: 73,
        estimatedTime: "20 min",
        xpReward: 110
      }
    ],

    "svt": [
      {
        id: "reproduction-vegetaux",
        number: 1,
        title: "La reproduction des végétaux",
        status: "completed",
        progress: 100,
        summary: "Fleurs, pollinisation, graines et dispersion dans les climats tropicaux."
      },
      {
        id: "photosynthese",
        number: 2,
        title: "Nutrition des plantes et photosynthèse",
        status: "in_progress",
        progress: 35,
        summary: "Chlorophylle, lumière solaire, eau, sels minéraux et production de matière organique."
      }
    ],

    "francais": [
      {
        id: "poesie-africaine",
        number: 1,
        title: "Figures de style et poésie négro-africaine",
        status: "completed",
        progress: 100,
        summary: "Métaphores, anaphores, rythmes et textes des grands auteurs africains."
      },
      {
        id: "argumentation",
        number: 2,
        title: "L'argumentation et le débat citoyen",
        status: "in_progress",
        progress: 81,
        summary: "Thèse, arguments, connecteurs logiques et réfutation respectueuse."
      }
    ]
  }
};
