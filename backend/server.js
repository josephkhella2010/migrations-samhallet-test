import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import lesson from "./lesson.json" with { type: "json" };
import getLessonById from "./routes/GetLesson.js";
import getAllLessons from "./routes/GetAllLesson.js";
import getAllQuestions from "./routes/GetAllQuestions.js";
import getQuestionById from "./routes/GetQuestion.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5200;

const URL = process.env.URL;

app.use("/api", getAllLessons);
app.use("/api", getLessonById);

app.use("/api", getAllQuestions);
app.use("/api", getQuestionById);

app.listen(PORT, () => {
  console.log(` server is running: ${URL}${PORT}`);
});
