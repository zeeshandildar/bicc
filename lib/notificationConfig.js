export const notificationConfig = {
  webhookUrl: 'https://script.google.com/macros/s/AKfycbx89307AhHMXZjr6dN2eD6iIboiBQEkx8VGKH3_k_lEpMlK-qw4CCA4Y1myiUG3uUA_/exec',
  // Read-only JSON feed for the club noticeboard (announcements Google Sheet).
  // Setup: docs/announcements-setup.md. Leave empty to hide the noticeboard.
  announcementsFeedUrl: '',
  sharedSecret: 'e072689784445281881e7edfe65feaebb9b84e4c87ca614427d8a230aa40ebd5',
  notificationEmails: [
    'visheshgajjar@gmail.com',
    'zeeshandildar1995@gmail.com',
    'sufiandildar2003@gmail.com',
  ],
  // Per-event overrides. Falls back to notificationEmails when an event type has no entry.
  eventRecipients: {
    join_application: ['bcninternationalcc@gmail.com'],
  },
  timeoutMs: 20000,
};