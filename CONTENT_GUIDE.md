# BICC Content Update Guide

This guide explains how to update the content of the Barcelona International Cricket Club website without touching the technical code.

All content is managed through JavaScript files in the `data/` directory.

---

## 1. How to Add or Edit Players
**File:** `data/members.js`

- **To edit a player:** Find their name in the file and change the values (stats, role, etc.).
- **To add a player:** Copy an existing player block (everything between `{` and `}`) and paste it at the end of the list. Change the `slug` to be unique (e.g., `john-doe`).
- **Roles:** Use one of: `'batsman'`, `'bowler'`, `'all-rounder'`, or `'wicket-keeper'`.

## 2. How to Add or Edit Events & Tours
**File:** `data/events.js`

- **Fields:**
    - `title` / `titleEs`: English and Spanish titles.
    - `slug`: Unique identifier for the URL.
    - `description` / `descriptionEs`: English and Spanish descriptions.
    - `date`: Format as `'YYYY-MM-DD'`.
    - `type`: One of: `'tour'`, `'match'`, `'social'`, or `'training'`.
    - `images`: A list of image URLs.

## 3. How to Add News or Stories
**File:** `data/stories.js`

- **Featured Story:** Only ONE story should have `featured: true`. This story will appear as the large banner at the top of the Stories page.
- **Order:** The website displays them in the order they appear in the file. Add new stories at the top to make them appear first.

## 4. How to Update Club Info (Email, Schedule, Links)
**File:** `data/siteConfig.js`

This is the most important file for general updates:
- **Email:** Change `siteConfig.email`.
- **Training Times:** Update the `training` array. Each item has a `day` and `dayEs` for translations.
- **Social Media:** Update the URLs in the `social` block. To hide an icon, leave the URL empty (e.g., `youtube: ''`).
- **Home Page News:** Edit the `newsTicker` list to change the scrolling text at the top of the home page.

## 5. How to Add Photos to the Gallery
**File:** `data/memories.js`

- Add a new block with a `title`, `caption`, and `image` (URL).
- Spanish translations are available via `titleEs` and `captionEs`.

## 6. How to Add Funny Quotes (Yakkian)
**File:** `data/yakkian.js`

- Add a new block with the quote/joke details.
- Use the `type` field to categorize it (e.g., `'Quote'`, `'Joke'`).

## 7. How to Update Club History
**File:** `data/history.js`

- **Introduction:** Update `history.intro` for the main summary.
- **Eras:** Add or edit historical eras in the `eras` list.
- **Full Story:** Update the paragraphs in `fullStory` for the detailed history page.
- **Milestones:** Add new achievements to the `milestones` list.

## 8. Club Leaderboard (Automatic)
The **Leaderboard** page is fully automated! 

- You do **not** need to edit the leaderboard file.
- It automatically calculates the Top 10 rankings for Runs, Wickets, and Matches played based on the data in `data/members.js`.
- Simply keep the player stats updated in `data/members.js`, and the leaderboard will update itself instantly.

---

## 💡 Pro Tips
- **Images:** Use local paths like `/images/hero/my-photo.jpg` for uploaded images, or high-quality URLs.
- **Translations:** Always provide both English and Spanish versions of text to keep the site bilingual.
- **Syntax:** Be careful not to delete commas `,` or curly braces `{ }` as they are required for the file to work.

