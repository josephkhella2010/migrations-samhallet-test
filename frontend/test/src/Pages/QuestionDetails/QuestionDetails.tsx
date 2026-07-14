import { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import type { RootState } from "../../Store/store";
import type { QuestionInsideType } from "../../utilities/Interfaces";
import {
  setAnswer,
  setCurrentQuestionIndex,
} from "../../Store/Slice/QuestionSlice/UserAnswerSlice";
import homePageTranslation from "../../translation/Translations/HomePageTranslation";
import { useTranslation } from "../../translation/context/useTranslation";
import ScorePageTranslation from "../../translation/Translations/ScorePageTranslation";

const useStyle = createUseStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    boxSizing: "border-box",
    padding: "100px 30px",
  },

  questionContainer: {
    padding: "30px 20px",
    width: "100%",
    maxWidth: 850,
    minHeight: "80vh",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    overflowY: "auto",
    boxSizing: "border-box",
    "@media (max-width: 780px)": {
      padding: "30px 12px",
    },
  },
  questionNumbers: {
    margin: "0 0 30px",
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700,
    color: "#1f2937",
    paddingBottom: 5,
    textTransform: "capitalize",
    "@media (max-width: 780px)": {
      fontSize: 15,
    },
  },

  lessonTitle: {
    margin: "0 0 30px",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    color: "#1f2937",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: 15,
    textTransform: "capitalize",
    "@media (max-width: 780px)": {
      fontSize: 18,
    },
  },
  questionsWrapperSection: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    flexDirection: "column",
    justifyContent: "center",
  },
  questionsContainer: {
    width: "90%",
    overflow: "hidden",
  },
  questionsMainSection: {
    display: "flex",
    width: "100%",
    gap: "24px",
  },
  section: {
    flex: "0 0 100%",
    width: "100%",
    marginBottom: 35,
    padding: 20,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    background: "#fafafa",
    "@media (max-width: 780px)": {
      padding: 15,
    },
  },

  questionTitle: {
    margin: "0 0 20px",
    fontSize: 22,
    color: "#111827",
    "@media (max-width: 780px)": {
      fontSize: 15,
    },
  },

  answer: {
    display: "flex",
    gap: 15,
    padding: "12px 15px",
    marginBottom: 12,
    borderRadius: 10,
    cursor: "pointer",
    transition: "0.2s",
    alignItems: "flex-start",
    "&:hover": {
      background: "#eef2ff",
    },

    "& input": {
      cursor: "pointer",
      transform: "scale(1.2)",
      marginTop: "2px",
    },

    "& p": {
      textAlign: "left",

      "@media (max-width: 780px)": {
        fontSize: 13,
      },
    },
  },
  BtnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    "& button": {
      padding: "4px 10px",
      mixWidth: "60px",
      height: "30px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "0.5px solid black",
      transition: "transform 0.2s ease, background-color 0.2s ease",

      "&:hover": {
        transform: "scale(1.1)",
        backgroundColor: "#1f2937",
        color: "white",
      },
    },
  },
  correctAnswer: {
    accentColor: "green",
  },
  wrongAnswer: {
    accentColor: "red",
  },
  correctAnswerPara: {
    color: "green",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  wrongAnswerPara: {
    color: "red",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  CorrectOrWrongSpan: {
    //marginLeft: "50px",
  },
  disabledBtn: {
    pointerEvents: "none",
    backgroundColor: "#c3c4c5",
    color: "#f3f4f6",
  },
  notDisabledBtn: {
    backgroundColor: "#1f2937",
    color: "white",
  },
});
export default function QuestionDetails() {
  const classes = useStyle();
  const gap = 24;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useParams();

  const { lang } = useSelector((state: RootState) => state.languageSlice);
  const currentLanguage: "sv" | "ar" | "en" =
    lang === "sv" || lang === "ar" || lang === "en" ? lang : "sv";

  const { question } = useSelector((state: RootState) => state.questionsSlice);

  const { userAnswers, currentQuestionIndex } = useSelector(
    (state: RootState) => state.userAnswersSlice,
  );

  const questions: QuestionInsideType[] = question?.questions ?? [];
  console.log("userAnswers", userAnswers);

  const currentIndex = currentQuestionIndex;

  const currentQuestion = questions[currentIndex];

  const currentAnswerState = userAnswers[currentIndex];

  const isAnswered = !!currentAnswerState?.isRadioChecked;
  console.log("isAnswered", isAnswered);
  console.log("questions", questions);

  /* function */

  useEffect(() => {
    if (id) {
      dispatch({
        type: "Fetch-ONLY-QUESTION",
        payload: id,
      });
    }
  }, [dispatch, id]);

  const handleNext = (dir: "next" | "prev") => {
    if (dir === "next" && currentIndex < questions.length - 1) {
      dispatch(setCurrentQuestionIndex(currentIndex + 1));
    }

    if (dir === "prev" && currentIndex > 0) {
      dispatch(setCurrentQuestionIndex(currentIndex - 1));
    }
  };

  const handleUserAnswer = (
    index: number,
    item: QuestionInsideType,
    answerTextSv: string,
    isCorrect: boolean,
    answerTextAr: string,
    answerTextEn: string,
  ) => {
    dispatch(
      setAnswer({
        index,
        questionTitle: item.question.sv,
        questionTitleAr: item.question.ar,
        questionTitleEn: item.question.en,
        userAnswer: answerTextSv,
        userAnswerAr: answerTextAr,
        userAnswerEn: answerTextEn,
        correctAnswer: item.correctAnswerSv,
        correctAnswerAr: item.correctAnswerAr,
        correctAnswerEn: item.correctAnswerEn,
        isCorrect,
        totalQuestions: questions.length,
        score: isCorrect ? 10 : 0,
        isRadioChecked: true,
        testId: id,
      }),
    );
  };

  if (!currentQuestion) return null;

  return (
    <div className={classes.page}>
      <div className={classes.questionContainer}>
        <p
          className={classes.questionNumbers}
          dir={currentLanguage === "ar" ? "rtl" : "ltr"}
        >
          {currentIndex + 1} {t(homePageTranslation.fromText)}{" "}
          {questions.length}
        </p>
        <h1 className={classes.lessonTitle}>
          {lang === "sv"
            ? question?.lessonTitle.sv || `Lesson ${id}`
            : lang === "ar"
              ? question?.lessonTitle.ar || `Lesson ${id}`
              : question?.lessonTitle.en || `Lesson ${id}`}
        </h1>

        <div className={classes.questionsWrapperSection}>
          <div className={classes.questionsContainer}>
            <div className={classes.questionsMainSection}>
              {questions.map((item: QuestionInsideType, index: number) => {
                const selectedAnswer = userAnswers[index];
                const selected =
                  currentLanguage === "sv"
                    ? selectedAnswer?.userAnswer
                    : currentLanguage === "ar"
                      ? selectedAnswer?.userAnswerAr
                      : selectedAnswer?.userAnswerEn;

                const showResult = selected !== undefined;

                return (
                  <div
                    key={index}
                    className={classes.section}
                    style={{
                      transform: `translateX(calc(-${
                        currentQuestionIndex * 100
                      }% - ${currentQuestionIndex * gap}px))`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  >
                    <h2 className={classes.questionTitle}>
                      {item.question[currentLanguage]}
                    </h2>

                    {item.answers.map((answer, i) => {
                      const answerText =
                        currentLanguage === "sv"
                          ? answer.textSv
                          : currentLanguage === "ar"
                            ? answer.textAr
                            : answer.textEn;

                      const isSelected = selected === answerText;
                      const answerTextSv = answer.textSv;
                      const answerTextAr = answer.textAr;
                      const answerTextEn = answer.textEn;

                      return (
                        <label key={i} className={classes.answer}>
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={answerText}
                            checked={isSelected}
                            onChange={() =>
                              handleUserAnswer(
                                index,
                                item,
                                answerTextSv,
                                answer.correct,
                                answerTextAr,
                                answerTextEn,
                              )
                            }
                            className={
                              isSelected
                                ? answer.correct
                                  ? classes.correctAnswer
                                  : classes.wrongAnswer
                                : ""
                            }
                          />
                          <div>
                            <p
                              className={
                                isSelected
                                  ? answer.correct
                                    ? classes.correctAnswerPara
                                    : classes.wrongAnswerPara
                                  : ""
                              }
                            >
                              {answerText}
                              {isSelected && (
                                <span className={classes.CorrectOrWrongSpan}>
                                  {answer.correct
                                    ? " ✅ Correct Answer"
                                    : " ❌ Wrong Answer"}
                                </span>
                              )}
                            </p>
                          </div>
                        </label>
                      );
                    })}

                    {showResult && (
                      <p
                        className={
                          selectedAnswer?.isCorrect
                            ? classes.correctAnswerPara
                            : classes.wrongAnswerPara
                        }
                      >
                        {t(ScorePageTranslation.CorrectAnswerPara)}{" "}
                        {currentLanguage === "sv"
                          ? item.correctAnswerSv
                          : currentLanguage === "ar"
                            ? item.correctAnswerAr
                            : item.correctAnswerEn}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ================= BUTTONS ================= */}
            <div className={classes.BtnContainer}>
              <button
                onClick={() => handleNext("prev")}
                style={{
                  visibility: currentQuestionIndex === 0 ? "hidden" : "visible",
                }}
              >
                {t(homePageTranslation.prevBtn)}
              </button>

              {currentQuestionIndex < questions.length - 1 && (
                <button
                  onClick={() => handleNext("next")}
                  style={{
                    visibility: userAnswers[currentQuestionIndex]
                      ?.isRadioChecked
                      ? "visible"
                      : "hidden",
                  }}
                >
                  {t(homePageTranslation.nextBtn)}
                </button>
              )}

              {currentQuestionIndex === questions.length - 1 && (
                <button
                  onClick={() => navigate("/score")}
                  style={{
                    visibility: userAnswers[currentQuestionIndex]
                      ?.isRadioChecked
                      ? "visible"
                      : "hidden",
                  }}
                >
                  {t(homePageTranslation.scoreBtn)}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
