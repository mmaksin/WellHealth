# WellHealth – Phase 0 MVP PRD v0.1

***

# 1. Overview

## 1.1 Product Summary

WellHealth is a doctor-facing clinical decision support tool that enables physicians to quickly identify suitable rehabilitation and wellness destinations for patients.

The system leverages a structured medical knowledge base (ICD → treatment profiles → methods → resorts) and AI-assisted reasoning to generate explainable recommendations.

## 1.2 Phase 0 Goal

Build a lightweight, web-based MVP that:

* Demonstrates value to doctors during discharge workflow
* Can be shown to investors and pilot clinics
* Avoids complex integrations (EHR, insurance, booking)
* Enables rapid iteration based on real usage

***

# 2. Target User & Use Case

## 2.1 Primary User

* Physicians (initial focus: neurologists)
* Working in hospitals/clinics in MENA region

## 2.2 Patient Type

* Rehabilitation patients (initial validation may include stroke cases)

## 2.3 Moment of Use

* Discharge consultation

## 2.4 Core Job-To-Be-Done

"Help me quickly and confidently suggest where this patient should go for rehabilitation."

***

# 3. User Flow (Single Core Flow)

1. Doctor opens web app
2. Inputs patient information (paste / upload / dictate)
3. System extracts structured fields
4. System generates 3 recommendations
5. Doctor reviews explanation
6. Doctor selects one option
7. Redirect to provider website for availability/booking

***

# 4. UX Structure (3-Panel Layout)

## 4.1 Left Panel – Input

### Input Methods

* Copy/paste discharge summary
* Upload document (PDF, image)
* Voice dictation (optional)
* Visible but disabled "Load from EHR (coming soon)" action as a future integration placeholder

### Extracted Fields (3–7 max)

* Diagnosis (condition)
* Severity / functional status
* Contraindications
* Comorbidities
* Mobility level
* Budget (optional)
* Geography preference (optional)

### Additional

* Free-form notes field

### UX Hint (Future Integration – Non-functional)

* Disabled action in the controls row:
  * “Load from EHR (coming soon)”
* Meaning:
  * Future versions will auto-fill patient data from hospital systems (FHIR-compatible)

***

## 4.2 Right Panel – Recommendations (3 items)

Each recommendation includes:

* Resort / clinic name

* Country

* Key treatment methods

* Match label (e.g., "Best for early rehab" or "Closest available match - not a perfect fit")

* If no perfect matches exist, still show the top 3 candidates and explicitly mark them as imperfect matches

***

## 4.3 Center Panel – Explanation

For selected recommendation:

* Why this institution fits THIS patient

* How the proposed rehabilitation plan maps to this institution's capabilities and recommendation

* Matching conditions -> treatments

* Expected outcomes

* Pros / cons

* Risks / limitations, including which patient factors, contraindications, or capability gaps make this venue imperfect or rule it out as a perfect match

This panel is the core differentiator of the product and must explain the proposed rehabilitation plan in the context of the selected institution rather than as a generic care plan.

***

## 4.4 AI Assistant (Bottom Right)

Capabilities:

* Explain recommendations
* Answer medical reasoning questions
* Help with navigation
* Handle incomplete input cases

Limitations:

* Does not override core recommendation logic

***

# 5. Functional Requirements

## 5.1 Input Processing

* Accept unstructured medical text
* Extract key structured fields
* Allow multi-line editing of structured clinical fields
* Handle missing data gracefully

Fallback behavior:

* Ask 1–2 clarifying questions
* Or proceed with partial data

System feedback:

* Show transient status feedback when patient info is loaded, analyzed, or edited

***

## 5.2 Recommendation Engine

### Data Flow

ICD → Treatment Profiles → Methods → Resorts

### Logic

* Match diagnosis to treatment profiles
* Filter by contraindications (hard exclusion)
* Apply soft filters (budget, geography)
* Rank results

### Ranking Heuristic (Phase 0)

* Match strength (condition → treatment)
* Contraindication penalty
* Context match (mobility, severity)

***

## 5.3 Contraindication Handling

* Hard exclusions remove unsafe options when viable alternatives exist

* If no perfect matches remain:

  * Show a warning

  * Still list the top 3 best available candidates

  * Clearly label them as not perfect matches

  * Explain which contraindications, missing capabilities, or patient-context factors prevented a perfect fit

***

## 5.4 Output Generation

* Always return up to 3 recommendations when possible, even if none is a perfect match

* Generate recommendation-specific explanation using AI + structured data

* For imperfect matches, explicitly state why each option is still being shown and what prevents it from being a full match

***

## 5.5 Action

* Redirect to external provider website
* No booking handled inside platform

***

# 6. Non-Goals (Explicitly Out of Scope)

* EHR integration (FHIR / SMART on FHIR)
* Booking and payment systems
* Insurance handling
* Patient accounts
* Longitudinal patient history
* Loyalty / rewards systems

***

# 7. Product Positioning & Legal Framing

The product is positioned as:

"Clinical decision support tool"

NOT:

* Medical prescription system
* Referral marketplace (in Phase 0 UI)

UI language must reflect:

* “Suggested options”
* “For consideration”

***

# 8. Data Requirements

## 8.1 Existing Assets

* 12,500+ ICD-based conditions
* Treatment profiles
* 200+ treatment methods

## 8.2 Phase 0 Needs

* Curated list of rehab resorts (20–50 minimum)
* Contraindication mapping
* General rehabilitation treatment pathways

***

# 9. Success Metrics (Phase 0)

* Time to recommendation (<30 seconds)
* Doctor perceived usefulness
* % of cases where recommendation is used
* Qualitative feedback from pilot doctors

***

# 10. Technical Constraints

* Web application only
* No external integrations
* Lightweight backend
* Rapid iteration capability

***

# 11. Future Roadmap

## Phase 1

* Improved document parsing
* Enhanced personalization

## Phase 2

* EHR integration (FHIR / SMART on FHIR)
  * Automatic patient data retrieval
  * Full medical history access
  * Medication-aware recommendations

System will be designed to be compatible with FHIR resource structures (Patient, Condition, Observation).

***

# 12. Assumptions

## Product & UX

* Initial market: Dubai (UAE), chosen due to advanced digital healthcare infrastructure and relatively mature EHR ecosystem
* Initial user: Neurologists
* Use case: Discharge rehabilitation recommendations
* Interaction model: Structured form (primary) + chat assistant that can update form fields
* System can ask 1–2 clarifying questions when input is incomplete

## Technical

* Input processing: LLM-based extraction
* System is stateless (no persistent patient records)
* Minimal analytics logging is implemented

## GTM

* Pilot with 2–3 independent doctors (no clinic dependency)

## Behavioral

* Doctors are willing to use tool during discharge
* Copy/paste / upload / dictation input is acceptable
* 3 recommendations are sufficient
* Explanation layer builds trust
* Redirecting externally is acceptable in MVP

***

# 13. Open Questions

## Clinical & Safety

* Depth of contraindication coverage required?
* Do we need clinical validation (advisor / certified doctor) before pilot?
* What disclaimers are required per target country?

## Data & Supply

* Minimum viable resort set (20 vs 50 vs 100)?

* How to validate medical capabilities of each resort?

## Business & Monetization

* Will doctors be informed about monetization (commissions) in Phase 0?
* Who owns patient communication post-redirect (doctor vs platform vs resort)?

## Technical

* Do we store anonymized cases for learning, or remain strictly stateless?

## Strategic

* Is long-term positioning closer to CDS (clinical decision support) or marketplace?
* When do we introduce EHR integration (trigger milestone)?
