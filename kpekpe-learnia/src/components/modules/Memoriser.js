// Kpékpé Learnia — Module 3 : Mémoriser
import { icon } from '../Icons.js';

export function renderMemoriser(chapter, userState, currentSubTab = 'flashcards') {
  const memData = chapter.content?.memoriser;

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <!-- Subtabs -->
      <div style="display: flex; gap: 10px;">
        <button class="filter-pill ${currentSubTab === 'flashcards' ? 'active' : ''}" onclick="window.kpekpeApp.switchMemoriseTab('flashcards')">
          ${icon('layers', 16, '', currentSubTab === 'flashcards' ? '#FFFFFF' : '#374151')}
          <span style="margin-left: 6px;">Flashcards interactives (${memData?.flashcards?.length || 0})</span>
        </button>
        <button class="filter-pill ${currentSubTab === 'carte_mentale' ? 'active' : ''}" onclick="window.kpekpeApp.switchMemoriseTab('carte_mentale')">
          ${icon('network', 16, '', currentSubTab === 'carte_mentale' ? '#FFFFFF' : '#374151')}
          <span style="margin-left: 6px;">Carte Mentale</span>
        </button>
        <button class="filter-pill ${currentSubTab === 'fiche' ? 'active' : ''}" onclick="window.kpekpeApp.switchMemoriseTab('fiche')">
          ${icon('file-text', 16, '', currentSubTab === 'fiche' ? '#FFFFFF' : '#374151')}
          <span style="margin-left: 6px;">Fiche Synthétique</span>
        </button>
      </div>

      <!-- Content -->
      ${currentSubTab === 'flashcards' ? renderFlashcards(memData?.flashcards) : ''}
      ${currentSubTab === 'carte_mentale' ? renderMindmap(memData?.carteMentale) : ''}
      ${currentSubTab === 'fiche' ? renderFiche(memData?.ficheSynthese) : ''}

      <!-- Footer -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.switchChapterTab('explorer')">
          ${icon('arrow-left', 16)}
          <span>Retour à l'expérience</span>
        </button>
        <button class="btn-primary" onclick="window.kpekpeApp.switchChapterTab('entrainer')">
          <span>Passer à l'entraînement</span>
          ${icon('arrow-right', 16, '', '#FFFFFF')}
        </button>
      </div>
    </div>
  `;
}

function renderFlashcards(cards) {
  if (!cards || !cards.length) return '<p>Aucune flashcard disponible.</p>';
  const idx = window.currentFlashcardIndex || 0;
  const card = cards[idx] || cards[0];
  const isFlipped = !!window.isFlashcardFlipped;

  return `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <div style="display: flex; justify-content: space-between; width: 100%; max-width: 520px; font-size: 0.85rem; font-weight: 800; color: var(--kpe-gray);">
        <span>CARTE ${idx + 1} / ${cards.length}</span>
        <span>Clique sur la carte pour voir la réponse</span>
      </div>

      <!-- Flashcard 3D -->
      <div style="width: 100%; max-width: 520px; height: 280px; perspective: 1000px; cursor: pointer;" onclick="window.kpekpeApp.toggleFlipFlashcard()">
        <div style="width: 100%; height: 100%; position: relative; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; border-radius: var(--radius-xl); transform: ${isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};">
          <!-- RECTO -->
          <div class="kpe-card" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 28px;">
            <span class="kpe-tag">${card.theme}</span>
            <div style="font-size: 1.15rem; font-weight: 800; text-align: center; color: var(--kpe-dark); line-height: 1.4;">
              ${card.question}
            </div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray); text-align: center;">Touche pour afficher la solution</div>
          </div>
          <!-- VERSO -->
          <div class="kpe-card" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; transform: rotateY(180deg); background: var(--kpe-green-pale); border-color: var(--kpe-green); display: flex; flex-direction: column; justify-content: space-between; padding: 28px;">
            <span class="kpe-tag" style="background: var(--kpe-green); color: #FFF;">Réponse</span>
            <div style="font-size: 1.1rem; font-weight: 700; text-align: center; color: #084922; line-height: 1.4;">
              ${card.reponse}
            </div>
            <div style="font-size: 0.78rem; color: var(--kpe-green); text-align: center;">Évalue ta réponse ci-dessous</div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 14px;">
        <button class="btn-secondary" style="border-color: #E53935; color: #E53935;" onclick="window.kpekpeApp.nextFlashcard(false, ${idx}, ${cards.length})">
          ${icon('refresh-cw', 16, '', '#E53935')}
          <span style="margin-left: 6px;">À revoir</span>
        </button>
        <button class="btn-primary" onclick="window.kpekpeApp.nextFlashcard(true, ${idx}, ${cards.length})">
          ${icon('check', 16, '', '#FFFFFF')}
          <span style="margin-left: 6px;">Je maîtrise</span>
        </button>
      </div>
    </div>
  `;
}

function renderMindmap(mm) {
  if (!mm) return '<p>Carte mentale non disponible.</p>';
  return `
    <div class="kpe-card" style="padding: 32px; display: flex; flex-direction: column; align-items: center; gap: 24px;">
      <div style="background: var(--kpe-green); color: #FFFFFF; font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; padding: 14px 28px; border-radius: var(--radius-md); text-align: center;">
        ${mm.centre.replace('\n', '<br/>')}
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; width: 100%;">
        ${mm.branches.map(b => `
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-gray-border); border-top: 3px solid ${b.color}; border-radius: var(--radius-md); padding: 16px;">
            <h4 style="font-size: 0.95rem; font-weight: 800; color: ${b.color}; margin-bottom: 8px;">${b.titre}</h4>
            <ul style="font-size: 0.85rem; color: var(--kpe-gray-dark); margin-left: 16px; line-height: 1.6;">
              ${b.feuilles.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFiche(fiche) {
  if (!fiche) return '<p>Fiche non disponible.</p>';
  return `
    <div class="kpe-card" style="max-width: 720px; margin: 0 auto;">
      <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 14px;">${fiche.titre}</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${fiche.lignes.map(l => `
          <tr style="border-bottom: 1px solid var(--kpe-gray-border);">
            <td style="padding: 12px 10px; font-weight: 700; width: 35%; font-size: 0.9rem;">${l.cle}</td>
            <td style="padding: 12px 10px; color: var(--kpe-green); font-family: monospace; font-weight: 700; font-size: 0.95rem;">${l.val}</td>
          </tr>
        `).join('')}
      </table>
      <div style="background: var(--kpe-yellow-pale); border-radius: var(--radius-md); padding: 14px; margin-top: 16px; font-size: 0.85rem; color: #5D4A04;">
        <strong>Astuce :</strong> ${fiche.astuce}
      </div>
    </div>
  `;
}
