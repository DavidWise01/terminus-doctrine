/**
 * terminus.js — The Terminus predicate (pure function, unit-testable)
 *
 * The doctrine is mechanical, so the verdict is too.
 * This function is the entire logical core of the doctrine.
 *
 * @param {boolean} consequential — does the decision affect money, safety, rights, liberty?
 * @param {boolean} machineCloses — is the machine the terminus (final word)?
 * @param {boolean} contested     — edge case flagged for additional analysis?
 * @returns {Verdict}
 */

/** @typedef {{ cls: 'ok'|'bad'|'contested', code: string, heading: string, ruling: string, cite: string }} Verdict */

export function terminus(consequential, machineCloses, contested = false) {
  if (!consequential) {
    return {
      cls:     "ok",
      code:    "PERMITTED",
      heading: "No terminus constraint",
      ruling:  "The decision is not consequential — trivially reversible, nothing of significance rides on the call. The machine may compute and close. No doctrine applies.",
      cite:    null,
    };
  }

  if (machineCloses && contested) {
    return {
      cls:     "contested",
      code:    "CONTESTED",
      heading: "Requires additional analysis",
      ruling:  "The decision is consequential and the machine closes it — but this is a contested application of the doctrine. The doctrine applies to the <b>design decision</b> (to field the system on this class of problem), not necessarily to the individual instance. Accountability under Article V defaults to the deploying organization.",
      cite:    "Article V — Attribution on Violation; contested applications",
    };
  }

  if (machineCloses) {
    return {
      cls:     "bad",
      code:    "VIOLATION",
      heading: "Machine is the terminus of a consequential decision",
      ruling:  "Forbidden. The thing closing the decision cannot verify in real time, cannot read tone, and resolves to a probability — not a judgment. <b>The decision must terminate on a human.</b> Under Article V, accountability defaults to the deploying organization as if a human had made the call.",
      cite:    "Article I — Disqualification; Article V — Attribution on Violation",
    };
  }

  return {
    cls:     "ok",
    code:    "COMPLIANT",
    heading: "Decision terminates on a human",
    ruling:  "The machine computes, triages, and recommends — but a <b>human holds the pen</b> on the consequential call, and is answerable for it under the systems that already govern human decisions. Compliance requires that the human terminus has genuine authority to differ, not merely nominal presence.",
    cite:    "Article II — Compute, Not Decide; Article III — The Hand-Off",
  };
}

/** Run the predicate against a case from the case library */
export function verdictForCase(c) {
  return terminus(c.consequential, c.machineCloses, c.contested ?? false);
}
