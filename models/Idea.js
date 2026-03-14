import mongoose from "mongoose";

const IdeaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.models.Idea || mongoose.model("Idea", IdeaSchema);