import express from "express";
import lesson from "../questions.json" with { type: "json" };
const router = express.Router();

router.get("/question/:lessonId", (req, res) => {
  try {
    const { lessonId } = req.params; // <-- no ()

    const findQuestion = lesson.lessons.find(
      (item) => String(item.lessonId) === lessonId,
    );

    if (!findQuestion) {
      return res.status(404).json({
        message: "question not found",
      });
    }

    return res.status(200).json(findQuestion);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
