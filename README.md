# BICC — Barcelona International Cricket Club Website
*Last Updated: May 10, 2026*

Official website for the **Barcelona International Cricket Club** — Catalonia's oldest cricket club, founded in 1982.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Frontend | React 19 |
| Database | MongoDB via Mongoose |
| Styling | Vanilla CSS (CSS Modules + global tokens) |
| Hosting | Vercel |

---

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your MongoDB URI:

```bash
copy .env.example .env.local
```

Then open `.env.local` and add your connection string:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/bicc
```

### 3. Seed the database (first time only)

This populates MongoDB with sample data:

```bash
npm run seed
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Folder Structure

```
bicc/
├── app/                    # Pages and API routes (Next.js App Router)
│   ├── layout.js           # Root layout — Navbar, Footer, Language toggle
│   ├── page.js             # Home page
│   ├── globals.css         # Global design system (colors, fonts, buttons)
│   ├── contact/            # Contact page
│   ├── events/             # Events list + detail pages
│   ├── join/               # Membership application form
│   ├── leaderboard/        # Club Leaderboard (Automated rankings)
│   ├── members/            # Members roster + individual profiles
│   ├── memories/           # Photo gallery
│   ├── stories/            # News and stories
│   ├── story/              # Club history page
│   ├── yakkian/            # Club humor section
│   └── api/                # Backend API routes (connect to MongoDB)
│
├── components/             # Reusable UI components
│   ├── Navbar/             # Navigation bar
│   ├── Footer/             # Site footer
│   ├── Hero/               # Home page hero with slideshow
│   ├── MemberCard/         # Player card used on Members page
│   ├── EventCard/          # Event card used on Events page
│   ├── StoryCard/          # Story card used on Stories page
│   ├── JoinForm/           # Membership application form
│   ├── Timeline/           # Club history timeline
│   ├── MemoryGallery/      # Photo gallery grid
│   ├── ScrollAnimation/    # Scroll-reveal animation wrapper
│   └── ...
│
├── data/                   ← ✏️ EDIT CONTENT HERE
│   ├── members.js          # All player data
│   ├── events.js           # All events and tours
│   ├── stories.js          # All news articles
│   ├── memories.js         # All gallery photos
│   ├── yakkian.js          # Yakkian quotes and humor
│   └── siteConfig.js       # Club email, training times, social links, etc.
│
├── lib/
│   ├── mongodb.js          # MongoDB connection helper
│   └── LanguageContext.js  # EN/ES language toggle
│
├── models/                 # MongoDB data schemas
│   ├── Member.js
│   ├── Event.js
│   ├── Story.js
│   ├── Memory.js
│   ├── JoinApplication.js
│   └── Yakkian.js
│
├── scripts/
│   └── seed.js             # Database seeding script
│
└── public/                 # Static assets (images, icons)
```

---

## Updating Website Content

> **The easiest way to update content is to edit the files in the `data/` folder.**
> You do NOT need to touch any component or page files.

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for step-by-step instructions.

---

## Deployment

### Deploy to Vercel (Current Platform)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repository
3. Add environment variable: `MONGODB_URI` = your MongoDB Atlas connection string
4. Click **Deploy**

That's it. Vercel auto-deploys on every push to `main`.

### Switching to a Different Platform

This is a standard Next.js app with no Vercel-specific features except hosting.

**To move to another platform (Railway, Render, Fly.io, etc.):**

1. Make sure the platform supports Node.js
2. Set the `MONGODB_URI` environment variable on the new platform
3. Set the build command to: `npm run build`
4. Set the start command to: `npm run start`
5. The app runs on port 3000 by default

**To export as a static site (no server needed):**

> Note: Static export will disable the API routes and MongoDB features.
> The pages will show data from the `data/` files only (no database).

Add this to `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  // ... rest of config
};
```
Then run `npm run build` — the `out/` folder will contain the static site.

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string | Yes |

See `.env.example` for the exact format.

---

## Available Commands

```bash
npm run dev     # Start local development server
npm run build   # Build for production
npm run start   # Start production server
npm run seed    # Seed the MongoDB database with sample data
```

---

## Languages

The website supports **English** and **Spanish**. The language toggle is in the Navbar.

User preference is saved to `localStorage` so it persists across sessions.

To understand how translations work, see `lib/LanguageContext.js`.
