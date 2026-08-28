/**
 * BICC Club Noticeboard — Google Apps Script
 * ------------------------------------------
 * Paste this into the Apps Script editor of the Google Sheet that collects
 * the "BICC Announcement" form responses (Extensions → Apps Script).
 *
 * It does two things:
 *   1. doGet()        — serves all announcements as JSON for the website.
 *   2. onFormSubmit() — emails a ready-to-paste WhatsApp message to the club
 *                       inbox every time someone submits the form.
 *
 * Full setup steps: see docs/announcements-setup.md in the website repo.
 */

// Name of the tab that holds the form responses.
var SHEET_NAME = 'Form Responses 1';

// Where the ready-made WhatsApp text is emailed after each form submission.
var WHATSAPP_TEXT_RECIPIENT = 'bcninternationalcc@gmail.com';

/**
 * Serves the announcements as JSON.
 * Columns are matched by header name (case-insensitive), so column order
 * in the sheet does not matter. Recognised headers:
 *   Timestamp, Title, Title (Spanish), Type, Event Date, Time, Location,
 *   Details, Details (Spanish), Signup Link, Photo Album Link, Hide
 */
function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  var values = sheet ? sheet.getDataRange().getValues() : [];
  var headers = values.length ? values.shift().map(function (h) {
    return String(h).trim().toLowerCase();
  }) : [];
  var tz = Session.getScriptTimeZone();

  function cell(row, name) {
    var i = headers.indexOf(name);
    return i === -1 ? '' : row[i];
  }
  function asText(value) {
    return String(value == null ? '' : value).trim();
  }
  function asDate(value) {
    return value instanceof Date ? Utilities.formatDate(value, tz, 'yyyy-MM-dd') : asText(value);
  }
  function asTime(value) {
    return value instanceof Date ? Utilities.formatDate(value, tz, 'HH:mm') : asText(value);
  }

  var announcements = values
    .filter(function (row) {
      if (asText(cell(row, 'title')) === '') return false;
      var hide = asText(cell(row, 'hide')).toLowerCase();
      return hide !== 'true' && hide !== 'yes' && hide !== 'x';
    })
    .map(function (row) {
      var ts = cell(row, 'timestamp');
      return {
        postedAt: ts instanceof Date ? ts.toISOString() : asText(ts),
        title: asText(cell(row, 'title')),
        titleEs: asText(cell(row, 'title (spanish)')),
        type: asText(cell(row, 'type')),
        date: asDate(cell(row, 'event date')),
        time: asTime(cell(row, 'time')),
        location: asText(cell(row, 'location')),
        details: asText(cell(row, 'details')),
        detailsEs: asText(cell(row, 'details (spanish)')),
        signupLink: asText(cell(row, 'signup link')),
        albumLink: asText(cell(row, 'photo album link')),
      };
    })
    .reverse(); // newest submissions first

  return ContentService
    .createTextOutput(JSON.stringify({ announcements: announcements }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Emails a WhatsApp-formatted version of the announcement so the poster
 * only types the information once. Install via Triggers → Add Trigger:
 * function onFormSubmit, event source "From spreadsheet", type "On form submit".
 *
 * The keys below must match the form question titles exactly.
 */
function onFormSubmit(e) {
  var v = (e && e.namedValues) || {};
  function val(name) {
    return v[name] && v[name][0] ? String(v[name][0]).trim() : '';
  }

  var lines = [];
  lines.push('*' + (val('Type') ? val('Type').toUpperCase() + ' — ' : '') + val('Title') + '*');
  if (val('Event Date')) lines.push('📅 ' + val('Event Date') + (val('Time') ? ', ' + val('Time') : ''));
  if (val('Location')) lines.push('📍 ' + val('Location'));
  if (val('Details')) {
    lines.push('');
    lines.push(val('Details'));
  }
  if (val('Signup Link')) {
    lines.push('');
    lines.push('👉 Sign up: ' + val('Signup Link'));
  }
  if (val('Photo Album Link')) lines.push('📸 Photos: ' + val('Photo Album Link'));

  var message = lines.join('\n');

  MailApp.sendEmail({
    to: WHATSAPP_TEXT_RECIPIENT,
    subject: 'WhatsApp text ready: ' + val('Title'),
    body:
      'This announcement is now live on the website noticeboard (allow ~10 minutes).\n\n' +
      'Copy everything below the line and paste it into the WhatsApp group:\n' +
      '----------------------------------------\n' +
      message,
  });
}
