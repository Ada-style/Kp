// Kpékpé Learnia — Vue d'ensemble (Accueil avec cartes visuelles et RAG)
import { icon } from './Icons.js';

export function renderLearniaOverview(userState, curriculum) {
  const user = userState.user;
  const currentClass = curriculum.classes.find(c => c.id === user.classe) || curriculum.classes[0];

  return `
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <!-- Greeting & Grade -->
      <div>
        <h1 style="font-size: 1.85rem; font-weight: 900; color: var(--kpe-dark); letter-spacing: -0.5px;">
          Bonjour ${user.nom} 👋
        </h1>
        <p style="color: var(--kpe-gray); font-size: 0.95rem; margin-top: 4px;">
          ${currentClass.name} • Année scolaire ${user.anneeScolaire}
        </p>

        <!-- Global Progress Bar -->
        <div style="margin-top: 18px; max-width: 460px;">
          <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 1px; margin-bottom: 6px;">
            <span>Ma progression générale</span>
            <span style="color: var(--kpe-green); font-family: var(--font-display); font-size: 1rem;">${user.globalProgress} %</span>
          </div>
          <div style="height: 8px; background: #E5E7EB; border-radius: var(--radius-full); overflow: hidden;">
            <div style="height: 100%; width: ${user.globalProgress}%; background: var(--kpe-green); border-radius: var(--radius-full);"></div>
          </div>
        </div>
      </div>

      <!-- CARTE PRIORITAIRE : CONTINUER MON APPRENTISSAGE -->
      <div class="continue-banner">
        <div>
          <span class="kpe-tag">Mathématiques</span>
          <h2 style="font-size: 1.4rem; font-weight: 900; margin-top: 8px; color: var(--kpe-dark);">
            Fonctions affines
          </h2>
          <p style="font-size: 0.9rem; color: var(--kpe-gray); margin-top: 2px;">
            Chapitre 3 • 68 % terminé
          </p>
        </div>

        <div>
          <button class="btn-primary" onclick="window.kpekpeApp.openChapter('maths', 'fonctions-affines')">
            <span>Continuer</span>
            ${icon('arrow-right', 16, '', '#FFFFFF')}
          </button>
        </div>
      </div>

      <!-- SECTION MES MATIÈRES (AVEC IMAGES EN FOND ATTRAYANTES) -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--kpe-dark);">Mes matières</h2>
          <span style="font-size: 0.85rem; color: var(--kpe-gray); font-weight: 600;">${curriculum.subjects.length} matières inscrites</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
          ${curriculum.subjects.map(s => `
            <div class="kpe-card" style="position: relative; overflow: hidden; height: 210px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 22px; border: 1px solid rgba(0,0,0,0.08); transition: transform 0.2s ease, box-shadow 0.2s ease;" onclick="window.kpekpeApp.selectSubject('${s.id}')">
              
              <!-- Background Image with Gradient Overlay for High Readability -->
              <div style="position: absolute; inset: 0; background-image: url('${s.coverImage}'); background-size: cover; background-position: center; z-index: 1; filter: brightness(0.92);"></div>
              <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(20, 20, 20, 0.45) 0%, rgba(20, 20, 20, 0.82) 100%); z-index: 2;"></div>

              <!-- Top Row: Badge & Progress -->
              <div style="position: relative; z-index: 3; display: flex; justify-content: space-between; align-items: center;">
                <span class="kpe-tag" style="background: rgba(255, 255, 255, 0.95); color: #141414; font-weight: 800; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                  ${s.code}
                </span>
                <span style="background: rgba(0, 150, 63, 0.95); color: #FFFFFF; font-family: var(--font-display); font-weight: 800; font-size: 0.82rem; padding: 3px 10px; border-radius: var(--radius-full); box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                  ${s.progress} %
                </span>
              </div>

              <!-- Bottom Content: Subject Title, Meta & Progress Line -->
              <div style="position: relative; z-index: 3;">
                <h3 style="font-size: 1.35rem; font-weight: 900; color: #FFFFFF; letter-spacing: -0.3px; text-shadow: 0 1px 4px rgba(0,0,0,0.6);">
                  ${s.name}
                </h3>
                <p style="font-size: 0.82rem; color: rgba(255, 255, 255, 0.85); margin-top: 2px;">
                  ${s.totalChapters} chapitres au programme
                </p>

                <div style="height: 5px; background: rgba(255, 255, 255, 0.3); border-radius: var(--radius-full); overflow: hidden; margin-top: 10px;">
                  <div style="height: 100%; width: ${s.progress}%; background: var(--kpe-yellow); border-radius: var(--radius-full);"></div>
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
