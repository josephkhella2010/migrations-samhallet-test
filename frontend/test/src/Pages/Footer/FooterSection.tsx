import { createUseStyles } from "react-jss";
import { useTranslation } from "../../translation/context/useTranslation";

import homePageTranslation from "../../translation/Translations/HomePageTranslation";

const useStyles = createUseStyles({
  footer: {
    marginTop: 80,
    padding: "40px 20px",
    borderTop: "1px solid #ddd",
    textAlign: "center",
    color: "#777",
    backgroundColor: "#ffffff",

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
});

export default function FooterSection() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <h3>{t(homePageTranslation.footerSectionHeader)}</h3>

      <p>{t(homePageTranslation.footerSectionTextOne)}</p>

      <p>© 2026 CopyRight</p>
    </footer>
  );
}
