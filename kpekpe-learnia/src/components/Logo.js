// Kpékpé Learnia — Logo Officiel (Image Exacte Cadrée Parfaitement)

export function renderKpekpeLogo({ showLearnia = true, height = 38 } = {}) {
  return `
    <div style="display: inline-flex; align-items: center; cursor: pointer; user-select: none;">
      <img 
        src="/assets/kpekpe_logo_official.png" 
        alt="Kpékpé Learnia" 
        style="height: ${height}px; width: auto; max-width: 180px; display: block; object-fit: contain;"
      />
    </div>
  `;
}
