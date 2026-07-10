import { createUseStyles } from "react-jss";
import HeroSection from "./childComponent/HeroSection";
import AboutSection from "./childComponent/AboutSection";
import FeatureSection from "./childComponent/FeatureSection";
import StatisticSection from "./childComponent/StatisticSection";
import LearningSection from "./childComponent/LearningSection";
import IndexSection from "./childComponent/IndexSection";
import CtaSection from "./childComponent/CtaSection";
import QuestionIndexSection from "./childComponent/QuestionIndexSection";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#f5f7fb",
    },
  },
  homePageWrapper: {
    width: "100%",
    minHeight: "100vh",
    background: "#f4f6fb",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "160px 20px",

    "@media (max-width:768px)": {
      padding: "160px 20px",
    },
  },

  homePageMainContainer: {
    width: "100%",
    maxWidth: 1400,
    background: "#ffffff",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 15px 35px rgba(0,0,0,.08)",

    "@media (max-width:768px)": {
      padding: 20,
      width: "95%",
    },
  },
  divider: {
    width: 120,
    height: 4,
    background: "#5b2f87",
    margin: "0 auto 50px",
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 36,
    color: "#5b2f87",
    textAlign: "center",
    marginBottom: 20,

    "@media (max-width:768px)": {
      fontSize: 28,
    },
  },
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.homePageMainContainer}>
        {/* Hero Section */}

        <HeroSection />
        {/* About */}
        <AboutSection />

        {/* Features */}
        <FeatureSection />

        {/* Features */}
        <IndexSection />
        {/* QuestionIndexSection*/}

        <QuestionIndexSection />
        {/* Statistics */}

        <StatisticSection />
        {/* Learning */}
        <LearningSection />

        {/* Call to Action */}
        <CtaSection />
      </div>
    </div>
  );
}
