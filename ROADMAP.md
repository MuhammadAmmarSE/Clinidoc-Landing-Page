# CliniDoc Landing Page — Milestone Roadmap

This is the running ground-truth for the landing page project. Each milestone is defined
milestone-by-milestone in conversation; this file tracks what's locked, what's defined but
not yet built, and where the artifact lives. Update it as milestones land.

Status legend: 🟢 Locked & built · 🟡 Defined, not yet built · 🔵 Conditional (build only if criteria met) · ⏳ Pending a decision

| # | Milestone | Status | Artifact |
|---|---|---|---|
| 00 | Product & Brand Foundation | ⏳ Being revised | [v1](https://claude.ai/code/artifact/a7265915-a774-4b78-9098-2c368d37585d) — superseded by a stronger revision in progress |
| 01 | CliniDoc Design Language | 🟢 | [Link](https://claude.ai/code/artifact/50a9851f-4114-4495-b27c-bf81207d1a89) |
| 02 | Landing Page Architecture | 🟢 | [Link](https://claude.ai/code/artifact/eaf3a73e-8b4c-4e55-a2cd-1f7baf6bb704) |
| 03 | Hero Experience | 🟢 | [Link](https://claude.ai/code/artifact/e4a253da-e8ea-4893-ac6b-e878e09e3b80) |
| 04 | Hero Product Visualization | 🟢 | [Link](https://claude.ai/code/artifact/d5bf25d7-6e31-4fba-b0d6-b41d51701dbe) |
| 05 | Clinical Journey | 🟢 | [Link](https://claude.ai/code/artifact/956c7470-3a8d-4b97-b615-a301e39ba020) |
| 06 | Everything Connected | 🟢 | [Link](https://claude.ai/code/artifact/f04e052f-1078-4a1f-9a54-f377003a0eb5) |
| 07 | Care Team Experience | 🟢 | same as above |
| 08 | Patient Experience | 🟢 | same as above |
| 09 | Assessment Intelligence | 🟢 | same as above |
| 10 | Clinical Notes | 🟢 | same as above |
| 11 | Appointments & Scheduling | 🟡 | — |
| 12 | Referral Journey | 🟡 | — |
| 13 | Security & Trust | ⏳ | Blocked on confirming exact compliance claims — see Open Decisions |
| 14 | "One Patient. One Story." | 🟡 | Elevated to central brand narrative as of M00 revision |
| 15 | Interactive Product Showcase (Clinician / Admin / Patient toggle) | 🟡 | — |
| 16 | AI / Intelligence Layer | 🔵 | Only if real AI capability exists — otherwise "coming intelligence capabilities" framing |
| 17 | Integrations / Ecosystem | 🔵 | Only confirmed integrations |
| 18 | Proof & Trust | 🔵 | Only real evidence — no fabricated stats/testimonials/logos |
| 19 | Conversion Experience (multi-path CTA) | 🟡 | — |
| 20 | Final Ecosystem Integration (no dead buttons/routes) | 🟡 | — |
| 21 | Production Hardening (a11y, perf, SEO, security, monitoring) | 🟡 | — |
| 22 | Post-Launch Intelligence (analytics plan) | 🟡 | — |

## Open decisions (blocking downstream milestones)

1. **Compliance claims — contradiction to resolve.** In Milestone 00's original pass, you
   confirmed "HIPAA compliant, SOC 2" when directly asked. Milestone 13's brief now says
   "do not automatically write HIPAA compliant unless formally established." These can't
   both stand as written — need to know if the earlier confirmation still holds, or if it
   needs walking back to feature-level language only. Blocks §03/§13 of the page architecture
   and the M00 trust-language section.

2. **Behavioral health vertical.** The real logo you shared carries the tagline "The Clinical
   Intelligence Platform for Behavioral Health" — every foundation and design-language
   artifact so far has been positioned as generic "clinical care," not behavioral-health-
   specific. This is a significant enough scope question to confirm explicitly before it
   propagates through the M00 revision and everything downstream.

## Brand assets

Real, vectorized CliniDoc logo (icon + lockups, color/mono/white variants) at
`assets/brand/`. Source reference image at `assets/brand/source-reference.jpg`.
Confirmed brand colors: Navy `#2C3D4F` · Blue `#6B9AD1` · Teal `#53B9B2` (sampled directly
from the logo file, see Milestone 01).
