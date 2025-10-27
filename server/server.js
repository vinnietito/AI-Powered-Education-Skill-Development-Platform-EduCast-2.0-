import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import authRoutes from "./routes/auth.js";
import podcastRoutes from "./routes/podcast.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/podcast", podcastRoutes);

// connect DB & start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
