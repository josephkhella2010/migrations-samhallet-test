import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/store";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { clearAnswers } from "../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useEffect, useState } from "react";

const useStyle = createUseStyles({
  page: {
    maxWidth: 900,
    margin: "40px auto",
    padding: 30,
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
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: "20px 0",
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
});

export default function ScorePage() {
  const classes = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const passPercentage = 85;

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
      <h1 className={classes.title}>Quiz Result</h1>

      <div className={classes.summary}>
        <div className={classes.card}>
          <h3>Correct</h3>
          <div className={classes.value}>{TotalCorrectAnswer}</div>
        </div>

        <div className={classes.card}>
          <h3>Wrong</h3>
          <div className={classes.value}>{TotalWrongAnswer}</div>
        </div>

        <div className={classes.card}>
          <h3>Score</h3>
          <div className={classes.value}>
            {yourScore} / {maxScore}
          </div>
        </div>

        <div className={classes.card}>
          <h3>Percentage</h3>
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

      {Number(percentage) < 85 ? (
        <p className={classes.fail}>
          ❌ Unfortunately, you failed. Please try again. U should get 85% at
          lease To Pass. You Should have Max{" "}
          {Number(totalQuestion) - Number(minCorrectAnswers)} answer Wrong
        </p>
      ) : (
        <p className={classes.pass}>🎉 Congratulations! You passed the quiz.</p>
      )}

      <button
        className={classes.button}
        onClick={() => {
          navigate(`/question-detail/${testId}`);
          dispatch(clearAnswers());
        }}
      >
        Try Again
      </button>

      <div className={classes.answers}>
        <h2>Answer Review</h2>

        {userAnswers.map((result, index) => (
          <div key={index} className={classes.answerCard}>
            <h3>{result.questionTitle}</h3>

            <p>
              <strong>Your Answer:</strong> {result.userAnswer}
            </p>

            {result.isCorrect ? (
              <p className={classes.correct}>✔ Correct Answer</p>
            ) : (
              <>
                <p className={classes.wrong}>✖ Wrong Answer</p>
                <p>
                  <strong style={{ color: "green" }}>
                    Correct Answer: {"  "}
                    {result.correctAnswer} .{" "}
                  </strong>{" "}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
