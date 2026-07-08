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
  sectionDescription: {
    maxWidth: 900,
    margin: "0 auto 60px",
    textAlign: "center",
    fontSize: 18,
    color: "#666",
    lineHeight: 1.8,
  },
  statisticsSection: {
    marginTop: 80,
    marginBottom: 80,
  },
  statisticsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 25,
    marginTop: 40,
  },

  statisticCard: {
    background: "#5b2f87",
    color: "white",
    padding: 30,
    borderRadius: 16,
    textAlign: "center",

    "& h2": {
      fontSize: 42,
      marginBottom: 10,
    },

    "& p": {
      fontSize: 18,
      lineHeight: 1.6,
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

export default function StatisticSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.statisticsSection}>
      <h2 className={classes.sectionTitle}>
        {t(homePageTranslation.statsSectionHeader)}
      </h2>

      <div className={classes.statisticsGrid}>
        <div className={classes.statisticCard}>
          <h2>12</h2>
          <p>{t(homePageTranslation.statsSectionTextOne)}</p>
        </div>

        <div className={classes.statisticCard}>
          <h2>100+</h2>
          <p>{t(homePageTranslation.statsSectionTextTwo)}</p>
        </div>

        <div className={classes.statisticCard}>
          <h2>100+</h2>
          <p>{t(homePageTranslation.statsSectionTextThree)}</p>
        </div>

        <div className={classes.statisticCard}>
          <h2>100%</h2>
          <p>{t(homePageTranslation.statsSectionTextFour)}</p>
        </div>
      </div>
    </section>
  );
}
