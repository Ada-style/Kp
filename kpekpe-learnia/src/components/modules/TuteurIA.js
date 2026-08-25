// Kpékpé Learnia — Module 5 : Tuteur IA Socratique
import { icon } from '../Icons.js';

export function renderTuteur(chapter, userState) {
  const tuteurData = chapter.content?.tuteur;
  const messages = window.tuteurMessages || [
    { sender: 'tuteur', text: tuteurData?.intro || "Bonjour Kofi ! Que souhaites-tu approfondir sur ce cours ?" }
  ];

  window.currentChapterSuggestions = tuteurData?.suggestions || [];

  return `
    <div class="kpe-card" style="height: 580px; display: flex; flex-direction: column; padding: 0; overflow: hidden;">
      <!-- Header -->
      <div style="padding: 16px 24px; border-bottom: 1px solid var(--kpe-gray-border); display: flex; align-items: center; gap: 12px; background: #FAFCFA;">
        <div class="avatar-kpekpe" style="width: 32px; height: 32px; font-size: 0.85rem;">
          ${icon('sparkles', 16, '', '#FFFFFF')}
        </div>
        <div>
          <div style="font-weight: 800; font-size: 0.95rem; color: var(--kpe-dark);">Tuteur IA Kpékpé</div>
          <div style="font-size: 0.75rem; color: var(--kpe-green); font-weight: 600;">Accompagnement socratique • ${chapter.title}</div>
        </div>
      </div>

      <!-- Message list -->
      <div id="tuteurLog" style="flex: 1; padding: 20px 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;">
        ${messages.map(m => `
          <div style="max-width: 80%; padding: 12px 16px; border-radius: var(--radius-lg); font-size: 0.92rem; line-height: 1.5; align-self: ${m.sender === 'user' ? 'flex-end' : 'flex-start'}; background: ${m.sender === 'user' ? 'var(--kpe-green)' : '#F3F4F6'}; color: ${m.sender === 'user' ? '#FFFFFF' : 'var(--kpe-dark)'};">
            ${m.text}
          </div>
        `).join('')}
      </div>

      <!-- Quick suggestions -->
      <div style="padding: 10px 20px; background: #FAFCFA; border-top: 1px solid var(--kpe-gray-border); display: flex; gap: 8px; overflow-x: auto;">
        ${window.currentChapterSuggestions.map((s, idx) => `
          <button class="filter-pill" style="font-size: 0.76rem; padding: 5px 12px;" onclick="window.kpekpeApp.selectTuteurSuggestion(${idx})">
            ${s}
          </button>
        `).join('')}
      </div>

      <!-- Input Form -->
      <form style="padding: 14px 20px; border-top: 1px solid var(--kpe-gray-border); display: flex; gap: 10px; background: #FFFFFF;" onsubmit="window.kpekpeApp.handleTuteurSubmit(event)">
        <input type="text" id="tuteurInput" placeholder="Pose ta question..." style="flex: 1; border: 1px solid var(--kpe-gray-border); border-radius: var(--radius-md); padding: 10px 14px; outline: none; font-size: 0.9rem;" />
        <button type="submit" class="btn-primary" style="padding: 10px 16px;">
          ${icon('send', 16, '', '#FFFFFF')}
        </button>
      </form>
    </div>
  `;
}
