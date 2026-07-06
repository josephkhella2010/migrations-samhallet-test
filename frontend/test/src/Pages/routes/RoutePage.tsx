import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import { ToastContainer } from "react-toastify";
import NavigationContainer from "../navigation/NavigationContainer";
import LessonDetails from "../LessonDetails/LessonDetails";
import QuestionDetails from "../QuestionDetails/QuestionDetails";
import ScorePage from "../scorePage/ScorePage";

export default function RoutesPage() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <NavigationContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson-detail/:id" element={<LessonDetails />} />
          <Route path="/question-detail/:id" element={<QuestionDetails />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </Router>
    </div>
  );
}
