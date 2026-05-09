import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  nationality: String,
  role: { type: String, enum: ['batsman', 'bowler', 'all-rounder', 'wicket-keeper'], default: 'batsman' },
  profileImage: String,
  debutDate: Date,
  debutPhoto: String,
  debutStory: String,
  bio: String,
  stats: {
    matches: { type: Number, default: 0 },
    runs: { type: Number, default: 0 },
    wickets: { type: Number, default: 0 },
    catches: { type: Number, default: 0 },
    highScore: { type: Number, default: 0 },
    bestBowling: String,
    average: { type: Number, default: 0 }
  },
  peerReviews: [{
    author: String,
    comment: String,
    date: { type: Date, default: Date.now }
  }],
  careerHighlights: [{
    title: String,
    description: String,
    image: String,
    date: Date
  }],
  funnyMoments: [{
    title: String,
    description: String,
    image: String
  }],
  externalStatsLink: String,
  joinedDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);
