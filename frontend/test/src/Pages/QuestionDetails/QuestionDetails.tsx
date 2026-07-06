/* import { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import type { RootState } from "../../Store/store";
import type {
  AnswerQuestionType,
  QuestionInsideType,
} from "../../utilities/Interfaces";
import {
  setAnswer,
  setCurrentQuestionIndex,
} from "../../Store/Slice/QuestionSlice/UserAnswerSlice";

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
    padding: "30px 0px",
    width: "100%",
    maxWidth: 850,
    minHeight: "80vh",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    overflowY: "auto",
    boxSizing: "border-box",
  },

  lessonTitle: {
    margin: "0 0 30px",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    color: "#1f2937",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: 15,
  },
  questionsWrapperSection: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    flexDirection: "column",
  },
  questionsMainSection: {
    display: "flex",
    overflowX: "hidden",
    width: "80%",
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
  },

  questionTitle: {
    margin: "0 0 20px",
    fontSize: 22,
    color: "#111827",
  },

  answer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 15px",
    marginBottom: 12,
    borderRadius: 10,
    cursor: "pointer",
    transition: "0.2s",

    "&:hover": {
      background: "#eef2ff",
    },

    "& input": {
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },
  BtnContainer: {
    display: "flex",
    gap: "30px",
    "& button": {
      padding: "4px 10px",
      width: "60px",
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
  },
  wrongAnswerPara: {
    color: "red",
  },
  CorrectOrWrongSpan: {
    marginLeft: "50px",
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const gap = 24;
  const letters = ["A", "B", "C", "D"];
  const language = useSelector((state: RootState) => state.languageSlice.lang);
  const currentLanguage = language === "sv" ? "swedish" : "arabic";
  const { question } = useSelector((state: RootState) => state.questionsSlice);
  const { userAnswers, currentQuestionIndex } = useSelector(
    (state: RootState) => state.userAnswersSlice,
  );
  const checkIsRadioChecked =
    userAnswers[currentQuestionIndex - 1]?.isRadioChecked ?? false;
  useEffect(() => {
    if (id) {
      dispatch({
        type: "Fetch-ONLY-QUESTION",
        payload: id,
      });
    }
  }, [dispatch, id]);

  const questions: QuestionInsideType[] =
    question?.questions[currentLanguage] ?? [];
  //const questionLengthArr = questions.length;

  const handleNext = (action: string) => {
    if (action === "next") {
      if (currentQuestionIndex <= questions.length - 1) {
        dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
      }
    } else {
      if (currentQuestionIndex > 0) {
        dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
      }
    }
  };
  const questionsArr = question?.questions;
  console.log("questionsAr", questionsArr);

  const handleUserAnswer = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    questionTitle: string,
    correctAnswer: string,
    correctAnswerInLetter: string | undefined,
    isCorrect: boolean,
  ) => {
    const { value } = e.target;

    dispatch(
      setAnswer({
        index,
        questionTitle,
        userAnswer: value,
        correctAnswer,
        userAnswerLetter: correctAnswerInLetter ?? "",
        isCorrect,
        totalQuestions: questions.length,
        score: isCorrect ? 10 : 0,
        isRadioChecked: true,
        testId: id,
      }),
    );
  };

  return (
    <div className={classes.page}>
      <div className={classes.questionContainer}>
        <h1 className={classes.lessonTitle}>
          {question?.lessonTitle[currentLanguage] ?? `Lesson ${id}`}
        </h1>
        <div className={classes.questionsWrapperSection}>
          <div className={classes.questionsMainSection}>
            {questions.map((item: QuestionInsideType, index: number) => {
              const selected = userAnswers[index]?.userAnswer;
              const showResult = selected !== undefined;
              const findCorrectAnswer = item.answers.find(
                (answer) => answer.correct,
              );
              return (
                <div
                  key={index}
                  className={`${classes.section} `}
                  style={{
                    transform: `translateX(calc(-${(currentQuestionIndex - 1) * 100}% - ${
                      (currentQuestionIndex - 1) * gap
                    }px))`,
                    transition: "transform .5s ease-in-out",
                  }}
                >
                  <h2 className={classes.questionTitle}>
                    {index + 1}- {item.question}
                  </h2>

                  {item.answers.map((answer: AnswerQuestionType, i: number) => {
                    const selectedAnswer = userAnswers[index];
                    const isSelected =
                      selectedAnswer?.userAnswer === answer.text;

                    return (
                      <label key={i} className={classes.answer}>
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={answer.text}
                          checked={
                            userAnswers[index]?.userAnswer === answer.text
                          }
                          onChange={(e) => {
                            handleUserAnswer(
                              index,
                              e,
                              item.question,
                              item.correctAnswer,
                              findCorrectAnswer?.text,
                              answer.correct,
                            );
                          }}
                          className={
                            isSelected
                              ? answer.correct
                                ? classes.correctAnswer
                                : classes.wrongAnswer
                              : ""
                          }
                        />
                        <p
                          className={
                            userAnswers[index]?.userAnswer === answer.text
                              ? answer.correct
                                ? classes.correctAnswerPara
                                : classes.wrongAnswerPara
                              : ""
                          }
                        >
                          {" "}
                          {letters[i]}. {answer.text}
                          {userAnswers[index]?.userAnswer === answer.text && (
                            <span className={classes.CorrectOrWrongSpan}>
                              {answer.correct
                                ? " ✅ Correct Answer"
                                : " ❌ Wrong Answer"}
                            </span>
                          )}
                        </p>
                      </label>
                    );
                  })}
                  {showResult && (
                    <p
                      className={
                        userAnswers[index]?.isCorrect
                          ? classes.correctAnswerPara
                          : classes.wrongAnswerPara
                      }
                    >
                      Correct Answer: {item.correctAnswer} -
                      {` {${findCorrectAnswer?.text}}`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <div className={classes.BtnContainer}>
            <button
              onClick={() => handleNext("prev")}
              style={{
                visibility: currentQuestionIndex === 1 ? "hidden" : "visible",
              }}
            >
              prev
            </button>

            {currentQuestionIndex < questions.length && (
              <button
                style={{
                  visibility: checkIsRadioChecked ? "visible" : "hidden",
                }}
                onClick={() => handleNext("next")}
              >
                next
              </button>
            )}
            {currentQuestionIndex === questions.length && (
              <button
                style={{
                  visibility: checkIsRadioChecked ? "visible" : "hidden",
                }}
                onClick={() => {
                  navigate("/score");
                }}
              >
                Score
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
 */

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
    padding: "30px 0px",
    width: "100%",
    maxWidth: 850,
    minHeight: "80vh",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    overflowY: "auto",
    boxSizing: "border-box",
  },

  lessonTitle: {
    margin: "0 0 30px",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    color: "#1f2937",
    borderBottom: "2px solid #e5e7eb",
    paddingBottom: 15,
    "@media (max-width: 500px)": {
      fontSize: 20,
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
    "&:hover": {
      background: "#eef2ff",
    },

    "& input": {
      cursor: "pointer",
      transform: "scale(1.2)",
    },

    "& p": {
      textAlign: "left",
      "@media (max-width: 780px)": {
        fontSize: 10,
      },
    },
  },
  BtnContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    "& button": {
      padding: "4px 10px",
      width: "60px",
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
  },
  wrongAnswerPara: {
    color: "red",
  },
  CorrectOrWrongSpan: {
    marginLeft: "50px",
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
  const { id } = useParams();

  const language = useSelector((state: RootState) => state.languageSlice.lang);
  const currentLanguage = language === "sv" ? "sv" : "ar";

  const { question } = useSelector((state: RootState) => state.questionsSlice);

  const { userAnswers, currentQuestionIndex } = useSelector(
    (state: RootState) => state.userAnswersSlice,
  );

  const questions: QuestionInsideType[] = question?.questions ?? [];
  console.log("questions", questions);

  const currentIndex = currentQuestionIndex;

  const currentQuestion = questions[currentIndex];

  const currentAnswerState = userAnswers[currentIndex];

  const isAnswered = !!currentAnswerState?.isRadioChecked;
  console.log(isAnswered);

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
    answerText: string,
    isCorrect: boolean,
  ) => {
    dispatch(
      setAnswer({
        index,
        questionTitle: item.question[currentLanguage],
        userAnswer: answerText,
        correctAnswer:
          currentLanguage === "sv"
            ? item.correctAnswerSv
            : item.correctAnswerAr,
        userAnswerLetter: "",
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
        <h1 className={classes.lessonTitle}>
          {language === "sv"
            ? question?.lessonTitle.swedish || `Lesson ${id}`
            : question?.lessonTitle.arabic || `Lesson ${id}`}
        </h1>

        <div className={classes.questionsWrapperSection}>
          <div className={classes.questionsContainer}>
            <div className={classes.questionsMainSection}>
              {questions.map((item: QuestionInsideType, index: number) => {
                const selectedAnswer = userAnswers[index];
                const selected = selectedAnswer?.userAnswer;
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
                          : answer.textAr;

                      const isSelected =
                        selectedAnswer?.userAnswer === answerText;

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
                                answerText,
                                answer.correct,
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
                        Correct Answer:{" "}
                        {currentLanguage === "sv"
                          ? item.correctAnswerSv
                          : item.correctAnswerAr}
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
                prev
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
                  next
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
                  Score
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
