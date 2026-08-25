// Kpékpé Découvrir — Catalogue d'Orientation & IKIGAI

export const DECOUVRIR_DATA = {
  metiers: [
    {
      id: "medecin",
      titre: "Médecin généraliste",
      secteur: "Santé",
      niveauMin: "Bac+7",
      debouches: "Hôpitaux publics (CHU Sylvanus Olympio, Campus), cliniques privées, centres médico-sociaux, ONG santé.",
      salaire: "400 000 – 1 500 000 FCFA / mois",
      description: "Le médecin diagnostique, traite et prévient les maladies. Il joue un rôle central dans la santé publique et le bien-être des populations au Togo et dans la sous-région.",
      competences: ["Sens du soin", "Endurance & Rigueur", "Écoute active & Empathie", "Diagnostic médical"],
      tags: ["Santé", "Impact Social", "Scientifique"],
      matchScore: 92
    },
    {
      id: "ingenieur-logiciel",
      titre: "Ingénieur Logiciel & IA",
      secteur: "Numérique & Tech",
      niveauMin: "Bac+5",
      debouches: "Entreprises tech, startups africaines, banques, ministères, travail à distance international.",
      salaire: "350 000 – 1 800 000 FCFA / mois",
      description: "Conçoit, développe et maintient des applications logicielles, des plateformes web/mobiles et des algorithmes d'intelligence artificielle adaptés aux défis locaux.",
      competences: ["Algorithmique & Code", "Résolution de problèmes", "Architecture logicielle", "Anglais technique"],
      tags: ["Tech", "Innovation", "Créativité"],
      matchScore: 88
    },
    {
      id: "agronome",
      titre: "Ingénieur Agronome",
      secteur: "Agriculture & Agroalimentaire",
      niveauMin: "Bac+5",
      debouches: "Ministère de l'Agriculture, coopératives agricoles, fermes modernes, agro-industries, ONG rurales.",
      salaire: "250 000 – 850 000 FCFA / mois",
      description: "Optimise les rendements agricoles et l'élevage durable, développe des semences adaptées au climat togolais et modernise la chaîne de valeur agro-alimentaire.",
      competences: ["Sciences du sol & vivant", "Gestion de projet rural", "Technologies agricoles", "Agro-écologie"],
      tags: ["Développement durable", "Terrain", "Impact national"],
      matchScore: 84
    },
    {
      id: "expert-comptable",
      titre: "Expert-Comptable & Auditeur",
      secteur: "Finance & Gestion",
      niveauMin: "Bac+5 / DEC",
      debouches: "Cabinets d'audit internationaux (Big 4), PME togolaises, banques, institutions sous-régionales (BCEAO, BOAD).",
      salaire: "450 000 – 2 000 000 FCFA / mois",
      description: "Garantit la régularité et la sincérité des comptes des entreprises, conseille les dirigeants sur la stratégie financière, fiscale et patrimoniale.",
      competences: ["Analyse financière", "Fiscalité & Droit OHADA", "Rigueur absolue", "Conseil stratégique"],
      tags: ["Finance", "Chiffres", "Stratégie"],
      matchScore: 78
    },
    {
      id: "energeticien-solaire",
      titre: "Ingénieur Énergies Renouvelables",
      secteur: "Énergie & Environnement",
      niveauMin: "Bac+3 à Bac+5",
      debouches: "Compagnies d'électrification solaire (Cizo, BBOXX), centrales photovoltaïques (Blitta), bureaux d'études.",
      salaire: "300 000 – 1 100 000 FCFA / mois",
      description: "Dimensionne et déploie des installations solaires et hybrides pour alimenter les foyers urbains et les villages hors-réseau.",
      competences: ["Génie électrique", "Dimensionnement solaire", "Gestion de chantier", "Normes de sécurité"],
      tags: ["Énergie", "Environnement", "Technique"],
      matchScore: 85
    }
  ],

  formations: [
    {
      id: "fss-lome",
      titre: "Doctorat d'État en Médecine",
      etablissement: "Faculté des Sciences de la Santé (FSS) — Université de Lomé",
      duree: "7 ans",
      diplome: "Doctorat en Médecine",
      admission: "Sélection sur dossier & Bac Série D ou C mention Bien minimum",
      description: "Formation de référence pour former les futurs médecins spécialistes et généralistes du Togo et de la région Ouest-Africaine.",
      filiere: "Santé",
      ville: "Lomé"
    },
    {
      id: "epl-genie-info",
      titre: "Diplôme d'Ingénieur en Génie Logiciel",
      etablissement: "École Polytechnique de Lomé (EPL) — Université de Lomé",
      duree: "5 ans (Classes prépas + Cycle ingénieur)",
      diplome: "Ingénieur diplômé d'État",
      admission: "Concours d'entrée après Bac C, D, E ou F",
      description: "Programme d'excellence formant des ingénieurs polyvalents en informatique, réseaux, intelligence artificielle et systèmes embarqués.",
      filiere: "Informatique & Télécoms",
      ville: "Lomé"
    },
    {
      id: "esa-agronomie",
      titre: "Ingénieur des Travaux Agricoles",
      etablissement: "École Supérieure d'Agronomie (ESA) — Université de Lomé",
      duree: "3 à 5 ans",
      diplome: "Licence Pro & Master en Sciences Agronomiques",
      admission: "Bac C, D ou équivalent",
      description: "Formation scientifique et pratique pour maîtriser les productions végétales, animales et l'agro-business.",
      filiere: "Agronomie",
      ville: "Lomé"
    },
    {
      id: "faseg-finance",
      titre: "Master Comptabilité, Contrôle & Audit (CCA)",
      etablissement: "FASEG — Université de Lomé / Université de Kara",
      duree: "2 ans après Licence",
      diplome: "Master Professionnel CCA",
      admission: "Licence en Sciences de Gestion ou Économie",
      description: "Préparation poussée aux métiers de l'expertise comptable, de l'audit financier et de la direction administrative et financière.",
      filiere: "Gestion & Finance",
      ville: "Lomé & Kara"
    }
  ],

  organisations: [
    {
      id: "univ-lome",
      nom: "Université de Lomé (UL)",
      type: "Université Publique",
      description: "Plus grand établissement d'enseignement supérieur du Togo, accueillant plus de 60 000 étudiants à travers ses facultés, écoles et instituts.",
      ville: "Lomé",
      facultes: ["FSS (Santé)", "FDS (Sciences)", "EPL (Polytechnique)", "ESA (Agronomie)", "FASEG (Économie & Gestion)", "FDD (Droit)"]
    },
    {
      id: "univ-kara",
      nom: "Université de Kara (UK)",
      type: "Université Publique",
      description: "Pôle universitaire majeur du nord du Togo, réputé pour ses formations en sciences de gestion, lettres, droit et sciences agronomiques.",
      ville: "Kara",
      facultes: ["FAS (Agronomie & Sciences)", "FASEG-K", "FDSP", "FLESH"]
    },
    {
      id: "esig-global",
      nom: "ESIG Global Success",
      type: "Grande École Privée",
      description: "Institut supérieur d'informatique, de gestion et de communication agréé par le CAMES.",
      ville: "Lomé",
      facultes: ["Informatique & Réseaux", "Marketing & Communication", "Banque & Finance"]
    }
  ],

  ikigai: {
    title: "Test d'Orientation IKIGAI Kpékpé",
    description: "Découvre les filières et métiers qui allient ce que tu aimes, ce pour quoi tu es doué, ce dont le monde a besoin et ce pour quoi tu peux être rémunéré.",
    totalQuestions: 12,
    dimensions: [
      { id: "passion", label: "Ce que tu aimes", icon: "heart", color: "#E53935" },
      { id: "talent", label: "Ce en quoi tu es doué", icon: "sparkles", color: "#00963F" },
      { id: "besoin", label: "Ce dont le monde a besoin", icon: "globe", color: "#FEEC01" },
      { id: "remuneration", label: "Ce pour quoi tu peux être payé", icon: "briefcase", color: "#3182BD" }
    ]
  }
};
