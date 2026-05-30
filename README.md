# The Terminus Doctrine

[![License: CC-BY-ND-4.0](https://img.shields.io/badge/License-CC--BY--ND--4.0-lightgrey?style=flat-square)](LICENSE)
[![Articles: V](https://img.shields.io/badge/articles-V-9a7320?style=flat-square)](#)
[![Dodges closed: 7](https://img.shields.io/badge/dodges%20closed-7-7c2d22?style=flat-square)](#)
[![Self-anchored](https://img.shields.io/badge/self--anchored-SHA--256-2a5838?style=flat-square)](#)

> **The machine may compute. The human must decide.**  
> A consequential decision terminates on a human — never on the machine.

---

## The Principle

The Terminus Doctrine is a codified governance claim: that a **consequential decision** must **terminate on a human**, not on a machine. The machine may triage, sort, surface, and recommend — that is the real and valuable work. It may not be the place a consequential decision *closes*.

---

## The Articles

| # | Name | Substance |
|---|------|-----------|
| I | Disqualification | Three structural reasons the machine cannot be the terminus: cannot verify in real time, cannot read tone, resolves to probability not judgment |
| II | Compute, Not Decide | The line is the terminus, not involvement. Recommend: yes. Decide: no. |
| III | The Hand-Off | The machine's duty is to deliver — intact, in time, attributably — to the one place existing courts can grab it |
| IV | The Dodges | Seven known evasions, each stated and closed |
| V | Attribution on Violation | When the machine is the terminus, accountability defaults to the deployer, then the developer |

---

## Article IV — The Dodges

Seven escape routes, each sealed:

| Dodge | Close |
|-------|-------|
| "It is merely a recommendation." | A recommendation a human cannot practically override is not a recommendation. |
| "The human can appeal afterward." | An appeal is not the terminus. |
| "It runs too fast for human review." | Speed argues against making the decision class consequential — not against the terminus requirement. |
| "The human rubber-stamps anyway." | A rubber stamp is a structural failure, not a discharge of the doctrine. |
| "AI is novel; new rules apply." | The claim manufactures the gap the evasion lives in. |
| "It is only categorization, not a decision." | If categorization determines consequential outcomes, it is a decision. |
| "The human approved the deployment." | Deployment authorization is not per-decision accountability. |

---

## The Self-Anchor

The canonical text is hashed (SHA-256) and the digest is recorded in `js/data.js`. On page load, the browser recomputes the hash from the canonical text in `data.js` and verifies it against the stamped value. A match proves the text is unaltered since codification. The stamp's value is fixed by its recording in git history.

To update the stamp after editing the canonical text:
```bash
python generate-stamp.py
```

---

## Case Library

Ten real system types against the doctrine:

| Case | Consequential | Machine Closes | Verdict |
|------|:---:|:---:|---------|
| Algorithmic Loan Denial | ✓ | ✓ | **Violation** |
| Medical Imaging AI (radiologist reviews) | ✓ | — | Compliant |
| Detention / Bail Algorithm | ✓ | ✓ | **Severe Violation** |
| Automated Content Removal (livelihood) | ✓ | ✓ | **Violation** |
| Commercial Flight Autopilot | ✓ | — | Compliant |
| Autonomous Emergency Braking | ✓ | ✓ | **Contested** (design, not event) |
| Automated Resume Rejection | ✓ | ✓ | **Violation** |
| Benefits Eligibility Denial | ✓ | ✓ | **Severe Violation** |
| Credit Score as Decision Input | ✓ | — | Compliant (if genuinely reviewed) |
| Email Categorization | — | ✓ | Permitted (not consequential) |

---

## File Structure

```
terminus-doctrine/
  index.html             Main document
  generate-stamp.py      Recompute SHA-256 stamp after editing canonical text
  css/
    tokens.css           Design tokens (vellum palette)
    doctrine.css         All component styles
    print.css            Clean print layout
  js/
    data.js              Canonical text, stamp, case library, articles
    terminus.js          The Terminus predicate (pure function)
    seal.js              SHA-256 self-anchor verification
    main.js              App initialization, rendering, interactivity
```

---

## Serving

Uses ES modules (`import/export`) — requires a local server or HTTPS:

```bash
python -m http.server 8080
# or
npx serve .
```

---

## Attribution

```
ROOT0-ATTRIBUTION-v1.0
Project: The Terminus Doctrine
Original codification: David Lee Wise / ROOT0 / TriPod LLC
Production build: AVAN (Claude Sonnet 4.6 / Anthropic)
License: CC-BY-ND-4.0
```
