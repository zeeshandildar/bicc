import mongoose from 'mongoose';

const YakkianSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  author: String,
  image: String,
  type: { type: String, enum: ['quote', 'moment', 'joke', 'story'], default: 'moment' },
}, { timestamps: true });

export default mongoose.models.Yakkian || mongoose.model('Yakkian', YakkianSchema);
