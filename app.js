const scenarios = {
  perfect: {
    summary:
      "58-year-old post-stroke patient after acute inpatient stabilization. Moderate left-sided weakness, can transfer with supervision, cognitively intact, no cardiopulmonary instability. Needs early neuro-rehabilitation focused on gait recovery, balance, and ADL retraining. Family prefers UAE or nearby GCC option. Budget medium.",
    fields: {
      diagnosis: "Post-stroke neuro-rehabilitation",
      severity: "Moderate deficits, early rehab window",
      contraindications: "None critical",
      comorbidities: "Hypertension, controlled diabetes",
      mobility: "Supervised transfers, assisted gait",
      budget: "Medium",
      geography: "UAE / GCC",
      notes: "Family requests visible progress milestones and intensive PT/OT.",
    },
    recommendations: [
      {
        id: "al-noor",
        name: "Al Noor Neuro Recovery Center",
        country: "Dubai, UAE",
        badge: "Best fit",
        badgeClass: "best-fit",
        fitSummary: "Strong early neuro-rehab match with intensive PT/OT and gait-retraining capacity.",
        mismatchReason: "",
        tags: ["Neuro rehab", "Gait therapy", "OT", "Family lodging"],
        why: "This institution closely matches the patient's early post-stroke rehabilitation needs, mobility level, and family geography preference. Its program intensity supports a discharge-to-rehab transition without adding unnecessary travel complexity.",
        plan: "Begin a six-week early neuro-rehabilitation plan centered on gait recovery, upper-limb activation, ADL retraining, and monitored endurance progression. The venue can deliver the proposed frequency and sequencing without major compromises.",
        treatmentMatch: [
          "Post-stroke deficits -> structured neuro-rehabilitation pathway",
          "Functional gait impairment -> daily gait and balance therapy",
          "ADL dependence -> OT-led retraining with family coaching",
        ],
        outcomes: [
          "Improved walking confidence and transfer independence",
          "Clear functional milestones for discharge planning",
          "High likelihood of sustained therapy adherence due to proximity",
        ],
        pros: [
          "Best geographic fit for family preference",
          "Strong neuro-specific multidisciplinary team",
          "Supports early rehab intensity and measurable outcomes",
        ],
        cons: [
          "Premium pricing relative to some regional alternatives",
          "High demand may limit immediate bed availability",
        ],
        warning:
          "No major contraindication concerns identified. Main watchout is availability timing rather than clinical suitability.",
        availabilityUrl: "https://example.com/al-noor",
      },
      {
        id: "seaside",
        name: "Seaside Rehabilitation Institute",
        country: "Abu Dhabi, UAE",
        badge: "Closest available match",
        badgeClass: "closest",
        fitSummary: "Good overall rehab fit with slightly less neuro-specialized intensity.",
        mismatchReason:
          "Still shown because it covers core rehab needs, but it has less neuro-specific therapy depth than the top option.",
        tags: ["Rehab medicine", "Mobility", "Hydrotherapy"],
        why: "This venue supports a broad rehabilitation plan and can manage the patient's current functional level, but its program is somewhat less specialized for early post-stroke neuro recovery than the top match.",
        plan: "Use a mixed PT/OT-led rehabilitation plan with moderate neuro focus, emphasizing mobility progression and ADL recovery. Therapy goals remain viable, though the program may need more manual customization.",
        treatmentMatch: [
          "Mobility deficits -> supervised PT progression",
          "Balance impairment -> hydrotherapy and balance training",
          "ADL recovery -> occupational therapy support",
        ],
        outcomes: [
          "Steady functional gains with moderate therapy intensity",
          "Good support for caregiver transition planning",
        ],
        pros: [
          "Geographically convenient",
          "Strong general rehab infrastructure",
        ],
        cons: [
          "Less specialized neuro program",
          "Rehab intensity may vary by scheduling",
        ],
        warning:
          "Not ruled out clinically, but the venue is not as tailored for early neuro recovery as the best-fit option.",
        availabilityUrl: "https://example.com/seaside",
      },
      {
        id: "verdant",
        name: "Verdant Recovery Resort",
        country: "Muscat, Oman",
        badge: "Not a perfect fit",
        badgeClass: "imperfect",
        fitSummary: "Supportive environment with rehab capacity, but weaker fit for intensive early stroke recovery.",
        mismatchReason:
          "Still shown because it provides rehabilitation services, but distance and lower neuro intensity reduce suitability.",
        tags: ["Wellness rehab", "PT", "Recovery suites"],
        why: "The venue can support recovery, but it is less aligned with the patient's need for focused early neuro-rehabilitation and adds cross-border travel burden.",
        plan: "A lower-intensity rehab plan could be delivered here, but the proposed recovery pathway would be compromised by reduced neuro specialization and slower coordination.",
        treatmentMatch: [
          "Basic mobility recovery -> PT support",
          "General endurance -> wellness-based progression",
        ],
        outcomes: [
          "Potential gradual recovery in a calm setting",
          "Lower likelihood of high-intensity milestone tracking",
        ],
        pros: [
          "Comfortable recovery environment",
          "Can support lower-acuity follow-on rehab",
        ],
        cons: [
          "Not ideal for early intensive neuro rehab",
          "Cross-border logistics add friction",
        ],
        warning:
          "Patient-context mismatch: this venue is better for later-stage or lower-intensity recovery than immediate post-discharge neuro rehabilitation.",
        availabilityUrl: "https://example.com/verdant",
      },
    ],
  },
  fallback: {
    summary:
      "67-year-old rehabilitation candidate after orthopedic and neurologic decline with severe balance impairment, oxygen dependence on exertion, and heat-sensitive autonomic symptoms. Needs rehabilitation, but aquatic therapy and high-heat environments are poor fits. Family prefers nearby options and moderate budget.",
    fields: {
      diagnosis: "Complex rehabilitation after neurologic and orthopedic decline",
      severity: "High fall risk, medically sensitive",
      contraindications: "Heat sensitivity, oxygen dependence on exertion",
      comorbidities: "COPD, orthostatic symptoms, osteoarthritis",
      mobility: "Wheelchair for distance, assisted standing",
      budget: "Medium",
      geography: "UAE / nearby",
      notes: "Avoid intensive aquatic therapy and prolonged outdoor transfers.",
    },
    recommendations: [
      {
        id: "harbor",
        name: "Harbor Integrated Rehab Clinic",
        country: "Dubai, UAE",
        badge: "Closest available match",
        badgeClass: "closest",
        fitSummary: "Safest available option with strong indoor rehab capacity and monitored sessions.",
        mismatchReason:
          "Not a perfect fit because pulmonary monitoring is adequate but not fully specialized for exertional oxygen dependence.",
        tags: ["Indoor rehab", "Pulmonary support", "Wheelchair access"],
        why: "This is the best available candidate because it minimizes heat exposure, supports indoor mobility work, and can adapt the rehab plan around fall risk and exertional tolerance. It still falls short of an ideal pulmonary-neuro integrated setting.",
        plan: "Use a conservative rehab plan with seated conditioning, supervised standing work, indoor gait trials, and tightly monitored exertion thresholds. The venue supports most of the plan, but pulmonary oversight remains a limitation.",
        treatmentMatch: [
          "Fall risk -> supervised transfer and balance training",
          "Wheelchair dependence -> graded standing and gait tolerance work",
          "Heat intolerance -> indoor climate-controlled program",
        ],
        outcomes: [
          "Safer early functional improvement",
          "Reduced environmental trigger exposure",
          "Moderate recovery potential with careful pacing",
        ],
        pros: [
          "Strong accessibility and indoor circulation",
          "Good fit for environmental constraints",
          "Reasonable regional location",
        ],
        cons: [
          "Pulmonary rehab depth is limited",
          "Not purpose-built for medically fragile rehab",
        ],
        warning:
          "Imperfect match due to capability gap: pulmonary monitoring is supportive but not comprehensive enough to make this a perfect fit.",
        availabilityUrl: "https://example.com/harbor",
      },
      {
        id: "cedar",
        name: "Cedar Plains Recovery Hospital",
        country: "Abu Dhabi, UAE",
        badge: "Not a perfect fit",
        badgeClass: "imperfect",
        fitSummary: "Useful for structured therapy, but transfer distances and program intensity may overtax the patient.",
        mismatchReason:
          "Still shown because it has multidisciplinary rehab, but patient-context mismatch makes the therapy environment harder to tolerate.",
        tags: ["Multidisciplinary rehab", "OT", "Respiratory consults"],
        why: "The institution covers many rehab domains, but the site layout and intensity profile create friction for a patient with oxygen dependence and severe balance issues.",
        plan: "The rehab plan would need to be downshifted from the ideal version by reducing transfer burden, shortening sessions, and closely pacing exertion. That makes it viable but clearly imperfect.",
        treatmentMatch: [
          "Functional decline -> broad rehab team support",
          "ADL limitation -> OT and caregiver instruction",
          "Respiratory concerns -> consult support only",
        ],
        outcomes: [
          "Possible moderate improvement with conservative pacing",
          "Stronger caregiver training than some other options",
        ],
        pros: [
          "Wide therapy menu",
          "Solid inpatient-style structure",
        ],
        cons: [
          "Program may be too demanding",
          "Longer internal transfer paths",
        ],
        warning:
          "Patient-context mismatch: the environment and pace may exceed the patient's safe exertional tolerance.",
        availabilityUrl: "https://example.com/cedar",
      },
      {
        id: "desert",
        name: "Desert Springs Wellness Resort",
        country: "Al Ain, UAE",
        badge: "Not a perfect fit",
        badgeClass: "imperfect",
        fitSummary: "Provides recovery amenities, but heat exposure rules it out as a true match.",
        mismatchReason:
          "Still shown because it offers rehab-adjacent services, but heat sensitivity is a clear contraindication to this venue being a proper recommendation.",
        tags: ["Recovery suites", "Hydrotherapy", "Wellness"],
        why: "This venue appears in the top three only because the candidate pool is constrained. Its environment conflicts with a key contraindication and it should be treated as a low-confidence alternative.",
        plan: "The ideal rehabilitation plan cannot be executed here without compromising the patient's safety. Any use would require stripping out heat-adjacent and high-exertion components, which weakens the recommendation substantially.",
        treatmentMatch: [
          "General recovery support -> wellness-oriented programming",
          "Light mobility work -> limited PT access",
        ],
        outcomes: [
          "Low-confidence support for comfort and low-intensity recovery",
        ],
        pros: [
          "Comfortable environment and hospitality",
        ],
        cons: [
          "Heat-sensitive contraindication",
          "Insufficient medically supervised rehab depth",
        ],
        warning:
          "Contraindication conflict: heat sensitivity and exertional fragility make this venue unsafe as a true fit.",
        availabilityUrl: "https://example.com/desert",
      },
    ],
  },
};

const state = {
  activeScenario: "perfect",
  mode: "empty",
  selectedRecommendationId: null,
  dictationOn: false,
  assistantOpen: false,
};

const fields = {
  diagnosis: document.getElementById("field-diagnosis"),
  severity: document.getElementById("field-severity"),
  contraindications: document.getElementById("field-contraindications"),
  comorbidities: document.getElementById("field-comorbidities"),
  mobility: document.getElementById("field-mobility"),
  budget: document.getElementById("field-budget"),
  geography: document.getElementById("field-geography"),
  notes: document.getElementById("field-notes"),
};

const summaryInput = document.getElementById("summary-input");
const fieldStatus = document.getElementById("field-status");
const generateButton = document.getElementById("generate-button");
const dictationButton = document.getElementById("dictation-button");
const fallbackBanner = document.getElementById("fallback-banner");
const recommendationList = document.getElementById("recommendation-list");
const recommendationLoading = document.getElementById("recommendation-loading");
const centerEmpty = document.getElementById("center-empty");
const centerLoading = document.getElementById("center-loading");
const centerContent = document.getElementById("center-content");
const assistant = document.getElementById("assistant");
const assistantToggle = document.getElementById("assistant-toggle");
const assistantMessages = document.getElementById("assistant-messages");
const assistantStatus = document.getElementById("assistant-status");
const assistantInput = document.getElementById("assistant-input");

const selectedName = document.getElementById("selected-name");
const selectedBadge = document.getElementById("selected-badge");
const reasonWhy = document.getElementById("reason-why");
const reasonPlan = document.getElementById("reason-plan");
const reasonTreatment = document.getElementById("reason-treatment");
const reasonOutcomes = document.getElementById("reason-outcomes");
const reasonPros = document.getElementById("reason-pros");
const reasonCons = document.getElementById("reason-cons");
const reasonWarnings = document.getElementById("reason-warnings");
const warningBox = document.getElementById("warning-box");

function getScenario() {
  return scenarios[state.activeScenario];
}

function cloneFields(source) {
  return JSON.parse(JSON.stringify(source));
}

function populateScenario(mode) {
  state.activeScenario = mode;
  const scenario = getScenario();
  summaryInput.value = scenario.summary;
  generateButton.disabled = !summaryInput.value.trim();

  Object.entries(scenario.fields).forEach(([key, value]) => {
    fields[key].value = value;
    fields[key].closest(".field")?.classList.remove("is-dirty");
  });

  fieldStatus.textContent = "Demo case loaded";
  addAssistantMessage(
    "system",
    mode === "perfect"
      ? "Loaded a case with a strong perfect-match recommendation."
      : "Loaded a case that will trigger the no-perfect-match fallback behavior."
  );
}

function setMode(mode) {
  state.mode = mode;
  centerEmpty.classList.toggle("hidden", mode !== "empty");
  centerLoading.classList.toggle("hidden", mode !== "loading");
  centerContent.classList.toggle("hidden", mode !== "results");
  recommendationLoading.classList.toggle("hidden", mode !== "loading");
}

function renderList(items) {
  recommendationList.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = `recommendation-card recommendation-card-button ${
      item.id === state.selectedRecommendationId ? "selected" : ""
    }`;
    card.dataset.action = "select";
    card.dataset.id = item.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", String(item.id === state.selectedRecommendationId));
    card.innerHTML = `
      <div class="recommendation-card-inner">
        <div class="recommendation-header">
          <div>
            <h3>${item.name}</h3>
            <p class="recommendation-location">${item.country}</p>
          </div>
          <span class="match-badge ${item.badgeClass}">${item.badge}</span>
        </div>
        <ul class="treatment-tags">
          ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <p class="fit-summary">${item.fitSummary}</p>
        ${item.mismatchReason ? `<p class="mismatch-note">${item.mismatchReason}</p>` : ""}
        <div class="recommendation-footer">
          <button class="secondary-button small" type="button" data-action="availability" data-id="${item.id}">
            Check availability
          </button>
        </div>
      </div>
    `;
    recommendationList.appendChild(card);
  });
}

function handleRecommendationSelection(id) {
  const scenario = getScenario();
  const selected = scenario.recommendations.find((item) => item.id === id);
  if (!selected) {
    return;
  }

  state.selectedRecommendationId = id;
  renderList(scenario.recommendations);
  renderSelected();
  centerContent.scrollIntoView({ behavior: "smooth", block: "start" });
  addAssistantMessage("ai", `Updated center panel to ${selected.name}.`);
}

function renderSelected() {
  const scenario = getScenario();
  const selected = scenario.recommendations.find((item) => item.id === state.selectedRecommendationId);
  if (!selected) {
    return;
  }

  selectedName.textContent = selected.name;
  selectedBadge.textContent = selected.badge;
  selectedBadge.className = `match-badge ${selected.badgeClass}`;
  reasonWhy.textContent = selected.why;
  reasonPlan.textContent = selected.plan;
  fillList(reasonTreatment, selected.treatmentMatch);
  fillList(reasonOutcomes, selected.outcomes);
  fillList(reasonPros, selected.pros);
  fillList(reasonCons, selected.cons);
  reasonWarnings.textContent = selected.warning;
  warningBox.classList.toggle("hidden", !selected.warning);
}

function fillList(element, values) {
  element.innerHTML = values.map((value) => `<li>${value}</li>`).join("");
}

function recalcScenario() {
  const contraindications = fields.contraindications.value.toLowerCase();
  const mobility = fields.mobility.value.toLowerCase();
  const geography = fields.geography.value.toLowerCase();

  const fallbackSignals =
    contraindications.includes("heat") ||
    contraindications.includes("oxygen") ||
    mobility.includes("wheelchair") ||
    geography.includes("nearby");

  state.activeScenario = fallbackSignals ? "fallback" : "perfect";
  const scenario = getScenario();
  const hasPerfect = scenario.recommendations.some((item) => item.badge === "Best fit");
  fallbackBanner.classList.toggle("hidden", hasPerfect);
  state.selectedRecommendationId = scenario.recommendations[0].id;
  renderList(scenario.recommendations);
  renderSelected();
  setMode("results");
  fieldStatus.textContent = hasPerfect ? "Recommendations updated" : "Fallback recommendations updated";
}

function addAssistantMessage(type, text) {
  const message = document.createElement("div");
  message.className = `assistant-message ${type}`;
  message.innerHTML = `<p>${text}</p>`;
  assistantMessages.appendChild(message);
  assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function runGenerateFlow() {
  if (!summaryInput.value.trim()) {
    addAssistantMessage("system", "Add a discharge summary or load a preset case first.");
    return;
  }

  setMode("loading");
  recommendationList.innerHTML = "";
  fallbackBanner.classList.add("hidden");
  fieldStatus.textContent = "Parsing clinical input";
  assistantStatus.textContent = "Analyzing";

  const scenario = getScenario();
  const parsedFields = cloneFields(scenario.fields);

  window.setTimeout(() => {
    Object.entries(parsedFields).forEach(([key, value]) => {
      fields[key].value = value;
      fields[key].closest(".field")?.classList.remove("is-dirty");
    });

    recalcScenario();
    assistantStatus.textContent = "Ready";
    addAssistantMessage(
      "ai",
      state.activeScenario === "perfect"
        ? "I found a strong top match and two alternatives. The center panel explains the proposed rehab plan in the context of the selected institution."
        : "No perfect match was found, so I returned the top three closest candidates and clarified why each remains imperfect."
    );
  }, 1100);
}

function toggleAssistant() {
  state.assistantOpen = !state.assistantOpen;
  assistant.classList.toggle("assistant-collapsed", !state.assistantOpen);
}

function markDirty(input) {
  input.closest(".field")?.classList.add("is-dirty");
}

function explainSelection() {
  const scenario = getScenario();
  const selected = scenario.recommendations.find((item) => item.id === state.selectedRecommendationId);
  if (!selected) {
    addAssistantMessage("system", "Generate recommendations first.");
    return;
  }
  addAssistantMessage("ai", `${selected.name}: ${selected.why}`);
}

function askClarification() {
  fields.mobility.value = state.activeScenario === "perfect" ? "Wheelchair for distance, assisted standing" : "Supervised transfers, assisted gait";
  markDirty(fields.mobility);
  addAssistantMessage(
    "ai",
    state.activeScenario === "perfect"
      ? "Clarification received: mobility is more limited than first described. Recomputing recommendations."
      : "Clarification received: mobility is improving. Recomputing recommendations."
  );
  window.setTimeout(recalcScenario, 350);
}

document.getElementById("generate-button").addEventListener("click", runGenerateFlow);
document.getElementById("assistant-toggle").addEventListener("click", toggleAssistant);
document.getElementById("assistant-clarify").addEventListener("click", askClarification);
document.getElementById("assistant-explain").addEventListener("click", explainSelection);
document.getElementById("assistant-send").addEventListener("click", () => {
  const text = assistantInput.value.trim();
  if (!text) {
    return;
  }
  addAssistantMessage("user", text);
  assistantInput.value = "";

  const scenario = getScenario();
  const selected = scenario.recommendations.find((item) => item.id === state.selectedRecommendationId);
  const response = selected
    ? `Current selection: ${selected.name}. ${selected.fitSummary} ${selected.warning}`
    : "Generate recommendations first and I can explain the selection.";
  window.setTimeout(() => addAssistantMessage("ai", response), 220);
});

document.getElementById("upload-button").addEventListener("click", () => {
  populateScenario("perfect");
  addAssistantMessage("system", "Uploaded sample discharge summary for the perfect-match case.");
});

document.getElementById("dictation-button").addEventListener("click", () => {
  state.dictationOn = !state.dictationOn;
  dictationButton.classList.toggle("recording", state.dictationOn);
  populateScenario("fallback");
  addAssistantMessage("system", "Dictation loaded the fallback case for no-perfect-match review.");
});

recommendationList.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  const card = event.target.closest("[data-action='select']");

  if (target?.dataset.action === "availability") {
    const { id } = target.dataset;
    const scenario = getScenario();
    const selected = scenario.recommendations.find((item) => item.id === id);
    if (!selected) {
      return;
    }
    window.open(selected.availabilityUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (!card) {
    return;
  }

  handleRecommendationSelection(card.dataset.id);
});

recommendationList.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-action='select']");
  if (!card) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleRecommendationSelection(card.dataset.id);
  }
});

Object.values(fields).forEach((input) => {
  input.addEventListener("input", () => {
    if (input !== fields.notes) {
      markDirty(input);
      fieldStatus.textContent = "Changes detected";
    }
  });

  input.addEventListener("change", () => {
    if (state.mode === "results") {
      recalcScenario();
    }
  });
});

summaryInput.addEventListener("input", () => {
  generateButton.disabled = !summaryInput.value.trim();
});

generateButton.disabled = true;
setMode("empty");
assistant.classList.add("assistant-collapsed");
state.assistantOpen = false;
addAssistantMessage("system", "Load a case with Upload PDF or Dictation, then analyze it.");
