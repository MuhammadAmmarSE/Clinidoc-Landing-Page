# CliniDoc Landing Page — Milestone Roadmap

This is the running ground-truth for the landing page project. Each milestone is defined
milestone-by-milestone in conversation; this file tracks what's locked, what's defined but
not yet built, and where the artifact lives. Update it as milestones land.

Status legend: 🟢 Locked & built · 🟡 Defined, not yet built · 🔵 Conditional (build only if criteria met)

| # | Milestone | Status | Artifact |
|---|---|---|---|
| 00 | Product & Brand Foundation | 🟢 Re-locked (3rd pass) | [Link](https://claude.ai/code/artifact/a7265915-a774-4b78-9098-2c368d37585d) |
| 01 | CliniDoc Design System | 🟢 Re-locked (2nd pass) | [Link](https://claude.ai/code/artifact/50a9851f-4114-4495-b27c-bf81207d1a89) |
| 02 | Homepage Blueprint | 🟢 Re-locked (2nd pass) | [Link](https://claude.ai/code/artifact/eaf3a73e-8b4c-4e55-a2cd-1f7baf6bb704) |
| 03 | Hero | 🟢 Re-locked — absorbs old M04 | [Link](https://claude.ai/code/artifact/e4a253da-e8ea-4893-ac6b-e878e09e3b80) |
| 04 | Connected Patient Journey Experience | 🟢 | [Link](https://claude.ai/code/artifact/0b638f28-3076-4809-b2c6-e16e898ae4b4) — interactive 9-stage journey |
| 05 | Care Team Experience | 🟢 | [Link](https://claude.ai/code/artifact/16a06c63-8006-4d56-9d9d-041f2ac27e57) — interactive workspace |
| 06 | Patient Experience | 🟢 | [Link](https://claude.ai/code/artifact/359c7d5a-dabf-4831-b03a-01032c4508c1) — calm patient portal |
| 07 | Assessment Intelligence | 🟢 | [Link](https://claude.ai/code/artifact/4f964315-8277-4748-98e2-5072826069b3) — interactive Question→Condition→Threshold→Specifire→Characterization→Note chain |
| 08 | Referrals, Scheduling & First Contact | 🟢 | [Link](https://claude.ai/code/artifact/c8d6b3e6-d81b-4b6b-8fa2-aaaf3a2b9e3d) — interactive Referral→Review→Patient→Schedule→Appointment, real date/time picker |
| 09 | Clinical Record & Documentation | 🟢 | [Link](https://claude.ai/code/artifact/14af0df4-6047-469e-a327-01de610213d0) — fixed patient header, 7-view record (Overview/Timeline/Assessments/Medications/Documents/Appointments/Messages), accordion Timeline, convergence hub diagram |
| 10 | Security, Privacy & Controlled Access Experience | 🟢 | [Link](https://claude.ai/code/artifact/eee49fa9-308d-4004-8fc6-40522b08d05f) — interactive sign-in→2FA→trusted device→session→audit walkthrough, functional session revoke / device remove, Care Team + Patient perspectives |
| 11 | Configurable Clinical Programs | 🟢 | [Link](https://claude.ai/code/artifact/f2ef0ea6-9ccd-48f4-b2dc-9fb01785fd37) — interactive Builder/Runtime toggle, real Questions/Conditions/Flow/Characterizations tabs, Specifires + Threshold + dynamic note callbacks to M07 |
| ~~11~~ | ~~Appointments & Scheduling~~ | Superseded by new M08 | — |
| ~~12~~ | ~~Referral Journey~~ | Superseded by new M08 | — |
| ~~13~~ | ~~Security & Trust~~ | Superseded by new M10 | — |
| 12 | Connected Care & Patient Communication | 🟢 | [Link](https://claude.ai/code/artifact/99bbdf6d-169f-43ad-81dd-76ed6e37d695) — activity feed doubling as message-detail context, Patient/Staff perspective toggle with working type filters, functional "mark as read" and click-triggered connection animation |
| 13 | Care Coordination & Referral Network | 🟡 defined | Not yet built — Referral Network visualization, coordination board (New→Review→Scheduled→Care), external provider, connects to M08/M09/M10 |
| 14 | Patient Portal Experience | 🟡 defined | Not yet built — full portal shell (Home/Appointments/Assessments/Records/Medications/Documents/Messages/Security), "What's Next?" card, empty/loading/error states |
| 15 | Administration, Configuration & Operational Control | 🟡 defined | Not yet built — Users/Roles/Permission matrix, Provider + Schedule Template → Default Schedule → Slots chain, Pending Approvals two-phase review, Calendar |
| 16 | Clinical Documentation & AI Scribe | 🟡 defined — needs verification | Not yet built — encounter workspace + "AI Scribe" assisted drafting with mandatory "AI-assisted, clinician-led" labeling. **I can't independently confirm an AI Scribe feature from the CLAUDE.md docs in this session** — see Open items. |
| 17 | Clinical Intelligence & Insights | 🟡 defined | Not yet built — characterization trend charts, assessment/visit history, timeline↔trends toggle, explicitly non-predictive framing |
| 18 | Platform Architecture & Infrastructure | 🟡 defined | Not yet built — layered architecture diagram, request lifecycle, tech stack reveal (matches backend CLAUDE.md stack exactly) |
| 19 | Trust, Privacy, Security & Enterprise Readiness | 🟡 defined | Not yet built — reprises M10's security controls as an enterprise-credibility section; explicitly no compliance-badge claims (consistent with M10, not M00's 3rd pass — see Open items) |
| 14 | "One Patient. One Story." | 🟡 | Core narrative already locked in M00; dedicated section still to build |
| 15 | Interactive Product Showcase (Clinician / Admin / Patient toggle) | 🟡 | — |
| 16 | AI / Intelligence Layer | 🔵 | Only if real AI capability exists — otherwise "coming intelligence capabilities" |
| 17 | Integrations / Ecosystem | 🔵 | Only confirmed integrations |
| 18 | Proof & Trust | 🔵 | Only real evidence — no fabricated stats/testimonials/logos |
| 19 | Conversion Experience (multi-path CTA) | 🟡 | — |
| 20 | Final Ecosystem Integration (no dead buttons/routes) | 🟡 | — |
| 21 | Production Hardening (a11y, perf, SEO, security, monitoring) | 🟡 | — |
| 22 | Post-Launch Intelligence (analytics plan) | 🟡 | — |

## Resolved decisions — current as of the 3rd M00 pass

Milestones 00–03 have now been revised twice. Both times reversed a prior decision.
**These are the current, standing answers** — earlier answers in the conversation history
on these two points are superseded.

1. **Compliance claims — REVERSED AGAIN by Milestone 10 (4th pass). Currently: no HIPAA /
   SOC 2 / ISO / zero-trust / military-grade claims anywhere**, "unless separately verified
   and approved." M10's brief states this explicitly and repeatedly (hero copy rules +
   §37 Compliance Claims), directly contradicting the 3rd-pass answer above, which had
   said the opposite — safe to state HIPAA/SOC 2 as fact. I did not silently pick a side:
   M10's artifact was built with zero compliance claims per its own explicit instruction,
   and this reversal is flagged in that artifact's documentation section too. **This is now
   the two documents disagreeing with each other** — M00 (3rd pass, still live at its own
   URL) says compliance is confirmed fact; M10 says the opposite. Needs a decision from you
   on which stands, and if HIPAA/SOC2 language should stand, M00 should be reverted to
   match. Until resolved, treat "no compliance claims" (M10's version) as the safer default
   for any further milestone. Still unconfirmed and still not to be invented: exact SOC 2
   report type/date, badge assets, BAA process copy.

2. **Positioning — broad, not behavioral-health-exclusive.** CliniDoc is positioned as a
   broad connected clinical care platform, differentiated from clindoc.ai's narrow AI-scribe
   focus by breadth (referrals, scheduling, assessments, records, medications, documents,
   messaging, security, RBAC). The real logo's "Behavioral Health" tagline is not the
   category claim — kept only as illustrative proof-point flavor (severity/frequency/
   duration/distress scoring, episode tracking) where it's already accurate. (An earlier
   pass had adopted behavioral health as the explicit vertical — superseded.)

3. **Three-phrase brand system**, each with a distinct job:
   - Eyebrow: "Clinical care, connected."
   - Primary headline: "One connected platform for the complete patient journey."
   - Core narrative: "One patient. One connected story."

4. **CTAs**: "Request a Demo" (primary) / "Explore CliniDoc" (secondary) — replaces
   earlier "Book a Demo" / "See How It Works" wording.

5. **Never call CliniDoc an EHR** unless explicitly approved by product/business.

## Numbering note

Milestones 04–07 have been fully renumbered and rebuilt in this pass (Connected Journey,
Care Team, Patient Experience, Assessment Intelligence), each superseding same-topic
content from the earlier five-section batch. What's left of that batch:

- **Everything Connected** (hub diagram) — [old link](https://claude.ai/code/artifact/f04e052f-1078-4a1f-9a54-f377003a0eb5) —
  no new-numbered replacement yet, carried over as-is.
- **Clinical Notes** — superseded by Milestone 07's dynamic note + @ variable demo, which
  covers the same ground more fully (real interaction, not a looping animation).
- Old milestones **11 (Appointments & Scheduling)** and **12 (Referral Journey)** were
  superseded by **Milestone 08 (Referrals, Scheduling & First Contact)** — resolved.
- **Milestone 09 (Clinical Record & Documentation)** is now built — no old-numbered
  collision for this one; it's new ground (old batch never had a dedicated record/timeline
  section).
- **Milestone 10 (Security, Privacy & Controlled Access Experience)** is now built and
  supersedes old row 13 (Security & Trust), as predicted — resolved.
- New **Milestone 11 (Configurable Clinical Programs)** is now built, reusing the number
  "11" already struck through above for the old "Appointments & Scheduling" batch item —
  resolved the same way as before.
- **Milestones 12–19 arrived in one large batch** (all sent in a single message, several
  with a "Worked for Ns" marker suggesting they were drafted in another session and pasted
  in). Logged all eight as 🟡 defined-not-built rows above, in the order sent. Building
  continues one at a time per the established cadence — M11 first (built this pass), then
  12 onward on request.
- The batch's intro said "Below are Milestones 18, 19 **and 20**, completing the roadmap,"
  but only 18 and 19 were actually included in the text — the M20 spec (Final Landing Page
  Assembly, Conversion & Launch) arrived separately afterward.
- **M20 explicitly reuses M12/M14/M15/M16/M17/M19 content** ("Use Milestone 14," "Use
  Milestone 16," etc.), none of which were built yet when M20's spec landed. Flagged to
  you directly rather than assembling with placeholders. **Decision: build M12–19 in full
  first, M20 last; final assembly is one literal merged single-page artifact**, not a
  shell linking out to separate section artifacts. That merged file will be large once all
  19 sections are in — watching for the artifact size ceiling as each section is added.

## Open items

- **HIPAA/SOC 2 claims — M00 and M10 now disagree** (see Resolved decisions §1). Needs a
  call from you on which stands; M00 hasn't been reverted pending that answer. M19's brief
  (defined, not yet built) restates M10's "no compliance badges" position, so the disputed
  side is now 1-for-1 (M00) vs 2-for (M10, M19) — still unresolved either way without your
  explicit call.
- **Milestone 16's "AI Scribe" — can't verify from the docs I have.** The M16 brief cites a
  dedicated AI Scribe layer with "action enums" and a "mock interpreter" in the client
  source. Neither the backend nor the Program Creation `CLAUDE.md` in this session mentions
  any AI capability, Scribe or otherwise — `PatientNotes`, characterization trend
  components, and assessment/visit history are the only pieces I can confirm. Before
  building M16, I'd want to confirm the AI Scribe feature actually exists in
  `clinidoc-client` (not currently an attached repo in this session) — building an AI
  feature that isn't real would violate the standing "never invent AI capabilities" rule
  from Milestone 00.
- **No Milestone 20 spec received** despite the batch's intro promising "18, 19 and 20."
  Nothing to log yet — flagging so it isn't mistaken for an intentional gap.
- "Patient" vs. "client" terminology — system schema says patient; some behavioral-health
  practices prefer client. Flagged, not decided.
- Mobile-specific hero layout and scroll-linked transition into §04 are specified in the
  Milestone 03 brief but not built into the current mockup.
- Care-team-connection hub diagram and simplified patient timeline (Milestone 06 §15-16)
  were folded into the Patient Experience Overview panel rather than built as separate
  dedicated views, to keep the section's tab count low per its own "less density" brief.

## Brand assets

Real, vectorized CliniDoc logo (icon + lockups, color/mono/white variants) at
`assets/brand/`. Source reference image at `assets/brand/source-reference.jpg`.
Confirmed brand colors: Navy `#2C3D4F` · Blue `#6B9AD1` · Teal `#53B9B2` (sampled directly
from the logo file, see Milestone 01) — real, not placeholder tokens, regardless of how
Milestone 01's brief characterizes color-system status.
