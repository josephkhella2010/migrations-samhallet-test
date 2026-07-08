import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";

const useStyles = createUseStyles({
  aboutSection: {
    display: "flex",
    gap: 60,
    alignItems: "center",
    marginTop: 80,
    marginBottom: 80,

    "@media (max-width:900px)": {
      flexDirection: "column",
    },
  },

  aboutImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 15px 35px rgba(0, 0, 0, .08)",
    borderRadius: 18,

    "& img": {
      width: "100%",
      borderRadius: 18,
    },
  },

  aboutContent: {
    flex: 1,

    "& h2": {
      color: "#5b2f87",
      fontSize: 34,
      marginBottom: 25,
    },

    "& p": {
      color: "#555",
      lineHeight: 1.9,
      marginBottom: 20,
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

export default function AboutSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section className={classes.aboutSection}>
      <div className={classes.aboutImage}>
        <img src="/foto/studying.jpg" alt="Studerar" />
      </div>

      <div className={classes.aboutContent}>
        <h2>{t(homePageTranslation.aboutSectionHeader)}</h2>

        <p>{t(homePageTranslation.aboutSectionTextOne)}</p>

        <p>{t(homePageTranslation.aboutSectionTextTwo)}</p>

        <p>{t(homePageTranslation.aboutSectionTextThree)}</p>
      </div>
    </section>
  );
}
