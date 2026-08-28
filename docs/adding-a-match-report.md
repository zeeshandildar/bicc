# Adding a Match Report

Two commands. Paste the report, drop in the photos, commit.

---

## 1. Start a report

```bash
npm run new-report -- "La Manga Tour August 2026"
```

This creates two things:

- `reports/la-manga-tour-august-2026.md` — the file you write in
- `public/images/events/la-manga-tour-august-2026/` — the folder for photos

## 2. Paste the report

Open the `.md` file it created. The top section is settings, the rest is the
report:

```markdown
---
title: La Manga Tour August 2026
date: 22-23 August 2026
sortDate: 2026-08-22
location: La Manga, Spain
type: tour
category: Tour
summary: Three games, three wins at the La Manga Cricket and Golf Resort.
cover: team-photo
newsTitle: La Manga Tour: Three Games, Three Wins
---

## Saturday — T20 Game 1

The summer break finally came to an end…

## Saturday — T20 Game 2

After a quick lunch break…
```

- Each `##` line becomes a heading on the event page — one per match.
- `summary` is the one-liner shown on the events list and the news card.
- `newsTitle` is the headline of the news card that links to the event.
  Leave it blank if you don't want the report on the news page.
- `cover` picks the main photo — any part of the filename will do.
- Spanish is optional: put it below a `===ES===` line and it will be used for
  Spanish readers. Without it, they see the English text.

## 3. Add the photos

Drop them into the folder the first command created. Any names are fine — the
publish step renames and resizes them for the web.

## 4. Publish it

```bash
npm run publish-report -- la-manga-tour-august-2026
```

This adds the event (with the report and photo gallery) to `data/events.js`,
adds the news card to `data/stories.js`, resizes the photos, and deletes the
draft.

## 5. Check and push

```bash
npm run dev      # look at /events and the event page
git add -A
git commit -m "Add La Manga tour match report"
git push
```

Then open a pull request on GitHub — `main` doesn't accept direct pushes.

---

## Notes

- **Where things live:** the full report lives on the **event**; the News page
  only carries a short card that links to it.
- **Changing a published report:** edit the entry directly in `data/events.js`
  (the draft is gone by then). See `CONTENT_GUIDE.md`.
- **Photo resizing** uses macOS's built-in `sips`. On another OS the photos are
  still renamed and published, just not resized — keep them under ~2MB each.
- **Re-running publish** for a slug that already exists is refused, so you
  can't create duplicate events by accident.
