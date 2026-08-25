// Kpékpé Learnia — État Utilisateur & Session (V1 Engagement)

export class UserStateManager {
  constructor() {
    this.state = {
      user: {
        nom: "Kofi",
        prenom: "Kofi Mensah",
        classe: "4e",
        classeLabel: "Classe de 4e",
        anneeScolaire: "2026–2027",
        etablissement: "Collège Protestant de Lomé",
        avatar: "👦",
        xp: 1480,
        streakDays: 6,
        globalProgress: 64,
        subscription: "learnia_annual"
      },

      // ── ENGAGEMENT (Objectif · Arbre · Flammes) ──
      engagement: {
        dailyGoal: {
          id: "fonctions-affines-comprendre",
          label: "Comprendre les fonctions affines",
          subLabel: "Terminer le cours + réaliser les flashcards",
          subject: "Mathématiques",
          subjectColor: "#3B82F6",
          estimatedMinutes: 12,
          progress: 68,
          completed: false,
          targetNav: { nav: "apprendre", sub: "chapitre", subjectId: "maths", chapterId: "fonctions-affines" }
        },
        wisdomTree: {
          level: 3,
          xpForTree: 840,
          nextLevelXp: 1200,
          fruits: [
            { id: "maths",    label: "Maths",    color: "#3B82F6", bg: "#EFF6FF" },
            { id: "physique", label: "Physique", color: "#8B5CF6", bg: "#F5F3FF" },
            { id: "svt",      label: "SVT",      color: "#10B981", bg: "#ECFDF5" }
          ],
          lastWatered: null
        },
        flames: [
          {
            id: "afi",
            friendName: "Afi",
            friendAvatar: "👧",
            streakDays: 12,
            currentGoalLabel: "Fonctions affines",
            friendCompleted: true,
            myCompleted: false,
            isActive: true
          }
        ]
      },

      currentSubjectId: "maths",
      currentChapterId: "fonctions-affines",
      currentTab: "comprendre",
      activeNavigation: "mon-parcours",
      activeSubNav: "vue-d-ensemble",

      chapterProgress: {
        "fonctions-affines": {
          progress: 68,
          comprendreDone: true,
          explorerDone: true,
          memoriserDone: false,
          entrainerDone: false,
          quizScore: null
        }
      },

      flashcardMastery: {
        "fc-1": true, "fc-2": true, "fc-3": false,
        "fc-4": true, "fc-5": false
      },

      stats: {
        heuresApprentissage: "14h 30m",
        chapitresTermines: 7,
        exercicesResolus: 48,
        competencesMaitrisees: [
          "Calcul littéral et factorisation",
          "Nombres relatifs et priorités",
          "Présent simple en anglais",
          "Loi d'Ohm en physique",
          "Reproduction végétale en SVT"
        ],
        competencesARenforcer: [
          "Calcul du coefficient directeur a d une fonction affine",
          "Conversion des unités mA en A",
          "Concordance des temps en français"
        ]
      }
    };

    this.listeners = [];
  }

  getState() { return this.state; }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }

  notify() { this.listeners.forEach(fn => fn(this.state)); }

  setClasse(classeId, classeLabel) {
    this.state.user.classe = classeId;
    this.state.user.classeLabel = classeLabel;
    this.notify();
  }

  setNavigation(nav, subNav = null) {
    this.state.activeNavigation = nav;
    if (subNav) {
      this.state.activeSubNav = subNav;
    } else {
      if (nav === 'apprendre') this.state.activeSubNav = 'vue-d-ensemble';
      if (nav === 'decouvrir') this.state.activeSubNav = 'metiers';
    }
    this.notify();
  }

  selectSubject(subjectId) {
    this.state.currentSubjectId = subjectId;
    this.state.activeNavigation = "apprendre";
    this.state.activeSubNav = "cours";
    this.notify();
  }

  selectChapter(subjectId, chapterId, initialTab = "comprendre") {
    this.state.currentSubjectId = subjectId;
    this.state.currentChapterId = chapterId;
    this.state.currentTab = initialTab;
    this.state.activeNavigation = "apprendre";
    this.state.activeSubNav = "chapitre";
    this.notify();
  }

  setChapterTab(tabId) {
    this.state.currentTab = tabId;
    this.notify();
  }

  markFlashcard(cardId, mastered) {
    this.state.flashcardMastery[cardId] = mastered;
    this.notify();
  }

  recordQuizResult(chapterId, score, total) {
    const pct = Math.round((score / total) * 100);
    if (!this.state.chapterProgress[chapterId]) {
      this.state.chapterProgress[chapterId] = {};
    }
    this.state.chapterProgress[chapterId].entrainerDone = true;
    this.state.chapterProgress[chapterId].quizScore = pct;
    this.state.chapterProgress[chapterId].progress =
      Math.min(100, (this.state.chapterProgress[chapterId].progress || 68) + 20);
    this.state.user.xp += score * 25;
    this.waterTree('quiz');
    this.notify();
  }

  // ── Engagement Methods ──

  waterTree(activityType) {
    const tree = this.state.engagement.wisdomTree;
    const xpGain = { quiz: 80, comprendre: 40, memoriser: 50, explorer: 30, tuteur: 35 };
    tree.xpForTree = (tree.xpForTree || 0) + (xpGain[activityType] || 30);
    const thresholds = [0, 200, 500, 900, 1400, 2000];
    const newLevel = thresholds.findIndex((t, i) =>
      tree.xpForTree >= t && (i === thresholds.length - 1 || tree.xpForTree < thresholds[i + 1])
    );
    if (newLevel > tree.level) {
      tree.level = Math.min(5, newLevel);
    }
    tree.lastWatered = new Date().toISOString().split('T')[0];
    this.notify();
  }

  completeDailyGoal() {
    this.state.engagement.dailyGoal.completed = true;
    this.state.engagement.dailyGoal.progress = 100;
    this.state.user.streakDays = (this.state.user.streakDays || 0) + 1;
    this.waterTree('comprendre');
    this.notify();
  }

  // Tree metadata helpers
  static getTreeMeta(level) {
    return [
      { emoji: '🌱', label: 'Graine',       desc: 'Ton voyage commence ici.' },
      { emoji: '🌿', label: 'Pousse',        desc: 'Les premières feuilles apparaissent.' },
      { emoji: '🪴', label: 'Jeune plante',  desc: 'Tes efforts prennent racine.' },
      { emoji: '🌳', label: 'Arbre',         desc: 'Tu grandis chaque jour.' },
      { emoji: '🌸', label: 'Arbre fleuri',     desc: "Tes connaissances s\\'épanouissent." },
      { emoji: '🍎', label: 'Fruits de la sagesse', desc: 'Tu récoltes ce que tu as semé.' }
    ][level] || { emoji: '🌱', label: 'Graine', desc: 'Ton voyage commence ici.' };
  }
}

export const userState = new UserStateManager();
