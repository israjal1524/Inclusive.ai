import express from "express";
import { routePrompt } from "../services/router.js";

const router = express.Router();

// POST /api/chat
// Body: { message: string, history: Array }
router.post("/", async (req, res) => {
  const { message, history = [] } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });
  try {
    const result = await routePrompt(message, history);
    res.json(result);
    // result shape: { reply, model, provider, reason }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
