// Kpékpé Learnia — Module 4 : S'entraîner (Quiz Calme & Progressif)
import { icon } from '../Icons.js';

export function renderEntrainer(chapter, userState) {
  const quizData = chapter.content?.entrainer;
  const qIndex = window.currentQuizIndex || 0;
  const questions = quizData.questions;
  const isFinished = qIndex >= questions.length;

  if (isFinished) {
    const score = window.quizCorrectCount || 0;
    const total = questions.length;

    return `
      <div class="kpe-card" style="max-width: 600px; margin: 0 auto; text-align: center; padding: 40px 32px;">
        <div style="color: var(--kpe-green); margin-bottom: 12px;">${icon('check', 48, '', '#00963F')}</div>
        <h2 style="font-size: 1.5rem; font-weight: 900;">Entraînement terminé</h2>
        <p style="color: var(--kpe-gray); font-size: 0.95rem; margin-top: 4px;">Score obtenu :</p>

        <div style="font-family: var(--font-display); font-size: 2.4rem; font-weight: 900; color: var(--kpe-green); margin: 16px 0;">
          ${score} / ${total}
        </div>

        <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px;">
          <button class="btn-secondary" onclick="window.kpekpeApp.restartQuiz()">
            ${icon('refresh-cw', 16)}
            <span>Recommencer</span>
          </button>
          <button class="btn-primary" onclick="window.kpekpeApp.switchChapterTab('tuteur')">
            <span>Poser une question au tuteur</span>
            ${icon('arrow-right', 16, '', '#FFFFFF')}
          </button>
        </div>
      </div>
    `;
  }

  const q = questions[qIndex];
  const selectedOpt = window.quizSelectedOption;
  const isValidated = !!window.quizAnswerValidated;

  return `
    <div class="kpe-card" style="max-width: 680px; margin: 0 auto; padding: 32px;">
      <!-- Step Indicator -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <span style="font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-green); letter-spacing: 1px;">
          Question ${qIndex + 1} / ${questions.length}
        </span>
        <div style="display: flex; gap: 4px;">
          ${questions.map((_, i) => `
            <div style="width: 24px; height: 5px; border-radius: 3px; background: ${i < qIndex ? 'var(--kpe-green)' : (i === qIndex ? 'var(--kpe-yellow)' : '#E5E7EB')};"></div>
          `).join('')}
        </div>
      </div>

      <div style="font-size: 1.15rem; font-weight: 700; color: var(--kpe-dark); margin-bottom: 24px; line-height: 1.45;">
        ${q.consigne}
      </div>

      ${q.type === 'calcul' ? `
        <div style="margin-bottom: 20px;">
          <input type="text" id="calcAnswerInput" class="filter-pill" placeholder="Tape le résultat numérique..." value="${selectedOpt || ''}" ${isValidated ? 'disabled' : ''} style="width: 100%; height: 48px; border-radius: var(--radius-md); font-size: 1.05rem; font-weight: 700;" />
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
          ${q.options.map(opt => {
            let bg = '#FFFFFF';
            let border = 'var(--kpe-gray-border)';
            let color = 'var(--kpe-dark)';

            if (isValidated) {
              if (opt.correct) {
                bg = 'var(--kpe-green-pale)';
                border = 'var(--kpe-green)';
                color = '#06401E';
              } else if (selectedOpt === opt.id) {
                bg = '#FDEDEC';
                border = '#E53935';
                color = '#78281F';
              }
            } else if (selectedOpt === opt.id) {
              bg = 'var(--kpe-green-pale)';
              border = 'var(--kpe-green)';
            }

            return `
              <button style="background: ${bg}; border: 2px solid ${border}; color: ${color}; border-radius: var(--radius-md); padding: 14px 18px; text-align: left; font-weight: 600; font-size: 0.95rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onclick="window.kpekpeApp.selectQuizOption('${opt.id}')" ${isValidated ? 'disabled' : ''}>
                <span>${opt.texte}</span>
                ${isValidated && opt.correct ? icon('check', 16, '', '#00963F') : ''}
              </button>
            `;
          }).join('')}
        </div>
      `}

      ${isValidated ? `
        <div style="background: ${window.quizLastAnswerCorrect ? 'var(--kpe-green-pale)' : '#FFFDE6'}; border: 1px solid ${window.quizLastAnswerCorrect ? 'rgba(0,150,63,0.3)' : 'rgba(254,236,1,0.8)'}; border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px; font-size: 0.88rem; color: var(--kpe-dark); line-height: 1.5;">
          <strong>${window.quizLastAnswerCorrect ? 'Excellente réponse !' : 'Explication :'}</strong> ${q.explication}
        </div>
      ` : ''}

      <div style="display: flex; justify-content: flex-end;">
        ${!isValidated ? `
          <button class="btn-primary" onclick="window.kpekpeApp.validateQuizAnswer()">
            Valider ma réponse
          </button>
        ` : `
          <button class="btn-primary" onclick="window.kpekpeApp.nextQuizQuestion()">
            <span>Question suivante</span>
            ${icon('arrow-right', 16, '', '#FFFFFF')}
          </button>
        `}
      </div>
    </div>
  `;
}
