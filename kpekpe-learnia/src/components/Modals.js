// Kpékpé Learnia — Modales Kids & Abonnements

export function renderKidsModal() {
  return `
    <div class="modal-overlay" onclick="window.kpekpeApp.closeModal(event)">
      <div class="modal-container">
        <button class="modal-close-btn" onclick="window.kpekpeApp.closeModalDirect()">✕</button>
        
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="font-size: 2.8rem;">👶🎈</span>
          <h2 style="font-size: 1.6rem; font-weight: 900; color: var(--kpe-dark); margin-top: 8px;">Kpékpé Kids</h2>
          <p style="font-size: 0.9rem; color: var(--kpe-gray); margin-top: 4px;">
            Espace ludo-éducatif dédié aux plus jeunes (Maternelle & Primaire).
          </p>
        </div>

        <div style="background: #FFFCE0; border: 1px solid rgba(254, 236, 1, 0.7); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 20px;">
          <h4 style="font-size: 0.9rem; font-weight: 800; color: #8A6D05;">✨ 100% Gratuit pour tous les enfants</h4>
          <p style="font-size: 0.82rem; color: #6D5705; margin-top: 4px;">
            Apprentissage des maths, de la lecture, du vocabulaire et de la logique à travers des jeux interactifs stimulants.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-border); border-radius: var(--radius-md); padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem;">🔢 Jeux de calcul</div>
            <div style="font-size: 0.75rem; color: var(--kpe-gray);">Additions & formes</div>
          </div>
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-border); border-radius: var(--radius-md); padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem;">🔤 Mots & Lettres</div>
            <div style="font-size: 0.75rem; color: var(--kpe-gray);">Lecture progressive</div>
          </div>
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-border); border-radius: var(--radius-md); padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem;">🧩 Logique & Éveil</div>
            <div style="font-size: 0.75rem; color: var(--kpe-gray);">Puzzles et mémoire</div>
          </div>
          <div style="background: #FAFCFA; border: 1px solid var(--kpe-border); border-radius: var(--radius-md); padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem;">🛡️ Contrôle Parental</div>
            <div style="font-size: 0.75rem; color: var(--kpe-gray);">Temps d'écran maîtrisé</div>
          </div>
        </div>

        <button class="btn-continue-cta" style="width: 100%; justify-content: center;" onclick="window.kpekpeApp.closeModalDirect()">
          Compris, retour à Learnia
        </button>
      </div>
    </div>
  `;
}

export function renderSubscriptionModal() {
  return `
    <div class="modal-overlay" onclick="window.kpekpeApp.closeModal(event)">
      <div class="modal-container" style="max-width: 680px;">
        <button class="modal-close-btn" onclick="window.kpekpeApp.closeModalDirect()">✕</button>

        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="font-size: 1.7rem; font-weight: 900; color: var(--kpe-dark);">Des tarifs clairs et accessibles</h2>
          <p style="font-size: 0.92rem; color: var(--kpe-gray); margin-top: 4px;">
            Offre une réussite scolaire concrète à chaque élève.
          </p>
        </div>

        <div class="plans-grid">
          <!-- Plan Mensuel -->
          <div class="plan-card">
            <div>
              <span class="logo-badge-v2" style="background: var(--kpe-green-pale); color: var(--kpe-green);">MENSUEL</span>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 6px;">Learnia Mensuel</h3>
              <div class="plan-price">599 FCFA <span style="font-size: 0.85rem; font-weight: 500; color: var(--kpe-gray);">/ mois</span></div>
              <ul style="font-size: 0.82rem; color: var(--kpe-gray-dark); margin: 12px 0 0 16px; line-height: 1.6;">
                <li>Tous les cours de la 4e à la Tle</li>
                <li>Simulateurs interactifs illimités</li>
                <li>Tuteur IA Socratique Kpékpé</li>
                <li>Sans engagement de durée</li>
              </ul>
            </div>
            <button class="btn-continue-cta" style="margin-top: 20px; width: 100%; justify-content: center;" onclick="alert('Redirection vers paiement mobile money TMoney / Flooz');">
              Choisir le mensuel
            </button>
          </div>

          <!-- Plan Année Scolaire -->
          <div class="plan-card highlighted">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="logo-badge-v2" style="background: var(--kpe-yellow); color: var(--kpe-dark);">MEILLEURE OFFRE</span>
                <span style="font-size: 0.72rem; font-weight: 800; color: var(--kpe-green);">-25%</span>
              </div>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 6px;">Learnia Année</h3>
              <div class="plan-price">5 399 FCFA <span style="font-size: 0.85rem; font-weight: 500; color: var(--kpe-gray);">/ an</span></div>
              <ul style="font-size: 0.82rem; color: var(--kpe-gray-dark); margin: 12px 0 0 16px; line-height: 1.6;">
                <li>Accès complet pour toute l'année scolaire</li>
                <li>Toutes les matières & tous les chapitres</li>
                <li>Suivi parental & rapports mensuels</li>
                <li>Accès prioritaire aux nouvelles simulations</li>
              </ul>
            </div>
            <button class="btn-continue-cta" style="margin-top: 20px; width: 100%; justify-content: center; background: var(--kpe-green);" onclick="alert('Redirection vers paiement mobile money TMoney / Flooz');">
              Prendre l'année (5 399 FCFA)
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
