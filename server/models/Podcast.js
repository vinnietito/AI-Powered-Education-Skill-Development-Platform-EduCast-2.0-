import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  summaryText: String,
  audioUrl: String,
  sourceType: { type: String, enum: ["text","youtube"] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Podcast", podcastSchema);
