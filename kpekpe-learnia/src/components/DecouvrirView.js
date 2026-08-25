// Kpékpé Découvrir — Catalogue Métiers & Orientation
import { icon } from './Icons.js';

export function renderDecouvrirView(subNav, decouvrirData) {
  const currentCategory = window.selectedJobCategory || 'Tous';
  const categories = ['Tous', 'Numérique', 'Santé', 'Agriculture', 'Éducation', 'Finance', 'Créatif'];

  const filteredJobs = currentCategory === 'Tous' 
    ? decouvrirData.metiers 
    : decouvrirData.metiers.filter(m => m.secteur.toLowerCase().includes(currentCategory.toLowerCase()));

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <!-- Title & Context -->
      <div>
        <h1 style="font-size: 1.8rem; font-weight: 900; color: var(--kpe-dark);">Métiers & Débouchés</h1>
        <p style="color: var(--kpe-gray); font-size: 0.95rem; margin-top: 4px;">
          Explore les métiers d'avenir adaptés au marché togolais et sous-régional.
        </p>
      </div>

      <!-- Category Filter Pills (Exact Match to Prototype Image 2) -->
      <div class="filter-pills-row">
        ${categories.map(cat => `
          <button class="filter-pill ${currentCategory === cat ? 'active' : ''}" onclick="window.kpekpeApp.filterJobs('${cat}')">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Job Cards Grid (Exact Design from Image 2) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
        ${filteredJobs.map(m => `
          <div class="kpe-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span class="kpe-tag">${m.secteur}</span>
              <button style="background: transparent; border: none; color: var(--kpe-gray-light); cursor: pointer;" title="Ajouter aux favoris">
                ${icon('heart', 18)}
              </button>
            </div>

            <h3 style="font-size: 1.2rem; font-weight: 800; margin-top: 14px; color: var(--kpe-dark);">
              ${m.titre}
            </h3>
            <p style="font-size: 0.85rem; color: var(--kpe-gray); margin-top: 2px;">
              Niveau min. : ${m.niveauMin}
            </p>

            <div style="display: flex; align-items: flex-start; gap: 8px; margin-top: 14px; font-size: 0.85rem; color: var(--kpe-gray-dark); line-height: 1.4;">
              <span style="color: var(--kpe-green); flex-shrink: 0; margin-top: 2px;">
                ${icon('map-pin', 16, '', '#00963F')}
              </span>
              <span>${m.debouches}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
