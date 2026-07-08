import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";

const useStyles = createUseStyles({
  learningSection: {
    display: "flex",
    alignItems: "center",
    gap: 50,
    marginTop: 90,
    marginBottom: 90,

    "@media (max-width:900px)": {
      flexDirection: "column-reverse",
    },

    "& img": {
      width: "100%",
      maxWidth: 500,
      borderRadius: 18,
      boxShadow: "0 15px 35px rgba(0, 0, 0, .08)",
      height: "500px",
      "@media (max-width:750px)": {
        width: "100%",
        maxWidth: "100%",
      },
    },
  },

  learningText: {
    flex: 1,

    "& h2": {
      fontSize: 34,
      color: "#5b2f87",
      marginBottom: 25,
    },

    "& p": {
      color: "#555",
      lineHeight: 1.9,
      marginBottom: 18,
      fontSize: 18,
    },
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
});

export default function LearningSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.learningSection}>
      <div className={classes.learningText}>
        <h2>{t(homePageTranslation.learningSectionHeader)}</h2>

        <p>{t(homePageTranslation.learningSectionTextOne)}</p>

        <p>{t(homePageTranslation.learningSectionTextTwo)}</p>
      </div>

      <img src="/foto/sverige.jpg" alt="Sverige" />
    </section>
  );
}
