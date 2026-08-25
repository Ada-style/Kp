// Kpékpé Learnia — Page Tarification (Élèves + Répétiteurs)
import { icon } from './Icons.js';

export function renderPricingView(target) {
  // target = 'eleve' | 'repetiteur'
  const isEleve = target !== 'repetiteur';
  const paymentStep = window.pricingStep || 'plans';
  const selectedPlan = window.selectedPricingPlan || null;

  if (paymentStep === 'payment') {
    return renderPaymentForm(selectedPlan, isEleve);
  }
  if (paymentStep === 'success') {
    return renderPaymentSuccess(selectedPlan, isEleve);
  }

  return isEleve ? renderElevePricing() : renderRepetiteurPricing();
}

// -------------------------------------------------------
// PRICING ÉLÈVES
// -------------------------------------------------------
function renderElevePricing() {
  return `
    <div style="max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px;">

      <div style="text-align: center;">
        <span class="kpe-tag" style="font-size: 0.82rem;">ACCÈS À LEARNIA</span>
        <h1 style="font-size: 2rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">
          Choisissez votre formule d'apprentissage
        </h1>
        <p style="font-size: 0.95rem; color: var(--kpe-gray); margin-top: 6px;">
          Accès illimité à tous les cours, résumés, exercices et au Tuteur IA Kpékpé.
        </p>
      </div>

      <!-- Cards Tarifs -->
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; align-items: start;">

        <!-- Gratuit Kids -->
        <div class="kpe-card" style="padding: 28px; text-align: center; border: 1.5px solid var(--kpe-gray-border);">
          <div style="font-size: 2rem; margin-bottom: 8px;">👶</div>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark);">Kpékpé Kids</h3>
          <div style="font-size: 2rem; font-weight: 900; color: var(--kpe-green); margin: 14px 0; font-family: var(--font-display);">Gratuit</div>
          <p style="font-size: 0.82rem; color: var(--kpe-gray); line-height: 1.5; margin-bottom: 20px;">Pour les enfants de 3 à 10 ans. Jeux éducatifs, éveil et orientation précoce.</p>
          <div style="display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 20px;">
            ${['9 mini-jeux interactifs', 'Rapport d\'orientation parental', '5 Pôles de talents', 'Toujours gratuit'].map(f => `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--kpe-dark);">
                ${icon('check', 13, '', '#00963F')}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-secondary" style="width: 100%;" onclick="window.kpekpeApp.navigateTo('kids')">
            Accéder gratuitement
          </button>
        </div>

        <!-- Mensuel -->
        <div class="kpe-card" style="padding: 28px; text-align: center; border: 2px solid var(--kpe-green);">
          <span class="kpe-tag" style="background: var(--kpe-green); color: #FFF; font-size: 0.75rem;">MENSUEL</span>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">Learnia Mensuel</h3>
          <div style="margin: 14px 0;">
            <span style="font-size: 2.2rem; font-weight: 900; color: var(--kpe-dark); font-family: var(--font-display);">599</span>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--kpe-gray);"> FCFA/mois</span>
          </div>
          <p style="font-size: 0.82rem; color: var(--kpe-gray); line-height: 1.5; margin-bottom: 20px;">Accès complet pendant 30 jours. Résiliable à tout moment.</p>
          <div style="display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 20px;">
            ${['Tous les cours (6e à Tle)', 'Résumés + Flashcards', 'Quiz & Exercices', 'Tuteur IA Kpékpé', 'Progression personnalisée'].map(f => `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--kpe-dark);">
                ${icon('check', 13, '', '#00963F')}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-primary" style="width: 100%;" onclick="window.kpekpeApp.selectPlan('mensuel-eleve')">
            S'abonner maintenant →
          </button>
        </div>

        <!-- Annuel -->
        <div class="kpe-card" style="padding: 28px; text-align: center; border: 2px solid var(--kpe-yellow); position: relative; overflow: hidden;">
          <div style="position: absolute; top: 14px; right: -20px; background: #EF4444; color: #FFF; font-size: 0.7rem; font-weight: 900; padding: 4px 28px; transform: rotate(35deg);">-23 %</div>
          <span class="kpe-tag" style="background: var(--kpe-yellow); color: #141414; font-size: 0.75rem; font-weight: 900;">⭐ MEILLEURE OFFRE</span>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">Learnia Annuel</h3>
          <div style="margin: 14px 0;">
            <span style="font-size: 2.2rem; font-weight: 900; color: var(--kpe-dark); font-family: var(--font-display);">5 499</span>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--kpe-gray);"> FCFA/an</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--kpe-green); font-weight: 800; margin-bottom: 8px;">= 458 FCFA/mois · Économie de 630 FCFA</div>
          <p style="font-size: 0.82rem; color: var(--kpe-gray); line-height: 1.5; margin-bottom: 20px;">Accès toute l'année scolaire sans interruption.</p>
          <div style="display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 20px;">
            ${['Tout le plan Mensuel', 'Toute l\'année scolaire', 'Priorité nouvelles fonctions', 'Badge Élève Premium ⭐', 'Support prioritaire'].map(f => `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--kpe-dark);">
                ${icon('check', 13, '', '#00963F')}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-primary" style="width: 100%; background: #D97706;" onclick="window.kpekpeApp.selectPlan('annuel-eleve')">
            Choisir l'annuel →
          </button>
        </div>

      </div>

      <!-- Note Mobile Money -->
      <div style="background: var(--kpe-green-pale); border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: #065F46;">
        ${icon('check', 16, '', '#00963F')}
        <span>Paiement 100 % sécurisé via <strong>Moov Money</strong> ou <strong>T-Money (Togocel)</strong>. Activation immédiate après confirmation.</span>
      </div>

    </div>
  `;
}

// -------------------------------------------------------
// PRICING RÉPÉTITEURS
// -------------------------------------------------------
function renderRepetiteurPricing() {
  return `
    <div style="max-width: 820px; margin: 0 auto; display: flex; flex-direction: column; gap: 28px;">

      <div style="text-align: center;">
        <span class="kpe-tag" style="background: #1E40AF; color: #FFF; font-size: 0.82rem;">ESPACE RÉPÉTITEURS</span>
        <h1 style="font-size: 2rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">
          Développez votre activité avec Kpékpé
        </h1>
        <p style="font-size: 0.95rem; color: var(--kpe-gray); margin-top: 6px; max-width: 520px; margin-inline: auto;">
          Soyez visible auprès de centaines d'élèves et de familles dans votre quartier à Lomé.
        </p>
      </div>

      <!-- Cartes Tarifs -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; max-width: 640px; margin: 0 auto; width: 100%;">

        <!-- Essai Gratuit -->
        <div class="kpe-card" style="padding: 28px; text-align: center; border: 2px solid var(--kpe-yellow);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🎁</div>
          <span class="kpe-tag" style="background: var(--kpe-yellow); color: #141414; font-weight: 900; font-size: 0.75rem;">POUR COMMENCER</span>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">Essai Gratuit</h3>
          <div style="font-size: 2rem; font-weight: 900; color: var(--kpe-green); margin: 14px 0; font-family: var(--font-display);">0 FCFA</div>
          <div style="font-size: 0.82rem; color: var(--kpe-gray); margin-bottom: 4px;">pendant <strong>30 jours</strong></div>

          <div style="background: #FEF3C7; border-radius: var(--radius-md); padding: 10px; margin: 12px 0; font-size: 0.8rem; color: #92400E; font-weight: 700; display: flex; align-items: center; gap: 6px;">
            ${icon('clock', 13, '', '#92400E')}
            Profil masqué automatiquement après 30 jours si non renouvelé
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 20px;">
            ${['Profil visible dans la marketplace', '5 mises en relation/mois', 'Messagerie in-app', 'Validation sous 24h'].map(f => `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--kpe-dark);">
                ${icon('check', 13, '', '#00963F')}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-primary" style="width: 100%; background: #D97706;" onclick="window.kpekpeApp.selectPlan('trial-rep')">
            Démarrer l'essai gratuit →
          </button>
        </div>

        <!-- Pro Mensuel -->
        <div class="kpe-card" style="padding: 28px; text-align: center; border: 2px solid #1E40AF;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🚀</div>
          <span class="kpe-tag" style="background: #1E40AF; color: #FFF; font-size: 0.75rem; font-weight: 800;">APRÈS L'ESSAI</span>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark); margin-top: 10px;">Répétiteur Pro</h3>
          <div style="margin: 14px 0;">
            <span style="font-size: 2.2rem; font-weight: 900; color: var(--kpe-dark); font-family: var(--font-display);">1 500</span>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--kpe-gray);"> FCFA/mois</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--kpe-gray); margin-bottom: 12px;">= 50 FCFA/jour · moins qu'un biscuit</div>

          <div style="display: flex; flex-direction: column; gap: 8px; text-align: left; margin-bottom: 20px;">
            ${['Mise en avant dans les résultats', 'Mises en relation illimitées', 'Badge ✅ Vérifié Kpékpé', 'Rapports de progression parents', 'Accès ressources Learnia', 'Messagerie in-app illimitée'].map(f => `
              <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--kpe-dark);">
                ${icon('check', 13, '', '#00963F')}
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
          <button class="btn-primary" style="width: 100%; background: #1E40AF;" onclick="window.kpekpeApp.selectPlan('pro-rep')">
            Choisir Pro Kpékpé →
          </button>
        </div>

      </div>

      <!-- ROI Calculator -->
      <div style="background: #EFF6FF; border: 1.5px solid #BFDBFE; border-radius: var(--radius-lg); padding: 22px 28px;">
        <h4 style="font-size: 0.95rem; font-weight: 800; color: #1E40AF; margin-bottom: 14px;">💡 Calcul de retour sur investissement</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; text-align: center;">
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--kpe-dark);">1 élève</div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray);">trouvé via Kpékpé</div>
          </div>
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: var(--kpe-green);">15 000 FCFA</div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray);">revenus/mois</div>
          </div>
          <div>
            <div style="font-size: 1.4rem; font-weight: 900; color: #1E40AF;">x 10</div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray);">votre abonnement remboursé</div>
          </div>
        </div>
      </div>

      <!-- Note masquage -->
      <div style="background: #FEF3C7; border-left: 4px solid var(--kpe-yellow); padding: 14px 18px; border-radius: var(--radius-md); font-size: 0.85rem; color: #78350F;">
        <strong>Comment fonctionne le masquage automatique ?</strong><br/>
        Si l'abonnement arrive à expiration sans renouvellement, votre profil est automatiquement <strong>masqué des résultats de recherche</strong> dans les 24h. Vos données sont conservées. Un simple paiement de 1 500 FCFA réactive votre profil instantanément.
      </div>

    </div>
  `;
}

// -------------------------------------------------------
// FORMULAIRE DE PAIEMENT MOBILE MONEY
// -------------------------------------------------------
function renderPaymentForm(plan, isEleve) {
  const planLabel = plan === 'mensuel-eleve' ? 'Learnia Mensuel' : plan === 'annuel-eleve' ? 'Learnia Annuel' : plan === 'trial-rep' ? 'Essai Gratuit 30 jours' : 'Répétiteur Pro';
  const planPrice = plan === 'mensuel-eleve' ? '599 FCFA' : plan === 'annuel-eleve' ? '5 499 FCFA' : plan === 'trial-rep' ? '0 FCFA' : '1 500 FCFA';
  const isFree = plan === 'trial-rep';
  const selectedOp = window.selectedOperateur || 'moov';

  return `
    <div style="max-width: 480px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">

      <button class="btn-secondary" style="align-self: flex-start;" onclick="window.kpekpeApp.resetPricing()">
        ${icon('arrow-left', 16)}
        <span>Retour aux formules</span>
      </button>

      <div class="kpe-card" style="padding: 28px; border-top: 4px solid var(--kpe-green);">
        <h2 style="font-size: 1.3rem; font-weight: 900; color: var(--kpe-dark); margin-bottom: 4px;">
          ${isFree ? 'Créer votre profil gratuit' : 'Finaliser votre abonnement'}
        </h2>
        <p style="font-size: 0.85rem; color: var(--kpe-gray);">Récapitulatif de votre commande</p>

        <!-- Récap commande -->
        <div style="background: var(--kpe-green-pale); border-radius: var(--radius-md); padding: 14px; margin: 18px 0; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-weight: 800; color: var(--kpe-dark); font-size: 0.9rem;">${planLabel}</div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray); margin-top: 2px;">${isFree ? 'Essai gratuit · 30 jours' : 'Activation immédiate après paiement'}</div>
          </div>
          <div style="font-size: 1.3rem; font-weight: 900; color: var(--kpe-green); font-family: var(--font-display);">${planPrice}</div>
        </div>

        ${!isFree ? `
          <!-- Choix Opérateur -->
          <div style="margin-bottom: 16px;">
            <label style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-dark); display: block; margin-bottom: 8px;">Choisir votre opérateur mobile</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <button onclick="window.kpekpeApp.selectOp('moov')" style="padding: 12px; border-radius: var(--radius-md); border: 2px solid ${selectedOp === 'moov' ? '#F59E0B' : 'var(--kpe-gray-border)'}; background: ${selectedOp === 'moov' ? '#FEF3C7' : '#FFF'}; cursor: pointer; font-weight: 800; font-size: 0.88rem; color: #92400E; display: flex; align-items: center; justify-content: center; gap: 8px;">
                🟡 Moov Money
              </button>
              <button onclick="window.kpekpeApp.selectOp('tmoney')" style="padding: 12px; border-radius: var(--radius-md); border: 2px solid ${selectedOp === 'tmoney' ? '#1E40AF' : 'var(--kpe-gray-border)'}; background: ${selectedOp === 'tmoney' ? '#EFF6FF' : '#FFF'}; cursor: pointer; font-weight: 800; font-size: 0.88rem; color: #1E40AF; display: flex; align-items: center; justify-content: center; gap: 8px;">
                🔵 T-Money
              </button>
            </div>
          </div>

          <!-- Numéro de téléphone -->
          <div style="margin-bottom: 20px;">
            <label style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-dark); display: block; margin-bottom: 8px;">Numéro de téléphone</label>
            <div style="display: flex; gap: 8px;">
              <div style="padding: 12px 14px; background: #F3F4F6; border: 1.5px solid var(--kpe-gray-border); border-radius: var(--radius-md); font-weight: 800; color: var(--kpe-dark); font-size: 0.9rem; white-space: nowrap;">🇹🇬 +228</div>
              <input type="tel" placeholder="90 12 34 56" style="flex: 1; padding: 12px 14px; border: 1.5px solid var(--kpe-gray-border); border-radius: var(--radius-md); font-size: 0.9rem; font-weight: 700; color: var(--kpe-dark); outline: none;" />
            </div>
            <p style="font-size: 0.75rem; color: var(--kpe-gray); margin-top: 6px;">Vous recevrez une notification USSD sur ce numéro pour confirmer le paiement.</p>
          </div>
        ` : `
          <!-- Formulaire profil gratuit -->
          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            <div>
              <label style="font-size: 0.82rem; font-weight: 800; color: var(--kpe-dark); display: block; margin-bottom: 4px;">Nom complet</label>
              <input type="text" placeholder="Koffi Amegnaglo" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--kpe-gray-border); border-radius: var(--radius-md); font-size: 0.88rem; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.82rem; font-weight: 800; color: var(--kpe-dark); display: block; margin-bottom: 4px;">Numéro WhatsApp (+228)</label>
              <input type="tel" placeholder="90 12 34 56" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--kpe-gray-border); border-radius: var(--radius-md); font-size: 0.88rem; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 0.82rem; font-weight: 800; color: var(--kpe-dark); display: block; margin-bottom: 4px;">Quartier à Lomé</label>
              <select style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--kpe-gray-border); border-radius: var(--radius-md); font-size: 0.88rem; box-sizing: border-box;">
                <option>Adidogomé</option><option>Tokoin</option><option>Bè</option><option>Agbalepedogan</option><option>Djidjolé</option><option>Nyékonakpoè</option>
              </select>
            </div>
          </div>
        `}

        <button class="btn-primary" style="width: 100%; padding: 14px; font-size: 1rem;" onclick="window.kpekpeApp.confirmPayment()">
          ${isFree ? 'Soumettre mon profil gratuitement →' : 'Confirmer le paiement →'}
        </button>

        ${!isFree ? `
          <div style="text-align: center; margin-top: 10px; font-size: 0.75rem; color: var(--kpe-gray);">
            🔒 Paiement sécurisé via FedaPay · Votre PIN ne nous est jamais communiqué
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// -------------------------------------------------------
// ÉCRAN DE SUCCÈS
// -------------------------------------------------------
function renderPaymentSuccess(plan, isEleve) {
  const isTrial = plan === 'trial-rep';
  return `
    <div style="max-width: 480px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; gap: 24px; align-items: center; padding: 40px 0;">
      <div style="font-size: 5rem;">🎉</div>
      <div>
        <h2 style="font-size: 1.6rem; font-weight: 900; color: var(--kpe-dark);">
          ${isTrial ? 'Profil créé ! Bienvenue sur Kpékpé !' : 'Abonnement activé avec succès !'}
        </h2>
        <p style="font-size: 0.95rem; color: var(--kpe-gray); margin-top: 8px; line-height: 1.6;">
          ${isTrial
            ? 'Votre profil sera validé par notre équipe sous 24h. Vous recevrez une confirmation par SMS. <strong>Dans 30 jours</strong>, votre profil sera automatiquement masqué si non renouvelé à 1 500 FCFA/mois.'
            : 'Votre accès est activé immédiatement. Bon apprentissage avec le Tuteur IA Kpékpé !'}
        </p>
      </div>
      <div style="background: var(--kpe-green-pale); border-radius: var(--radius-lg); padding: 20px 28px; width: 100%; text-align: left;">
        <div style="font-weight: 800; color: #065F46; margin-bottom: 8px;">✅ Ce qui est activé</div>
        ${isTrial
          ? '<div style="font-size:0.85rem; color:#065F46; line-height:1.8;">• Profil visible dans la marketplace Lomé<br/>• 5 mises en relation par mois<br/>• Messagerie in-app<br/>• Durée : 30 jours gratuits</div>'
          : '<div style="font-size:0.85rem; color:#065F46; line-height:1.8;">• Accès à tous les cours Learnia<br/>• Tuteur IA Kpékpé<br/>• Flashcards & Quiz<br/>• Progression personnalisée</div>'}
      </div>
      <button class="btn-primary" style="padding: 14px 32px; font-size: 1rem;" onclick="window.kpekpeApp.navigateTo(${isTrial ? "'repetiteurs'" : "'apprendre'"})">
        ${isTrial ? 'Voir ma fiche répétiteur →' : 'Commencer à apprendre →'}
      </button>
    </div>
  `;
}
