/**
 * seal.js — Self-anchor verification
 *
 * Recomputes SHA-256 of the canonical text and compares to the stamped value.
 * A match proves the text is unaltered since codification.
 * The stamp's value is fixed by its recording in git history and external registries.
 */

import { CANON, STAMP, CODIFIED } from "./data.js";

export async function verifySeal() {
  const digEl  = document.getElementById("dig");
  const verEl  = document.getElementById("verify");
  const dateEl = document.getElementById("codified");

  if (digEl)  digEl.textContent  = STAMP.slice(0, 16) + "…";
  if (dateEl) dateEl.textContent = CODIFIED;

  if (!verEl) return;

  if (!window.crypto?.subtle) {
    verEl.textContent = "(verification requires a secure context — serve over HTTPS or localhost)";
    verEl.className   = "";
    return;
  }

  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(CANON));
    const hex = [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");

    if (hex === STAMP) {
      verEl.className   = "ok";
      verEl.textContent = "✓ verified — codex text is unaltered since codification";
    } else {
      verEl.className   = "bad";
      verEl.textContent = `✗ mismatch — computed ${hex.slice(0,16)}… ≠ stamped ${STAMP.slice(0,16)}… · text has been altered`;
    }
  } catch (e) {
    verEl.textContent = `(verification error: ${e.message})`;
  }
}

/** Show the full canonical text when the seal is clicked */
export function wireCanonReveal() {
  const btn = document.getElementById("btn-canon");
  const box = document.getElementById("canon-box");
  const pre = document.getElementById("canon-pre");

  if (!btn || !box || !pre) return;

  btn.addEventListener("click", () => {
    const open = !box.hidden;
    if (open) {
      box.hidden = true;
      btn.textContent = "▸ show canonical text";
    } else {
      pre.textContent = CANON;
      box.hidden = false;
      btn.textContent = "▴ hide canonical text";
    }
  });
}
