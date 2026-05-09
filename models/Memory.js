import mongoose from 'mongoose';

const MemorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  caption: String,
  image: String,
  date: Date,
  tags: [String],
  featured: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Memory || mongoose.model('Memory', MemorySchema);
