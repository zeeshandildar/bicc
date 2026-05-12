# BICC — Barcelona International Cricket Club Website
*Last Updated: May 12, 2026*

Official website for the **Barcelona International Cricket Club** — Catalonia's oldest cricket club, founded in 1982.

---

## What Changed Recently

This README has been updated to match the current codebase changes:

- Removed MongoDB/Mongoose backend integration and related models.
- Removed database seeding flow and `npm run seed` script.
- Removed content read APIs for events/members/stories (site now serves those from local `data/` files).
- Updated membership application flow:
  - `JoinForm` now submits JSON to `/api/join`.
  - `/api/join` and `/api/contact` now send notifications to a Google Apps Script webhook.
- Added webhook-based notification flow for Google Sheets logging and email delivery.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Frontend | React 19 |
| Backend | Next.js Route Handlers (`/app/api`) |
| Notifications | Google Apps Script Webhook |
| Data Capture | Google Sheets |
| Content Source | Local JS data files in `data/` |
| Styling | Vanilla CSS (CSS Modules + global tokens) |
| Hosting | Vercel |

---

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure notification settings in code

Update `lib/notificationConfig.js`:

```js
export const notificationConfig = {
  webhookUrl: 'https://script.google.com/macros/s/your-deployment-id/exec',
  sharedSecret: 'replace-with-the-same-secret-used-in-apps-script',
  notificationEmails: ['committee1@example.com', 'committee2@example.com'],
  timeoutMs: 20000,
};
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Folder Structure

```text
bicc/
├── app/                    # Pages and API routes (Next.js App Router)
│   ├── layout.js           # Root layout — Navbar, Footer, Language toggle
│   ├── page.js             # Home page
│   ├── globals.css         # Global design system (colors, fonts, buttons)
│   ├── contact/            # Contact page
│   ├── events/             # Events list + detail pages
│   ├── join/               # Membership application form
│   ├── leaderboard/        # Club leaderboard page
│   ├── members/            # Members roster + individual profiles
│   ├── memories/           # Photo gallery
│   ├── stories/            # News and stories
│   ├── story/              # Club history page
│   ├── yakkian/            # Club humor section
│   └── api/
│       ├── contact/        # Contact form endpoint
│       └── join/           # Membership endpoint (webhook notifications)
│
├── components/             # Reusable UI components
├── data/                   # Main editable content source
│   ├── members.js
│   ├── events.js
│   ├── stories.js
│   ├── memories.js
│   ├── yakkian.js
│   ├── history.js
│   └── siteConfig.js
│
├── lib/
│   ├── notifications.js    # Webhook notifications (Apps Script)
│   └── LanguageContext.js  # EN/ES language toggle
│
└── public/                 # Static assets (images, icons)
```

---

## Updating Website Content

> **The easiest way to update content is to edit the files in the `data/` folder.**
> Most site sections read directly from those files.

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for step-by-step instructions.

---

## Deployment

### Deploy to Vercel (Current Platform)

1. Push your code to GitHub.
2. Import the repository in [vercel.com](https://vercel.com).
3. Ensure `lib/notificationConfig.js` has production values before deploy.
4. Deploy.

Vercel will auto-deploy on new pushes to your main branch.

---

## Notification Config

Notification delivery is configured in `lib/notificationConfig.js`.

| Property | Description | Required |
|---|---|---|
| `webhookUrl` | Deployed Google Apps Script Web App URL | Yes |
| `sharedSecret` | HMAC secret used to sign outgoing webhook payloads | Recommended |
| `notificationEmails` | Recipient email list passed to the webhook payload | Optional |
| `timeoutMs` | Webhook timeout in milliseconds | Optional |

### Google Apps Script Setup

1. Create a Google Sheet for submissions.
2. Open **Extensions -> Apps Script**.
3. Paste this script and update `SHEET_NAME` / `NOTIFY_EMAILS`:

```javascript
const SHEET_NAME = 'Submissions';
const NOTIFY_EMAILS = ['committee1@example.com', 'committee2@example.com'];
const SHARED_SECRET = 'replace-with-the-same-secret-used-in-lib-notificationConfig-js';

function doPost(e) {
  try {
    const rawBody = e.postData && e.postData.contents ? e.postData.contents : '';
    const payload = JSON.parse(rawBody || '{}');
    const signature = payload.signature || '';

    if (SHARED_SECRET) {
      const unsignedPayload = {
        eventType: payload.eventType || 'unknown',
        submittedAt: payload.submittedAt || new Date().toISOString(),
        recipients: payload.recipients || [],
        data: payload.data || {},
      };
      const expected = Utilities.computeHmacSha256Signature(JSON.stringify(unsignedPayload), SHARED_SECRET)
        .map(b => ('0' + (b & 0xFF).toString(16)).slice(-2))
        .join('');
      if (signature !== expected) {
        return ContentService.createTextOutput('Invalid signature').setMimeType(ContentService.MimeType.TEXT);
      }
    }

    const eventType = payload.eventType || 'unknown';
    const submittedAt = payload.submittedAt || new Date().toISOString();
    const data = payload.data || {};
    const recipients = (payload.recipients || []).length ? payload.recipients : NOTIFY_EMAILS;

    const sheet = getOrCreateSheet_();
    sheet.appendRow([
      submittedAt,
      eventType,
      JSON.stringify(data),
    ]);

    MailApp.sendEmail({
      to: recipients.join(','),
      subject: buildSubject_(eventType, data),
      htmlBody: buildEmailHtml_(eventType, submittedAt, data),
    });

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Submitted At', 'Event Type', 'Payload']);
  }
  return sheet;
}

function buildSubject_(eventType, data) {
  if (eventType === 'join_application') {
    const fullName = data.fullName || 'Unknown Applicant';
    return `BICC New Joinee Application : ${fullName}`;
  }

  if (eventType === 'contact_message') {
    const name = data.name || 'Unknown Sender';
    return `BICC Contact Message : ${name}`;
  }

  return `BICC Notification : ${eventType}`;
}

function htmlEscape_(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildKeyValueRow_(label, value) {
  return `<tr><td style="padding:10px 12px;color:#6b7280;font-size:13px;width:220px;border-bottom:1px solid #f1f5f9;">${htmlEscape_(label)}</td><td style="padding:10px 12px;color:#111827;font-size:14px;border-bottom:1px solid #f1f5f9;">${htmlEscape_(value || '—')}</td></tr>`;
}

function buildEmailHtml_(eventType, submittedAt, data) {
  const headerTitle = eventType === 'join_application'
    ? 'New BICC Joinee Application'
    : eventType === 'contact_message'
      ? 'New BICC Contact Message'
      : `BICC Notification: ${eventType}`;

  const intro = 'Submitted to BICC Club Committee for review.';

  let rows = '';
  if (eventType === 'join_application') {
    rows += buildKeyValueRow_('Full Name', data.fullName);
    rows += buildKeyValueRow_('Email', data.email);
    rows += buildKeyValueRow_('Phone', data.phone);
    rows += buildKeyValueRow_('Age', data.age);
    rows += buildKeyValueRow_('Nationality', data.nationality);
    rows += buildKeyValueRow_('Playing Role', data.playingRole);
    rows += buildKeyValueRow_('Experience Level', data.experienceLevel);
    rows += buildKeyValueRow_('Message', data.message);
  } else if (eventType === 'contact_message') {
    rows += buildKeyValueRow_('Name', data.name);
    rows += buildKeyValueRow_('Email', data.email);
    rows += buildKeyValueRow_('Message', data.message);
  } else {
    rows = Object.keys(data)
      .map(k => buildKeyValueRow_(k, data[k]))
      .join('');
  }

  return `
    <div style="background:#f8fafc;padding:24px;font-family:Arial,sans-serif;color:#0f172a;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:760px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
        <tr>
          <td style="background:#0f172a;padding:20px 24px;">
            <h2 style="margin:0;color:#ffffff;font-size:22px;">${htmlEscape_(headerTitle)}</h2>
            <p style="margin:8px 0 0;color:#cbd5e1;font-size:13px;">${htmlEscape_(intro)}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 24px;color:#475569;font-size:13px;">
            <strong>Submitted At:</strong> ${htmlEscape_(submittedAt)}
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 24px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}
```

4. Deploy as a Web App:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the deployed URL and set it as `webhookUrl` in `lib/notificationConfig.js`.
6. Use the same `sharedSecret` value in Apps Script and `lib/notificationConfig.js`.

---

## Available Commands

```bash
npm run dev     # Start local development server
npm run build   # Build for production
npm run start   # Start production server
```

---

## Languages

The website supports **English** and **Spanish**. The language toggle is in the Navbar.

User preference is saved to `localStorage` so it persists across sessions.

To understand how translations work, see `lib/LanguageContext.js`.
