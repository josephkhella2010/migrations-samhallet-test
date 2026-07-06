import express from "express";
import lesson from "../questions.json" with { type: "json" };
const router = express.Router();

router.get("/questions", (req, res) => {
  try {
    return res.status(200).json(lesson);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
