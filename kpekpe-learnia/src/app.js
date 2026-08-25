// Kpékpé Learnia — Application Router & State Manager
import { CURRICULUM_DATA } from './data/curriculum.js';
import { DECOUVRIR_DATA } from './data/decouvrir-data.js';
import { userState } from './data/user-state.js';

import { renderNavbar } from './components/Navbar.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderLearniaOverview } from './components/LearniaOverview.js';
import { renderSubjectDetail } from './components/SubjectDetail.js';
import { renderChapterDetail } from './components/ChapterDetail.js';
import { renderProgressionView } from './components/ProgressionView.js';
import { renderDecouvrirView } from './components/DecouvrirView.js';
import { renderMonParcoursView } from './components/MonParcoursView.js';
import { renderKidsView } from './components/KidsView.js';
import { renderRepetiteursView } from './components/RepetiteursView.js';
import { renderPricingView } from './components/PricingView.js';

class KpekpeApplication {
  constructor() {
    this.initGlobals();
    this.bindEvents();
    this.render();
  }

  initGlobals() {
    window.currentFlashcardIndex = 0;
    window.isFlashcardFlipped = false;
    window.memoriseSubTab = 'flashcards';
    window.selectedJobCategory = 'Tous';
    window.currentChapterSuggestions = [];
    window.isClassPickerOpen = false;

    // Kids State
    window.kidsActiveCategory = 'metiers';
    window.activeKidGame = null;
    window.isKidParentReportOpen = false;
    window.kidTotalStars = 24;

    // Kids mini-games state
    window.kidSolarAligned = false;
    window.kidMedecinCured = false;
    window.kidWoodCut = false;
    window.kidRobotWon = false;
    window.kidVetHealed = false;
    window.kidBoutiquePaid = false;
    window.kidJarresSplit = false;
    window.kidDetectiveWon = false;
    window.kidDirigeableWon = false;

    // Marketplace Répétiteurs
    window.repetiteurProfileId = null;
    window.filterQuartier = 'Tous les quartiers';
    window.filterMatiere = 'Toutes les matières';
    window.filterClasse = 'Toutes les classes';

    // Pricing / Payment
    window.pricingStep = 'plans';
    window.selectedPricingPlan = null;
    window.selectedOperateur = 'moov';
    window.pricingTarget = 'eleve';

    // Quiz
    window.currentQuizIndex = 0;
    window.quizSelectedOption = null;
    window.quizAnswerValidated = false;
    window.quizLastAnswerCorrect = false;
    window.quizCorrectCount = 0;

    window.tuteurMessages = [
      {
        sender: 'tuteur',
        text: "Bonjour Kofi. Je suis Kpékpé, ton accompagnateur pour le cours sur les Fonctions affines. Que souhaites-tu éclaircir ensemble ?"
      }
    ];

    window.kpekpeApp = this;
  }

  bindEvents() {
    userState.subscribe(() => {
      this.render();
    });
  }

  navigateTo(nav, subNav = null) {
    window.isClassPickerOpen = false;
    window.activeKidGame = null;
    window.isKidParentReportOpen = false;
    window.repetiteurProfileId = null;

    // Handle pricing targets
    if (nav === 'pricing-repetiteur') {
      window.pricingTarget = 'repetiteur';
      window.pricingStep = 'plans';
      userState.setNavigation('pricing', null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (nav === 'pricing-eleve') {
      window.pricingTarget = 'eleve';
      window.pricingStep = 'plans';
      userState.setNavigation('pricing', null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    userState.setNavigation(nav, subNav);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectSubject(subjectId) {
    userState.selectSubject(subjectId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openChapter(subjectId, chapterId, initialTab = 'comprendre') {
    window.currentQuizIndex = 0;
    window.quizSelectedOption = null;
    window.quizAnswerValidated = false;
    window.quizCorrectCount = 0;
    window.currentFlashcardIndex = 0;
    window.isFlashcardFlipped = false;
    window.isClassPickerOpen = false;
    userState.selectChapter(subjectId, chapterId, initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchChapterTab(tabId) {
    userState.setChapterTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  switchMemoriseTab(subTab) {
    window.memoriseSubTab = subTab;
    this.render();
  }

  filterJobs(cat) {
    window.selectedJobCategory = cat;
    this.render();
  }

  setExplorerPreset(a, b) {
    if (window.kpekpeSetExplorerPreset) {
      window.kpekpeSetExplorerPreset(a, b);
    }
  }

  toggleFlipFlashcard() {
    window.isFlashcardFlipped = !window.isFlashcardFlipped;
    this.render();
  }

  nextFlashcard(isMastered, currentIndex, total) {
    window.isFlashcardFlipped = false;
    if (currentIndex + 1 < total) {
      window.currentFlashcardIndex = currentIndex + 1;
    } else {
      window.currentFlashcardIndex = 0;
    }
    this.render();
  }

  selectQuizOption(optId) {
    if (window.quizAnswerValidated) return;
    window.quizSelectedOption = optId;
    this.render();
  }

  validateQuizAnswer() {
    const state = userState.getState();
    const chapters = CURRICULUM_DATA.chapters[state.currentSubjectId] || [];
    const chapter = chapters.find(c => c.id === state.currentChapterId);
    const questions = chapter?.content?.entrainer?.questions || [];
    const q = questions[window.currentQuizIndex];
    if (!q) return;
    window.quizAnswerValidated = true;
    if (q.type === 'calcul') {
      const input = document.getElementById('calcAnswerInput');
      const val = input ? input.value.trim() : '';
      window.quizLastAnswerCorrect = (val === q.reponseAttendue);
    } else {
      const selected = q.options.find(o => o.id === window.quizSelectedOption);
      window.quizLastAnswerCorrect = selected ? !!selected.correct : false;
    }
    if (window.quizLastAnswerCorrect) {
      window.quizCorrectCount = (window.quizCorrectCount || 0) + 1;
    }
    this.render();
  }

  nextQuizQuestion() {
    const state = userState.getState();
    const chapters = CURRICULUM_DATA.chapters[state.currentSubjectId] || [];
    const chapter = chapters.find(c => c.id === state.currentChapterId);
    const questions = chapter?.content?.entrainer?.questions || [];
    window.currentQuizIndex = (window.currentQuizIndex || 0) + 1;
    window.quizSelectedOption = null;
    window.quizAnswerValidated = false;
    window.quizLastAnswerCorrect = false;
    if (window.currentQuizIndex >= questions.length) {
      userState.recordQuizResult(chapter.id, window.quizCorrectCount, questions.length);
    }
    this.render();
  }

  restartQuiz() {
    window.currentQuizIndex = 0;
    window.quizSelectedOption = null;
    window.quizAnswerValidated = false;
    window.quizLastAnswerCorrect = false;
    window.quizCorrectCount = 0;
    this.render();
  }

  selectTuteurSuggestion(idx) {
    const text = window.currentChapterSuggestions[idx];
    if (text) this.sendTuteurPrompt(text);
  }

  sendTuteurPrompt(promptText) {
    window.tuteurMessages.push({ sender: 'user', text: promptText });
    this.render();
    this.generateSocraticResponse(promptText);
  }

  handleTuteurSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('tuteurInput');
    if (!input || !input.value.trim()) return;
    const text = input.value.trim();
    input.value = '';
    this.sendTuteurPrompt(text);
  }

  generateSocraticResponse(userText) {
    const lower = userText.toLowerCase();
    let reply = "D'accord Kofi. Quelle information peux-tu identifier en premier dans l'énoncé ?";
    if (lower.includes('difference') || lower.includes('entre a et b')) {
      reply = "Pense à une course en moto-taxi : 'b' est la somme fixe payée au démarrage, tandis que 'a' s'ajoute à chaque kilomètre. Dans f(x) = ax + b, quel terme varie en fonction de la distance x ?";
    } else if (lower.includes('calculer') || lower.includes('pente')) {
      reply = "Pour trouver 'a', on calcule : a = (yB - yA) / (xB - xA). Si tu as (1, 5) et (3, 9), quelle est la différence des ordonnées ?";
    } else if (lower.includes('resume') || lower.includes('essentiel')) {
      reply = "Voici les 3 piliers : 1) f(x) = ax + b. 2) 'a' indique la pente. 3) 'b' est la hauteur à l'origine.";
    }
    setTimeout(() => {
      window.tuteurMessages.push({ sender: 'tuteur', text: reply });
      this.render();
      const log = document.getElementById('tuteurLog');
      if (log) log.scrollTop = log.scrollHeight;
    }, 450);
  }

  toggleClassPicker() {
    window.isClassPickerOpen = !window.isClassPickerOpen;
    this.render();
  }

  selectClass(classId, className) {
    window.isClassPickerOpen = false;
    userState.setClasse(classId, className);
  }

  // ------------------------------------------------
  // KIDS HANDLERS
  // ------------------------------------------------
  setKidsCategory(cat) {
    window.kidsActiveCategory = cat;
    window.activeKidGame = null;
    this.render();
  }

  startKidGame(gameId) {
    window.activeKidGame = gameId;
    window.isKidParentReportOpen = false;
    window.kidSolarAligned = false;
    window.kidMedecinCured = false;
    window.kidWoodCut = false;
    window.kidRobotWon = false;
    window.kidVetHealed = false;
    window.kidBoutiquePaid = false;
    window.kidJarresSplit = false;
    window.kidDetectiveWon = false;
    window.kidDirigeableWon = false;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeKidGame() {
    window.activeKidGame = null;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  alignSolar(isCorrect) {
    if (isCorrect) { window.kidSolarAligned = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Le panneau ne reçoit pas assez de lumière sous cet angle. Vise le zénith ☀️ !");
    this.render();
  }

  curePatient(isCorrect) {
    if (isCorrect) { window.kidMedecinCured = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Attention docteur ! Cela ne va pas soulager son mal de ventre.");
    this.render();
  }

  cutWood(isCorrect) {
    if (isCorrect) { window.kidWoodCut = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Recompte : 320 cm divisé par 80 cm donne combien ?");
    this.render();
  }

  runCodeRobot(isCorrect) {
    if (isCorrect) { window.kidRobotWon = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Le robot s'éloigne du diamant ! Vérifie le chemin.");
    this.render();
  }

  healAnimal(isCorrect) {
    if (isCorrect) { window.kidVetHealed = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Attention, il faut faire un geste doux pour ne pas lui faire mal.");
    this.render();
  }

  giveChange(isCorrect) {
    if (isCorrect) { window.kidBoutiquePaid = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Recompte : 2000 - 1350 = ?");
    this.render();
  }

  splitJarres() {
    window.kidJarresSplit = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2;
    this.render();
  }

  solveDetective(isCorrect) {
    if (isCorrect) { window.kidDetectiveWon = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Observe bien les racines et la terre au bord de l'eau.");
    this.render();
  }

  visitSite(isCorrect) {
    if (isCorrect) { window.kidDirigeableWon = true; window.kidTotalStars = (window.kidTotalStars || 24) + 2; }
    else this.showNotice("Ce n'est pas le bon monument historique du Nord-Togo !");
    this.render();
  }

  openParentReport() {
    window.isKidParentReportOpen = true;
    window.activeKidGame = null;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeParentReport() {
    window.isKidParentReportOpen = false;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ------------------------------------------------
  // RÉPÉTITEURS MARKETPLACE HANDLERS
  // ------------------------------------------------
  filterRep(type, value) {
    if (type === 'quartier') window.filterQuartier = value;
    if (type === 'matiere') window.filterMatiere = value;
    if (type === 'classe') window.filterClasse = value;
    this.render();
  }

  openRepProfile(id) {
    window.repetiteurProfileId = id;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeRepProfile() {
    window.repetiteurProfileId = null;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  demanderSeance(id) {
    alert('Demande de mise en relation envoyée ! Le répétiteur vous contactera sous 24h. (Fonctionnalité de chat disponible après RAG + backend)');
  }

  // ------------------------------------------------
  // PRICING / PAYMENT HANDLERS
  // ------------------------------------------------
  selectPlan(plan) {
    window.selectedPricingPlan = plan;
    window.pricingStep = 'payment';
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectOp(op) {
    window.selectedOperateur = op;
    this.render();
  }

  resetPricing() {
    window.pricingStep = 'plans';
    window.selectedPricingPlan = null;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  confirmPayment() {
    window.pricingStep = 'success';
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openHelp() { alert("Centre d'aide Kpékpé."); }
  logout() { alert("Session élève."); }
  showNotice(msg) { alert(msg); }

  render() {
    const root = document.getElementById('root');
    if (!root) return;

    const state = userState.getState();
    const activeNav = state.activeNavigation;
    const activeSub = state.activeSubNav;

    let bodyContent = '';

    if (activeNav === 'mon-parcours') {
      bodyContent = renderMonParcoursView(state, CURRICULUM_DATA);
    } else if (activeNav === 'kids') {
      bodyContent = renderKidsView(state);
    } else if (activeNav === 'repetiteurs') {
      bodyContent = renderRepetiteursView();
    } else if (activeNav === 'pricing') {
      bodyContent = renderPricingView(window.pricingTarget || 'eleve');
    } else if (activeNav === 'apprendre') {
      if (activeSub === 'vue-d-ensemble') {
        bodyContent = renderLearniaOverview(state, CURRICULUM_DATA);
      } else if (activeSub === 'cours') {
        bodyContent = renderSubjectDetail(state.currentSubjectId, state, CURRICULUM_DATA);
      } else if (activeSub === 'chapitre') {
        bodyContent = renderChapterDetail(state.currentSubjectId, state.currentChapterId, state.currentTab, state, CURRICULUM_DATA);
      } else if (activeSub === 'progression') {
        bodyContent = renderProgressionView(state, CURRICULUM_DATA);
      }
    } else if (activeNav === 'decouvrir') {
      bodyContent = renderDecouvrirView(activeSub || 'metiers', DECOUVRIR_DATA);
    } else if (activeNav === 'profil') {
      bodyContent = renderProgressionView(state, CURRICULUM_DATA);
    } else if (activeNav === 'parametres') {
      bodyContent = '<div class="kpe-card"><h2 style="font-size:1.5rem;font-weight:800;">Paramètres</h2><p style="color:var(--kpe-gray);margin-top:4px;">Configuration du profil.</p></div>';
    }

    root.innerHTML = `
      <div class="app-layout">
        ${renderSidebar(state)}
        <div class="main-wrapper">
          ${renderNavbar(state, CURRICULUM_DATA)}
          <main class="page-container">
            ${bodyContent}
          </main>
        </div>
      </div>
    `;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { new KpekpeApplication(); });
} else {
  new KpekpeApplication();
}
