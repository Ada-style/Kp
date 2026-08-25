// Kpékpé Learnia — Marketplace Répétiteurs
import { icon } from './Icons.js';

const REPETITEURS = [
  {
    id: 'r1',
    nom: 'Koffi Amegnaglo',
    avatar: '👨‍🎓',
    niveau: 'Master 2 Mathématiques — Université de Lomé',
    matieres: ['Maths', 'Physique-Chimie'],
    classes: ['4e', '3e', '2nde', '1ère'],
    quartier: 'Adidogomé',
    tarif: 15000,
    note: 4.9,
    avis: 34,
    badge: 'verified',
    dispo: 'Lun — Ven · 17h à 20h · Sam matin',
    statut: 'active',
    experience: '4 ans',
    bio: "Passionné de pédagogie, j'ai accompagné plus de 40 élèves depuis 4 ans. Je m'adapte au rythme de chaque élève avec patience et méthode.",
    tauxReussite: 92
  },
  {
    id: 'r2',
    nom: 'Afi Dzidula',
    avatar: '👩‍🎓',
    niveau: 'Licence 3 Lettres Modernes — UL',
    matieres: ['Français', 'Anglais', 'Histoire-Géo'],
    classes: ['6e', '5e', '4e', '3e'],
    quartier: 'Tokoin',
    tarif: 12000,
    note: 4.7,
    avis: 21,
    badge: 'verified',
    dispo: 'Mar · Jeu · Ven · 16h à 19h',
    statut: 'active',
    experience: '2 ans',
    bio: "Ancienne major de promo, je rends les lettres vivantes et accessibles. Mes élèves progressent en expression écrite et orale.",
    tauxReussite: 88
  },
  {
    id: 'r3',
    nom: 'Sénamé Ekoué',
    avatar: '👨‍🔬',
    niveau: 'Licence 3 Physique — UL',
    matieres: ['Physique-Chimie', 'SVT', 'Maths'],
    classes: ['2nde', '1ère C/D', 'Tle C/D'],
    quartier: 'Bè',
    tarif: 18000,
    note: 4.8,
    avis: 17,
    badge: 'verified',
    dispo: 'Lun · Mer · Sam tout la journée',
    statut: 'active',
    experience: '3 ans',
    bio: "Spécialisé dans les séries scientifiques du lycée, j'aide mes élèves à maîtriser les concepts fondamentaux pour le BAC.",
    tauxReussite: 95
  },
  {
    id: 'r4',
    nom: 'Mawuli Adom',
    avatar: '👨‍💻',
    niveau: 'Master 1 Informatique — ESTIM',
    matieres: ['Maths', 'Informatique'],
    classes: ['3e', '2nde', '1ère', 'Tle'],
    quartier: 'Agbalepedogan',
    tarif: 20000,
    note: 4.6,
    avis: 12,
    badge: 'trial',
    dispo: 'Mer · Jeu · Ven · Week-end',
    statut: 'trial',
    experience: '1 an',
    bio: "Jeune diplômé passionné d'informatique et de mathématiques. Je rends les algorithmes et la logique accessibles même aux plus réticents.",
    tauxReussite: 85
  },
  {
    id: 'r5',
    nom: 'Kossiwa Mensah',
    avatar: '👩‍🏫',
    niveau: 'Licence 3 Biologie — UL',
    matieres: ['SVT', 'Chimie'],
    classes: ['6e', '5e', '4e', '3e', '2nde'],
    quartier: 'Nyékonakpoè',
    tarif: 10000,
    note: 4.5,
    avis: 8,
    badge: 'trial',
    dispo: 'Tous les jours sauf Dimanche',
    statut: 'trial',
    experience: '8 mois',
    bio: "Fraîchement diplômée, je propose des cours de SVT et chimie avec des expériences pratiques simples à faire à la maison.",
    tauxReussite: 80
  },
  {
    id: 'r6',
    nom: 'Dodji Klutse',
    avatar: '👨‍🎓',
    niveau: 'Master 2 Économie — UL',
    matieres: ['Maths', 'Économie', 'Comptabilité'],
    classes: ['2nde A', '1ère A', 'Tle A'],
    quartier: 'Djidjolé',
    tarif: 16000,
    note: 4.7,
    avis: 26,
    badge: 'verified',
    dispo: 'Lun à Ven · 17h30 à 21h',
    statut: 'active',
    experience: '5 ans',
    bio: "Expert en mathématiques appliquées aux séries A. Je prépare mes élèves au BAC avec un taux de réussite exceptionnel.",
    tauxReussite: 97
  }
];

const QUARTIERS = ['Tous les quartiers', 'Adidogomé', 'Tokoin', 'Bè', 'Agbalepedogan', 'Nyékonakpoè', 'Djidjolé', 'Kodjoviakopé', 'Hédzranawoé', 'Agoè'];
const MATIERES = ['Toutes les matières', 'Maths', 'Français', 'Anglais', 'Physique-Chimie', 'SVT', 'Histoire-Géo', 'Informatique', 'Économie'];
const CLASSES_LIST = ['Toutes les classes', '6e', '5e', '4e', '3e', '2nde', '1ère', 'Tle'];

export function renderRepetiteursView() {
  const activeProfile = window.repetiteurProfileId || null;
  const filterQuartier = window.filterQuartier || 'Tous les quartiers';
  const filterMatiere = window.filterMatiere || 'Toutes les matières';
  const filterClasse = window.filterClasse || 'Toutes les classes';

  if (activeProfile) {
    const rep = REPETITEURS.find(r => r.id === activeProfile);
    if (rep) return renderProfileDetail(rep);
  }

  const filtered = REPETITEURS.filter(r => {
    const matchQ = filterQuartier === 'Tous les quartiers' || r.quartier === filterQuartier;
    const matchM = filterMatiere === 'Toutes les matières' || r.matieres.includes(filterMatiere);
    const matchC = filterClasse === 'Toutes les classes' || r.classes.some(c => c.startsWith(filterClasse));
    return matchQ && matchM && matchC;
  });

  return `
    <div style="display: flex; flex-direction: column; gap: 28px;">

      <!-- Hero Marketplace -->
      <div style="background: linear-gradient(135deg, #1E40AF 0%, #172554 80%, #141414 100%); color: #FFF; border-radius: var(--radius-xl); padding: 32px 36px; position: relative; overflow: hidden; box-shadow: var(--shadow-card);">
        <div style="position: absolute; right: 24px; bottom: 8px; font-size: 7rem; opacity: 0.12; pointer-events:none;">📚</div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: var(--kpe-yellow); color: #141414; padding: 5px 14px; border-radius: var(--radius-full); font-weight: 800; font-size: 0.82rem;">
            ${icon('sparkles', 14, '', '#141414')}
            <span>LOMÉ · MISE EN RELATION GRATUITE POUR L'ÉLÈVE</span>
          </div>
          <button class="btn-primary" style="background: var(--kpe-yellow); color: #141414; font-weight: 900;" onclick="window.kpekpeApp.navigateTo('pricing-repetiteur')">
            ${icon('user', 14, '', '#141414')}
            <span>Je suis répétiteur — Créer mon profil</span>
          </button>
        </div>

        <h1 style="font-size: 2rem; font-weight: 900; margin-top: 16px; letter-spacing: -0.5px;">
          Trouvez votre Répétiteur Idéal à Lomé 🎯
        </h1>
        <p style="font-size: 0.95rem; color: #BFDBFE; margin-top: 6px; max-width: 560px; line-height: 1.5;">
          Des répétiteurs vérifiés par Kpékpé, disponibles dans votre quartier. Mise en relation gratuite pour l'élève.
        </p>

        <!-- Stats -->
        <div style="display: flex; gap: 28px; margin-top: 22px; flex-wrap: wrap;">
          <div>
            <div style="font-size: 1.6rem; font-weight: 900; font-family: var(--font-display);">6</div>
            <div style="font-size: 0.78rem; color: #BFDBFE; font-weight: 600;">Répétiteurs actifs</div>
          </div>
          <div>
            <div style="font-size: 1.6rem; font-weight: 900; font-family: var(--font-display);">9</div>
            <div style="font-size: 0.78rem; color: #BFDBFE; font-weight: 600;">Quartiers couverts</div>
          </div>
          <div>
            <div style="font-size: 1.6rem; font-weight: 900; font-family: var(--font-display);">91 %</div>
            <div style="font-size: 0.78rem; color: #BFDBFE; font-weight: 600;">Taux de réussite moyen</div>
          </div>
        </div>
      </div>

      <!-- Filtres -->
      <div class="kpe-card" style="padding: 20px;">
        <div style="display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px; color: var(--kpe-gray); font-weight: 700; font-size: 0.85rem;">
            ${icon('filter', 16)}
            <span>Filtrer :</span>
          </div>

          <!-- Quartier -->
          <select style="padding: 8px 14px; border-radius: var(--radius-full); border: 1.5px solid var(--kpe-gray-border); font-weight: 700; font-size: 0.84rem; background: #FFF; color: var(--kpe-dark); cursor: pointer;" onchange="window.kpekpeApp.filterRep('quartier', this.value)">
            ${QUARTIERS.map(q => `<option value="${q}" ${filterQuartier === q ? 'selected' : ''}>${q}</option>`).join('')}
          </select>

          <!-- Matière -->
          <select style="padding: 8px 14px; border-radius: var(--radius-full); border: 1.5px solid var(--kpe-gray-border); font-weight: 700; font-size: 0.84rem; background: #FFF; color: var(--kpe-dark); cursor: pointer;" onchange="window.kpekpeApp.filterRep('matiere', this.value)">
            ${MATIERES.map(m => `<option value="${m}" ${filterMatiere === m ? 'selected' : ''}>${m}</option>`).join('')}
          </select>

          <!-- Classe -->
          <select style="padding: 8px 14px; border-radius: var(--radius-full); border: 1.5px solid var(--kpe-gray-border); font-weight: 700; font-size: 0.84rem; background: #FFF; color: var(--kpe-dark); cursor: pointer;" onchange="window.kpekpeApp.filterRep('classe', this.value)">
            ${CLASSES_LIST.map(c => `<option value="${c}" ${filterClasse === c ? 'selected' : ''}>${c}</option>`).join('')}
          </select>

          <span style="font-size: 0.82rem; color: var(--kpe-gray); font-weight: 700; margin-left: auto;">
            ${filtered.length} répétiteur${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}
          </span>
        </div>
      </div>

      <!-- Grille Répétiteurs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); gap: 20px;">
        ${filtered.map(r => renderRepCard(r)).join('')}
      </div>

      <!-- CTA Répétiteur -->
      <div style="background: linear-gradient(135deg, #1E40AF11, #00963F11); border: 1.5px solid #1E40AF33; border-radius: var(--radius-lg); padding: 28px 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <h3 style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark);">Vous êtes répétiteur ? Rejoignez Kpékpé.</h3>
          <p style="font-size: 0.86rem; color: var(--kpe-gray); margin-top: 3px;">
            Essai gratuit de <strong>30 jours</strong>, puis 1 500 FCFA/mois. Profil caché automatiquement si non renouvelé.
          </p>
        </div>
        <button class="btn-primary" style="background: #1E40AF; white-space: nowrap;" onclick="window.kpekpeApp.navigateTo('pricing-repetiteur')">
          Créer mon profil gratuitement
          ${icon('arrow-right', 16, '', '#FFF')}
        </button>
      </div>

    </div>
  `;
}

function renderRepCard(r) {
  const stars = '⭐'.repeat(Math.round(r.note));
  const isVerified = r.badge === 'verified';
  const isTrial = r.badge === 'trial';

  return `
    <div class="kpe-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; transition: transform 0.15s; cursor: pointer;" onclick="window.kpekpeApp.openRepProfile('${r.id}')" onmouseenter="this.style.transform='translateY(-3px)'" onmouseleave="this.style.transform='translateY(0)'">

      <!-- Bannière colorée avec avatar -->
      <div style="background: linear-gradient(135deg, #1E40AF 0%, #172554 100%); padding: 20px; display: flex; align-items: center; gap: 14px; position: relative;">
        ${isTrial ? `<span style="position: absolute; top: 10px; right: 10px; background: var(--kpe-yellow); color: #141414; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: var(--radius-full);">Essai 30j</span>` : ''}
        <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0;">
          ${r.avatar}
        </div>
        <div>
          <div style="font-size: 1rem; font-weight: 900; color: #FFF;">${r.nom}</div>
          <div style="font-size: 0.78rem; color: #BFDBFE; margin-top: 2px; line-height: 1.4;">${r.niveau}</div>
          ${isVerified ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(0,200,80,0.25); color: #4ADE80; font-size: 0.7rem; font-weight: 800; padding: 2px 8px; border-radius: var(--radius-full); margin-top: 4px;">${icon('check', 10, '', '#4ADE80')} Vérifié Kpékpé</span>` : ''}
        </div>
      </div>

      <!-- Infos -->
      <div style="padding: 18px; display: flex; flex-direction: column; gap: 12px; flex: 1;">

        <!-- Matières -->
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          ${r.matieres.map(m => `<span class="kpe-tag" style="font-size: 0.72rem;">${m}</span>`).join('')}
        </div>

        <!-- Note & avis -->
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">⭐</span>
            <span style="font-weight: 900; color: var(--kpe-dark); font-size: 0.95rem;">${r.note}</span>
            <span style="font-size: 0.78rem; color: var(--kpe-gray);">(${r.avis} avis)</span>
          </div>
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--kpe-gray);">📍 ${r.quartier}</span>
        </div>

        <!-- Dispo -->
        <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--kpe-gray);">
          ${icon('clock', 13, '', 'var(--kpe-gray)')}
          <span>${r.dispo}</span>
        </div>

        <!-- Tarif & CTA -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 12px; border-top: 1px solid var(--kpe-gray-border);">
          <div>
            <span style="font-size: 1.1rem; font-weight: 900; color: var(--kpe-dark);">${r.tarif.toLocaleString('fr-FR')} FCFA</span>
            <span style="font-size: 0.75rem; color: var(--kpe-gray);">/mois</span>
          </div>
          <button class="btn-primary" style="padding: 7px 14px; font-size: 0.8rem;" onclick="event.stopPropagation(); window.kpekpeApp.openRepProfile('${r.id}')">
            Voir le profil
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderProfileDetail(r) {
  const isVerified = r.badge === 'verified';
  return `
    <div style="max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">

      <!-- Back -->
      <button class="btn-secondary" style="align-self: flex-start;" onclick="window.kpekpeApp.closeRepProfile()">
        ${icon('arrow-left', 16)}
        <span>Retour aux répétiteurs</span>
      </button>

      <!-- Profil Header -->
      <div class="kpe-card" style="padding: 0; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1E40AF 0%, #172554 100%); padding: 28px 32px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
          <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; flex-shrink: 0;">
            ${r.avatar}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <h1 style="font-size: 1.5rem; font-weight: 900; color: #FFF;">${r.nom}</h1>
              ${isVerified ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(0,200,80,0.25); color: #4ADE80; font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: var(--radius-full);">${icon('check', 12, '', '#4ADE80')} Profil Vérifié Kpékpé</span>` : ''}
            </div>
            <p style="font-size: 0.88rem; color: #BFDBFE; margin-top: 4px;">${r.niveau}</p>
            <div style="display: flex; gap: 16px; margin-top: 10px; flex-wrap: wrap;">
              <span style="font-size: 0.82rem; color: #93C5FD;">📍 ${r.quartier}, Lomé</span>
              <span style="font-size: 0.82rem; color: #93C5FD;">🎓 ${r.experience} d'expérience</span>
              <span style="font-size: 0.82rem; color: #93C5FD;">✅ ${r.tauxReussite} % de réussite</span>
            </div>
          </div>
        </div>

        <div style="padding: 24px 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-gray); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Matières enseignées</h4>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${r.matieres.map(m => `<span class="kpe-tag">${m}</span>`).join('')}
            </div>

            <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-gray); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; margin-top: 16px;">Classes acceptées</h4>
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              ${r.classes.map(c => `<span class="kpe-tag" style="background: #EFF6FF; color: #1D4ED8;">${c}</span>`).join('')}
            </div>
          </div>

          <div>
            <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-gray); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;">Disponibilités</h4>
            <p style="font-size: 0.88rem; color: var(--kpe-dark); line-height: 1.6;">${r.dispo}</p>

            <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--kpe-gray); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px; margin-top: 16px;">Note & Avis</h4>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 2rem; font-weight: 900; color: var(--kpe-dark);">${r.note}</span>
              <div>
                <div style="font-size: 1.1rem;">⭐⭐⭐⭐⭐</div>
                <div style="font-size: 0.78rem; color: var(--kpe-gray);">${r.avis} avis d'élèves</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="kpe-card" style="padding: 24px;">
        <h3 style="font-size: 1rem; font-weight: 800; color: var(--kpe-dark); margin-bottom: 10px;">À propos de ${r.nom.split(' ')[0]}</h3>
        <p style="font-size: 0.9rem; color: var(--kpe-gray); line-height: 1.7;">${r.bio}</p>
      </div>

      <!-- Tarif & Demande de séance -->
      <div class="kpe-card" style="padding: 28px; background: linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%); border: 1.5px solid #1E40AF33;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <div style="font-size: 0.82rem; color: var(--kpe-gray); font-weight: 700; margin-bottom: 4px;">Tarif mensuel estimé</div>
            <div style="font-size: 2rem; font-weight: 900; color: var(--kpe-dark); font-family: var(--font-display);">
              ${r.tarif.toLocaleString('fr-FR')} FCFA
              <span style="font-size: 0.9rem; font-weight: 600; color: var(--kpe-gray);">/mois</span>
            </div>
            <div style="font-size: 0.78rem; color: var(--kpe-gray); margin-top: 2px;">À négocier directement avec le répétiteur lors de la mise en relation.</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button class="btn-primary" style="background: #1E40AF; font-size: 0.95rem; padding: 12px 24px;" onclick="window.kpekpeApp.demanderSeance('${r.id}')">
              ${icon('send', 16, '', '#FFF')}
              <span>Demander une mise en relation</span>
            </button>
            <div style="font-size: 0.75rem; color: var(--kpe-gray); text-align: center;">Gratuit pour l'élève · Réponse sous 24h</div>
          </div>
        </div>
      </div>

    </div>
  `;
}
