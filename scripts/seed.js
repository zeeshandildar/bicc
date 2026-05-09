const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: '.env.local' });

const Member = require('../models/Member').default || require('../models/Member');
const Event = require('../models/Event').default || require('../models/Event');
const Story = require('../models/Story').default || require('../models/Story');
const Memory = require('../models/Memory').default || require('../models/Memory');
const Yakkian = require('../models/Yakkian').default || require('../models/Yakkian');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bicc';

const members = [
  { name: 'Raj Kumar', slug: 'raj-kumar', nationality: '🇮🇳 India', role: 'batsman', stats: { matches: 142, runs: 4280, wickets: 12, catches: 45, highScore: 134, average: 38.2 }, bio: 'Captain and leading run-scorer. Raj has been the backbone of BICC\'s batting lineup for over a decade.', debutStory: 'Raj made his BICC debut in 2012 against Catalunya CC, scoring a composed 47 in a successful chase.', joinedDate: new Date('2012-04-15') },
  { name: 'James Mitchell', slug: 'james-mitchell', nationality: '🇬🇧 England', role: 'all-rounder', stats: { matches: 98, runs: 2150, wickets: 87, catches: 32, highScore: 98, average: 28.6 }, bio: 'The heartbeat of the team. James contributes with bat, ball, and infectious energy.', debutStory: 'James arrived at BICC in 2016 fresh from club cricket in Yorkshire.', joinedDate: new Date('2016-05-20') },
  { name: 'David Williams', slug: 'david-williams', nationality: '🇦🇺 Australia', role: 'batsman', stats: { matches: 115, runs: 3620, wickets: 5, catches: 28, highScore: 112, average: 34.5 }, bio: 'A consistent performer with a classic Australian approach to the game.', joinedDate: new Date('2014-03-10') },
  { name: 'Amit Shah', slug: 'amit-shah', nationality: '🇮🇳 India', role: 'bowler', stats: { matches: 130, runs: 890, wickets: 156, catches: 15, average: 12.4 }, bio: 'Master of spin. Amit has bamboozled many a batsman in the Catalonia League.', joinedDate: new Date('2015-06-12') }
];

const events = [
  { title: 'Menorca Cricket Tour 2024', slug: 'menorca-2024', description: 'The annual pilgrimage to Menorca — sun, cricket, and unforgettable evenings.', date: new Date('2024-06-15'), location: 'Menorca, Spain', type: 'tour', images: ['https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80'] },
  { title: 'Catalonia League Final 2024', slug: 'league-final-2024', description: 'BICC takes on rivals in the Catalonia Cricket League grand final.', date: new Date('2024-10-12'), location: 'Barcelona, Spain', type: 'match', images: ['https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=600&q=80'] }
];

const stories = [
  { title: 'BICC Clinch League Title in Dramatic Final', slug: 'league-title-2024', excerpt: 'In a nail-biting finish, BICC chased down 187 with two balls to spare.', content: 'Full match report here...', author: 'BICC Media', category: 'match-report', coverImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80', featured: true },
  { title: 'Menorca Tour 2024: Sun, Cricket, and Stories', slug: 'menorca-tour-2024', excerpt: 'Our annual pilgrimage to Menorca delivered once again.', content: 'Tour diary content...', author: 'Tour Committee', category: 'tour-diary', coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80' }
];

const memories = [
  { title: 'League Champions 2016', caption: 'The squad celebrates winning the Catalonia Cricket League title.', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80', date: new Date('2016-10-15') },
  { title: 'Menorca Sunset Session', caption: 'Golden hour cricket on the Menorca tour.', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80', date: new Date('2023-06-18') }
];

const yakkian = [
  { title: 'The Oracle Speaks', content: '"I would have hit that for six... if the sun wasn\'t in my eyes."', author: 'Anonymous BICC Legend', type: 'quote' },
  { title: 'BICC Dictionary', content: 'Batting Average (noun): A number you quote when it\'s good and conveniently forget when it\'s not.', author: 'The Yakkian Committee', type: 'joke' }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Member.deleteMany({});
    await Event.deleteMany({});
    await Story.deleteMany({});
    await Memory.deleteMany({});
    await Yakkian.deleteMany({});

    await Member.insertMany(members);
    await Event.insertMany(events);
    await Story.insertMany(stories);
    await Memory.insertMany(memories);
    await Yakkian.insertMany(yakkian);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seed();
