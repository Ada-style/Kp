// Kpékpé Learnia — Écran Central du Chapitre (avec Onboarding RAG et 5 Modes)
import { icon } from './Icons.js';
import { renderComprendre } from './modules/Comprendre.js';
import { renderExplorer, initFunctionGrapher } from './modules/Explorer.js';
import { renderMemoriser } from './modules/Memoriser.js';
import { renderEntrainer } from './modules/Entrainer.js';
import { renderTuteur } from './modules/TuteurIA.js';

export function renderChapterDetail(subjectId, chapterId, currentTab, userState, curriculum) {
  const subject = curriculum.subjects.find(s => s.id === subjectId) || curriculum.subjects[0];
  const chapters = curriculum.chapters[subjectId] || [];
  const chapter = chapters.find(c => c.id === chapterId) || chapters[0];

  setTimeout(() => {
    if (currentTab === 'explorer') {
      initFunctionGrapher(2, 3);
    }
  }, 50);

  const rag = chapter.ragBriefing;

  return `
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <!-- Back Link -->
      <div>
        <button class="btn-secondary" style="border: none; padding: 0; color: var(--kpe-gray);" onclick="window.kpekpeApp.selectSubject('${subject.id}')">
          ${icon('arrow-left', 16)}
          <span>Retour à ${subject.name}</span>
        </button>
      </div>

      <!-- Chapter Header Box -->
      <div style="background: #FFFFFF; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-xl); padding: 32px;">
        <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: var(--kpe-green);">
          ${subject.name.toUpperCase()} • ${userState.user.classeLabel.toUpperCase()}
        </span>
        <h1 style="font-size: 2rem; font-weight: 900; margin-top: 6px; color: var(--kpe-dark);">
          ${chapter.title.toUpperCase()}
        </h1>
        <p style="color: var(--kpe-gray-dark); font-size: 1rem; margin-top: 6px; max-width: 680px;">
          ${chapter.subtitle || chapter.summary}
        </p>

        <div style="display: flex; align-items: center; gap: 14px; margin-top: 18px;">
          <div style="width: 140px; height: 6px; background: #E5E7EB; border-radius: var(--radius-full); overflow: hidden;">
            <div style="height: 100%; width: ${chapter.progress}%; background: var(--kpe-green); border-radius: var(--radius-full);"></div>
          </div>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--kpe-green);">${chapter.progress} % terminé</span>
        </div>
      </div>

      <!-- BANNIÈRE ONBOARDING & RÉSUMÉ RAG DU TUTEUR IA -->
      ${rag ? `
        <div style="background: linear-gradient(145deg, #FAFCFA 0%, #EAF7EE 100%); border: 1.5px solid rgba(0, 150, 63, 0.25); border-radius: var(--radius-xl); padding: 26px 30px; box-shadow: var(--shadow-card);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div class="avatar-kpekpe" style="width: 32px; height: 32px; font-size: 0.85rem;">
              ${icon('sparkles', 16, '', '#FFFFFF')}
            </div>
            <div>
              <div style="font-weight: 800; font-size: 0.95rem; color: var(--kpe-dark);">Tuteur IA Kpékpé • Synthèse & Briefing de la séance</div>
              <div style="font-size: 0.78rem; color: var(--kpe-green); font-weight: 600;">Généré à partir du programme officiel (RAG)</div>
            </div>
          </div>

          <p style="font-size: 0.92rem; color: #1F2937; line-height: 1.5; font-weight: 600;">
            ${rag.accroche}
          </p>

          <ul style="margin: 12px 0 16px 20px; font-size: 0.88rem; color: #374151; line-height: 1.6;">
            ${rag.resumeExpress.map(r => `<li style="margin-bottom: 4px;">${r}</li>`).join('')}
          </ul>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${rag.actionsSuggerees.map(act => `
              <button class="filter-pill" style="font-size: 0.8rem; font-weight: 700; background: #FFFFFF; border-color: rgba(0,150,63,0.3); color: var(--kpe-green);" onclick="window.kpekpeApp.switchChapterTab('${act.tab}')">
                ${act.label}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 5 Pedagogical Modes Navigation -->
      <div class="chapter-tabs-bar">
        <button class="chapter-tab ${currentTab === 'comprendre' ? 'active' : ''}" onclick="window.kpekpeApp.switchChapterTab('comprendre')">
          ${icon('book-open', 16, '', currentTab === 'comprendre' ? '#00963F' : '#6B7280')}
          <span>1. COMPRENDRE</span>
        </button>
        <button class="chapter-tab ${currentTab === 'explorer' ? 'active' : ''}" onclick="window.kpekpeApp.switchChapterTab('explorer')">
          ${icon('play', 16, '', currentTab === 'explorer' ? '#00963F' : '#6B7280')}
          <span>2. EXPLORER</span>
        </button>
        <button class="chapter-tab ${currentTab === 'memoriser' ? 'active' : ''}" onclick="window.kpekpeApp.switchChapterTab('memoriser')">
          ${icon('layers', 16, '', currentTab === 'memoriser' ? '#00963F' : '#6B7280')}
          <span>3. MÉMORISER</span>
        </button>
        <button class="chapter-tab ${currentTab === 'entrainer' ? 'active' : ''}" onclick="window.kpekpeApp.switchChapterTab('entrainer')">
          ${icon('check', 16, '', currentTab === 'entrainer' ? '#00963F' : '#6B7280')}
          <span>4. S'ENTRAÎNER</span>
        </button>
        <button class="chapter-tab ${currentTab === 'tuteur' ? 'active' : ''}" onclick="window.kpekpeApp.switchChapterTab('tuteur')">
          ${icon('sparkles', 16, '', currentTab === 'tuteur' ? '#00963F' : '#6B7280')}
          <span>5. DEMANDER DE L'AIDE</span>
        </button>
      </div>

      <!-- Active Module View -->
      <div>
        ${currentTab === 'comprendre' ? renderComprendre(chapter, userState) : ''}
        ${currentTab === 'explorer' ? renderExplorer(chapter, userState) : ''}
        ${currentTab === 'memoriser' ? renderMemoriser(chapter, userState, window.memoriseSubTab || 'flashcards') : ''}
        ${currentTab === 'entrainer' ? renderEntrainer(chapter, userState) : ''}
        ${currentTab === 'tuteur' ? renderTuteur(chapter, userState) : ''}
      </div>
    </div>
  `;
}
