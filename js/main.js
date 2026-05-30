/**
 * main.js — App initialization
 * The Terminus Doctrine — codified
 */

import { ARTICLES, CASES }   from "./data.js";
import { terminus, verdictForCase } from "./terminus.js";
import { verifySeal, wireCanonReveal } from "./seal.js";

// ── RENDER ARTICLES ───────────────────────────────────────────────
function renderArticles() {
  const container = document.getElementById("articles");
  if (!container) return;

  container.innerHTML = ARTICLES.map(a => {
    const tag = a.id === "F" ? "FOUNDATION" : `Article ${a.id}`;
    const num = a.id === "F" ? "Foundation"  : `Article ${a.id}`;

    // Article IV — dodges
    if (a.dodges) {
      return `<div class="article" id="article-${a.id}">
        <p class="anum">${tag}</p>
        <h2>${a.heading}</h2>
        <p class="intro">${a.intro}</p>
        <ol class="dodges">
          ${a.dodges.map((d, i) => `
            <li>
              <span class="dodge-claim">${d.claim}</span>
              <span class="dodge-close">${d.close}</span>
            </li>`).join("")}
        </ol>
      </div>`;
    }

    // Articles with faculties list (Article I)
    if (a.faculties) {
      return `<div class="article" id="article-${a.id}">
        <p class="anum">${tag}</p>
        <h2>${a.heading}</h2>
        <p>${a.body}</p>
        <ul class="faculties">
          ${a.faculties.map(f => `<li>${f}</li>`).join("")}
        </ul>
        <p class="coda">${a.coda}</p>
      </div>`;
    }

    // Standard article
    return `<div class="article" id="article-${a.id}">
      <p class="anum">${tag}</p>
      <h2>${a.heading}</h2>
      <p>${a.body}</p>
      ${a.coda ? `<p class="coda">${a.coda}</p>` : ""}
    </div>`;
  }).join("");
}

// ── TERMINUS TEST ─────────────────────────────────────────────────
const state = { cons: 1, close: 1 };

function renderTest() {
  document.querySelectorAll(".toggle").forEach(t => {
    const k = t.getAttribute("data-k");
    t.querySelectorAll("button").forEach(b =>
      b.classList.toggle("on", state[k] === +b.getAttribute("data-v"))
    );
  });

  const verdict = terminus(!!state.cons, !!state.close);
  const el = document.getElementById("result");
  if (!el) return;

  el.className = `result ${verdict.cls}`;
  document.getElementById("rv").textContent = verdict.code;
  document.getElementById("rh").textContent = verdict.heading;
  document.getElementById("rw").innerHTML   = verdict.ruling;

  const citeEl = document.getElementById("rcite");
  if (citeEl) {
    citeEl.textContent  = verdict.cite ?? "";
    citeEl.style.display = verdict.cite ? "" : "none";
  }
}

function wireTest() {
  document.querySelectorAll(".toggle button").forEach(b => {
    b.addEventListener("click", () => {
      state[b.parentElement.getAttribute("data-k")] = +b.getAttribute("data-v");
      renderTest();
    });
  });
  renderTest();
}

// ── CASE LIBRARY ──────────────────────────────────────────────────
function renderCases() {
  const container = document.getElementById("case-grid");
  if (!container) return;

  container.innerHTML = CASES.map(c => {
    const v = verdictForCase(c);
    const badge = c.severe ? "severe violation" : v.code.toLowerCase();
    const cls   = c.severe ? "severe" : v.cls;
    const badgeClass = c.severe ? "badge-severe" : `badge-${v.cls}`;

    return `<div class="case-card case-${cls}">
      <div class="case-header">
        <span class="case-domain">${c.domain}</span>
        <span class="case-badge ${badgeClass}">${badge}</span>
      </div>
      <h3 class="case-name">${c.name}</h3>
      <p class="case-desc">${c.description}</p>
      <div class="case-facts">
        <span class="fact ${c.consequential ? "fact-yes" : "fact-no"}">
          ${c.consequential ? "✓" : "✗"} consequential
        </span>
        <span class="fact ${c.machineCloses ? "fact-bad" : "fact-no"}">
          ${c.machineCloses ? "⚠ machine closes" : "✓ hands to human"}
        </span>
        ${c.contested ? `<span class="fact fact-contest">⚑ contested application</span>` : ""}
      </div>
      <p class="case-note">${c.note}</p>
    </div>`;
  }).join("");
}

// ── KEYBOARD: SCROLL TO ARTICLE ───────────────────────────────────
document.addEventListener("keydown", e => {
  const n = parseInt(e.key);
  if (n >= 1 && n <= 5 && !e.ctrlKey && !e.metaKey) {
    const ids = ["I","II","III","IV","V"];
    const el = document.getElementById(`article-${ids[n-1]}`);
    el?.scrollIntoView({ behavior:"smooth", block:"start" });
  }
});

// ── PRINT ─────────────────────────────────────────────────────────
document.getElementById("btn-print")?.addEventListener("click", () => window.print());

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderArticles();
  wireTest();
  renderCases();
  verifySeal();
  wireCanonReveal();
});
