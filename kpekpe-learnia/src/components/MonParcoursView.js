// Kpékpé Learnia — Mon Parcours (V1 Organique)
import { renderWisdomTree } from './WisdomTree.js';
import { UserStateManager } from '../data/user-state.js';

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bonjour';
  if (h < 17) return 'Bon après-midi';
  return 'Bonsoir';
}

export function renderMonParcoursView(userState, curriculum) {
  const user    = userState.user;
  const engage  = userState.engagement;
  const goal    = engage.dailyGoal;
  const tree    = engage.wisdomTree;
  const flames  = engage.flames || [];

  const greeting = getGreeting();
  const today    = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const todayCap = today.charAt(0).toUpperCase() + today.slice(1);

  return `
    <div class="mp-page fade-up">

      <div class="mp-greeting">
        <h1>${greeting} ${user.nom} 👋</h1>
        <p class="mp-date-line">${todayCap} · ${user.classeLabel}</p>
      </div>

      ${renderGoalCard(goal)}
      ${renderWisdomTree(tree.level, tree.fruits, true)}
      ${renderFlameArea(flames, user)}

    </div>
  `;
}

function renderGoalCard(goal) {
  const pct = goal.progress || 0;
  const isStarted = pct > 0;
  
  if (goal.completed) {
    return `
      <div class="daily-goal-card" style="align-items: center; text-align: center; padding: 40px;">
        <div style="font-size:3rem;margin-bottom:12px;">🎉</div>
        <h2 style="font-size:1.6rem;font-weight:900;color:var(--kpe-dark);">Objectif atteint !</h2>
        <p style="font-size:1.1rem;color:var(--kpe-gray);margin-top:8px;">
          Tu as terminé <strong>${goal.label}</strong>.<br/>
          🌱 Ton arbre grandit grâce à tes efforts.
        </p>
      </div>
    `;
  }

  return `
    <div class="daily-goal-card">
      <div class="dg-eyebrow">
        <span>🎯</span>
        <span>Objectif d'aujourd'hui</span>
      </div>

      <h2 class="dg-title">${goal.label}</h2>

      <div class="dg-meta">
        <span>${goal.subject}</span>
        <span>•</span>
        <span>Environ ${goal.estimatedMinutes} minutes</span>
      </div>

      ${isStarted ? `
        <div>
          <div style="font-size:0.85rem; font-weight:700; color:var(--kpe-green); margin-bottom:6px;">${pct}% complété</div>
          <div class="dg-track">
            <div class="dg-fill" style="width:${pct}%"></div>
          </div>
        </div>
      ` : ''}

      <div class="dg-footer">
        <button class="btn-primary"
          onclick="window.kpekpeApp.openChapter('maths','fonctions-affines','comprendre')"
          style="padding:14px 28px;font-size:1rem; border-radius: var(--radius-full);">
          ${isStarted ? 'Continuer mon cours' : 'Commencer mon cours'}
        </button>
      </div>
    </div>
  `;
}

function renderFlameArea(flames, user) {
  if (flames.length === 0) return ''; 

  const flameItems = flames.map(f => {
    return `
      <div class="friend-row">
        <div class="flame-avatar">${f.friendAvatar}</div>
        <div class="flame-info">
          <div class="flame-name">${f.friendName}</div>
          <div class="flame-status">
            ${f.friendCompleted ? 'A terminé son objectif ✅' : 'Apprend actuellement...'}
          </div>
        </div>
        <div class="flame-streak-box">
          ${f.streakDays} <span class="flame-icon-live">🔥</span>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="flame-area">
      <div class="flame-header">
        Apprendre ensemble
      </div>
      ${flameItems}
    </div>
  `;
}
