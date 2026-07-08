import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";

const useStyles = createUseStyles({
  sectionTitle: {
    fontSize: 36,
    color: "#5b2f87",
    textAlign: "center",
    marginBottom: 20,

    "@media (max-width:768px)": {
      fontSize: 28,
    },
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gap: 30,
    marginTop: 60,
    marginBottom: 80,
  },

  featureCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: 18,
    textAlign: "center",
    transition: ".3s",
    border: "1px solid #eee",
    width: "100%",
    cursor: "pointer",

    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 15px 35px rgba(0,0,0,.1)",
    },

    "& img": {
      width: 90,
      height: 90,
      objectFit: "contain",
      marginBottom: 20,
    },

    "& h3": {
      color: "#5b2f87",
      marginBottom: 15,
      fontSize: 24,
    },

    "& p": {
      color: "#666",
      lineHeight: 1.8,
      fontSize: 17,
    },
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    background: "#f1e8fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    margin: "0 auto 20px",
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
});

export default function FeatureSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <h2 className={classes.sectionTitle}>
        {t(homePageTranslation.featureSectionHeader)}
      </h2>

      <div className={classes.divider}></div>

      <section className={classes.featureGrid}>
        <div className={classes.featureCard}>
          <div className={classes.iconCircle}>📚</div>

          <h3> {t(homePageTranslation.featureSectionHeaderTwo)}</h3>

          <p>{t(homePageTranslation.featureSectionTextOne)}</p>
        </div>

        <div className={classes.featureCard}>
          <div className={classes.iconCircle}>📝</div>

          <h3>{t(homePageTranslation.featureSectionHeaderThree)}</h3>

          <p>{t(homePageTranslation.featureSectionTextTwo)}</p>
        </div>

        <div className={classes.featureCard}>
          <div className={classes.iconCircle}>❓</div>

          <h3>{t(homePageTranslation.featureSectionHeaderFour)}</h3>

          <p>{t(homePageTranslation.featureSectionTextThree)}</p>
        </div>
      </section>
    </>
  );
}
