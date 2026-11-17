import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    categoryLabel: String,
    badge: String,
    description: { type: String, required: true },
    architecture: [String],
    highlights: [String],
    tech: [String],
    githubUrl: String,
    demoUrl: String,
    icon: String,
    gradient: String
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
