import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import homePageTranslation from "../../../translation/Translations/HomePageTranslation";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  ctaSection: {
    marginTop: 100,
    background: "linear-gradient(135deg,#5b2f87,#8c5cc6)",
    color: "white",
    borderRadius: 20,
    padding: "60px 40px",
    textAlign: "center",

    "& h2": {
      fontSize: 38,
      marginBottom: 20,
    },

    "& p": {
      fontSize: 20,
      maxWidth: 800,
      margin: "0 auto 30px",
      lineHeight: 1.8,
    },
  },

  ctaButton: {
    background: "white",
    color: "#5b2f87",
    border: "none",
    padding: "16px 35px",
    borderRadius: 12,
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 18,

    "&:hover": {
      opacity: 0.9,
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

export default function CtaSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className={classes.ctaSection}>
      <h2>{t(homePageTranslation.ctSectionHeader)}</h2>

      <p>{t(homePageTranslation.ctSectionTextOne)}</p>

      <button
        className={classes.ctaButton}
        onClick={() => {
          navigate(`/lesson-detail/1`);
        }}
      >
        {t(homePageTranslation.ctSectionTextTwo)}
      </button>
    </section>
  );
}
