import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: String,
  author: String,
  category: { type: String, enum: ['match-report', 'club-news', 'tour-diary', 'interview'], default: 'club-news' },
  coverImage: String,
  publishedAt: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Story || mongoose.model('Story', StorySchema);
