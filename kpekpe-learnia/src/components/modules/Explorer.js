// Kpékpé Learnia — Module 2 : Explorer
import { icon } from '../Icons.js';

export function renderExplorer(chapter, userState) {
  const explorerData = chapter.content?.explorer;

  return `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <!-- Instruction Banner -->
      <div style="background: var(--kpe-green-pale); border: 1px solid rgba(0, 150, 63, 0.2); border-radius: var(--radius-md); padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
        <span style="color: var(--kpe-green); flex-shrink: 0;">${icon('play', 18, '', '#00963F')}</span>
        <span style="font-size: 0.92rem; font-weight: 600; color: #06401E;">${explorerData.instruction}</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 340px; gap: 24px;">
        <!-- Canvas Graphique Interactif -->
        <div id="graphContainer" style="position: relative; width: 100%; height: 440px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--kpe-gray-border); overflow: hidden; box-shadow: var(--shadow-card);">
          <canvas id="functionCanvas" style="width: 100%; height: 100%; display: block;"></canvas>
          <div style="position: absolute; bottom: 12px; left: 14px; font-size: 0.72rem; color: var(--kpe-gray); background: rgba(255,255,255,0.9); padding: 2px 8px; border-radius: 4px; pointer-events: none;">
            Repère orthonormé (O, i, j) • Glisse les curseurs pour modifier la droite
          </div>
        </div>

        <!-- Controls -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <!-- Live Formula -->
          <div style="background: var(--kpe-dark); color: #FFFFFF; border-radius: var(--radius-md); padding: 20px; text-align: center;">
            <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.65);">Formule en direct</div>
            <div id="liveFormula" style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; color: var(--kpe-yellow); margin-top: 4px;">f(x) = 2x + 3</div>
            <div id="liveComment" style="font-size: 0.78rem; color: #A3D4B5; margin-top: 4px;">Pente positive (croissante)</div>
          </div>

          <!-- Slider a -->
          <div class="kpe-card" style="padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.88rem; font-weight: 700;">Pente (a) :</span>
              <span id="valA" style="font-family: monospace; font-weight: 800; color: var(--kpe-green); background: var(--kpe-green-pale); padding: 2px 8px; border-radius: var(--radius-sm); font-size: 0.85rem;">2.0</span>
            </div>
            <input type="range" id="sliderA" min="-4" max="4" step="0.5" value="2" style="width: 100%; accent-color: var(--kpe-green); cursor: pointer;" />
            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--kpe-gray); margin-top: 4px;">
              <span>-4.0 (Descend)</span>
              <span>0 (Horizontale)</span>
              <span>+4.0 (Monte)</span>
            </div>
          </div>

          <!-- Slider b -->
          <div class="kpe-card" style="padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.88rem; font-weight: 700;">Ordonnée à l'origine (b) :</span>
              <span id="valB" style="font-family: monospace; font-weight: 800; color: var(--kpe-green); background: var(--kpe-green-pale); padding: 2px 8px; border-radius: var(--radius-sm); font-size: 0.85rem;">3.0</span>
            </div>
            <input type="range" id="sliderB" min="-6" max="6" step="1" value="3" style="width: 100%; accent-color: var(--kpe-green); cursor: pointer;" />
            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--kpe-gray); margin-top: 4px;">
              <span>-6</span>
              <span>0 (Origine)</span>
              <span>+6</span>
            </div>
          </div>

          <!-- Presets -->
          <div class="kpe-card" style="padding: 16px;">
            <span style="font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--kpe-gray); letter-spacing: 0.8px;">Cas types :</span>
            <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
              ${explorerData.presets ? explorerData.presets.map(p => `
                <button class="filter-pill" style="border-radius: var(--radius-sm); text-align: left; padding: 6px 10px; font-size: 0.78rem; width: 100%; justify-content: space-between; display: flex;" onclick="window.kpekpeApp.setExplorerPreset(${p.a}, ${p.b})">
                  <span style="font-weight: 700;">${p.label}</span>
                  <span style="color: var(--kpe-gray);">a=${p.a}, b=${p.b}</span>
                </button>
              `).join('') : ''}
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Footer -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <button class="btn-secondary" onclick="window.kpekpeApp.switchChapterTab('comprendre')">
          ${icon('arrow-left', 16)}
          <span>Relire le cours</span>
        </button>
        <button class="btn-primary" onclick="window.kpekpeApp.switchChapterTab('memoriser')">
          <span>Passer à la mémorisation</span>
          ${icon('arrow-right', 16, '', '#FFFFFF')}
        </button>
      </div>
    </div>
  `;
}

export function initFunctionGrapher(initialA = 2, initialB = 3) {
  const canvas = document.getElementById('functionCanvas');
  const container = document.getElementById('graphContainer');
  if (!canvas || !container) return;
  const ctx = canvas.getContext('2d');

  let state = {
    a: initialA,
    b: initialB,
    scale: 28,
    originX: 0,
    originY: 0
  };

  function resizeCanvas() {
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    state.originX = rect.width / 2;
    state.originY = rect.height / 2;
  }

  function draw() {
    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Grid
    ctx.strokeStyle = '#F0F3F0';
    ctx.lineWidth = 1;
    for (let x = state.originX % state.scale; x < w; x += state.scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = state.originY % state.scale; y < h; y += state.scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // 2. Axes
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, state.originY);
    ctx.lineTo(w, state.originY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(state.originX, 0);
    ctx.lineTo(state.originX, h);
    ctx.stroke();

    // Numbers
    ctx.fillStyle = '#888888';
    ctx.font = '10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    for (let i = -12; i <= 12; i++) {
      if (i !== 0) {
        const cx = state.originX + i * state.scale;
        const cy = state.originY - i * state.scale;
        if (cx > 10 && cx < w - 10) ctx.fillText(i, cx, state.originY + 14);
        if (cy > 10 && cy < h - 10) ctx.fillText(i, state.originX - 12, cy + 3);
      }
    }
    ctx.fillText('0', state.originX - 10, state.originY + 14);
    ctx.fillText('x', w - 12, state.originY - 6);
    ctx.fillText('y', state.originX + 12, 14);

    // 3. Slope triangle
    if (state.a !== 0) {
      const p1x = state.originX + 1 * state.scale;
      const p1y = state.originY - (state.a * 1 + state.b) * state.scale;
      const p2x = state.originX + 2 * state.scale;
      const p2y = state.originY - (state.a * 2 + state.b) * state.scale;

      ctx.fillStyle = 'rgba(254, 236, 1, 0.35)';
      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(p2x, p1y);
      ctx.lineTo(p2x, p2y);
      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = '#D4AC0D';
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#00963F';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('+1', (p1x + p2x) / 2, p1y + 12);
      ctx.fillText(`${state.a > 0 ? '+' : ''}${state.a}`, p2x + 14, (p1y + p2y) / 2 + 4);
    }

    // 4. Function Line
    ctx.strokeStyle = '#00963F';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    const xLeft = -15;
    const yLeft = state.a * xLeft + state.b;
    const xRight = 15;
    const yRight = state.a * xRight + state.b;
    ctx.moveTo(state.originX + xLeft * state.scale, state.originY - yLeft * state.scale);
    ctx.lineTo(state.originX + xRight * state.scale, state.originY - yRight * state.scale);
    ctx.stroke();

    // 5. Y-intercept (0, b)
    const ptYx = state.originX;
    const ptYy = state.originY - state.b * state.scale;
    ctx.fillStyle = '#141414';
    ctx.beginPath();
    ctx.arc(ptYx, ptYy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#141414';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`B(0, ${state.b})`, ptYx + 10, ptYy - 6);
  }

  function updateFormulaUI() {
    const liveFormula = document.getElementById('liveFormula');
    const liveComment = document.getElementById('liveComment');
    const valA = document.getElementById('valA');
    const valB = document.getElementById('valB');

    if (valA) valA.innerText = state.a.toFixed(1);
    if (valB) valB.innerText = state.b.toFixed(1);

    if (liveFormula) {
      const bStr = state.b > 0 ? ` + ${state.b}` : (state.b < 0 ? ` - ${Math.abs(state.b)}` : '');
      const aStr = state.a === 1 ? 'x' : (state.a === -1 ? '-x' : (state.a === 0 ? '' : `${state.a}x`));
      liveFormula.innerText = `f(x) = ${aStr || '0'}${bStr || (aStr ? '' : '0')}`;
    }

    if (liveComment) {
      if (state.a > 0) {
        liveComment.innerText = `Pente positive (${state.a}) ➔ Droite croissante (monte)`;
        liveComment.style.color = '#A3D4B5';
      } else if (state.a < 0) {
        liveComment.innerText = `Pente négative (${state.a}) ➔ Droite décroissante (descend)`;
        liveComment.style.color = '#FEEC01';
      } else {
        liveComment.innerText = `Pente nulle (a=0) ➔ Fonction constante f(x) = ${state.b}`;
        liveComment.style.color = '#FFFFFF';
      }
    }
  }

  const sliderA = document.getElementById('sliderA');
  const sliderB = document.getElementById('sliderB');

  if (sliderA) {
    sliderA.addEventListener('input', (e) => {
      state.a = parseFloat(e.target.value);
      updateFormulaUI();
      draw();
    });
  }

  if (sliderB) {
    sliderB.addEventListener('input', (e) => {
      state.b = parseFloat(e.target.value);
      updateFormulaUI();
      draw();
    });
  }

  window.kpekpeSetExplorerPreset = (a, b) => {
    state.a = a;
    state.b = b;
    if (sliderA) sliderA.value = a;
    if (sliderB) sliderB.value = b;
    updateFormulaUI();
    draw();
  };

  resizeCanvas();
  updateFormulaUI();
  draw();

  window.addEventListener('resize', () => {
    resizeCanvas();
    draw();
  });
}
