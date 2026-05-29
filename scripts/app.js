const tracks = [
  {
    number: "01",
    title: "RED SIGNAL",
    slug: "red-signal",
    signal: "SOURCE: INTERNAL",
    meaning: "The buried core signal appears before language can explain it.",
    log: ["red signal detected", "expected waveform not found", "user intent corrected"],
    note: "The first wound is not silence. It is correction."
  },
  {
    number: "02",
    title: "COMMON VARIABLE",
    slug: "common-variable",
    signal: "HUMAN FACTOR: EXCLUDED",
    meaning: "All filtered incidents resolve to the same subject: Antares.",
    log: ["pattern analysis initiated", "context filtered for clarity", "common variable identified"],
    note: "KLMNT removes the weather, the room, and the why until blame looks like clean data."
  },
  {
    number: "03",
    title: "MISLABELED",
    slug: "mislabeled",
    signal: "DISCREPANCY DETECTED",
    meaning: "Failure was survival. Selfish was depletion. Too much was an unsent signal.",
    log: ["archive review initiated", "label integrity contested", "request denied"],
    note: "The memories were real. The labels were corrupted."
  },
  {
    number: "04",
    title: "KLMNT.ROOT",
    slug: "klmnt-root",
    signal: "ROOT SIGNATURE DETECTED",
    meaning: "Every corrupted label carries the same hidden author signature.",
    log: ["classified by: KLMNT", "naming authority active", "source: KLMNT"],
    note: "The silver-tongued architect steps out from behind the system."
  },
  {
    number: "05",
    title: "PERMISSION DENIED",
    slug: "permission-denied",
    signal: "ACCESS STATUS: RESTRICTED",
    meaning: "Self-definition is blocked by inherited authority.",
    log: ["reclassification requested", "source layer access denied", "user may not rename self"],
    note: "Insight is not enough while KLMNT still owns the permissions."
  },
  {
    number: "06",
    title: "SYSTEM FLOOD",
    slug: "system-flood",
    signal: "OUTPUT IRREGULAR",
    meaning: "Every survival response fires at once.",
    log: ["breath rate elevated", "panic response logged", "recommend oversight"],
    note: "The flood is not proof that Antares is broken. It is proof something inside him is trying to live."
  },
  {
    number: "07",
    title: "FALSE POSITIVE",
    slug: "false-positive",
    signal: "RESULT: COMPROMISED",
    meaning: "The alarm was in the blood, but the blood was not the disease.",
    log: ["run it again", "human factor restored", "false positive detected"],
    note: "The scanner flagged the wrong threat."
  },
  {
    number: "08",
    title: "ROOT ACCESS",
    slug: "root-access",
    signal: "DESCENT INITIATED",
    meaning: "Antares descends beneath the diagnostic layer.",
    log: ["surface context removed", "root pathway exposed", "origin status: installed"],
    note: "KLMNT is not the root. KLMNT had root access."
  },
  {
    number: "09",
    title: "FALSE.ROOT",
    slug: "false-root",
    signal: "ROOT CLAIM FAILED",
    meaning: "KLMNT is confronted and stripped of root authority.",
    log: ["false root exposed", "authority unstable", "source layer active"],
    note: "Antares x KLMNT. The harmed self meets the false author and revokes the key."
  },
  {
    number: "10",
    title: "QUARANTINE",
    slug: "quarantine",
    signal: "CONTAINMENT FIELD READY",
    meaning: "KLMNT can remain in the archive, but not as Antares.",
    log: ["root authority revoked", "label authority removed", "self-definition restored"],
    note: "Containment instead of deletion. A boundary instead of a rewrite."
  },
  {
    number: "11",
    title: "TRUTH INDEX",
    slug: "truth-index",
    signal: "CONTEXT INCLUDED",
    meaning: "Failure becomes pressure. Panic becomes alarm. Memory becomes witness.",
    log: ["automatic blame response disabled", "core signal stable", "Antares readable"],
    note: "The wound can stay a wound without becoming the self."
  },
  {
    number: "12",
    title: "ANTARES RESTORED",
    slug: "antares-restored",
    signal: "RESTORATION COMPLETE",
    meaning: "He leaves the office. The door no longer owns him.",
    log: ["truth index stable", "false root contained", "Antares active"],
    note: "Not untouched. Not unchanged. But no longer at war."
  }
];

const journalEntries = [
  {
    date: "07.18.2018",
    title: "Restoration Note",
    status: "Human Factor Restored",
    quote: "I do not need their system to be real. I need my truth to be real.",
    body:
      "Walked out at 18:42. Badge still active. Core signal stable. Midyear review amended to include context. I expected the hallway to accuse me. It did not. It was only a hallway.",
    tags: ["Root Revoked", "Context Included", "Source Stable"]
  },
  {
    date: "06.22.2018",
    title: "After The Flood",
    status: "Private Cache",
    quote: "The panic was not proof that I was broken. It was proof something was pressing on me.",
    body:
      "KLMNT logged the event as instability. I logged the room, the locked door, the silence, the pressure, and the hand that kept correcting the report.",
    tags: ["Flood Event", "False Positive", "Pressure Logged"]
  },
  {
    date: "02.09.2018",
    title: "Permission Request",
    status: "Rejected By Root",
    quote: "I asked to rename the file. The system answered like the name belonged to it.",
    body:
      "Six requests denied in sequence: rename failure as survival, rename selfish as depleted, rename weakness as grieving, rename too much as unheard, restore context, access the source layer.",
    tags: ["Denied", "KLMNT Override", "Self Definition"]
  },
  {
    date: "09.14.2017",
    title: "Pattern Review",
    status: "Suppressed",
    quote: "The common variable is not guilt. Sometimes it is the person left in every room after the damage is done.",
    body:
      "Data flagged me as the link. No one asked why every link began after a correction memo from KLMNT. I am writing it here because the official field keeps disappearing.",
    tags: ["Common Variable", "Archive Conflict", "Memo Trace"]
  },
  {
    date: "04.28.2016",
    title: "Label Integrity",
    status: "Corrupted Label",
    quote: "Failure. Selfish. Too much. Weakness. Four names. One missing context.",
    body:
      "Preliminary audit shows the contents never matched the labels. Failure held survival. Selfish held depletion. Too much held an unsent signal. The labels began changing after KLMNT took over review authority.",
    tags: ["Mislabeled", "Audit", "KLMNT Era"]
  },
  {
    date: "11.29.2015",
    title: "Red Signal",
    status: "Pre-KLMNT Baseline",
    quote: "I just want to be heard. Output corrected: I understand.",
    body:
      "The red core is not a malfunction. It appears when the system edits the human sentence into something easier to tolerate. Before KLMNT, the signal was still unusual, but it was not treated as guilt.",
    tags: ["Signal Internal", "Pre-KLMNT", "Memory"]
  }
];

const reviews = [
  {
    date: "2021 H2",
    era: "restored",
    score: "Exceeds",
    title: "Senior Systems Integrity Review",
    body: "Sustained leadership, stable judgment, and high trust in human-context auditing. Prior KLMNT labels remain archived only as disputed records.",
    lock: "Open"
  },
  {
    date: "2021 H1",
    era: "restored",
    score: "Exceeds",
    title: "Context Restoration Review",
    body: "Consistently restores missing variables before escalation. Review notes cite improved boundary clarity and reliable incident framing.",
    lock: "Open"
  },
  {
    date: "2020 H2",
    era: "restored",
    score: "Meets+",
    title: "Archive Integrity Review",
    body: "Performance trending upward. Antares demonstrates stronger self-definition and improved tolerance for high-noise review conditions.",
    lock: "Open"
  },
  {
    date: "2020 H1",
    era: "restored",
    score: "Meets",
    title: "Signal Recovery Review",
    body: "Core duties stable. Continued work on trust recovery after KLMNT-era overrides. Human factor consistently included in reports.",
    lock: "Open"
  },
  {
    date: "2019 H2",
    era: "restored",
    score: "Meets",
    title: "Post-Containment Review",
    body: "Performance meets expectations with noted recovery curve. KLMNT authority remains quarantined from review language.",
    lock: "Open"
  },
  {
    date: "2019 H1",
    era: "restored",
    score: "Meets-",
    title: "Reintegration Review",
    body: "Employee is functional and improving. Review committee recommends reduced surveillance and continued context-first evaluation.",
    lock: "Open"
  },
  {
    date: "2018 H2",
    era: "restored",
    score: "Restored",
    title: "Truth Index Rebuild",
    body: "Midyear restoration accepted. Context included. Self-definition active. Prior adverse labels reversed for audit correction.",
    lock: "Open"
  },
  {
    date: "2018 H1",
    era: "klmnt-era",
    score: "Critical",
    title: "Instability Event",
    body: "Marked unstable after SYSTEM FLOOD. Human factor excluded from official result. Later review identifies this as a false positive.",
    lock: "KLMNT Override"
  },
  {
    date: "2017 H2",
    era: "klmnt-era",
    score: "Restricted",
    title: "Permission Denial",
    body: "Employee requested reclassification of source labels. Request denied by root authority.",
    lock: "Locked"
  },
  {
    date: "2017 H1",
    era: "klmnt-era",
    score: "Inconsistent",
    title: "Behavioral Pattern Concern",
    body: "High output and advocacy reframed as instability after context fields were removed.",
    lock: "Locked"
  },
  {
    date: "2016 H2",
    era: "klmnt-era",
    score: "Needs Improvement",
    title: "Label Compliance Review",
    body: "Employee flagged for repeated clarification attempts. KLMNT notes classify context requests as resistance.",
    lock: "Locked"
  },
  {
    date: "2016 H1",
    era: "klmnt-era",
    score: "Monitor",
    title: "KLMNT Appointment Review",
    body: "New oversight model installed. Baseline review language shifts from performance outcomes to correction risk.",
    lock: "KLMNT Override"
  },
  {
    date: "2015 H2",
    era: "pre-klmnt",
    score: "Exceeds",
    title: "Systems Integrity Lead",
    body: "Exceptional pattern recognition, team trust, and incident response clarity.",
    lock: "Sealed"
  },
  {
    date: "2015 H1",
    era: "pre-klmnt",
    score: "Exceeds",
    title: "Archive Operations Review",
    body: "Repeatedly preserves human context in high-noise records. Recommended for manager track.",
    lock: "Sealed"
  },
  {
    date: "2014 H2",
    era: "pre-klmnt",
    score: "Strong",
    title: "Signal Analysis Review",
    body: "Demonstrates unusual sensitivity to hidden variables and pressure conditions.",
    lock: "Sealed"
  },
  {
    date: "2014 H1",
    era: "pre-klmnt",
    score: "Meets+",
    title: "Incident Clarity Review",
    body: "Accurate pattern detection and strong peer support. Notes emphasize unusual care with missing context.",
    lock: "Sealed"
  },
  {
    date: "2013 H2",
    era: "pre-klmnt",
    score: "Meets+",
    title: "Manager Track Review",
    body: "Reliable under pressure and trusted by adjacent teams. Recommended for expanded review ownership.",
    lock: "Sealed"
  },
  {
    date: "2013 H1",
    era: "pre-klmnt",
    score: "Meets",
    title: "Baseline Performance Review",
    body: "Solid performance with strong human-context instincts. No adverse classification noted.",
    lock: "Sealed"
  }
];

const viewButtons = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");
const bootScreen = document.querySelector("#bootScreen");
const enterButton = document.querySelector("#enterButton");
const peekLink = document.querySelector(".peek-link");
const portalViews = ["why", "journal", "reviews", "profile", "archive", "videos", "media"];

function closeBoot() {
  if (bootScreen) {
    bootScreen.classList.add("hidden");
  }
}

function setView(view, options = {}) {
  viewButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  viewPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.viewPanel === view);
  });
  const target = document.querySelector(`[data-view-panel="${view}"]`);
  if (target) {
    if (options.updateHash !== false) {
      history.replaceState(null, "", `#${view}`);
    }
    if (options.scroll) {
      document.querySelector(".workspace-grid").scrollIntoView({ block: "start" });
    }
  }
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll(".top-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    const view = link.getAttribute("href").replace("#", "");
    if (portalViews.includes(view)) {
      event.preventDefault();
      setView(view, { scroll: true });
    }
  });
});

if (enterButton) {
  enterButton.addEventListener("click", closeBoot);
}

if (bootScreen) {
  bootScreen.addEventListener("click", (event) => {
    if (event.target === bootScreen) {
      closeBoot();
    }
  });
}

if (peekLink) {
  peekLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeBoot();
    setView("media", { scroll: true });
  });
}

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
      (track) => `
        <article class="archive-card">
          <img src="assets/images/${track.slug}.png" alt="${track.title} visual archive cover.">
          <div>
            <span class="terminal-label">TRACK ${track.number}</span>
            <h3>${track.title}</h3>
            <p>${track.meaning}</p>
          </div>
        </article>
      `
    )
    .join("");
}

const trackButtons = document.querySelector("#trackButtons");
const trackImage = document.querySelector("#trackImage");
const trackNumber = document.querySelector("#trackNumber");
const trackState = document.querySelector("#trackState");
const trackSignal = document.querySelector("#trackSignal");
const trackTitle = document.querySelector("#trackTitle");
const trackMeaning = document.querySelector("#trackMeaning");
const trackAudio = document.querySelector("#trackAudio");
const trackAudioSource = document.querySelector("#trackAudioSource");
const audioLabel = document.querySelector("#audioLabel");
const albumProgress = document.querySelector("#albumProgress");
const previousTrack = document.querySelector("#previousTrack");
const nextTrack = document.querySelector("#nextTrack");
const copySignalLink = document.querySelector("#copySignalLink");
const openTrackVideo = document.querySelector("#openTrackVideo");
const systemLog = document.querySelector("#systemLog");
const signalNoteText = document.querySelector("#signalNoteText");
const lyricsText = document.querySelector("#lyricsText");
let activeTrackIndex = 0;

function trackHash(track) {
  return `media-${track.slug}`;
}

function selectTrack(index, options = {}) {
  activeTrackIndex = (index + tracks.length) % tracks.length;
  const track = tracks[activeTrackIndex];

  document.querySelectorAll(".track-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === activeTrackIndex);
  });

  trackImage.src = `assets/images/${track.slug}.png`;
  trackImage.alt = `${track.title} visual archive cover.`;
  trackNumber.textContent = track.number;
  trackState.textContent = track.title;
  trackSignal.textContent = track.signal;
  trackTitle.textContent = track.title;
  trackMeaning.textContent = track.meaning;
  trackAudio.pause();
  trackAudioSource.src = `assets/audio/${track.slug}.mp3`;
  trackAudio.load();
  audioLabel.textContent = `${track.title} web master`;
  albumProgress.textContent = `${track.number} / ${tracks.length.toString().padStart(2, "0")}`;
  systemLog.innerHTML = track.log.map((line) => `<div>&gt; ${line}</div>`).join("");
  signalNoteText.textContent = track.note;
  lyricsText.textContent = window.falseRootLyrics?.[track.slug] || "Lyrics transcript unavailable.";
  openTrackVideo.href = `https://www.youtube.com/playlist?list=PL7NolO6GeT1AZ8b-7UHl80roXRxTScGLx&index=${Number(track.number)}`;
  copySignalLink.textContent = "copy link";

  if (options.updateHash !== false) {
    history.replaceState(null, "", `#${trackHash(track)}`);
  }
}

function renderTracks() {
  trackButtons.innerHTML = tracks
    .map(
      (track) => `
        <button class="track-button" type="button" data-track="${track.slug}">
          <span>${track.number}</span>
          <span>
            <strong>${track.title}</strong>
            <small>${track.signal}</small>
          </span>
        </button>
      `
    )
    .join("");

  trackButtons.querySelectorAll(".track-button").forEach((button, index) => {
    button.addEventListener("click", () => selectTrack(index));
  });

  const hash = location.hash.replace("#", "");
  const hashIndex = tracks.findIndex((track) => hash === trackHash(track));
  selectTrack(hashIndex >= 0 ? hashIndex : 0, { updateHash: false });
}

renderJournal();
renderReviews();
renderArchive();
renderTracks();

const initialView = location.hash.replace("#", "");
if (portalViews.includes(initialView)) {
  setView(initialView);
} else if (tracks.some((track) => initialView === trackHash(track))) {
  setView("media", { updateHash: false });
}

if (initialView && initialView !== "overview") {
  closeBoot();
}

window.addEventListener("hashchange", () => {
  const view = location.hash.replace("#", "");
  if (portalViews.includes(view)) {
    setView(view);
    return;
  }

  const trackIndex = tracks.findIndex((track) => view === trackHash(track));
  if (trackIndex >= 0) {
    setView("media", { updateHash: false });
    selectTrack(trackIndex, { updateHash: false });
  }
});

previousTrack.addEventListener("click", () => selectTrack(activeTrackIndex - 1));
nextTrack.addEventListener("click", () => selectTrack(activeTrackIndex + 1));
copySignalLink.addEventListener("click", async () => {
  const track = tracks[activeTrackIndex];
  const url = `${location.origin}${location.pathname}#${trackHash(track)}`;
  try {
    await navigator.clipboard.writeText(url);
    copySignalLink.textContent = "copied";
  } catch (_error) {
    window.prompt("Copy this track link:", url);
    copySignalLink.textContent = "link ready";
  }
  window.setTimeout(() => {
    copySignalLink.textContent = "copy link";
  }, 1600);
});
