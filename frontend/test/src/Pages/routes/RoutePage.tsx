import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import { ToastContainer } from "react-toastify";
import NavigationContainer from "../navigation/NavigationContainer";
import LessonDetails from "../LessonDetails/LessonDetails";
import QuestionDetails from "../QuestionDetails/QuestionDetails";
import ScorePage from "../scorePage/ScorePage";
import type { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
import LoadingPage from "../LoadingPage/LoadingPage";
import FooterSection from "../Footer/FooterSection";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mainWrapper: {
    minHeight: "100vh",
  },
});

export default function RoutesPage() {
  const classes = useStyles();
  const { isLoading } = useSelector(
    (state: RootState) => state.LoadAndErrorSlice,
  );
  // Hide loading only on home page
  const showLoading = isLoading && location.pathname !== "/";
  return (
    <div>
      <Router>
        <ToastContainer />
        <NavigationContainer />

        {showLoading && <LoadingPage />}
        <div className={classes.mainWrapper}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lesson-detail/:id" element={<LessonDetails />} />
            <Route path="/question-detail/:id" element={<QuestionDetails />} />
            <Route path="/score" element={<ScorePage />} />
          </Routes>
        </div>
        <FooterSection />
      </Router>
    </div>
  );
}
