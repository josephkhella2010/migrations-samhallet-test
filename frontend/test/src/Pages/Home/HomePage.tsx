import { createUseStyles } from "react-jss";
import { chapterTitles } from "../../utilities/Array";
import { useNavigate } from "react-router-dom";

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
    padding: "70px 20px",
    boxSizing: "border-box",

    "@media (max-width:768px)": {
      padding: "100px 20px",
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

  footer: {
    marginTop: 80,
    paddingTop: 40,
    borderTop: "1px solid #ddd",
    textAlign: "center",
    color: "#777",

    "& h3": {
      color: "#5b2f87",
      marginBottom: 15,
    },

    "& p": {
      lineHeight: 1.8,
      marginBottom: 10,
    },
  },

  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: 25,
    flexWrap: "wrap",
    marginTop: 25,

    "& a": {
      textDecoration: "none",
      color: "#5b2f87",
      fontWeight: "bold",

      "&:hover": {
        textDecoration: "underline",
      },
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

    ctaSection: {
      padding: 30,
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
});

export default function HomePage() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.homePageWrapper}>
      <div className={classes.homePageMainContainer}>
        {/* Hero Section */}
        <section className={classes.heroSection}>
          <div className={classes.heroLeft}>
            <h1>Grundläggande kunskaper om det svenska samhället</h1>

            <p>
              Välkommen till en modern studieplattform för dig som vill lära dig
              mer om det svenska samhället och förbereda dig inför
              medborgarskapsprovet.
            </p>

            <p>
              Webbplatsen bygger på utbildningsmaterialet{" "}
              <strong>Sverige i Fokus </strong>
              och innehåller tydliga sammanfattningar, tester och övningsfrågor
              för varje kapitel.
            </p>

            <div className={classes.heroButtons}>
              <button
                className={classes.primaryButton}
                onClick={() => {
                  navigate(`/lesson-detail/1`);
                }}
              >
                Börja studera
              </button>

              <button
                className={classes.secondaryButton}
                onClick={() => {
                  navigate(`/question-detail/1`);
                }}
              >
                Test
              </button>
            </div>
          </div>

          <div className={classes.heroRight}>
            <img src="/foto/focusFoto.jpg" alt="Sverige i Fokus" />
          </div>
        </section>

        {/* About */}
        <section className={classes.aboutSection}>
          <div className={classes.aboutImage}>
            <img src="/foto/studying.jpg" alt="Studerar" />
          </div>

          <div className={classes.aboutContent}>
            <h2>Om webbplatsen</h2>

            <p>
              Den här webbplatsen är skapad för att hjälpa elever och andra som
              vill förstå hur det svenska samhället fungerar.
            </p>

            <p>
              Allt material är organiserat kapitel för kapitel så att du enkelt
              kan läsa en sammanfattning, göra ett test och öva på extra frågor
              innan du går vidare.
            </p>

            <p>
              Målet är att göra studierna enklare, roligare och mer
              strukturerade.
            </p>
          </div>
        </section>

        {/* Features */}
        <h2 className={classes.sectionTitle}>Vad finns på webbplatsen?</h2>

        <div className={classes.divider}></div>

        <section className={classes.featureGrid}>
          <div className={classes.featureCard}>
            <div className={classes.iconCircle}>📚</div>

            <h3>Sammanfattningar</h3>

            <p>
              Varje kapitel innehåller en tydlig sammanfattning med de
              viktigaste begreppen och fakta.
            </p>
          </div>

          <div className={classes.featureCard}>
            <div className={classes.iconCircle}>📝</div>

            <h3>Kapiteltester</h3>

            <p>
              Efter varje kapitel kan du göra ett test med flervalsfrågor och
              kontrollera dina kunskaper.
            </p>
          </div>

          <div className={classes.featureCard}>
            <div className={classes.iconCircle}>❓</div>

            <h3>Övningsfrågor</h3>

            <p>
              Extra frågor hjälper dig att repetera och förstå innehållet på
              djupet.
            </p>
          </div>
        </section>
        <section className={classes.indexContainer}>
          <h2>Innehållsförteckning</h2>
          <div className={classes.divider}></div>
          <div className={classes.indexSection}>
            {chapterTitles &&
              chapterTitles.map((chapter, index) => {
                return (
                  <div key={index} className={classes.indexCard}>
                    <h3>
                      {" "}
                      {index + 1}- {chapter}
                    </h3>
                  </div>
                );
              })}
          </div>
        </section>

        {/* Statistics */}
        <section className={classes.statisticsSection}>
          <h2 className={classes.sectionTitle}>Webbplatsen innehåller</h2>

          <div className={classes.statisticsGrid}>
            <div className={classes.statisticCard}>
              <h2>13</h2>
              <p>Kapitel</p>
            </div>

            <div className={classes.statisticCard}>
              <h2>100+</h2>
              <p>Testfrågor</p>
            </div>

            <div className={classes.statisticCard}>
              <h2>100+</h2>
              <p>Övningsfrågor</p>
            </div>

            <div className={classes.statisticCard}>
              <h2>100%</h2>
              <p>Gratis studiematerial</p>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className={classes.learningSection}>
          <div className={classes.learningText}>
            <h2>Vad kommer du att lära dig?</h2>

            <p>
              Du får kunskap om Sveriges geografi, demokrati, lagar, mänskliga
              rättigheter, arbetsmarknad, privatekonomi, välfärd, historia,
              religion, traditioner och Sveriges roll i världen.
            </p>

            <p>
              Materialet är anpassat för dig som vill förbereda dig inför
              medborgarskapsprovet eller bara lära dig mer om Sverige.
            </p>
          </div>

          <img src="/foto/sverige.jpg" alt="Sverige" />
        </section>

        {/* Call to Action */}
        <section className={classes.ctaSection}>
          <h2>Börja studera idag</h2>

          <p>
            Välj ett kapitel, läs sammanfattningen och testa dina kunskaper med
            våra övningar och kapiteltester.
          </p>

          <button
            className={classes.ctaButton}
            onClick={() => {
              navigate(`/lesson-detail/1`);
            }}
          >
            Starta första kapitlet
          </button>
        </section>

        {/* Footer */}
        <footer className={classes.footer}>
          <h3>Sverige i Fokus</h3>

          <p>
            En webbplats med sammanfattningar, tester och övningsfrågor för dig
            som vill lära dig mer om det svenska samhället.
          </p>

          <p>© 2026 Sverige i Fokus</p>
        </footer>
      </div>
    </div>
  );
}
