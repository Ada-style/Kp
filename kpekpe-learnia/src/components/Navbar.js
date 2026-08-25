// Kpékpé Learnia — Top Navbar (avec Modal de Sélection de Toutes les Classes)
import { icon } from './Icons.js';

export function renderNavbar(userState, curriculum) {
  const user = userState.user;
  const currentClass = curriculum.classes.find(c => c.id === user.classe) || curriculum.classes[0];
  const activeNav = userState.activeNavigation;
  const activeSub = userState.activeSubNav;

  let breadcrumbTitle = "Vue d'ensemble";
  if (activeNav === 'mon-parcours') breadcrumbTitle = "Mon parcours";
  else if (activeNav === 'kids') breadcrumbTitle = "Kpékpé Kids";
  else if (activeNav === 'decouvrir') breadcrumbTitle = "Découvrir";
  else if (activeSub === 'cours') breadcrumbTitle = "Mes cours";
  else if (activeSub === 'chapitre') breadcrumbTitle = "Fonctions affines";
  else if (activeSub === 'progression') breadcrumbTitle = "Ma progression";

  const isPickerOpen = !!window.isClassPickerOpen;

  return `
    <header class="top-header" style="position: relative;">
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <span style="color: var(--kpe-gray);">Apprendre</span>
        <span style="color: var(--kpe-gray-light); font-size: 0.8rem;">/</span>
        <span class="current">${breadcrumbTitle}</span>
      </div>

      <!-- Header Actions -->
      <div class="header-actions">
        <!-- Class Selector Button -->
        <div style="position: relative;">
          <button class="filter-pill" style="padding: 6px 14px; font-size: 0.82rem; font-weight: 700; background: #F9FAF9; border-color: rgba(0, 150, 63, 0.3); color: var(--kpe-green);" onclick="window.kpekpeApp.toggleClassPicker()">
            <span>🎓 ${currentClass.name}</span>
            <span style="font-size: 0.65rem; margin-left: 6px;">${isPickerOpen ? '▲' : '▼'}</span>
          </button>

          <!-- DROPDOWN COMPLET DE TOUTES LES CLASSES (Collège & Lycée) -->
          ${isPickerOpen ? `
            <div style="position: absolute; right: 0; top: 44px; width: 320px; background: #FFFFFF; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-lg); box-shadow: 0 10px 25px rgba(0,0,0,0.15); z-index: 100; padding: 14px; max-height: 480px; overflow-y: auto;">
              
              <div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 1px; margin-bottom: 8px;">
                CHOISIR MA CLASSE
              </div>

              <!-- SECTION COLLÈGE -->
              <div style="font-size: 0.78rem; font-weight: 800; color: var(--kpe-green); margin: 8px 0 4px 0; border-bottom: 1px solid #E5E7EB; padding-bottom: 2px;">
                🏫 COLLÈGE
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${curriculum.classes.filter(c => c.cycle === 'Collège').map(c => `
                  <button style="padding: 8px 12px; border-radius: var(--radius-sm); border: none; background: ${c.id === user.classe ? 'var(--kpe-green-pale)' : 'transparent'}; color: ${c.id === user.classe ? 'var(--kpe-green)' : 'var(--kpe-dark)'}; font-weight: ${c.id === user.classe ? '800' : '600'}; text-align: left; font-size: 0.84rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onclick="window.kpekpeApp.selectClass('${c.id}', '${c.name}')">
                    <span>${c.name}</span>
                    ${c.id === user.classe ? icon('check', 14, '', '#00963F') : ''}
                  </button>
                `).join('')}
              </div>

              <!-- SECTION LYCÉE -->
              <div style="font-size: 0.78rem; font-weight: 800; color: #3182BD; margin: 14px 0 4px 0; border-bottom: 1px solid #E5E7EB; padding-bottom: 2px;">
                🎓 LYCÉE (Second Cycle)
              </div>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                ${curriculum.classes.filter(c => c.cycle === 'Lycée').map(c => `
                  <button style="padding: 8px 12px; border-radius: var(--radius-sm); border: none; background: ${c.id === user.classe ? 'var(--kpe-green-pale)' : 'transparent'}; color: ${c.id === user.classe ? 'var(--kpe-green)' : 'var(--kpe-dark)'}; font-weight: ${c.id === user.classe ? '800' : '600'}; text-align: left; font-size: 0.84rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onclick="window.kpekpeApp.selectClass('${c.id}', '${c.name}')">
                    <span>${c.name}</span>
                    ${c.id === user.classe ? icon('check', 14, '', '#00963F') : ''}
                  </button>
                `).join('')}
              </div>

            </div>
          ` : ''}
        </div>

        <!-- Search Button -->
        <button class="icon-btn" title="Rechercher" onclick="window.kpekpeApp.showNotice('Recherche globale Kpékpé')">
          ${icon('search', 18)}
        </button>

        <!-- Parler à Kpékpé -->
        <button class="btn-parler-kpekpe" onclick="window.kpekpeApp.openChapter('maths', 'fonctions-affines', 'tuteur')">
          ${icon('sparkles', 16, '', '#00963F')}
          <span>Parler à Kpékpé</span>
        </button>

        <!-- Notifications -->
        <button class="icon-btn" title="Notifications" onclick="window.kpekpeApp.showNotice('Aucune nouvelle notification.')">
          ${icon('bell', 18)}
        </button>
      </div>
    </header>
  `;
}
