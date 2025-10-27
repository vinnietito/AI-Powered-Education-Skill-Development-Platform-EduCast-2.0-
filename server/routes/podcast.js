import express from "express";
import Podcast from "../models/Podcast.js";

const router = express.Router();

// Test route
router.get("/", async (req, res) => {
  const podcasts = await Podcast.find().limit(5);
  res.json(podcasts);
});

export default router;
