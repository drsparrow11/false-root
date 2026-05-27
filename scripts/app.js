const tracks = [
  ["01", "RED SIGNAL", "red-signal", "The buried core signal appears before language can explain it."],
  ["02", "COMMON VARIABLE", "common-variable", "All filtered incidents resolve to the same subject: Antares."],
  ["03", "MISLABELED", "mislabeled", "Failure was survival. Selfish was depletion. Too much was an unsent signal."],
  ["04", "KLMNT.ROOT", "klmnt-root", "Every corrupted label carries the same hidden author signature."],
  ["05", "PERMISSION DENIED", "permission-denied", "Self-definition is blocked by inherited authority."],
  ["06", "SYSTEM FLOOD", "system-flood", "Every survival response fires at once."],
  ["07", "FALSE POSITIVE", "false-positive", "The alarm was in the blood, but the blood was not the disease."],
  ["08", "ROOT ACCESS", "root-access", "Antares descends beneath the diagnostic layer."],
  ["09", "FALSE.ROOT", "false-root", "KLMNT is confronted and stripped of root authority."],
  ["10", "QUARANTINE", "quarantine", "KLMNT can remain in the archive, but not as Antares."],
  ["11", "TRUTH INDEX", "truth-index", "Failure becomes pressure. Panic becomes alarm. Memory becomes witness."],
  ["12", "ANTARES RESTORED", "antares-restored", "He leaves the office. The door no longer owns him."]
];

const journalEntries = [
  {
    date: "05.17.2026",
    title: "Restoration Note",
    status: "Human Factor Restored",
    quote: "I do not need their system to be real. I need my truth to be real.",
    body:
      "Walked out at 18:42. Badge still active. Core signal stable. I expected the hallway to accuse me. It did not. It was only a hallway.",
    tags: ["Root Revoked", "Context Included", "Source Stable"]
  },
  {
    date: "11.02.2025",
    title: "After The Flood",
    status: "Private Cache",
    quote: "The panic was not proof that I was broken. It was proof something was pressing on me.",
    body:
      "KLMNT logged the event as instability. I logged the room, the locked door, the silence, the pressure, and the hand that kept correcting the report.",
    tags: ["Flood Event", "False Positive", "Pressure Logged"]
  },
  {
    date: "05.19.2025",
    title: "Permission Request",
    status: "Rejected By Root",
    quote: "I asked to rename the file. The system answered like the name belonged to it.",
    body:
      "Six requests denied in sequence: rename failure as survival, rename selfish as depleted, rename weakness as grieving, rename too much as unheard, restore context, access the source layer.",
    tags: ["Denied", "KLMNT Override", "Self Definition"]
  },
  {
    date: "11.14.2024",
    title: "Pattern Review",
    status: "Suppressed",
    quote: "The common variable is not guilt. Sometimes it is the person left in every room after the damage is done.",
    body:
      "Data flagged me as the link. No one asked why every link began after a correction memo from KLMNT. I am writing it here because the official field keeps disappearing.",
    tags: ["Common Variable", "Archive Conflict", "Memo Trace"]
  },
  {
    date: "05.03.2024",
    title: "Label Integrity",
    status: "Corrupted Label",
    quote: "Failure. Selfish. Too much. Weakness. Four names. One missing context.",
    body:
      "Preliminary audit shows the contents never matched the labels. Failure held survival. Selfish held depletion. Too much held an unsent signal. The labels changed because the author changed.",
    tags: ["Mislabeled", "Audit", "Pre-KLMNT"]
  },
  {
    date: "11.29.2023",
    title: "Red Signal",
    status: "Blocked Transmission",
    quote: "I just want to be heard. Output corrected: I understand.",
    body:
      "The red core is not a malfunction. It appears when the system edits the human sentence into something easier to tolerate.",
    tags: ["Signal Internal", "User Intent Corrected", "Memory"]
  }
];

const reviews = [
  {
    date: "2026 H1",
    era: "restored",
    score: "Restored",
    title: "Truth Index Rebuild",
    body: "Context included. Self-definition active. Prior adverse labels reversed for audit correction.",
    lock: "Open"
  },
  {
    date: "2025 H2",
    era: "klmnt-era",
    score: "Critical",
    title: "Instability Event",
    body: "Marked unstable after SYSTEM FLOOD. Human factor excluded from official result.",
    lock: "KLMNT Override"
  },
  {
    date: "2025 H1",
    era: "klmnt-era",
    score: "Restricted",
    title: "Permission Denial",
    body: "Employee requested reclassification of source labels. Request denied by root authority.",
    lock: "Locked"
  },
  {
    date: "2024 H2",
    era: "klmnt-era",
    score: "Inconsistent",
    title: "Behavioral Pattern Concern",
    body: "High output and advocacy reframed as instability after context fields were removed.",
    lock: "Locked"
  },
  {
    date: "2024 H1",
    era: "pre-klmnt",
    score: "Exceeds",
    title: "Systems Integrity Lead",
    body: "Exceptional pattern recognition, team trust, and incident response clarity.",
    lock: "Sealed"
  },
  {
    date: "2023 H2",
    era: "pre-klmnt",
    score: "Exceeds",
    title: "Archive Operations Review",
    body: "Repeatedly preserves human context in high-noise records. Recommended for manager track.",
    lock: "Sealed"
  },
  {
    date: "2023 H1",
    era: "pre-klmnt",
    score: "Strong",
    title: "Signal Analysis Review",
    body: "Demonstrates unusual sensitivity to hidden variables and pressure conditions.",
    lock: "Sealed"
  }
];

const viewButtons = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");

function setView(view) {
  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  viewPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });
  const target = document.querySelector(`[data-view-panel="${view}"]`);
  if (target) {
    history.replaceState(null, "", `#${view}`);
  }
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll(".top-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const view = link.getAttribute("href").replace("#", "");
    if (["journal", "reviews", "profile", "archive", "videos", "media"].includes(view)) {
      setView(view);
    }
  });
});

function renderJournal() {
  const list = document.querySelector("#journalList");
  const reader = document.querySelector("#journalReader");

  function selectEntry(entry, index) {
    document.querySelectorAll(".entry-button").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });

    reader.innerHTML = `
      <span class="terminal-label">${entry.status}</span>
      <h2>${entry.title}</h2>
      <blockquote>${entry.quote}</blockquote>
      <p>${entry.body}</p>
      <div class="entry-meta">
        ${entry.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
    `;
  }

  list.innerHTML = journalEntries
    .map(
      (entry, index) => `
        <button class="entry-button" type="button" data-entry-index="${index}">
          <span>${entry.status}</span>
          <time>${entry.date}</time>
          <strong>${entry.title}</strong>
        </button>
      `
    )
    .join("");

  list.querySelectorAll("[data-entry-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectEntry(journalEntries[Number(button.dataset.entryIndex)], Number(button.dataset.entryIndex));
    });
  });

  selectEntry(journalEntries[0], 0);
}

function renderReviews(filter = "all") {
  const timeline = document.querySelector("#reviewTimeline");
  const visibleReviews = filter === "all" ? reviews : reviews.filter((review) => review.era === filter);

  timeline.innerHTML = visibleReviews
    .map(
      (review) => `
        <article class="review-card" data-era="${review.era}">
          <div class="review-date">${review.date}<br>${review.score}</div>
          <div>
            <h3>${review.title}</h3>
            <p>${review.body}</p>
          </div>
          <span class="lock-badge">${review.lock}</span>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll("[data-review-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-review-filter]").forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });
    renderReviews(button.dataset.reviewFilter);
  });
});

function renderArchive() {
  const grid = document.querySelector("#archiveGrid");
  grid.innerHTML = tracks
    .map(
      ([number, title, slug, body]) => `
        <article class="archive-card">
          <img src="assets/images/${slug}.png" alt="${title} visual archive cover.">
          <div>
            <span class="terminal-label">TRACK ${number}</span>
            <h3>${title}</h3>
            <p>${body}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTracks() {
  const list = document.querySelector("#trackList");
  list.innerHTML = tracks
    .map(
      ([number, title, slug]) => `
        <article class="track-row">
          <span class="track-number">${number}</span>
          <span class="track-title">${title}</span>
          <audio controls preload="none" src="assets/audio/${slug}.wav"></audio>
        </article>
      `
    )
    .join("");
}

renderJournal();
renderReviews();
renderArchive();
renderTracks();

const initialView = location.hash.replace("#", "");
if (["journal", "reviews", "profile", "archive", "videos", "media"].includes(initialView)) {
  setView(initialView);
}

window.addEventListener("hashchange", () => {
  const view = location.hash.replace("#", "");
  if (["journal", "reviews", "profile", "archive", "videos", "media"].includes(view)) {
    setView(view);
  }
});
