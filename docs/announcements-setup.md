# BICC Club Noticeboard — One-Time Setup

This connects a Google Form to the website's news page. After setup, any
committee member can post a match, net session, or trip update from their
phone in under a minute — the website updates automatically (no redeploy),
and they get a ready-made WhatsApp message by email to paste into the group.

The flow:

```
Committee member fills Google Form
        │
        ├─► Row added to Google Sheet ─► Apps Script serves JSON ─► Website noticeboard (~10 min)
        │
        └─► Email with WhatsApp-formatted text ─► copy-paste into the group
```

---

## Step 1 — Create the Google Form

Create a new form at [forms.google.com](https://forms.google.com) called
**BICC Announcement** with these questions. **Question titles must match
exactly** (the automation reads them by name):

| Question title | Type | Required |
|---|---|---|
| Title | Short answer | Yes |
| Title (Spanish) | Short answer | No |
| Type | Multiple choice: `Match`, `Net Session`, `Social`, `Tour`, `News` | Yes |
| Event Date | Date | No |
| Time | Short answer (e.g. `10:00 - 13:00`) | No |
| Location | Short answer | No |
| Details | Paragraph | No |
| Details (Spanish) | Paragraph | No |
| Signup Link | Short answer | No |
| Photo Album Link | Short answer | No |

Leave "Event Date" empty for general news; fill it for matches and nets so
the item appears under **Upcoming** on the website.

## Step 2 — Link responses to a Sheet

In the form: **Responses → Link to Sheets → Create a new spreadsheet.**
The responses tab will be named `Form Responses 1` (the script expects this
name — if yours differs, edit `SHEET_NAME` in the script).

Optional: add a column with the header `Hide` at the end of the responses
tab. Typing `TRUE` (or ticking a checkbox) in that column removes the item
from the website — use it for mistakes or stale posts.

## Step 3 — Add the Apps Script

1. In the spreadsheet: **Extensions → Apps Script**.
2. Delete any placeholder code and paste the contents of
   [`announcements-apps-script.gs`](./announcements-apps-script.gs).
3. Save.

## Step 4 — Deploy as a web app

1. **Deploy → New deployment → Web app.**
2. *Execute as:* **Me**. *Who has access:* **Anyone**.
3. Click Deploy, authorise, and copy the web app URL
   (`https://script.google.com/macros/s/…/exec`).

## Step 5 — Point the website at the feed

In the repo, open `lib/notificationConfig.js` and paste the URL:

```js
announcementsFeedUrl: 'https://script.google.com/macros/s/…/exec',
```

Deploy the site once. From then on, form submissions appear on the news
page automatically (the site caches the feed for ~10 minutes).

## Step 6 — Install the WhatsApp-text trigger

In the Apps Script editor: **Triggers (clock icon) → Add Trigger**:

- Function: `onFormSubmit`
- Event source: **From spreadsheet**
- Event type: **On form submit**

Now every submission emails a WhatsApp-formatted message to the club inbox
(`WHATSAPP_TEXT_RECIPIENT` in the script) ready to copy-paste into the group.

## Step 7 — Share the form

Send the form link to committee members (shorten it or pin it in the
committee WhatsApp chat). That link *is* the posting workflow.

---

## Everyday use (what to tell the committee)

1. Fill the **BICC Announcement** form (30 seconds, works on a phone).
2. Check the club inbox — copy the ready-made text into the WhatsApp group.
3. Done. The website noticeboard updates itself within ~10 minutes.

For trip photos: create a shared Google Photos album, paste its link into
the form's **Photo Album Link** field. The website shows a "View photos"
button. Separately, hand-pick the 3–5 best shots and add them to the
repo's `public/images/events/` for the permanent event gallery
(see `CONTENT_GUIDE.md`).

## Updating the script later

If you edit the script, use **Deploy → Manage deployments → Edit (pencil)
→ Version: New version → Deploy** so the *same URL* keeps working. Creating
a brand-new deployment changes the URL and the website would need updating.
