import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { clearAnswers } from "../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useEffect, useState } from "react";
import ScorePageTranslation from "../../translation/Translations/ScorePageTranslation";
import { useTranslation } from "../../translation/context/useTranslation";

const useStyle = createUseStyles({
  page: {
    maxWidth: 900,
    margin: "40px auto",
    padding: "160px 30px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: 30,
  },

  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: 20,
    marginBottom: 30,
  },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,.1)",
  },

  value: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  pass: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: "20px 0",
  },

  fail: {
    color: "#d32f2f",
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
    margin: "20px 0",
    "& strong": {
      fontSize: 24,
      fontWeight: "bolder",
      color: "#c30606",
    },
  },

  button: {
    display: "block",
    margin: "25px auto",
    padding: "12px 30px",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    background: "#1976d2",
    color: "#fff",
    fontSize: 16,
    "&:hover": {
      background: "#1258a7",
    },
  },

  answers: {
    marginTop: 40,
    "& h2": {
      marginBottom: "30px",
    },
  },

  answerCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,.08)",
    borderLeft: "6px solid #1976d2",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "& h3": {
      marginBottom: "30px",
    },
  },

  correct: {
    color: "green",
    fontWeight: "bold",
  },

  wrong: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
  circle: {
    width: "100px",
    height: "100px",
    backgroundColor: "#f2f2f2",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background 0s ease",
    margin: "auto auto",
  },
  innerCircle: {
    width: "70%",
    height: "70%",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      margin: "0px",
    },
  },
  correctContainer: {
    width: "100%",
    backgroundColor: "#02810287",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "15px",
    color: "green",
    maxWidth: "600px",
    animation: "$shake 1.8s ease-in-out infinite",
  },
  wrongContainer: {
    width: "100%",
    backgroundColor: "#e54d4d87",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "15px",
    color: "#d32f2f",
    maxWidth: "600px",
    animation: "$shake 1.8s ease-in-out infinite",
  },
  "@keyframes shake": {
    "0%, 100%": {
      transform: "translateX(0)",
    },
    "50%": {
      transform: "translateY(-5px)",
    },
  },
});

export default function ScorePage() {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { lang } = useSelector((state: RootState) => state.languageSlice);
  const { userAnswers } = useSelector(
    (state: RootState) => state.userAnswersSlice,
  );

  console.log("userAnswer", userAnswers);
  const TotalCorrectAnswer = userAnswers.reduce((acc, curr) => {
    return curr.isCorrect ? acc + 1 : acc;
  }, 0);
  const TotalWrongAnswer = userAnswers.reduce((acc, curr) => {
    return !curr.isCorrect ? acc + 1 : acc;
  }, 0);
  const yourScore = userAnswers.reduce(
    (acc, curr) => Number(acc) + Number(curr.score),
    0,
  );
  const totalQuestion = userAnswers[0]?.totalQuestions ?? userAnswers.length;
  const testId = userAnswers[0]?.testId ?? "1";

  const maxScore = Number(totalQuestion) * 10;
  const percentage =
    maxScore === 0 ? 0 : ((yourScore / maxScore) * 100).toFixed(2);
  const passPercentage = 70;

  const minCorrectAnswers = Math.ceil(
    (Number(totalQuestion) * passPercentage) / 100,
  );
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const target = Math.round(Number(percentage));

    let current = 0;

    const intervalId = setInterval(() => {
      if (current <= target) {
        setProgress(current);
        current++;
      } else {
        clearInterval(intervalId);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [percentage]);

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>
        {t(ScorePageTranslation.ScorePageTitle)}
      </h1>

      <div className={classes.summary}>
        <div className={classes.card}>
          <h3>{t(ScorePageTranslation.ScorePageCorrect)}</h3>
          <div className={classes.value}>{TotalCorrectAnswer}</div>
        </div>

        <div className={classes.card}>
          <h3>{t(ScorePageTranslation.ScorePageWrong)}</h3>
          <div className={classes.value}>{TotalWrongAnswer}</div>
        </div>

        <div className={classes.card}>
          <h3>{t(ScorePageTranslation.ScorePageYourScore)}</h3>
          <div className={classes.value}>
            {yourScore} / {maxScore}
          </div>
        </div>

        <div className={classes.card}>
          <h3>{t(ScorePageTranslation.Percentage)}</h3>
          <div className={classes.value}>{Math.round(Number(percentage))}%</div>
          <div
            className={classes.circle}
            style={{
              background: `conic-gradient(
      rgb(3, 84, 198) 0% ${progress}%,
      #e5e5e5 ${progress}% 100%
    )`,
            }}
          >
            <span className={classes.innerCircle}>
              <p className={classes.value}>{progress}%</p>
            </span>
          </div>
        </div>
      </div>

      {Number(percentage) < passPercentage ? (
        <p className={classes.fail}>
          {t(ScorePageTranslation.ScorePageFailMessage)}
          {"  "}
          <strong>
            {" "}
            {Number(totalQuestion) -
              Number(minCorrectAnswers) -
              Number(TotalWrongAnswer)}
          </strong>{" "}
          {t(ScorePageTranslation.ScorePageFailMessageTwo)}{" "}
        </p>
      ) : (
        <p className={classes.pass}>{t(ScorePageTranslation.grattisText)}</p>
      )}

      <button
        className={classes.button}
        onClick={() => {
          navigate(`/question-detail/${testId}`);
          dispatch(clearAnswers());
        }}
      >
        {t(ScorePageTranslation.TryAgainBtn)}
      </button>

      <div className={classes.answers}>
        <h2>{t(ScorePageTranslation.ReviewText)}</h2>

        {userAnswers.map((result, index) => {
          const questionTitle =
            lang === "sv"
              ? result.questionTitle
              : lang === "en"
                ? result.questionTitleEn
                : result.questionTitleAr;

          const resultUserAnswer =
            lang === "sv"
              ? result.userAnswer
              : lang === "en"
                ? result.userAnswerEn
                : result.userAnswerAr;

          const resultCorrectAnswer =
            lang === "sv"
              ? result.correctAnswer
              : lang === "en"
                ? result.correctAnswerEn
                : result.correctAnswerAr;
          return (
            <div key={index} className={classes.answerCard}>
              <h3>{questionTitle}</h3>

              <p>
                <strong>{t(ScorePageTranslation.YourAnswer)}</strong>{" "}
                {resultUserAnswer}
              </p>

              {result.isCorrect ? (
                <div className={classes.correctContainer}>
                  <p>{t(ScorePageTranslation.goodJobText)}</p>
                  <p className={classes.correct}>
                    {t(ScorePageTranslation.CorrectAnswerText)}
                  </p>
                </div>
              ) : (
                <>
                  <div className={classes.wrongContainer}>
                    <p>{t(ScorePageTranslation.sorryText)}</p>

                    <p className={classes.wrong}>
                      {t(ScorePageTranslation.WrongAnswerText)}
                    </p>
                  </div>
                  <p>
                    <strong style={{ color: "green" }}>
                      {t(ScorePageTranslation.CorrectAnswerTwo)}
                      {"  "}
                      {resultCorrectAnswer}{" "}
                    </strong>{" "}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
