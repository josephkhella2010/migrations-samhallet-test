import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 60,
    marginBottom: 80,

    "@media (max-width:920px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  heroLeft: {
    flex: 1,

    "& h1": {
      fontSize: 48,
      color: "#5b2f87",
      marginBottom: 25,
      lineHeight: 1.2,
    },

    "& p": {
      fontSize: 19,
      lineHeight: 1.9,
      color: "#555",
      marginBottom: 18,
    },

    "@media (max-width:768px)": {
      "& h1": {
        fontSize: 34,
      },

      "& p": {
        fontSize: 17,
      },
    },
  },

  heroButtons: {
    display: "flex",
    gap: 20,
    marginTop: 30,

    "@media (max-width:950px)": {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },

  primaryButton: {
    background: "#5b2f87",
    color: "white",
    border: "none",
    borderRadius: 10,
    padding: "15px 30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 16,
    transition: ".3s",

    "&:hover": {
      background: "#7647a8",
    },
  },

  secondaryButton: {
    background: "#ffffff",
    color: "#5b2f87",
    border: "2px solid #5b2f87",
    borderRadius: 10,
    padding: "15px 30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 16,
    transition: ".3s",

    "&:hover": {
      background: "#5b2f87",
      color: "white",
    },
  },

  heroRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    width: "100%",

    "& img": {
      width: "100%",
      borderRadius: 18,
      boxShadow: "0 15px 35px rgba(0,0,0,.15)",
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

export default function HeroSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroLeft}>
        <h1>{t(homePageTranslation.mainHeader)}</h1>
        <p>{t(homePageTranslation.firstSectionTextOne)}</p>

        <p>{t(homePageTranslation.firstSectionTextTwo)}</p>

        <div className={classes.heroButtons}>
          <button
            className={classes.primaryButton}
            onClick={() => {
              navigate(`/lesson-detail/1`);
            }}
          >
            {t(homePageTranslation.firstSectionBtnOne)}
          </button>

          <button
            className={classes.secondaryButton}
            onClick={() => {
              navigate(`/question-detail/1`);
            }}
          >
            {t(homePageTranslation.firstSectionBtnTwo)}
          </button>
        </div>
      </div>

      <div className={classes.heroRight}>
        <img src="/foto/focusFoto.jpg" alt="Sverige i Fokus" />
      </div>
    </section>
  );
}
