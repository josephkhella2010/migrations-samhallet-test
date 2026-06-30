import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5200;

const URL = process.env.URL;

app.listen(PORT, () => {
  console.log(` server is running: ${URL}${PORT}`);
});
