// Kpékpé Learnia — Page Matière (Parcours Pédagogique)
import { icon } from './Icons.js';

export function renderSubjectDetail(subjectId, userState, curriculum) {
  const subject = curriculum.subjects.find(s => s.id === subjectId) || curriculum.subjects[0];
  const chapters = curriculum.chapters[subjectId] || [];

  return `
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <!-- Back Link -->
      <div>
        <button class="btn-secondary" style="border: none; padding: 0; color: var(--kpe-gray);" onclick="window.kpekpeApp.navigateTo('apprendre', 'vue-d-ensemble')">
          ${icon('arrow-left', 16)}
          <span>Retour aux matières</span>
        </button>
      </div>

      <!-- Subject Header Banner -->
      <div style="background: #FFFFFF; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-xl); padding: 32px; display: flex; justify-content: space-between; align-items: center; gap: 24px;">
        <div>
          <span class="kpe-tag" style="background: ${subject.bgColor}; color: ${subject.color};">${subject.name.toUpperCase()}</span>
          <h1 style="font-size: 1.8rem; font-weight: 900; margin-top: 8px; color: var(--kpe-dark);">${subject.name}</h1>
          <p style="color: var(--kpe-gray); font-size: 0.95rem; margin-top: 4px;">${userState.user.classeLabel} • ${chapters.length} chapitres</p>
        </div>

        <div style="text-align: right;">
          <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 1px;">Progression</div>
          <div style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 900; color: ${subject.color};">${subject.progress} %</div>
        </div>
      </div>

      <!-- Chapters List -->
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 16px;">Chapitres du programme</h2>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${chapters.map(c => {
            const isClickable = c.status !== 'locked';
            return `
              <div class="kpe-card" style="padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; cursor: ${isClickable ? 'pointer' : 'not-allowed'}; opacity: ${c.status === 'locked' ? '0.6' : '1'};" ${isClickable ? `onclick="window.kpekpeApp.openChapter('${subject.id}', '${c.id}')"` : ''}>
                <div style="display: flex; align-items: center; gap: 16px;">
                  <div style="width: 32px; height: 32px; border-radius: var(--radius-sm); background: #F3F4F6; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.85rem; color: var(--kpe-gray-dark);">
                    0${c.number}
                  </div>
                  <div>
                    <h3 style="font-size: 1rem; font-weight: 700; color: var(--kpe-dark);">${c.title}</h3>
                    <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 2px;">${c.summary || ''}</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 12px;">
                  ${renderChapterStatusBadge(c.status, c.progress)}
                  ${isClickable ? icon('arrow-right', 16, '', '#00963F') : icon('lock', 16, '', '#9CA3AF')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderChapterStatusBadge(status, progress) {
  switch (status) {
    case 'completed':
      return `<span style="display: inline-flex; align-items: center; gap: 4px; color: #00963F; font-size: 0.82rem; font-weight: 700;">${icon('check', 14, '', '#00963F')} Terminé</span>`;
    case 'in_progress':
      return `<span style="display: inline-flex; align-items: center; gap: 4px; color: #B7950B; font-size: 0.82rem; font-weight: 700;">→ ${progress}% En cours</span>`;
    case 'not_started':
      return `<span style="color: var(--kpe-gray); font-size: 0.82rem; font-weight: 600;">Pas commencé</span>`;
    case 'locked':
      return `<span style="color: var(--kpe-gray-light); font-size: 0.82rem; font-weight: 600;">Verrouillé</span>`;
    default:
      return '';
  }
}
