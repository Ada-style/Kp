// Kpékpé Learnia — Page Ma progression (Calme & Précise)
import { icon } from './Icons.js';

export function renderProgressionView(userState, curriculum) {
  const user = userState.user;
  const stats = userState.stats;

  return `
    <div style="display: flex; flex-direction: column; gap: 28px;">
      <div>
        <h1 style="font-size: 1.8rem; font-weight: 900; color: var(--kpe-dark);">Ma progression</h1>
        <p style="color: var(--kpe-gray); font-size: 0.95rem; margin-top: 4px;">Suivi de tes acquis et de tes objectifs scolaires.</p>
      </div>

      <!-- KPI Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <div class="kpe-card">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-green); letter-spacing: 1px;">Progression générale</span>
          <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--kpe-dark); margin-top: 6px;">${user.globalProgress} %</div>
          <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 2px;">Toutes matières confondues</p>
        </div>

        <div class="kpe-card">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 1px;">Temps d'étude</span>
          <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--kpe-dark); margin-top: 6px;">${stats.heuresApprentissage}</div>
          <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 2px;">Ce trimestre</p>
        </div>

        <div class="kpe-card">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 1px;">Chapitres validés</span>
          <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--kpe-dark); margin-top: 6px;">${stats.chapitresTermines}</div>
          <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 2px;">Sur l'ensemble du programme</p>
        </div>

        <div class="kpe-card">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-green); letter-spacing: 1px;">Régularité</span>
          <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--kpe-green); margin-top: 6px;">${user.streakDays} jours</div>
          <p style="font-size: 0.8rem; color: var(--kpe-gray); margin-top: 2px;">Série active</p>
        </div>
      </div>

      <!-- Matières Progress List -->
      <div class="kpe-card" style="padding: 28px;">
        <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 20px;">Progression par matière</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${curriculum.subjects.map(s => `
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; margin-bottom: 6px;">
                <span>${s.name}</span>
                <span style="color: ${s.color};">${s.progress} %</span>
              </div>
              <div style="height: 6px; background: #F3F4F6; border-radius: var(--radius-full); overflow: hidden;">
                <div style="height: 100%; width: ${s.progress}%; background: ${s.color}; border-radius: var(--radius-full);"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Compétences Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="background: var(--kpe-green-pale); border: 1px solid rgba(0, 150, 63, 0.2); border-radius: var(--radius-lg); padding: 22px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--kpe-green); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            ${icon('check', 16, '', '#00963F')}
            <span>Compétences maîtrisées</span>
          </h4>
          <ul style="font-size: 0.88rem; color: #084922; margin-left: 20px; line-height: 1.6;">
            ${stats.competencesMaitrisees.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div style="background: var(--kpe-yellow-pale); border: 1px solid rgba(254, 236, 1, 0.8); border-radius: var(--radius-lg); padding: 22px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #8A6D05; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            ${icon('refresh-cw', 16, '', '#8A6D05')}
            <span>Notions à renforcer</span>
          </h4>
          <ul style="font-size: 0.88rem; color: #5D4A04; margin-left: 20px; line-height: 1.6;">
            ${stats.competencesARenforcer.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}
