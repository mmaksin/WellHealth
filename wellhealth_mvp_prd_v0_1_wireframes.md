# WellHealth Phase 0 – High-Fidelity UI Specification

---

# 1. Design Principles

- **Speed-first**: <30s to result
- **Clarity over density**: minimal fields, strong hierarchy
- **Explainability**: reasoning always visible
- **Editability**: inputs always editable, instant recompute
- **Trust**: clinical tone, neutral language (“Suggested options”)

---

# 2. Layout Grid

- Desktop-first (1440px width)
- 3-column layout:
  - Left: 360px (Input)
  - Center: 560px (Explanation)
  - Right: 420px (Recommendations)
- Top bar: 64px height
- Spacing scale: 8px base (8/16/24/32)

---

# 3. Top Bar

**Left:**
- Logo (WellHealth)
- Product name: “Rehabilitation Match Assistant”

**Right:**
- Minimal menu (optional)
- Help icon (?)

---

# 4. Left Panel – Input (Form + Intake)

## 4.1 Header
- Title: “Patient Input”
- Subtext (small): “Paste, upload, or dictate a discharge summary”

## 4.2 Input Block

### Text Area (Primary)
- Height: 160px
- Placeholder: “Paste discharge summary…”
- Border: subtle gray
- On focus: blue outline

### Controls Row
- Upload button: [Upload PDF]
- Dictation button: 🎤 (toggle state: idle / recording)

### UX Hint (inline, small text)
“Paste discharge summary or connect EHR (coming soon)”

---

## 4.3 Structured Fields (Auto-filled)

Each field = label + input

- Diagnosis
- Severity / Functional status
- Contraindications
- Comorbidities
- Mobility level
- Budget (optional)
- Geography (optional)

### Field Behavior
- Auto-populated after parsing
- Editable at all times
- Changed field = subtle highlight (yellow fade)

---

## 4.4 Free Text Notes
- Smaller textarea
- Placeholder: “Additional notes…”

---

## 4.5 Primary CTA

Button: **Generate suggestions**
- Full width
- Primary color (blue)
- Disabled until input present

---

# 5. Center Panel – Explanation

## 5.1 Header
- Title: “Recommendation reasoning”
- Subtext (small): “Proposed rehabilitation plan in the context of the selected institution”

---

## 5.2 Empty State
- Icon (light)
- Text:
  “Recommendation reasoning and rehabilitation plan details will appear here”

---

## 5.3 Content State

### Section 1: Why this fits
- Short paragraph (2–3 lines)
- Must reference the selected institution, not generic patient guidance

### Section 2: Proposed rehabilitation plan
- Short summary of the recommended rehabilitation approach for this patient at this venue

### Section 3: Treatment match
- Bullet list:
  - Condition -> treatment
  - Functional need -> therapy
  - Patient need -> institution capability

### Section 4: Expected outcomes
- 2–3 bullets

### Section 5: Pros
- Bullet list (green indicators)

### Section 6: Cons / limitations
- Bullet list (neutral / gray)
- Include capability gaps when present

### Section 7: Risks / warnings
- Highlight box (light red if needed)
- Explicitly call out contraindications or patient-context factors that prevent a perfect match

---

## 5.4 Loading State
- Skeleton text blocks
- Message: “Analyzing clinical input…”

---

# 6. Right Panel – Recommendations

## 6.1 Header
- Title: “Suggested options”
- Optional banner when needed:
  “No perfect matches found. Showing the top 3 closest available options.”

---

## 6.2 Card Structure (x3)

Each card:

**Top row**
- Clinic name (bold)
- Badge (optional):
  - “Best fit” (blue)
  - “Closest available match” (gray)
  - “Not a perfect fit” (gray outline)

**Middle**
- Country
- Treatment tags (pill style)

**Bottom**
- Short fit summary (1 line)
- If imperfect match: short explanation of why it is still shown and what prevents a perfect fit

**CTA**
- Button: “Check availability”

---

## 6.3 Selected State
- Card has blue border
- Slight elevation (shadow)
- Selected card drives the center-panel rehab plan and venue-specific reasoning

---

## 6.4 Fallback Result State
- Triggered when no perfect matches exist
- Still show 3 recommendation cards
- All cards use imperfect-match labeling
- Warning banner remains visible above cards
- Each card includes a brief mismatch reason:
  - Contraindication conflict
  - Missing treatment capability
  - Patient-context mismatch

---

## 6.5 Loading State
- Skeleton cards (3)

---

# 7. AI Assistant (Floating)

## 7.1 Position
- Bottom-right corner

## 7.2 States

### Collapsed
- Circular button (chat icon)

### Expanded
- Chat panel (320px width)

---

## 7.3 Chat UI

- Messages (doctor vs AI)
- Input field
- Send button

---

## 7.4 Behavior

### Can:
- Ask clarifying questions
- Explain recommendations
- Update fields

### When updating field:
- Field visually updates in left panel
- Highlight change

---

# 8. Key Interaction Flows

## 8.1 Generate Flow

Input → Click CTA →
- Left: fields populate
- Center: loading → institution-specific rehab plan + reasoning
- Right: 3 cards appear

### Perfect-match result
- At least one card may show “Best fit”
- Center panel explains why the selected venue is appropriate for this patient

### No-perfect-match result
- Show banner explaining no perfect match was found
- Still display the top 3 closest available candidates
- Selecting any card updates the center panel with tradeoffs, contraindications, and capability gaps

---

## 8.2 Clarification Flow

AI asks:
“What is the mobility level?”

User answers →
- Field updates
- Recompute triggered

---

## 8.3 Edit Flow

User edits field →
- Field highlight
- Center + Right refresh
- If ranking changes, badges and imperfect-match explanations update accordingly

---

## 8.4 Redirect

Click CTA →
- Opens provider site (new tab)

---

# 9. States Summary

- Empty
- Input in progress
- Parsing
- Clarification
- Results: perfect match available
- Results: no perfect match, top 3 fallback candidates shown
- Recompute
- No match
- Error

---

# 10. Visual Style

- Font: Inter / system sans-serif
- Colors:
  - Primary: Blue
  - Success: Green
  - Warning: Amber
  - Error: Red
- Cards: 12px radius
- Shadows: subtle

---

# 11. Accessibility

- High contrast text
- Clear focus states
- Click targets ≥ 40px

---

# 12. Build Notes

- No mobile in Phase 0
- Stateless UI
- Optimized for speed over polish

---

# END
