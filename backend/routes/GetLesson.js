import express from "express";
import lesson from "../lesson.json" with { type: "json" };
const router = express.Router();

router.get("/lesson/:lessonId", (req, res) => {
  try {
    const { lessonId } = req.params; // <-- no ()

    const findLesson = lesson.lessons.find(
      (item) => String(item.lessonId) === lessonId,
    );

    if (!findLesson) {
      return res.status(404).json({
        message: "Lesson not found",
      });
    }

    return res.status(200).json(findLesson);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
