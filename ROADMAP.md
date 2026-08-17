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
| 07 | Assessment Intelligence | 🟡 next | Coming — Assessment → Questions → Responses → Clinical Logic → Characterization → Clinical Notes |
| 11 | Appointments & Scheduling | 🟡 | — |
| 12 | Referral Journey | 🟡 | — |
| 13 | Security & Trust | 🟡 | Feature-level language only — see Resolved decisions |
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

1. **Compliance claims — HIPAA and SOC 2 are implemented, confirmed directly.** Safe to
   state "HIPAA compliant" and reference the SOC 2 program as fact, not just as underlying
   security features. (This reverses the previous pass's walk-back to feature-level-only
   language — third and current answer on this point; treat as settled unless told
   otherwise again.) Still unconfirmed and still not to be invented: exact SOC 2 report
   type/date, badge assets, BAA process copy.

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

Milestones 04–06 have been fully renumbered and rebuilt in this pass (Connected Journey,
Care Team, Patient Experience), each superseding same-topic content from the earlier
five-section batch. Two pieces of that batch have no new-numbered replacement yet and are
carried over as-is until the new sequence reaches them:

- **Everything Connected** (hub diagram) — [old link](https://claude.ai/code/artifact/f04e052f-1078-4a1f-9a54-f377003a0eb5)
- **Assessment Intelligence** and **Clinical Notes** — same old link. Milestone 07
  (next) covers this exact ground with a fuller brief — expect these two to be superseded
  the same way Clinical Journey/Care Team/Patient Experience just were.

## Open items

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
