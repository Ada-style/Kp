// Kpékpé Learnia — Sidebar (avec Kpékpé Kids & Navigation Complète)
import { icon } from './Icons.js';
import { renderKpekpeLogo } from './Logo.js';

export function renderSidebar(userState) {
  const activeNav = userState.activeNavigation;
  const activeSub = userState.activeSubNav;
  const user = userState.user;

  return `
    <aside class="app-sidebar">
      <div class="sidebar-header">
        <div onclick="window.kpekpeApp.navigateTo('apprendre', 'vue-d-ensemble')">
          ${renderKpekpeLogo({ showLearnia: true, height: 36 })}
        </div>
        <button style="background: transparent; border: none; color: var(--kpe-gray); cursor: pointer;" title="Réduire">
          ${icon('chevrons-left', 18)}
        </button>
      </div>

      <div class="sidebar-nav-list">
        <!-- 1. Mon parcours -->
        <div class="nav-link ${activeNav === 'mon-parcours' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('mon-parcours')">
          ${icon('home', 18)}
          <span>Mon parcours</span>
        </div>

        <!-- 2. APPRENDRE (Section Principale Active) -->
        <div class="nav-link ${activeNav === 'apprendre' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('apprendre', 'vue-d-ensemble')">
          ${icon('apprendre', 18)}
          <span>Apprendre</span>
        </div>

        <!-- Sous-menu Apprendre / Learnia -->
        ${activeNav === 'apprendre' ? `
          <div class="sub-nav-list">
            <div class="sub-nav-link ${activeSub === 'vue-d-ensemble' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('apprendre', 'vue-d-ensemble')">
              ${icon('compass', 16, '', activeSub === 'vue-d-ensemble' ? '#00963F' : '#6B7280')}
              <span>Vue d'ensemble</span>
            </div>
            <div class="sub-nav-link ${activeSub === 'cours' || activeSub === 'chapitre' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('apprendre', 'cours')">
              ${icon('book-open', 16, '', (activeSub === 'cours' || activeSub === 'chapitre') ? '#00963F' : '#6B7280')}
              <span>Mes cours</span>
            </div>
            <div class="sub-nav-link ${activeSub === 'progression' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('apprendre', 'progression')">
              ${icon('trending-up', 16, '', activeSub === 'progression' ? '#00963F' : '#6B7280')}
              <span>Ma progression</span>
            </div>
          </div>
        ` : ''}

        <!-- 3. KPÉKPÉ KIDS (Espace Dédié 3-10 ans) -->
        <div class="nav-link ${activeNav === 'kids' ? 'active-main' : ''}" style="background: ${activeNav === 'kids' ? 'var(--kpe-green)' : 'transparent'};" onclick="window.kpekpeApp.navigateTo('kids')">
          ${icon('sparkles', 18, '', activeNav === 'kids' ? '#FFFFFF' : '#00963F')}
          <span style="font-weight: 700; color: ${activeNav === 'kids' ? '#FFFFFF' : 'var(--kpe-green)'};">Kpékpé Kids</span>
          <span style="font-size: 0.65rem; background: var(--kpe-yellow); color: #141414; padding: 2px 6px; border-radius: 10px; font-weight: 800; margin-left: auto;">3-10 ans</span>
        </div>

        <!-- 4. RÉPÉTITEURS (Marketplace) -->
        <div class="nav-link ${activeNav === 'repetiteurs' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('repetiteurs')">
          ${icon('user', 18, '', activeNav === 'repetiteurs' ? '#FFFFFF' : '#6B7280')}
          <span>Répétiteurs</span>
          <span style="font-size: 0.65rem; background: #1E40AF; color: #FFF; padding: 2px 6px; border-radius: 10px; font-weight: 800; margin-left: auto;">Lomé</span>
        </div>

        <!-- 5. DÉCOUVRIR (Espace Orientation) -->
        <div class="nav-link ${activeNav === 'decouvrir' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('decouvrir', 'metiers')">
          ${icon('briefcase', 18)}
          <span>Découvrir</span>
        </div>

        ${activeNav === 'decouvrir' ? `
          <div class="sub-nav-list">
            <div class="sub-nav-link ${activeSub === 'metiers' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('decouvrir', 'metiers')">
              ${icon('briefcase', 16, '', activeSub === 'metiers' ? '#00963F' : '#6B7280')}
              <span>Métiers</span>
            </div>
            <div class="sub-nav-link ${activeSub === 'formations' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('decouvrir', 'formations')">
              ${icon('graduation-cap', 16, '', activeSub === 'formations' ? '#00963F' : '#6B7280')}
              <span>Formations</span>
            </div>
            <div class="sub-nav-link ${activeSub === 'organisations' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('decouvrir', 'organisations')">
              ${icon('building-2', 16, '', activeSub === 'organisations' ? '#00963F' : '#6B7280')}
              <span>Organisations</span>
            </div>
            <div class="sub-nav-link ${activeSub === 'orientation' ? 'active' : ''}" onclick="window.kpekpeApp.navigateTo('decouvrir', 'orientation')">
              ${icon('compass', 16, '', activeSub === 'orientation' ? '#00963F' : '#6B7280')}
              <span>Test IKIGAI</span>
            </div>
          </div>
        ` : ''}

        <div style="height: 1px; background: var(--kpe-gray-border); margin: 12px 4px;"></div>

        <!-- 5. Mon profil & Paramètres -->
        <div class="nav-link ${activeNav === 'profil' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('profil')">
          ${icon('user', 18)}
          <span>Mon profil</span>
        </div>

        <div class="nav-link ${activeNav === 'parametres' ? 'active-main' : ''}" onclick="window.kpekpeApp.navigateTo('parametres')">
          ${icon('settings', 18)}
          <span>Paramètres</span>
        </div>

        <div class="nav-link" onclick="window.kpekpeApp.openHelp()">
          ${icon('help-circle', 18)}
          <span>Aide</span>
        </div>

        <div class="nav-link" style="color: #9CA3AF;" onclick="window.kpekpeApp.logout()">
          ${icon('log-out', 18)}
          <span>Déconnexion</span>
        </div>
      </div>

      <!-- Engagement Bar : Streak + Flamme -->
      <div class="sidebar-engage-bar">
        <button class="engage-pill streak-pill" title="Jours de suite" onclick="window.kpekpeApp.navigateTo('mon-parcours')">
          🔥 ${user.streakDays}j
        </button>
        <button class="engage-pill flame-pill" title="Flammes actives" onclick="window.kpekpeApp.navigateTo('mon-parcours')">
          🌳 Niv.3
        </button>
      </div>

      <!-- User Profile Widget -->
      <div class="sidebar-user-footer">
        <div class="user-profile-card" onclick="window.kpekpeApp.navigateTo('profil')">
          <div class="avatar-kpekpe">K</div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 800; font-size: 0.88rem; color: var(--kpe-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${user.nom}</div>
            <div style="font-size: 0.72rem; color: var(--kpe-gray);">${user.classeLabel}</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}
