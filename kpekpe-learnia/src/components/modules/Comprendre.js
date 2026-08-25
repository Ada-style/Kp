// Kpékpé Learnia — Module 1 : Comprendre
import { icon } from '../Icons.js';

export function renderComprendre(chapter, userState) {
  const content = chapter.content?.comprendre;
  if (!content) {
    return `
      <div class="kpe-card">
        <p style="color: var(--kpe-gray);">Le cours complet est en cours d'édition.</p>
      </div>
    `;
  }

  const notionsHtml = content.notions.map((n, idx) => `
    <div class="kpe-card" style="margin-bottom: 20px;">
      <span class="kpe-tag">${n.badge || `Notion ${idx + 1}`}</span>
      <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--kpe-dark); margin: 10px 0 6px 0;">${n.titre}</h3>
      ${n.formule ? `
        <div style="background: #F9FAF9; border-left: 4px solid var(--kpe-green); padding: 14px 18px; border-radius: 4px; font-family: monospace; font-size: 1.2rem; font-weight: 800; color: var(--kpe-green); margin: 12px 0;">
          ${n.formule}
        </div>
      ` : ''}
      <p style="font-size: 0.95rem; color: var(--kpe-gray-dark); line-height: 1.6;">${n.explication}</p>

      ${n.details ? `
        <ul style="margin: 12px 0 0 20px; font-size: 0.9rem; color: var(--kpe-gray); line-height: 1.6;">
          ${n.details.map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join('')}
        </ul>
      ` : ''}

      ${n.variations ? `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-top: 16px;">
          ${n.variations.map(v => `
            <div style="background: #FFFFFF; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 14px;">
              <span style="font-weight: 800; font-size: 0.82rem; color: var(--kpe-green);">${v.condition}</span>
              <p style="font-weight: 700; font-size: 0.92rem; margin-top: 2px;">${v.nom}</p>
              <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 4px;">${v.description}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${n.exempleLocal ? `
        <div style="background: var(--kpe-yellow-pale); border: 1px solid rgba(254, 236, 1, 0.8); border-radius: var(--radius-md); padding: 18px; margin-top: 16px;">
          <div style="font-size: 0.85rem; font-weight: 800; color: #8A6D05; text-transform: uppercase; letter-spacing: 0.5px;">
            Exemple concret : ${n.exempleLocal.titre}
          </div>
          <p style="font-size: 0.88rem; color: #4A3C04; margin-top: 6px;">${n.exempleLocal.contexte}</p>
          <div style="background: #FFFFFF; padding: 10px 14px; border-radius: var(--radius-sm); font-family: monospace; font-weight: 700; color: var(--kpe-green); margin: 8px 0; border: 1px dashed rgba(0, 150, 63, 0.3);">
            ${n.exempleLocal.calcul}
          </div>
          <p style="font-size: 0.82rem; color: #6D5805; font-style: italic;">${n.exempleLocal.analyse}</p>
        </div>
      ` : ''}
    </div>
  `).join('');

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <!-- Intro Card -->
      <div class="kpe-card">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--kpe-green);">Introduction au chapitre</h2>
        <p style="font-size: 1rem; color: var(--kpe-gray-dark); margin-top: 8px; line-height: 1.6;">
          ${content.introduction}
        </p>
      </div>

      <!-- Notions -->
      <div>
        ${notionsHtml}
      </div>

      <!-- Points Clés -->
      ${content.pointsCles ? `
        <div style="background: var(--kpe-green-pale); border: 1px solid rgba(0, 150, 63, 0.2); border-radius: var(--radius-lg); padding: 22px 26px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--kpe-green); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            ${icon('check', 16, '', '#00963F')}
            <span>Ce qu'il faut retenir absolument</span>
          </h4>
          <ul style="margin-left: 20px; font-size: 0.9rem; color: #084922; line-height: 1.6;">
            ${content.pointsCles.map(p => `<li style="margin-bottom: 6px;">${p}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Next Action -->
      <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
        <button class="btn-primary" onclick="window.kpekpeApp.switchChapterTab('explorer')">
          <span>Passer à l'expérience interactive</span>
          ${icon('arrow-right', 16, '', '#FFFFFF')}
        </button>
      </div>
    </div>
  `;
}
