import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";
import { useNavigate } from "react-router-dom";
import { questionArr } from "../../../utilities/Array";
import { useDispatch } from "react-redux";
import { clearAnswers } from "../../../Store/Slice/QuestionSlice/UserAnswerSlice";

const useStyles = createUseStyles({
  chapterSection: {
    marginTop: 100,
  },

  chapterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 30,
    marginTop: 40,
  },

  chapterCard: {
    background: "#fff",
    borderRadius: 18,
    padding: 30,
    border: "1px solid #ddd",
    transition: ".3s",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 30px rgba(0,0,0,.12)",
    },

    "& h3": {
      color: "#5b2f87",
      marginBottom: 15,
      fontSize: 24,
    },

    "& p": {
      color: "#666",
      lineHeight: 1.7,
      marginBottom: 25,
    },
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  chapterButton: {
    background: "#5b2f87",
    color: "white",
    border: "none",
    padding: "13px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bold",
    transition: ".3s",

    "&:hover": {
      background: "#7647a8",
    },
  },
  indexContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h2": {
      color: "#5b2f87",
      fontSize: "36px",
      textAlign: "center",
      marginBottom: "30px",
      "@media (max-width:768px)": {
        fontSize: "24px",
      },
    },
    "& h3": {
      color: "#5b2f87",
      fontSize: "36px",
      textAlign: "center",
      marginBottom: "30px",
      "@media (max-width:768px)": {
        fontSize: "18px",
      },
    },
  },
  indexSection: {
    width: "100%",
    display: "grid",
    padding: "30px",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
    gap: "20px",
    "@media (max-width:950px)": {
      gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
    "@media (max-width:768px)": {
      gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
    },
  },
  indexCard: {
    padding: "50px 30px",
    background: " #fff",
    borderRadius: "16px",
    width: "100%",
    border: "1px solid #eee ",
    color: "#5b2f87",
    fontSize: "18px",
    marginBottom: "15px",
    cursor: "pointer",
    wordBreak: "break-word",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0,0,0,.1)",
    },
    transition: "transform 0.3s",
    textAlign: "left",
  },
  divider: {
    width: 120,
    height: 4,
    background: "#5b2f87",
    margin: "0 auto 50px",
    borderRadius: 20,
  },

  "@media (max-width:768px)": {
    chapterGrid: {
      gridTemplateColumns: "1fr",
    },

    statisticsGrid: {
      gridTemplateColumns: "1fr",
    },

    featureGrid: {
      gridTemplateColumns: "1fr",
    },

    learningText: {
      "& h2": {
        fontSize: 28,
      },

      "& p": {
        fontSize: 17,
      },
    },

    chapterCard: {
      padding: 20,
    },

    statisticCard: {
      "& h2": {
        fontSize: 32,
      },
    },
  },

  indexMainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  indexSectionTwo: {
    width: "100%",
    display: "grid",
    padding: "30px",
    gridTemplateColumns: "repeat(3, minmax(100px, 1fr))",
    gap: "20px",
    "@media (max-width:950px)": {
      gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
    },
    "@media (max-width:768px)": {
      gridTemplateColumns: "repeat(1, minmax(100px, 1fr))",
    },
  },
});
export default function QuestionIndexSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = localStorage.getItem("lang");

  const lessonsLength = 13;
  const lessonsArr = Array.from({ length: lessonsLength }, (_, i) => i + 1);
  return (
    <div className={classes.indexMainContainer}>
      <section className={classes.indexContainer}>
        <h2>{t(homePageTranslation.questionsHeader)}</h2>
        <div className={classes.divider}></div>
        <div className={classes.indexSection}>
          {lessonsArr &&
            lessonsArr.map((_, index) => {
              const id = index + 1;
              return (
                <div
                  key={index}
                  className={classes.indexCard}
                  onClick={() => {
                    navigate(`/question-detail/${id} `);
                    dispatch(clearAnswers());
                  }}
                >
                  <h3>
                    {" "}
                    {index + 1}- {t(homePageTranslation.questionsText)}{" "}
                    {index + 1}
                  </h3>
                </div>
              );
            })}
        </div>
      </section>
      <section className={classes.indexContainer}>
        <h2>{t(homePageTranslation.otherQuestionsHeader)}</h2>

        <div className={classes.divider}></div>

        <div className={classes.indexSection}>
          {questionArr &&
            questionArr.map((item, index) => {
              const currentLanguage =
                lang === "sv" ? item.sv : lang === "en" ? item.en : item.ar;
              return (
                <div
                  key={index}
                  className={classes.indexCard}
                  onClick={() => {
                    navigate(`/question-detail/${item.number} `);
                    dispatch(clearAnswers());
                  }}
                >
                  <h3>
                    {" "}
                    {index + 1}- {currentLanguage}
                  </h3>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
