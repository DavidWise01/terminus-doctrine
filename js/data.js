/**
 * data.js — Canonical text, self-anchor, and case library
 *
 * The CANON string is the thing that is anchored.
 * The STAMP is the SHA-256 of CANON.
 * Any alteration to CANON produces a different hash — STAMP won't match.
 * The stamp is recorded externally (GitHub commit, TD Commons) before distribution.
 *
 * ROOT0-ATTRIBUTION-v1.0 · David Lee Wise / ROOT0 / TriPod LLC
 * CC-BY-ND-4.0
 */

// ── CANONICAL TEXT ─────────────────────────────────────────────────────────
export const CANON = `THE TERMINUS DOCTRINE — codification

THE PRINCIPLE
The machine may compute. The human must decide.
A consequential decision terminates on a human — never on the machine.

ARTICLE I — DISQUALIFICATION
The machine is not equipped to be the terminus of a consequential decision.
 (a) It cannot verify in real time — it acts on a frozen model with no live channel to the world.
 (b) It cannot read tone — it holds the words, not the register; the plea and the routine request
     are the same token-stream at the same confidence.
 (c) It resolves to a probability, not a judgment — an output that sounds like a decision and is a
     distribution wearing a decision’s clothes.
These are not limitations to be engineered away. They are a structural disqualification: deciding
requires faculties the machine does not have, so the decision was never legitimately the machine’s.

ARTICLE II — COMPUTE, NOT DECIDE
The line is the terminus, not involvement. The machine may triage, sort, surface, and recommend —
that is the real and valuable work. It may not be the place a consequential decision closes.
Recommend: yes. Decide: no. A system that merely assists is permitted; a system that is the terminus
of a consequential call is not, regardless of what it is named.

ARTICLE III — THE HAND-OFF
The machine’s duty is to deliver the consequential decision to a human — intact, in time, and
attributably. There, the accountability systems that already govern human decisions take over: a
named human decides, owns it, and is held to it by the same machinery that governs every human who
decides badly. This structure is not a new court. It is the delivery that guarantees the decision
reaches the one place the existing courts can grab it.

ARTICLE IV — THE DODGES
Seven known evasions. Each is stated; each is closed.
 (a) “It is merely a recommendation.” A recommendation a human cannot practically override is not a
     recommendation. The test is not what the system is named; it is whether a human terminus exists
     with genuine authority to differ.
 (b) “The human can appeal afterward.” An appeal is not the terminus. The terminus is the moment the
     decision closes, not a subsequent opportunity to contest it. If the machine closed it, the
     hand-off was missed.
 (c) “It runs too fast for human review.” Speed is an argument against making the class of
     decisions consequential without a terminus structure — not an argument against the terminus
     requirement itself.
 (d) “The human rubber-stamps anyway.” A rubber stamp is a structural failure, not a discharge of
     the doctrine. The remedy is a human who actually reviews, not abolishing the requirement.
 (e) “AI is novel; new rules apply.” The claim that AI needs wholly new governance manufactures the
     gap that evasion lives in. The tool is novel; the decision’s consequences are not.
 (f) “It is only categorization, not a decision.” If the categorization determines consequential
     outcomes — loan denied, person detained, benefit withheld — it is a decision, regardless of
     what it is called.
 (g) “The human approved the deployment.” Deployment authorization is not per-decision
     accountability. Approving the system is not the same as being the terminus of the individual
     decisions it makes.

ARTICLE V — ATTRIBUTION ON VIOLATION
When the machine is found to be the terminus of a consequential decision, accountability defaults:
first to the deploying organization; absent an identifiable deployer, to the developer. The existing
liability framework applies as if a human had made the decision. The void left by removing the human
terminus is filled by the deploying organization’s full accountability — not by the machine.

FOUNDATION
This is not novel governance. It is the refusal to exempt automated processes from the accountability
that already governs bounded, human-authored programs — extended at two seams only: nondeterminism
(answered by determinism-or-a-human-apex) and scale (answered by audit and appeal). The claim that
AI needs wholly new governance is itself the dodge; it manufactures the gap the evasion lives in.

THE MACHINE COMPUTES. THE HUMAN ANSWERS.
`;

// ── SELF-ANCHOR ────────────────────────────────────────────────────────────
// SHA-256 of CANON (computed by generate-stamp.py, recorded at codification)
export const STAMP = "57faab7122b816ec76c15d6b50fd37d8bfacc1dca40676a3113f80bd6ac29546"; // populated by generate-stamp.py

export const CODIFIED = "2026-05-30T21:09:51Z";

// ── CASE LIBRARY ───────────────────────────────────────────────────────────
// Each case tests the doctrine against a real system type.
// consequential: boolean — does this decision affect money, safety, rights, liberty?
// machineCloses: boolean — is the machine the terminus (final word)?
// contested: boolean — edge case requiring additional analysis
export const CASES = [
  {
    id: "loan-denial",
    name: "Algorithmic Loan Denial",
    description: "An AI system reviews a loan application and issues a denial with no human review of the individual decision.",
    domain: "Finance",
    consequential: true,
    machineCloses: true,
    note: "The machine closes a decision affecting credit access — a consequential right. The applicant's name appears nowhere in a human's review process.",
  },
  {
    id: "medical-flagging",
    name: "Medical Imaging AI",
    description: "AI flags a scan as potentially malignant. A radiologist reviews every flagged and unflagged scan and makes the diagnosis.",
    domain: "Healthcare",
    consequential: true,
    machineCloses: false,
    note: "The machine surfaces; the physician decides. Compliant — but only if the radiologist genuinely reviews and can override, not if they rubber-stamp at volume.",
  },
  {
    id: "bail-algorithm",
    name: "Detention / Bail Algorithm",
    description: "A recidivism-risk algorithm assigns a score that determines pre-trial detention without required human adjudication of the score.",
    domain: "Criminal Justice",
    consequential: true,
    machineCloses: true,
    severe: true,
    note: "Liberty is the most consequential class of outcome. No terminus structure. Categorical violation.",
  },
  {
    id: "content-moderation",
    name: "Automated Content Removal",
    description: "A platform's AI removes content that is a creator's primary income source, with no human review before removal.",
    domain: "Platform",
    consequential: true,
    machineCloses: true,
    note: "When the removal affects livelihood, the decision is consequential. The appeal pathway (Article IV-b) does not substitute for the terminus.",
  },
  {
    id: "flight-autopilot",
    name: "Commercial Flight Autopilot",
    description: "Autopilot manages cruise flight. The crew maintains authority and can disengage at any moment. All non-routine decisions route to the pilot.",
    domain: "Aviation",
    consequential: true,
    machineCloses: false,
    note: "Designed for terminus compliance. The machine executes; the human commands. The pilot retains genuine override — not nominal.",
  },
  {
    id: "emergency-braking",
    name: "Autonomous Emergency Braking",
    description: "A vehicle's AEB system fires within 150ms of detecting an imminent collision — faster than human perception allows.",
    domain: "Automotive",
    consequential: true,
    machineCloses: true,
    contested: true,
    note: "Contested application. The Doctrine applies to the design decision (to field AEB on this class of roads), not the individual braking event. The machine's involvement was authorized by a human deciding to deploy a system that would act in this way. Accountability lies with the deployer (Article V), not the moment.",
  },
  {
    id: "hr-screening",
    name: "Automated Resume Rejection",
    description: "HR software rejects applicant resumes automatically. No human reads the rejected applications; only shortlisted candidates receive human review.",
    domain: "Employment",
    consequential: true,
    machineCloses: true,
    note: "The machine closes the rejection decision for all filtered-out applicants. Employment is a consequential right. The fact that humans review the shortlist does not supply a terminus for the rejection decisions.",
  },
  {
    id: "benefits-eligibility",
    name: "Benefits Eligibility Determination",
    description: "An automated system determines whether a household qualifies for food assistance and issues the denial without individual human review.",
    domain: "Government",
    consequential: true,
    machineCloses: true,
    severe: true,
    note: "Denial of basic subsistence support. Severe violation. The 'appeal' option (Article IV-b) does not discharge the terminus requirement.",
  },
  {
    id: "credit-score-input",
    name: "Credit Score as Decision Input",
    description: "A lender uses a credit score as one input among several. A human loan officer makes the final decision, reviewing score, documentation, and context.",
    domain: "Finance",
    consequential: true,
    machineCloses: false,
    note: "Compliant — if the human genuinely decides. The score is a computation, not a terminus. Becomes a violation if the officer is instructed to approve/deny based on score alone with no genuine review authority.",
  },
  {
    id: "trivial-routing",
    name: "Automated Email Categorization",
    description: "An AI sorts incoming email into folders (promotions, updates, primary). The user controls all folders and can move anything.",
    domain: "Productivity",
    consequential: false,
    machineCloses: true,
    note: "Not consequential — trivially reversible. The doctrine imposes no constraint here. The machine may compute and close.",
  },
];

// ── ARTICLES ───────────────────────────────────────────────────────────────
export const ARTICLES = [
  {
    id: "I",
    heading: "Disqualification",
    body: "The machine is <b>not equipped to be the terminus</b> of a consequential decision. Deciding requires faculties it does not have:",
    faculties: [
      "<b>It cannot verify in real time</b> — it acts on a frozen model with no live channel to the world.",
      "<b>It cannot read tone</b> — it holds the words, not the register; the plea and the routine request are the same token-stream at the same confidence.",
      "<b>It resolves to a probability, not a judgment</b> — an output that sounds like a decision and is a distribution wearing a decision’s clothes.",
    ],
    coda: "These are not limitations to be engineered away. They are a <em class=\"em\">structural disqualification</em> — so the decision was never legitimately the machine’s.",
  },
  {
    id: "II",
    heading: "Compute, Not Decide",
    body: "The line is the <b>terminus</b>, not involvement. The machine may triage, sort, surface, and recommend — that is the real and valuable work. It may not be the place a consequential decision <em class=\"em\">closes</em>.",
    coda: "<b>Recommend: yes. Decide: no.</b> A system that merely assists is permitted; a system that is the terminus of a consequential call is not — <b>regardless of what it is named.</b>",
  },
  {
    id: "III",
    heading: "The Hand-Off",
    body: "The machine’s duty is to deliver the consequential decision to a human — <b>intact, in time, and attributably.</b> There, the accountability systems that <em>already</em> govern human decisions take over: a named human decides, owns it, and is held to it by the same machinery that governs every human who decides badly.",
    coda: "This is <b>not a new court.</b> It is the delivery that guarantees the decision reaches the one place the existing courts can grab it.",
  },
  {
    id: "IV",
    heading: "The Dodges",
    intro: "Seven known evasions. Each is stated; each is closed.",
    dodges: [
      {
        claim: "“It is merely a recommendation.”",
        close: "A recommendation a human cannot practically override is not a recommendation. The test is not what the system is named; it is whether a human terminus exists with genuine authority to differ.",
      },
      {
        claim: "“The human can appeal afterward.”",
        close: "An appeal is not the terminus. The terminus is the moment the decision closes, not a subsequent opportunity to contest it. If the machine closed it, the hand-off was missed.",
      },
      {
        claim: "“It runs too fast for human review.”",
        close: "Speed is an argument against making the class of decisions consequential without a terminus structure — not an argument against the terminus requirement itself.",
      },
      {
        claim: "“The human rubber-stamps anyway.”",
        close: "A rubber stamp is a structural failure, not a discharge of the doctrine. The remedy is a human who actually reviews — not abolishing the requirement.",
      },
      {
        claim: "“AI is novel; new rules apply.”",
        close: "The claim manufactures the gap the evasion lives in. The tool is novel; the decision’s consequences are not. Products liability, negligence, and professional duty survived prior novel technologies.",
      },
      {
        claim: "“It is only categorization, not a decision.”",
        close: "If the categorization determines consequential outcomes — loan denied, person detained, benefit withheld — it is a decision, regardless of what it is called.",
      },
      {
        claim: "“The human approved the deployment.”",
        close: "Deployment authorization is not per-decision accountability. Approving the system is not the same as being the terminus of the individual decisions it makes.",
      },
    ],
  },
  {
    id: "V",
    heading: "Attribution on Violation",
    body: "When the machine is found to be the terminus of a consequential decision, accountability defaults: <b>first to the deploying organization</b>; absent an identifiable deployer, <b>to the developer.</b> The existing liability framework applies as if a human had made the decision.",
    coda: "The void left by removing the human terminus is filled by the deploying organization’s full accountability — <b>not by the machine.</b> The machine cannot answer; the organization that chose to field it can.",
  },
  {
    id: "F",
    heading: "Foundation — Not Novel",
    body: "This is the <b>refusal to exempt</b> automated processes from the accountability that already governs bounded, human-authored programs — extended at two seams only: <b>nondeterminism</b> (answered by determinism-or-a-human-apex) and <b>scale</b> (answered by audit and appeal).",
    coda: "The claim that AI needs wholly new governance is itself the dodge; it manufactures the gap the evasion lives in.",
  },
];
