// =============================================================================
// APP.JS – Wahl-O-Mat Bad Vilbel & Wetteraukreis 2026
// Vanilla JS, kein Framework, kein Build-Step
// Struktur: STATE / SCORING / RENDER / UI / ROUTING
// =============================================================================

'use strict';

// =============================================================================
// SECTION: STATE
// =============================================================================
const STATE = {
  currentModule: null,        // 'bad-vilbel' | 'wetteraukreis'
  moduleData: null,           // reference to APP_DATA.moduleA or .moduleB
  currentQ: 0,                // index into activeQuestionIndices
  activeQuestionIndices: [],  // indices of questions from moduleData.questions that are active
  selectedTopics: null,       // Set of selected topic strings (null = all)
  answers: [],                // indexed by full question array index; null = skipped/neutral
  scores: {},                 // { partyId: number }
};

// =============================================================================
// SECTION: SCORING
// =============================================================================

/**
 * Calculate match percentages for all parties.
 * For each answered question: partyScore += scores[party][answer] * weight
 * Max possible per question: 2 * weight
 * Questions in non-selected topics remain null → skipped → neutral (not counted)
 * Returns object { partyId: percentage (0–100) }
 */
function calcScores() {
  const { moduleData, answers } = STATE;
  const parties = moduleData.parties;
  const questions = moduleData.questions;

  // Init
  const rawScores = {};
  const maxScores = {};
  parties.forEach(p => { rawScores[p.id] = 0; maxScores[p.id] = 0; });

  answers.forEach((ans, idx) => {
    if (!ans) return; // skipped or non-selected topic
    const q = questions[idx];
    const weight = ans.weight || 1;
    parties.forEach(p => {
      const score = q.scores[p.id]?.[ans.optionId] ?? 0;
      rawScores[p.id] += score * weight;
      maxScores[p.id] += 2 * weight; // max possible = +2 per question
    });
  });

  const pct = {};
  parties.forEach(p => {
    if (maxScores[p.id] === 0) {
      pct[p.id] = 0;
    } else {
      // Normalize from [-max, +max] to [0, 100]
      const normalized = (rawScores[p.id] + maxScores[p.id]) / (2 * maxScores[p.id]);
      pct[p.id] = Math.round(normalized * 100);
    }
  });

  return pct;
}

/**
 * Sort parties by match percentage descending.
 */
function getSortedParties(scores) {
  return STATE.moduleData.parties
    .slice()
    .sort((a, b) => (scores[b.id] || 0) - (scores[a.id] || 0));
}

// =============================================================================
// SECTION: ROUTING (Screen management)
// =============================================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// =============================================================================
// SECTION: RENDER – Screen 1 (Start)
// =============================================================================
function renderStart() {
  renderModuleCard('card-a', APP_DATA.moduleA, 'A', '①');
  renderModuleCard('card-b', APP_DATA.moduleB, 'B', '②');
}

function renderModuleCard(containerId, moduleData, moduleKey, num) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const dotsHtml = moduleData.parties.map(p => `
    <div class="party-dot-item">
      <span class="party-dot" style="background:${p.color}"></span>
      <span>${p.name}</span>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="module-card-num">Modul ${moduleKey}</div>
    <div class="module-card-title">${moduleData.title}</div>
    <div class="module-card-meta">${moduleData.subtitle}</div>
    <div class="party-dots">${dotsHtml}</div>
    <div class="module-card-arrow">→</div>
  `;

  el.onclick = () => startModule(moduleKey === 'A' ? 'moduleA' : 'moduleB');
}

// =============================================================================
// SECTION: RENDER – Screen 1b (Topic Selection)
// =============================================================================
function startModule(moduleKey) {
  STATE.currentModule = moduleKey;
  STATE.moduleData = APP_DATA[moduleKey];
  STATE.selectedTopics = null;
  STATE.activeQuestionIndices = [];
  renderTopicSelection();
  showScreen('screen-topics');
}

function renderTopicSelection() {
  const { moduleData } = STATE;

  // Get unique topics in order of appearance
  const seenTopics = new Set();
  const topics = [];
  moduleData.questions.forEach(q => {
    if (!seenTopics.has(q.topic)) {
      seenTopics.add(q.topic);
      topics.push(q.topic);
    }
  });

  const titleEl = document.getElementById('topics-module-title');
  if (titleEl) titleEl.textContent = moduleData.title;

  const listEl = document.getElementById('topics-list');
  if (listEl) {
    listEl.innerHTML = topics.map(topic => {
      const qCount = moduleData.questions.filter(q => q.topic === topic).length;
      return `
        <label class="topic-checkbox-item">
          <input
            type="checkbox"
            class="topic-cb"
            value="${escHtml(topic)}"
            checked
            onchange="updateTopicCount()"
          />
          <span class="topic-checkbox-icon">✓</span>
          <span class="topic-checkbox-label">${escHtml(topic)}</span>
          <span class="topic-checkbox-count">${qCount}&nbsp;Frage${qCount !== 1 ? 'n' : ''}</span>
        </label>
      `;
    }).join('');
  }

  updateTopicCount();
}

function updateTopicCount() {
  const checkboxes = document.querySelectorAll('.topic-cb:checked');
  const selectedTopics = new Set([...checkboxes].map(cb => cb.value));
  const activeCount = STATE.moduleData.questions.filter(q => selectedTopics.has(q.topic)).length;

  const countEl = document.getElementById('topics-question-count');
  if (countEl) {
    if (activeCount === 0) {
      countEl.textContent = 'Kein Thema ausgewählt – bitte mindestens eines wählen.';
      countEl.classList.add('topics-count--warn');
    } else {
      countEl.textContent = `${activeCount} Frage${activeCount !== 1 ? 'n' : ''} ausgewählt`;
      countEl.classList.remove('topics-count--warn');
    }
  }

  const startBtn = document.getElementById('btn-start-quiz');
  if (startBtn) startBtn.disabled = activeCount === 0;
}

function selectAllTopics(checked) {
  document.querySelectorAll('.topic-cb').forEach(cb => { cb.checked = checked; });
  updateTopicCount();
}

function startQuizWithTopics() {
  const checkboxes = document.querySelectorAll('.topic-cb:checked');
  const selectedTopics = new Set([...checkboxes].map(cb => cb.value));

  if (selectedTopics.size === 0) return; // guard

  STATE.selectedTopics = selectedTopics;

  // Determine active question indices (only questions whose topic is selected)
  STATE.activeQuestionIndices = STATE.moduleData.questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => selectedTopics.has(q.topic))
    .map(({ i }) => i);

  STATE.currentQ = 0;
  // answers indexed by full question array – non-active ones stay null (neutral in scoring)
  STATE.answers = new Array(STATE.moduleData.questions.length).fill(null);

  renderQuizQuestion();
  showScreen('screen-quiz');
}

// =============================================================================
// SECTION: RENDER – Screen 2 (Quiz)
// =============================================================================
function renderQuizQuestion() {
  const { moduleData, currentQ, answers, activeQuestionIndices } = STATE;
  const qIdx = activeQuestionIndices[currentQ];
  const q = moduleData.questions[qIdx];
  const total = activeQuestionIndices.length;
  const currentAns = answers[qIdx];

  // Progress bar
  const pct = ((currentQ + 1) / total) * 100;
  const progressFill = document.getElementById('quiz-progress-fill');
  if (progressFill) progressFill.style.width = pct + '%';

  // Meta
  setEl('quiz-module-label', moduleData.title);
  setEl('quiz-counter', `${currentQ + 1} / ${total}`);

  // Topic badge
  setEl('quiz-topic-badge', q.topic);

  // Question
  setEl('quiz-question-text', q.question);
  setEl('quiz-context', q.context);

  // Options
  const optionsEl = document.getElementById('quiz-options');
  if (optionsEl) {
    optionsEl.innerHTML = q.options.map(opt => `
      <button
        class="option-btn${currentAns && currentAns.optionId === opt.id ? ' selected' : ''}"
        data-opt="${opt.id}"
        onclick="selectOption('${opt.id}')"
        aria-label="Option ${opt.id.toUpperCase()}: ${escHtml(opt.text)}"
      >
        <span class="option-letter">${opt.id.toUpperCase()}</span>
        <span>${escHtml(opt.text)}</span>
      </button>
    `).join('');
  }

  // Weighting chips
  const currentWeight = currentAns?.weight || 1;
  const weightsEl = document.getElementById('quiz-weights');
  if (weightsEl) {
    weightsEl.innerHTML = [
      { label: 'Normal', value: 1 },
      { label: '×2 Wichtig', value: 2 },
      { label: '×3 Sehr wichtig', value: 3 },
    ].map(w => `
      <button
        class="weight-chip${currentWeight === w.value ? ' active' : ''}"
        onclick="setWeight(${w.value})"
        aria-label="Gewichtung ${w.label}"
      >${w.label}</button>
    `).join('');
  }

  // Navigation
  updateNavButtons();
}

function selectOption(optionId) {
  const qIdx = STATE.activeQuestionIndices[STATE.currentQ];
  const existingWeight = STATE.answers[qIdx]?.weight || 1;
  STATE.answers[qIdx] = {
    questionId: STATE.moduleData.questions[qIdx].id,
    optionId,
    weight: existingWeight,
  };
  renderQuizQuestion();
}

function setWeight(value) {
  const qIdx = STATE.activeQuestionIndices[STATE.currentQ];
  if (STATE.answers[qIdx]) {
    STATE.answers[qIdx].weight = value;
  } else {
    // Weight set before answering – remember it
    STATE.answers[qIdx] = { questionId: null, optionId: null, weight: value };
  }
  // Re-render weight chips only
  const weightsEl = document.getElementById('quiz-weights');
  if (weightsEl) {
    [1, 2, 3].forEach((v, i) => {
      const chip = weightsEl.children[i];
      if (chip) {
        chip.classList.toggle('active', v === value);
      }
    });
  }
}

function skipQuestion() {
  const qIdx = STATE.activeQuestionIndices[STATE.currentQ];
  STATE.answers[qIdx] = null; // explicitly skipped
  goNext();
}

function goPrev() {
  if (STATE.currentQ > 0) {
    STATE.currentQ--;
    renderQuizQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goNext() {
  const { currentQ, activeQuestionIndices } = STATE;
  const total = activeQuestionIndices.length;

  if (currentQ < total - 1) {
    STATE.currentQ++;
    renderQuizQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Last question – go to results
    showResults();
  }
}

function updateNavButtons() {
  const { currentQ, activeQuestionIndices, answers } = STATE;
  const total = activeQuestionIndices.length;
  const qIdx = activeQuestionIndices[currentQ];
  const hasAnswer = answers[qIdx] !== null && answers[qIdx]?.optionId !== null;

  const backBtn = document.getElementById('btn-back');
  const nextBtn = document.getElementById('btn-next');
  const nextLabel = document.getElementById('btn-next-label');

  if (backBtn) backBtn.style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  if (nextBtn) {
    nextBtn.disabled = !hasAnswer;
    if (nextLabel) nextLabel.textContent = currentQ === total - 1 ? 'Ergebnis anzeigen' : 'Weiter →';
  }
}

// =============================================================================
// SECTION: RENDER – Screen 3 (Results)
// =============================================================================
function showResults() {
  STATE.scores = calcScores();
  renderResults();
  showScreen('screen-results');
}

function renderResults() {
  const scores = STATE.scores;
  const sorted = getSortedParties(scores);

  renderResultsHeader();
  renderMatchBars(sorted, scores);
  renderThematicAccordion();
  renderSourcesAccordion(sorted);
}

function renderResultsHeader() {
  const el = document.getElementById('results-module-name');
  if (el) el.textContent = STATE.moduleData.title;
}

function renderMatchBars(sorted, scores) {
  const container = document.getElementById('results-match-bars');
  if (!container) return;

  container.innerHTML = sorted.map((party, i) => {
    const pct = scores[party.id] || 0;
    const isBest = i === 0;
    return `
      <div class="match-row">
        <div class="match-party-name" onclick="scrollToSource('${party.id}')">
          <span class="match-dot" style="background:${party.color}"></span>
          ${escHtml(party.name)}
        </div>
        <div class="match-bar-wrap">
          <div
            class="match-bar-fill"
            style="color:${party.color}"
            data-target="${pct}"
          ></div>
        </div>
        <div class="match-pct">${pct}%</div>
        ${isBest ? `<div class="match-badge-best">✦ Bestes Match</div>` : ''}
      </div>
    `;
  }).join('');

  // Animate bars after render
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.querySelectorAll('.match-bar-fill').forEach(bar => {
        const target = parseInt(bar.dataset.target, 10);
        bar.style.width = target + '%';
      });
    });
  });
}

function renderThematicAccordion() {
  const container = document.getElementById('results-thematic');
  if (!container) return;

  const { moduleData, answers, activeQuestionIndices } = STATE;

  // Only show questions that were active (in selected topics)
  container.innerHTML = activeQuestionIndices.map(idx => {
    const q = moduleData.questions[idx];
    const ans = answers[idx];
    const answeredOpt = ans?.optionId ? q.options.find(o => o.id === ans.optionId) : null;
    const partyChips = buildPartyChips(q, ans);

    return `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-header-left">
            <span class="topic-badge" style="margin:0">${escHtml(q.topic)}</span>
            <span class="accordion-topic">${escHtml(q.question)}</span>
          </div>
          <span class="accordion-chevron">▼</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-content">
            <div class="breakdown-row">
              <div class="breakdown-question">${escHtml(q.question)}</div>
              ${answeredOpt
                ? `<div class="breakdown-answer-mine">✓ Ihre Antwort: <em>${escHtml(answeredOpt.text)}</em></div>`
                : `<div class="breakdown-answer-mine" style="color:var(--text-3)">— Übersprungen</div>`
              }
              <div class="breakdown-parties-row">${partyChips}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function buildPartyChips(q, ans) {
  if (!ans?.optionId) {
    return STATE.moduleData.parties.map(p =>
      `<span class="breakdown-party-chip no-data">
        <span class="party-dot" style="background:${p.color};width:7px;height:7px"></span>
        ${escHtml(p.name)} –
      </span>`
    ).join('');
  }

  return STATE.moduleData.parties.map(p => {
    const partyScore = q.scores[p.id]?.[ans.optionId] ?? 0;
    let cls, icon;
    if (partyScore >= 1) { cls = 'match'; icon = '✓'; }
    else if (partyScore === 0) { cls = 'partial'; icon = '–'; }
    else { cls = 'oppose'; icon = '✗'; }
    return `
      <span class="breakdown-party-chip ${cls}">
        <span class="party-dot" style="background:${p.color};width:7px;height:7px"></span>
        ${icon} ${escHtml(p.name)}
      </span>
    `;
  }).join('');
}

function renderSourcesAccordion(sorted) {
  const container = document.getElementById('results-sources');
  if (!container) return;

  const { activeQuestionIndices } = STATE;

  container.innerHTML = sorted.map(party => {
    const partyId = party.id;
    const sourceCards = activeQuestionIndices.map(idx => {
      const q = STATE.moduleData.questions[idx];
      const src = q.sources[partyId];
      if (!src) return '';
      return `
        <div class="source-card" style="border-left-color:${party.color}">
          <div class="source-card-header">
            <span class="party-dot" style="background:${party.color}"></span>
            <span class="source-card-party">${escHtml(q.topic)}: ${escHtml(q.question.substring(0, 60))}${q.question.length > 60 ? '…' : ''}</span>
          </div>
          <div class="source-card-text">${escHtml(src.text)}</div>
          ${src.url && src.url !== '#'
            ? `<a class="source-card-link" href="${escHtml(src.url)}" target="_blank" rel="noopener noreferrer">
                Quelle ansehen ↗
              </a>`
            : `<span style="font-size:0.75rem;color:var(--text-3)">Keine URL verfügbar</span>`
          }
        </div>
      `;
    }).join('');

    const matchPct = STATE.scores[partyId] || 0;

    return `
      <div class="accordion-item" id="source-${partyId}">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-header-left">
            <span class="party-dot" style="background:${party.color}"></span>
            <span class="accordion-topic">${escHtml(party.name)}</span>
            <span style="font-size:0.78rem;color:var(--text-3);margin-left:auto">${matchPct}% Match</span>
          </div>
          <span class="accordion-chevron">▼</span>
        </button>
        <div class="accordion-body">
          <div class="accordion-content">
            ${sourceCards}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// SECTION: UI Utilities
// =============================================================================

function toggleAccordion(headerBtn) {
  const item = headerBtn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  item.classList.toggle('open', !isOpen);
}

function scrollToSource(partyId) {
  const el = document.getElementById('source-' + partyId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Auto-open
    if (!el.classList.contains('open')) {
      const header = el.querySelector('.accordion-header');
      if (header) toggleAccordion(header);
    }
  }
}

function resetToStart() {
  STATE.currentModule = null;
  STATE.moduleData = null;
  STATE.currentQ = 0;
  STATE.activeQuestionIndices = [];
  STATE.selectedTopics = null;
  STATE.answers = [];
  STATE.scores = {};
  showScreen('screen-start');
}

function restartModule() {
  if (STATE.currentModule) {
    startModule(STATE.currentModule);
  }
}

// =============================================================================
// SECTION: DOM helpers
// =============================================================================

function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// =============================================================================
// SECTION: INIT
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderStart();
  showScreen('screen-start');
});
