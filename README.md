# FALSE.ROOT Employee Portal

Static GitHub Pages site for the `FALSE.ROOT` album world. The page is framed as a KLMNT Corp internal employee portal for Antares A-01.

## Current Build

- Corporate portal dashboard for Antares
- Manager's Journal with recovered entries across three years
- Biannual performance reviews with filters for Pre-KLMNT, KLMNT Era, and Restored
- Fake public network profile for Antares
- Incident archive using the album images
- YouTube playlist embed for the finished video sequence
- Track console with web-friendly MP3 audio
- Portal copy aligned to the supplied canonical lyric arc

## Local Preview

Run a simple static server from this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

## GitHub Pages

This is a static site, so GitHub Pages can serve it directly from the repository root. Keep `index.html`, `styles/`, `scripts/`, and `assets/` at the top level.

The source WAV files are intentionally ignored for GitHub. Use the MP3 files in `assets/audio/` for the public site.

## Next Content Ideas

- Add a KLMNT onboarding module that slowly exposes the false labels as the user clicks through.
- Add an employee inbox with messages from Juno, Meca, Kakera, and Sparrow as hidden continuity threads.
- Add a "Compliance Training" quiz where every answer is wrong until the human factor is restored.
- Add an access-card page where Antares' badge changes from restricted to restored.
- Add a locked KLMNT personnel file that only opens after visiting FALSE.ROOT, QUARANTINE, and TRUTH INDEX.
