import mongoose from 'mongoose';

const JoinApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  age: Number,
  playingRole: { type: String, enum: ['batsman', 'bowler', 'all-rounder', 'wicket-keeper', 'other'], default: 'other' },
  experienceLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced', 'professional'], default: 'beginner' },
  message: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });

export default mongoose.models.JoinApplication || mongoose.model('JoinApplication', JoinApplicationSchema);
