// Kpékpé Learnia — Hub Kpékpé Kids (Illustrations Vectorielles Riches & Simulations Métiers)
import { icon } from './Icons.js';

export function renderKidsView(userState) {
  const currentCategory = window.kidsActiveCategory || 'metiers';
  const activeGame = window.activeKidGame;
  const isParentReportOpen = !!window.isKidParentReportOpen;

  if (isParentReportOpen) {
    return renderParentalReport();
  }

  if (activeGame) {
    return renderActiveGame(activeGame);
  }

  return `
    <div style="display: flex; flex-direction: column; gap: 28px;">
      
      <!-- Kids Hero Banner -->
      <div style="background: linear-gradient(135deg, #00963F 0%, #00662A 60%, #141414 100%); color: #FFFFFF; border-radius: var(--radius-xl); padding: 32px 36px; position: relative; overflow: hidden; box-shadow: var(--shadow-card);">
        <div style="position: absolute; right: 20px; bottom: 10px; opacity: 0.18; font-size: 8rem; pointer-events: none;">
          🦁
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--kpe-yellow); color: #141414; padding: 5px 14px; border-radius: var(--radius-full); font-weight: 800; font-size: 0.82rem;">
            ${icon('sparkles', 16, '', '#141414')}
            <span>ESPACE D'ÉVEIL & D'ORIENTATION JUNIOR • 100% GRATUIT</span>
          </div>

          <!-- Bouton Accès Rapport Parental -->
          <button class="filter-pill" style="background: rgba(255, 255, 255, 0.95); color: #141414; font-weight: 800; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.2); cursor: pointer;" onclick="window.kpekpeApp.openParentReport()">
            ${icon('user', 16, '', '#00963F')}
            <span style="margin-left: 6px;">📊 Bilan d'Orientation Parent (5 Pôles)</span>
          </button>
        </div>

        <h1 style="font-size: 2.2rem; font-weight: 900; letter-spacing: -0.5px; margin-top: 14px;">
          Bienvenue dans Kpékpé Kids ! ✨
        </h1>
        <p style="font-size: 1rem; color: #D1FAE5; margin-top: 6px; max-width: 620px; line-height: 1.5;">
          Glisse-toi dans la peau d'un ingénieur, médecin, commerçant ou explorateur. Découvre tes talents et gagne des étoiles dorées ⭐ !
        </p>

        <!-- Category Navigation Tabs -->
        <div style="display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap;">
          <button class="filter-pill ${currentCategory === 'metiers' ? 'active' : ''}" style="${currentCategory === 'metiers' ? 'background: var(--kpe-yellow); color: #141414; border-color: var(--kpe-yellow); font-weight: 900; transform: scale(1.02);' : 'background: rgba(255,255,255,0.15); color: #FFF; border-color: transparent;'}" onclick="window.kpekpeApp.setKidsCategory('metiers')">
            🩺 1. Métiers & Innovation (5 jeux)
          </button>
          <button class="filter-pill ${currentCategory === 'economie' ? 'active' : ''}" style="${currentCategory === 'economie' ? 'background: var(--kpe-yellow); color: #141414; border-color: var(--kpe-yellow); font-weight: 900; transform: scale(1.02);' : 'background: rgba(255,255,255,0.15); color: #FFF; border-color: transparent;'}" onclick="window.kpekpeApp.setKidsCategory('economie')">
            🏪 2. Monnaie & Épargne (2 jeux)
          </button>
          <button class="filter-pill ${currentCategory === 'nature' ? 'active' : ''}" style="${currentCategory === 'nature' ? 'background: var(--kpe-yellow); color: #141414; border-color: var(--kpe-yellow); font-weight: 900; transform: scale(1.02);' : 'background: rgba(255,255,255,0.15); color: #FFF; border-color: transparent;'}" onclick="window.kpekpeApp.setKidsCategory('nature')">
            🕵️ 3. Détective Écolo (1 jeu)
          </button>
          <button class="filter-pill ${currentCategory === 'patrimoine' ? 'active' : ''}" style="${currentCategory === 'patrimoine' ? 'background: var(--kpe-yellow); color: #141414; border-color: var(--kpe-yellow); font-weight: 900; transform: scale(1.02);' : 'background: rgba(255,255,255,0.15); color: #FFF; border-color: transparent;'}" onclick="window.kpekpeApp.setKidsCategory('patrimoine')">
            🗺️ 4. Tour du Togo (1 jeu)
          </button>
        </div>
      </div>

      <!-- Score Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--kpe-dark);">
          ${currentCategory === 'metiers' ? '🩺 Métiers & Innovation (« Dans la peau de... »)' : (currentCategory === 'economie' ? '🏪 Monnaie, Gestion & Entrepreneuriat' : (currentCategory === 'nature' ? '🕵️ Enquête Scientifique & Écologie' : '🗺️ Grand Tour du Patrimoine'))}
        </h2>
        <span style="font-size: 0.9rem; color: var(--kpe-green); font-weight: 800; background: var(--kpe-green-pale); padding: 4px 14px; border-radius: var(--radius-full);">
          ⭐ ${window.kidTotalStars || 24} étoiles au total
        </span>
      </div>

      <!-- Grille des Jeux selon la catégorie avec scènes graphiques intégrées -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 22px;">
        ${renderCategoryCards(currentCategory)}
      </div>

      <!-- Bannière Bilan Parental -->
      <div style="background: #FFFFFF; border: 1.5px solid var(--kpe-green); border-radius: var(--radius-lg); padding: 22px 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="avatar-kpekpe" style="width: 44px; height: 44px; font-size: 1.1rem;">
            ${icon('user', 20, '', '#FFFFFF')}
          </div>
          <div>
            <div style="font-size: 1rem; font-weight: 800; color: var(--kpe-dark);">Tableau de Bord des Talents & Orientation Précoce</div>
            <div style="font-size: 0.82rem; color: var(--kpe-gray); margin-top: 2px;">
              Chaque jeu alimente les 5 piliers de compétences de l'enfant (Sciences, Gestion, Santé, Création, Écologie).
            </div>
          </div>
        </div>
        <button class="btn-primary" onclick="window.kpekpeApp.openParentReport()">
          <span>Consulter le rapport complet (5 Pôles)</span>
          ${icon('arrow-right', 16, '', '#FFFFFF')}
        </button>
      </div>

    </div>
  `;
}

function renderCategoryCards(cat) {
  if (cat === 'metiers') {
    return `
      <!-- 1. Ingénieur Solaire -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('solaire')">
        <div style="height: 145px; background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">☀️ 🔋</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #B45309; font-weight: 800;">Énergie Solaire</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Centrale Solaire du Village
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">L'Ingénieur Solaire</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Installe les panneaux photovoltaïques et oriente-les vers le soleil pour allumer l'école !
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #D97706;">🔬 Pôle Sciences</span>
            <button class="btn-primary" style="background: #D97706; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>

      <!-- 2. Médecin Pédiatre -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('medecin')">
        <div style="height: 145px; background: linear-gradient(135deg, #EF4444 0%, #B91C1C 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🩺 🏥</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #B91C1C; font-weight: 800;">Santé & Soin</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Cabinet Médical Pédiatrique
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Médecin Pédiatre</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Écoute les battements de cœur au stéthoscope et soigne le rhume du petit patient.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #EF4444;">🩺 Pôle Santé</span>
            <button class="btn-primary" style="background: #EF4444; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>

      <!-- 3. Menuisier & Ébéniste -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('menuisier')">
        <div style="height: 145px; background: linear-gradient(135deg, #8D6E63 0%, #4E342E 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🪵 📐</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #4E342E; font-weight: 800;">Artisanat & 3D</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Atelier d'Ébénisterie
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Menuisier Bâtisseur</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Mesure les planches de teck avec le mètre et assemble une table solide pour le salon.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #6D4C41;">🪵 Pôle Bâtisseur</span>
            <button class="btn-primary" style="background: #6D4C41; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>

      <!-- 4. Développeur de Jeux / Robotique -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('codeur')">
        <div style="height: 145px; background: linear-gradient(135deg, #1E40AF 0%, #172554 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🤖 💻</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #1E3A8A; font-weight: 800;">Code & Logique</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Laboratoire de Robotique
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Créateur de Code</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Programme le petit robot avec des blocs de commande pour attraper les diamants.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #1E40AF;">💻 Pôle Tech</span>
            <button class="btn-primary" style="background: #1E40AF; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>

      <!-- 5. Vétérinaire de Fazao -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('veterinaire')">
        <div style="height: 145px; background: linear-gradient(135deg, #059669 0%, #064E3B 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🦌 🌿</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #065F46; font-weight: 800;">Animaux & Faune</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Réserve Naturelle de Fazao
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Vétérinaire de Fazao</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Soigne la petite patte blessée d'une gazelle et relâche-la dans la savane togolais.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #059669;">🌿 Pôle Vivant</span>
            <button class="btn-primary" style="background: #059669; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>
    `;
  }

  if (cat === 'economie') {
    return `
      <!-- Boutique de Lomé -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('boutique')">
        <div style="height: 145px; background: linear-gradient(135deg, #00963F 0%, #004D20 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🏪 🥭</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #00963F; font-weight: 800;">Grand Marché</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Boutique & Calcul de Monnaie
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">La Boutique du Grand Marché</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Le client donne 2000 FCFA pour un achat de 1350 FCFA. Calcule le rendu de monnaie exact !
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: var(--kpe-green);">💼 Pôle Gestion</span>
            <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>

      <!-- Les 3 Jarres d'Épargne -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('jarres')">
        <div style="height: 145px; background: linear-gradient(135deg, #F59E0B 0%, #78350F 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🏺 💰</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #78350F; font-weight: 800;">Épargne & Sagesse</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            La Tirelire des 3 Jarres
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">La Tirelire des 3 Jarres</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Apprends à répartir tes pièces : Dépenses plaisir, Projet vélo, et Partage d'entraide.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #D97706;">💰 Pôle Sagesse</span>
            <button class="btn-primary" style="background: #D97706; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>
    `;
  }

  if (cat === 'nature') {
    return `
      <!-- Détective Écolo -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('detective')">
        <div style="height: 145px; background: linear-gradient(135deg, #0284C7 0%, #0C4A6E 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🌊 🌳</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #0369A1; font-weight: 800;">Enquête Écolo</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Cascade de Kpalimé
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Mystère de la Rivière</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Pourquoi l'eau est-elle boueuse ? Analyse la berge, ramasse les déchets et replante des arbres.
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #0284C7;">🌳 Pôle Écologie</span>
            <button class="btn-primary" style="background: #0284C7; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>
    `;
  }

  if (cat === 'patrimoine') {
    return `
      <!-- Tour du Togo -->
      <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer;" onclick="window.kpekpeApp.startKidGame('dirigeable')">
        <div style="height: 145px; background: linear-gradient(135deg, #8E44AD 0%, #3B0764 100%); position: relative; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 2.6rem;">🛩️ 🏰</span>
            <span class="kpe-tag" style="background: rgba(255,255,255,0.95); color: #6B21A8; font-weight: 800;">Koutammakou</span>
          </div>
          <div style="font-size: 0.95rem; font-weight: 900; color: #FFFFFF; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
            Châteaux Tata Somba
          </div>
        </div>
        <div style="padding: 20px;">
          <h3 style="font-size: 1.15rem; font-weight: 900; color: var(--kpe-dark);">Le Tour du Togo en Dirigeable</h3>
          <p style="font-size: 0.84rem; color: var(--kpe-gray); margin-top: 4px; line-height: 1.5;">
            Survole les Tata Somba de Koutammakou, les cascades de Kpalimé et résous les énigmes !
          </p>
          <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.78rem; font-weight: 800; color: #8E44AD;">🏰 Pôle Culture</span>
            <button class="btn-primary" style="background: #8E44AD; padding: 6px 14px; font-size: 0.8rem;">Tester le jeu →</button>
          </div>
        </div>
      </div>
    `;
  }

  return '';
}

// ----------------------------------------------------
// RENDER ACTIVE GAME ENGINE (9 JEUX COMPLETS INTERACTIFS)
// ----------------------------------------------------
function renderActiveGame(gameId) {
  if (gameId === 'solaire') return renderGameSolaire();
  if (gameId === 'medecin') return renderGameMedecin();
  if (gameId === 'menuisier') return renderGameMenuisier();
  if (gameId === 'codeur') return renderGameCodeur();
  if (gameId === 'veterinaire') return renderGameVeterinaire();
  if (gameId === 'boutique') return renderGameBoutique();
  if (gameId === 'jarres') return renderGameJarres();
  if (gameId === 'detective') return renderGameDetective();
  if (gameId === 'dirigeable') return renderGameDirigeable();
  return '<p>Jeu en cours.</p>';
}

// 1. SOLAIRE
function renderGameSolaire() {
  const isAligned = !!window.kidSolarAligned;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #D97706;">Ingénieur Solaire • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900; color: var(--kpe-dark);">Mission : Allume l'école grâce au soleil !</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem; margin-top: 4px;">Oriente le panneau vers le soleil au zénith (45°) pour atteindre 100% d'énergie.</p>

      <div style="background: ${isAligned ? '#FEF3C7' : '#F3F4F6'}; border-radius: var(--radius-xl); padding: 36px; margin: 24px 0; border: 2px solid ${isAligned ? '#F59E0B' : 'transparent'};">
        <div style="font-size: 4.5rem;">${isAligned ? '☀️ ➔ 💡 ÉCOLE ÉCLAIRÉE !' : '☁️ ➔ 🔲 Panneau éteint'}</div>
        <div style="font-size: 1.3rem; font-weight: 900; color: ${isAligned ? '#00963F' : '#6B7280'}; margin-top: 12px;">
          Énergie produite : ${isAligned ? '100 % (Batterie pleine)' : '20 % (Ombre)'}
        </div>
      </div>

      ${isAligned ? `
        <div style="background: var(--kpe-yellow-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #8A6D05; margin-bottom: 16px;">
          🎉 Mission accomplie ! L'école a de l'électricité propre ! +2 étoiles ⭐⭐ (Pôle Sciences +10 XP)
        </div>
        <button class="btn-primary" style="background: #D97706; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.alignSolar(false)">Angle 10° (Vers le sol)</button>
          <button class="btn-primary" style="background: #D97706;" onclick="window.kpekpeApp.alignSolar(true)">Angle 45° (Face au soleil) ☀️</button>
          <button class="btn-secondary" onclick="window.kpekpeApp.alignSolar(false)">Angle 90° (À l'envers)</button>
        </div>
      `}
    </div>
  `;
}

// 2. MÉDECIN
function renderGameMedecin() {
  const isCured = !!window.kidMedecinCured;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #EF4444;">Médecin Pédiatre • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Consultation du petit patient</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Sami a mal au ventre après avoir mangé une mangue non lavée. Quel est le bon geste ?</p>
      
      <div style="font-size: 4.5rem; margin: 20px 0;">${isCured ? '👦 Heureux et en bonne santé !' : '🤒 Petit patient fiévreux'}</div>

      ${isCured ? `
        <div style="background: var(--kpe-green-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #065F46; margin-bottom: 16px;">
          🩺 Excellent diagnostic docteur ! Eau propre + repos = guérison ! +2 étoiles ⭐⭐ (Pôle Santé +10 XP)
        </div>
        <button class="btn-primary" style="background: #EF4444; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 10px; max-width: 440px; margin: 0 auto;">
          <button class="filter-pill" style="padding: 12px; font-weight: 700;" onclick="window.kpekpeApp.curePatient(false)">Lui donner des bonbons sucrés</button>
          <button class="filter-pill" style="padding: 12px; font-weight: 800; background: var(--kpe-green-pale); color: var(--kpe-green); border-color: var(--kpe-green);" onclick="window.kpekpeApp.curePatient(true)">Boire de l'eau bouillie filtrée et se reposer 💧</button>
          <button class="filter-pill" style="padding: 12px; font-weight: 700;" onclick="window.kpekpeApp.curePatient(false)">Le faire courir au soleil</button>
        </div>
      `}
    </div>
  `;
}

// 3. MENUISIER
function renderGameMenuisier() {
  const isCut = !!window.kidWoodCut;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #6D4C41;">Menuisier Bâtisseur • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Atelier d'Ébénisterie : La Table en Teck</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">La table a besoin de 4 pieds de 80 cm exactement. Tu as une poutre de 320 cm. Combien de pieds de 80 cm obtiens-tu ?</p>
      
      <div style="font-size: 4rem; margin: 20px 0;">${isCut ? '🪑 Table en Teck Magnifiquement Assemblée !' : '🪵 Poutre de 320 cm à découper'}</div>

      ${isCut ? `
        <div style="background: var(--kpe-yellow-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #8A6D05; margin-bottom: 16px;">
          🪵 320 ÷ 80 = 4 pieds parfaits ! La table est parfaitement équilibrée ! +2 étoiles ⭐⭐ (Pôle Bâtisseur +10 XP)
        </div>
        <button class="btn-primary" style="background: #6D4C41; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; justify-content: center; gap: 14px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.cutWood(false)">2 pieds</button>
          <button class="btn-primary" style="background: #6D4C41;" onclick="window.kpekpeApp.cutWood(true)">4 pieds exactement (80 cm chacun)</button>
          <button class="btn-secondary" onclick="window.kpekpeApp.cutWood(false)">6 pieds</button>
        </div>
      `}
    </div>
  `;
}

// 4. CODEUR
function renderGameCodeur() {
  const isRoboWon = !!window.kidRobotWon;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #1E40AF;">Créateur de Code • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Programmer le Robot Explorateur</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Le diamant est à 2 cases devant, puis 1 case à droite. Quel algorithme donner au robot ?</p>
      
      <div style="background: #0F172A; color: #38BDF8; font-family: monospace; border-radius: var(--radius-lg); padding: 24px; margin: 20px 0; font-size: 1.2rem;">
        ${isRoboWon ? '🤖 [Avancer] ➔ [Avancer] ➔ [Tourner Droite] ➔ 💎 DIAMANT CAPTURÉ !' : '🤖 Robot en attente d\'instructions...'}
      </div>

      ${isRoboWon ? `
        <div style="background: var(--kpe-green-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #065F46; margin-bottom: 16px;">
          💻 Algorithme parfait ! Tu penses comme un ingénieur logiciel ! +2 étoiles ⭐⭐ (Pôle Tech +10 XP)
        </div>
        <button class="btn-primary" style="background: #1E40AF; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 8px; max-width: 420px; margin: 0 auto;">
          <button class="filter-pill" style="padding: 10px; font-weight: 800; background: #E0F2FE; color: #0369A1;" onclick="window.kpekpeApp.runCodeRobot(true)">Programme A : Avancer(2) ➔ Droite(1)</button>
          <button class="filter-pill" style="padding: 10px;" onclick="window.kpekpeApp.runCodeRobot(false)">Programme B : Reculer(3) ➔ Gauche(2)</button>
        </div>
      `}
    </div>
  `;
}

// 5. VÉTÉRINAIRE
function renderGameVeterinaire() {
  const isHealed = !!window.kidVetHealed;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #059669;">Vétérinaire de Fazao • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Secourir la petite gazelle</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Une épine s'est coincée dans la patte de la gazelle. Que faire avec douceur ?</p>
      
      <div style="font-size: 4.5rem; margin: 20px 0;">${isHealed ? '🦌 Gazelle guérie qui galope joyeusement !' : '🩹 Gazelle craintive avec une patte blessée'}</div>

      ${isHealed ? `
        <div style="background: var(--kpe-green-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #065F46; margin-bottom: 16px;">
          🌿 Retrait de l'épine + argile apaisante ! La faune te remercie ! +2 étoiles ⭐⭐ (Pôle Vivant +10 XP)
        </div>
        <button class="btn-primary" style="background: #059669; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.healAnimal(false)">Tirer brutalement</button>
          <button class="btn-primary" style="background: #059669;" onclick="window.kpekpeApp.healAnimal(true)">Retirer doucement à la pince et désinfecter</button>
        </div>
      `}
    </div>
  `;
}

// 6. BOUTIQUE (Calcul de monnaie)
function renderGameBoutique() {
  const isPaid = !!window.kidBoutiquePaid;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: var(--kpe-green);">La Boutique de Lomé • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Calcul du Rendu de Monnaie</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Le panier coûte <strong>1 350 FCFA</strong>. La cliente te donne un billet de <strong>2 000 FCFA</strong>. Combien lui rends-tu ?</p>
      
      <div style="background: var(--kpe-green-pale); border-radius: var(--radius-lg); padding: 24px; margin: 20px 0; font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: #06401E;">
        2 000 FCFA - 1 350 FCFA = ?
      </div>

      ${isPaid ? `
        <div style="background: var(--kpe-yellow-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #8A6D05; margin-bottom: 16px;">
          🎉 650 FCFA rendu exactement (1 pièce de 500 + 1 pièce de 100 + 1 pièce de 50) ! +2 étoiles ⭐⭐ (Pôle Gestion +10 XP)
        </div>
        <button class="btn-primary" style="margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; justify-content: center; gap: 14px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.giveChange(false)">550 FCFA</button>
          <button class="btn-primary" onclick="window.kpekpeApp.giveChange(true)">650 FCFA (Exact)</button>
          <button class="btn-secondary" onclick="window.kpekpeApp.giveChange(false)">750 FCFA</button>
        </div>
      `}
    </div>
  `;
}

// 7. JARRES D'ÉPARGNE
function renderGameJarres() {
  const isSplit = !!window.kidJarresSplit;
  return `
    <div class="kpe-card" style="max-width: 720px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #D97706;">Les 3 Jarres • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">La Sagesse de l'Argent de Poche</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Tu as reçu 10 pièces d'or. Répartis-les intelligemment dans les 3 jarres traditionnelles :</p>
      
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 24px 0;">
        <div style="background: #FEF3C7; padding: 18px; border-radius: var(--radius-md); border: 2px solid #F59E0B;">
          <div style="font-size: 2.5rem;">🏺</div>
          <div style="font-weight: 900; font-size: 0.9rem; color: #92400E; margin-top: 4px;">1. Dépenses</div>
          <div style="font-size: 0.8rem; color: #78350F;">4 pièces (Plaisir immédiat)</div>
        </div>
        <div style="background: #ECFAF1; padding: 18px; border-radius: var(--radius-md); border: 2px solid #00963F;">
          <div style="font-size: 2.5rem;">🏺</div>
          <div style="font-weight: 900; font-size: 0.9rem; color: #065F46; margin-top: 4px;">2. Grand Projet</div>
          <div style="font-size: 0.8rem; color: #047857;">4 pièces (Vélo / Livre)</div>
        </div>
        <div style="background: #F4ECF7; padding: 18px; border-radius: var(--radius-md); border: 2px solid #8E44AD;">
          <div style="font-size: 2.5rem;">🏺</div>
          <div style="font-weight: 900; font-size: 0.9rem; color: #6B21A8; margin-top: 4px;">3. Partage</div>
          <div style="font-size: 0.8rem; color: #581C87;">2 pièces (Entraide)</div>
        </div>
      </div>

      ${isSplit ? `
        <div style="background: var(--kpe-yellow-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #8A6D05; margin-bottom: 16px;">
          🏺 Répartition parfaite ! Tu maîtrises le secret des grands bâtisseurs ! +2 étoiles ⭐⭐
        </div>
        <button class="btn-primary" style="background: #D97706; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <button class="btn-primary" style="background: #D97706; margin: 0 auto;" onclick="window.kpekpeApp.splitJarres()">Valider la Répartition des 3 Jarres</button>
      `}
    </div>
  `;
}

// 8. DÉTECTIVE ÉCOLO
function renderGameDetective() {
  const isInvestigated = !!window.kidDetectiveWon;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #0284C7;">Détective Écolo • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">L'Enquête de la Cascade de Kpalimé</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Pourquoi l'eau de pluie ruisselle-t-elle avec de la boue jusqu'au ruisseau ?</p>
      
      <div style="font-size: 4.5rem; margin: 20px 0;">${isInvestigated ? '🌳 Berges replantées d\'arbres : Eau redevenue limpide !' : '🔍 Traces d\'érosion sans végétation'}</div>

      ${isInvestigated ? `
        <div style="background: var(--kpe-green-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #065F46; margin-bottom: 16px;">
          🌊 Les racines des arbres retiennent la terre et filtrent l'eau ! Déduction scientifique brillante ! +2 étoiles ⭐⭐ (Pôle Écologie +10 XP)
        </div>
        <button class="btn-primary" style="background: #0284C7; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 8px; max-width: 440px; margin: 0 auto;">
          <button class="filter-pill" style="padding: 12px; font-weight: 800; background: #E0F2FE; color: #0369A1;" onclick="window.kpekpeApp.solveDetective(true)">Parce que les arbres ont été coupés et ne retiennent plus la terre 🌳</button>
          <button class="filter-pill" style="padding: 12px;" onclick="window.kpekpeApp.solveDetective(false)">Parce que les poissons nagent trop vite</button>
        </div>
      `}
    </div>
  `;
}

// 9. TOUR DU TOGO
function renderGameDirigeable() {
  const isVisited = !!window.kidDirigeableWon;
  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px; text-align: center;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeKidGame()">${icon('arrow-left', 16)} Retour</button>
        <span style="font-weight: 800; color: #8E44AD;">Tour du Togo • ⭐ ${window.kidTotalStars || 24}</span>
      </div>
      <h2 style="font-size: 1.5rem; font-weight: 900;">Escale 1 : Le Pays Tamberma (Koutammakou)</h2>
      <p style="color: var(--kpe-gray); font-size: 0.9rem;">Les châteaux forts en terre crue classés au Patrimoine Mondial de l'UNESCO s'appellent :</p>
      
      <div style="font-size: 4.5rem; margin: 20px 0;">${isVisited ? '🏰 Les Châteaux Tata Somba de Koutammakou !' : '🛩️ Dirigeable en vol au-dessus du Nord-Togo'}</div>

      ${isVisited ? `
        <div style="background: var(--kpe-yellow-pale); padding: 14px; border-radius: var(--radius-md); font-weight: 800; color: #8A6D05; margin-bottom: 16px;">
          ✨ Bravo ! Les célèbres Tata Somba ! Une merveille d'architecture bioclimatique ! +2 étoiles ⭐⭐ (Pôle Culture +10 XP)
        </div>
        <button class="btn-primary" style="background: #8E44AD; margin: 0 auto;" onclick="window.kpekpeApp.closeKidGame()">Choisir une autre mission</button>
      ` : `
        <div style="display: flex; justify-content: center; gap: 12px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.visitSite(false)">Les Pyramides</button>
          <button class="btn-primary" style="background: #8E44AD;" onclick="window.kpekpeApp.visitSite(true)">Les Tata Somba (Exact)</button>
          <button class="btn-secondary" onclick="window.kpekpeApp.visitSite(false)">Les Igloos</button>
        </div>
      `}
    </div>
  `;
}

// ----------------------------------------------------
// RAPPORT COMPLET D'ORIENTATION PARENTALE (5 PÔLES DE TALENTS)
// ----------------------------------------------------
function renderParentalReport() {
  return `
    <div style="display: flex; flex-direction: column; gap: 28px; max-width: 880px; margin: 0 auto;">
      
      <!-- Back Link & Print -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <button class="btn-secondary" onclick="window.kpekpeApp.closeParentReport()">
          ${icon('arrow-left', 16)}
          <span>Retour à Kpékpé Kids</span>
        </button>
        <button class="btn-secondary" onclick="window.print()">
          ${icon('file-text', 16)}
          <span>Imprimer le Bilan Officiel</span>
        </button>
      </div>

      <!-- Header Card -->
      <div class="kpe-card" style="padding: 32px; border-top: 5px solid var(--kpe-green);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 16px;">
          <div>
            <span class="kpe-tag">Bilan Pédagogique d'Éveil & d'Orientation Junior</span>
            <h1 style="font-size: 1.85rem; font-weight: 900; color: var(--kpe-dark); margin-top: 8px;">
              Rapport des 5 Piliers d'Avenir de l'Enfant
            </h1>
            <p style="font-size: 0.95rem; color: var(--kpe-gray); margin-top: 2px;">
              Élève : <strong>Kofi Jr</strong> • Âge : <strong>6 ans et demi (Classe de CP)</strong> • Période : <strong>Trimestre en cours</strong>
            </p>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 2.2rem; font-weight: 900; color: var(--kpe-green); font-family: var(--font-display);">24 ⭐</div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray); font-weight: 700;">Étoiles récoltées</div>
          </div>
        </div>
      </div>

      <!-- Radar des 5 Pôles de Talents Naturels -->
      <div class="kpe-card" style="padding: 28px;">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--kpe-dark); margin-bottom: 20px;">
          1. Profil des 5 Piliers de Talents (Généré en Temps Réel)
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
          
          <!-- Pôle 1 : Sciences & Tech -->
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.9rem;">
              <span>🔬 1. Sciences, Énergie & Tech</span>
              <span style="color: #D97706;">94 %</span>
            </div>
            <div style="height: 6px; background: #E5E7EB; border-radius: 4px; overflow: hidden; margin: 8px 0;">
              <div style="height: 100%; width: 94%; background: #D97706;"></div>
            </div>
            <p style="font-size: 0.78rem; color: var(--kpe-gray);">Quêtes réussies : Solaire, Codeur. Forte logique spatiale et expérimentale.</p>
          </div>

          <!-- Pôle 2 : Gestion & Commerce -->
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.9rem;">
              <span>💼 2. Économie & Entrepreneuriat</span>
              <span style="color: var(--kpe-green);">90 %</span>
            </div>
            <div style="height: 6px; background: #E5E7EB; border-radius: 4px; overflow: hidden; margin: 8px 0;">
              <div style="height: 100%; width: 90%; background: var(--kpe-green);"></div>
            </div>
            <p style="font-size: 0.78rem; color: var(--kpe-gray);">Quêtes réussies : Boutique, Les 3 Jarres. Calcul mental rapide et sens de l'épargne.</p>
          </div>

          <!-- Pôle 3 : Santé & Soin -->
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.9rem;">
              <span>🩺 3. Santé, Soin & Vivant</span>
              <span style="color: #EF4444;">88 %</span>
            </div>
            <div style="height: 6px; background: #E5E7EB; border-radius: 4px; overflow: hidden; margin: 8px 0;">
              <div style="height: 100%; width: 88%; background: #EF4444;"></div>
            </div>
            <p style="font-size: 0.78rem; color: var(--kpe-gray);">Quêtes réussies : Médecin, Vétérinaire. Grande bienveillance et empathie.</p>
          </div>

          <!-- Pôle 4 : Bâtisseur & Artisanat -->
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.9rem;">
              <span>🪵 4. Bâtisseur, Design & Matière</span>
              <span style="color: #6D4C41;">85 %</span>
            </div>
            <div style="height: 6px; background: #E5E7EB; border-radius: 4px; overflow: hidden; margin: 8px 0;">
              <div style="height: 100%; width: 85%; background: #6D4C41;"></div>
            </div>
            <p style="font-size: 0.78rem; color: var(--kpe-gray);">Quête réussie : Menuisier. Vision géométrique précise et patience d'assemblage.</p>
          </div>

          <!-- Pôle 5 : Écologie & Culture -->
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.9rem;">
              <span>🌍 5. Écologie, Histoire & Culture</span>
              <span style="color: #8E44AD;">96 %</span>
            </div>
            <div style="height: 6px; background: #E5E7EB; border-radius: 4px; overflow: hidden; margin: 8px 0;">
              <div style="height: 100%; width: 96%; background: #8E44AD;"></div>
            </div>
            <p style="font-size: 0.78rem; color: var(--kpe-gray);">Quêtes réussies : Détective Écolo, Tour du Togo. Passion pour la nature et l'histoire.</p>
          </div>

        </div>
      </div>

      <!-- Pistes d'Orientation & Conseils Famille -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        
        <div style="background: var(--kpe-green-pale); border: 1px solid rgba(0, 150, 63, 0.2); border-radius: var(--radius-lg); padding: 22px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--kpe-green); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            ${icon('check', 16, '', '#00963F')}
            <span>Recommandations d'Avenir pour Kofi Jr</span>
          </h4>
          <ul style="font-size: 0.88rem; color: #084922; margin-left: 20px; line-height: 1.6;">
            <li><strong>Filières d'Excellence suggérées</strong> : Ingénierie verte, Agronomie moderne, Médecine/Vétérinaire ou Entrepreneuriat technologique.</li>
            <li><strong>Points forts majeurs</strong> : Excellente capacité à relier les sciences au bien-être de la communauté.</li>
          </ul>
        </div>

        <div style="background: var(--kpe-yellow-pale); border: 1px solid rgba(254, 236, 1, 0.8); border-radius: var(--radius-lg); padding: 22px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #8A6D05; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            ${icon('sparkles', 16, '', '#8A6D05')}
            <span>Accompagnement à la Maison</span>
          </h4>
          <ul style="font-size: 0.88rem; color: #5D4A04; margin-left: 20px; line-height: 1.6;">
            <li>Encourager les petits bricolages et plantations à la maison.</li>
            <li>Continuer le jeu des 3 jarres pour ancrer l'autonomie financière.</li>
            <li>Sessions courtes et régulières (20 à 30 min par jour).</li>
          </ul>
        </div>

      </div>

    </div>
  `;
}
