"""
generate-stamp.py — Compute SHA-256 of the canonical Terminus Doctrine text
and write the stamp into js/data.js.

Run this whenever the CANON text changes.
The stamp is recorded in git history before distribution — that's what anchors it.

Usage: python generate-stamp.py
"""
import hashlib, re, pathlib

CANON = """THE TERMINUS DOCTRINE — codification

THE PRINCIPLE
The machine may compute. The human must decide.
A consequential decision terminates on a human — never on the machine.

ARTICLE I — DISQUALIFICATION
The machine is not equipped to be the terminus of a consequential decision.
 (a) It cannot verify in real time — it acts on a frozen model with no live channel to the world.
 (b) It cannot read tone — it holds the words, not the register; the plea and the routine request
     are the same token-stream at the same confidence.
 (c) It resolves to a probability, not a judgment — an output that sounds like a decision and is a
     distribution wearing a decision's clothes.
These are not limitations to be engineered away. They are a structural disqualification: deciding
requires faculties the machine does not have, so the decision was never legitimately the machine's.

ARTICLE II — COMPUTE, NOT DECIDE
The line is the terminus, not involvement. The machine may triage, sort, surface, and recommend —
that is the real and valuable work. It may not be the place a consequential decision closes.
Recommend: yes. Decide: no. A system that merely assists is permitted; a system that is the terminus
of a consequential call is not, regardless of what it is named.

ARTICLE III — THE HAND-OFF
The machine's duty is to deliver the consequential decision to a human — intact, in time, and
attributably. There, the accountability systems that already govern human decisions take over: a
named human decides, owns it, and is held to it by the same machinery that governs every human who
decides badly. This structure is not a new court. It is the delivery that guarantees the decision
reaches the one place the existing courts can grab it.

ARTICLE IV — THE DODGES
Seven known evasions. Each is stated; each is closed.
 (a) "It is merely a recommendation." A recommendation a human cannot practically override is not a
     recommendation. The test is not what the system is named; it is whether a human terminus exists
     with genuine authority to differ.
 (b) "The human can appeal afterward." An appeal is not the terminus. The terminus is the moment the
     decision closes, not a subsequent opportunity to contest it. If the machine closed it, the
     hand-off was missed.
 (c) "It runs too fast for human review." Speed is an argument against making the class of
     decisions consequential without a terminus structure — not an argument against the terminus
     requirement itself.
 (d) "The human rubber-stamps anyway." A rubber stamp is a structural failure, not a discharge of
     the doctrine. The remedy is a human who actually reviews, not abolishing the requirement.
 (e) "AI is novel; new rules apply." The claim that AI needs wholly new governance manufactures the
     gap that evasion lives in. The tool is novel; the decision's consequences are not.
 (f) "It is only categorization, not a decision." If the categorization determines consequential
     outcomes — loan denied, person detained, benefit withheld — it is a decision, regardless of
     what it is called.
 (g) "The human approved the deployment." Deployment authorization is not per-decision
     accountability. Approving the system is not the same as being the terminus of the individual
     decisions it makes.

ARTICLE V — ATTRIBUTION ON VIOLATION
When the machine is found to be the terminus of a consequential decision, accountability defaults:
first to the deploying organization; absent an identifiable deployer, to the developer. The existing
liability framework applies as if a human had made the decision. The void left by removing the human
terminus is filled by the deploying organization's full accountability — not by the machine.

FOUNDATION
This is not novel governance. It is the refusal to exempt automated processes from the accountability
that already governs bounded, human-authored programs — extended at two seams only: nondeterminism
(answered by determinism-or-a-human-apex) and scale (answered by audit and appeal). The claim that
AI needs wholly new governance is itself the dodge; it manufactures the gap the evasion lives in.

THE MACHINE COMPUTES. THE HUMAN ANSWERS.
"""

stamp = hashlib.sha256(CANON.encode("utf-8")).hexdigest()
print(f"CANON SHA-256: {stamp}")

# Inject into js/data.js
path = pathlib.Path("js/data.js")
txt  = path.read_text(encoding="utf-8")
txt  = re.sub(r'export const STAMP = ".*?"', f'export const STAMP = "{stamp}"', txt)
path.write_text(txt, encoding="utf-8")
print(f"Stamped js/data.js — first 16 chars: {stamp[:16]}…")
