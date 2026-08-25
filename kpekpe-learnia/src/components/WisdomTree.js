// Kpékpé Learnia — Arbre de la Sagesse (SVG Vivant)

const TREE_SVGS = [
  // Level 0 — Graine
  `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs><radialGradient id="g0e" cx="50%" cy="60%" r="55%">
      <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
    </radialGradient></defs>
    <ellipse cx="60" cy="128" rx="50" ry="12" fill="url(#g0e)" opacity="0.7"/>
    <ellipse cx="60" cy="122" rx="18" ry="8" fill="#A07850"/>
    <ellipse cx="60" cy="117" rx="10" ry="6" fill="#7C5A3A"/>
    <path d="M60 115 Q51 99 55 86 Q63 100 60 115" fill="#5DAA4F" opacity="0.95"/>
    <path d="M62 104 Q71 92 68 80 Q61 92 62 104" fill="#4A9040" opacity="0.8"/>
  </svg>`,

  // Level 1 — Pousse
  `<svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs><radialGradient id="g1e" cx="50%" cy="60%" r="55%">
      <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
    </radialGradient></defs>
    <ellipse cx="60" cy="145" rx="50" ry="10" fill="url(#g1e)" opacity="0.7"/>
    <path d="M60 143 Q58 118 61 82" stroke="#8B6341" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M60 118 Q40 108 44 90 Q58 104 60 118" fill="#5DAA4F"/>
    <path d="M61 108 Q82 96 79 78 Q65 93 61 108" fill="#4A9040"/>
    <path d="M61 84 Q75 70 72 58 Q62 71 61 84" fill="#68BD5C" opacity="0.9"/>
    <circle cx="61" cy="80" r="5" fill="#7BD96A"/>
  </svg>`,

  // Level 2 — Jeune Plante
  `<svg viewBox="0 0 130 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs><radialGradient id="g2e" cx="50%" cy="60%" r="55%">
      <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
    </radialGradient></defs>
    <ellipse cx="65" cy="155" rx="55" ry="10" fill="url(#g2e)" opacity="0.7"/>
    <path d="M62 153 Q60 125 63 85" stroke="#8B6341" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M63 130 Q40 120 44 100 Q60 115 63 130" fill="#5DAA4F"/>
    <path d="M63 118 Q86 105 84 84 Q67 100 63 118" fill="#4A9040"/>
    <path d="M63 104 Q40 93 44 72 Q61 88 63 104" fill="#68BD5C"/>
    <path d="M63 92 Q86 78 82 58 Q66 75 63 92" fill="#5DAA4F" opacity="0.9"/>
    <circle cx="63" cy="72" r="22" fill="#5DAA4F" opacity="0.88"/>
    <circle cx="52" cy="79" r="13" fill="#68BD5C" opacity="0.72"/>
    <circle cx="75" cy="77" r="13" fill="#4A9040" opacity="0.72"/>
    <circle cx="63" cy="60" r="14" fill="#7BD96A" opacity="0.72"/>
  </svg>`,

  // Level 3 — Arbre (niveau actuel de Kofi)
  `<svg viewBox="0 0 150 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs>
      <radialGradient id="g3e" cx="50%" cy="65%" r="55%">
        <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
      </radialGradient>
      <radialGradient id="g3c" cx="45%" cy="40%" r="58%">
        <stop offset="0%" stop-color="#7FCC60"/><stop offset="100%" stop-color="#3D8B34"/>
      </radialGradient>
    </defs>
    <ellipse cx="75" cy="165" rx="65" ry="11" fill="url(#g3e)" opacity="0.65"/>
    <path d="M70 163 Q66 135 68 92" stroke="#7A5230" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M80 163 Q84 133 82 92" stroke="#8B6341" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M69 128 Q48 117 40 97" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M81 122 Q100 109 110 88" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="75" cy="72" r="44" fill="url(#g3c)" opacity="0.94"/>
    <circle cx="48" cy="85" r="25" fill="#5DAA4F" opacity="0.82"/>
    <circle cx="102" cy="81" r="25" fill="#4A9040" opacity="0.82"/>
    <circle cx="75" cy="50" r="28" fill="#68BD5C" opacity="0.82"/>
    <circle cx="57" cy="62" r="16" fill="#7FCC60" opacity="0.58"/>
    <circle cx="90" cy="58" r="16" fill="#5DAA4F" opacity="0.58"/>
    <circle cx="75" cy="38" r="12" fill="#7BD96A" opacity="0.5"/>
  </svg>`,

  // Level 4 — Fleuri
  `<svg viewBox="0 0 150 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs>
      <radialGradient id="g4e" cx="50%" cy="65%" r="55%">
        <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
      </radialGradient>
      <radialGradient id="g4c" cx="45%" cy="40%" r="58%">
        <stop offset="0%" stop-color="#7FCC60"/><stop offset="100%" stop-color="#3D8B34"/>
      </radialGradient>
    </defs>
    <ellipse cx="75" cy="165" rx="65" ry="11" fill="url(#g4e)" opacity="0.65"/>
    <path d="M70 163 Q66 135 68 92" stroke="#7A5230" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M80 163 Q84 133 82 92" stroke="#8B6341" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M69 128 Q48 117 40 97" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M81 122 Q100 109 110 88" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="75" cy="72" r="44" fill="url(#g4c)" opacity="0.94"/>
    <circle cx="48" cy="85" r="25" fill="#5DAA4F" opacity="0.82"/>
    <circle cx="102" cy="81" r="25" fill="#4A9040" opacity="0.82"/>
    <circle cx="75" cy="50" r="28" fill="#68BD5C" opacity="0.82"/>
    <circle cx="57" cy="62" r="16" fill="#7FCC60" opacity="0.58"/>
    <circle cx="90" cy="58" r="16" fill="#5DAA4F" opacity="0.58"/>
    <!-- Fleurs -->
    <circle cx="50" cy="62" r="7" fill="#FEEC01" opacity="0.95"/>
    <circle cx="76" cy="44" r="6" fill="#FFB347" opacity="0.95"/>
    <circle cx="100" cy="66" r="7" fill="#FEEC01" opacity="0.95"/>
    <circle cx="44" cy="80" r="6" fill="#FF9FD1" opacity="0.9"/>
    <circle cx="105" cy="82" r="6" fill="#FFB347" opacity="0.9"/>
    <circle cx="62" cy="50" r="5" fill="#FF9FD1" opacity="0.85"/>
    <circle cx="88" cy="46" r="5" fill="#FEEC01" opacity="0.85"/>
  </svg>`,

  // Level 5 — Fruits de la Sagesse
  `<svg viewBox="0 0 150 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
    <defs>
      <radialGradient id="g5e" cx="50%" cy="65%" r="55%">
        <stop offset="0%" stop-color="#D4A574"/><stop offset="100%" stop-color="#A0785A"/>
      </radialGradient>
      <radialGradient id="g5c" cx="45%" cy="40%" r="58%">
        <stop offset="0%" stop-color="#7FCC60"/><stop offset="100%" stop-color="#3D8B34"/>
      </radialGradient>
    </defs>
    <ellipse cx="75" cy="165" rx="65" ry="11" fill="url(#g5e)" opacity="0.65"/>
    <path d="M70 163 Q66 135 68 92" stroke="#7A5230" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M80 163 Q84 133 82 92" stroke="#8B6341" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M69 128 Q48 117 40 97" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M81 122 Q100 109 110 88" stroke="#8B6341" stroke-width="5" fill="none" stroke-linecap="round"/>
    <circle cx="75" cy="72" r="44" fill="url(#g5c)" opacity="0.94"/>
    <circle cx="48" cy="85" r="25" fill="#5DAA4F" opacity="0.82"/>
    <circle cx="102" cy="81" r="25" fill="#4A9040" opacity="0.82"/>
    <circle cx="75" cy="50" r="28" fill="#68BD5C" opacity="0.82"/>
    <!-- Fruits avec tiges -->
    <path d="M50 65 Q52 60 50 57" stroke="#5A3A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="67" r="8" fill="#E84855"/>
    <path d="M100 70 Q102 65 100 62" stroke="#5A3A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="72" r="8" fill="#3B82F6"/>
    <path d="M75 45 Q77 40 75 37" stroke="#5A3A1A" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="75" cy="47" r="8" fill="#F59E0B"/>
    <path d="M44 85 Q46 80 44 77" stroke="#5A3A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="44" cy="87" r="7" fill="#10B981"/>
    <path d="M106 84 Q108 79 106 76" stroke="#5A3A1A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="106" cy="86" r="7" fill="#8B5CF6"/>
  </svg>`
];


export function renderWisdomTree(level = 3, fruits = [], isBreathing = false) {
  const treeMeta = [
    { label: 'Graine',          desc: 'Chaque voyage commence par une graine.' },
    { label: 'Pousse',           desc: 'Tes premières feuilles apparaissent.' },
    { label: 'Jeune plante',     desc: 'Tes efforts prennent racine.' },
    { label: 'Arbre',            desc: 'Tu grandis chaque jour.' },
    { label: 'Arbre fleuri',     desc: 'Tes connaissances s\'épanouissent.' },
    { label: 'Fruits de sagesse',desc: 'Tu récoltes ce que tu as semé.' }
  ][level] || { label: 'Graine', desc: '' };

  const svgContent = TREE_SVGS[level] || TREE_SVGS[0];
  const wrapClass = isBreathing ? 'tree-svg-wrap breathing' : 'tree-svg-wrap';

  return `
    <div class="wisdom-tree-area">
      <div class="${wrapClass}" id="wisdomTreeWrap">
        ${svgContent}
      </div>

      <div style="margin-top: 12px;">
        <div class="tree-message">Ton arbre de la sagesse (${treeMeta.label})</div>
        <div class="tree-sub-message">${treeMeta.desc}</div>
      </div>
    </div>
  `;
}
