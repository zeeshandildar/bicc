import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  date: Date,
  location: String,
  type: { type: String, enum: ['tour', 'match', 'social', 'training'], default: 'match' },
  images: [String],
  highlights: [String],
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
