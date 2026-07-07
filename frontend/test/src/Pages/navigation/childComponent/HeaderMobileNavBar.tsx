import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import NavigationPageTranslation from "../../../translation/Translations/NavigationPageTranslation";
import LanguageDropDown from "./LanguageDropDown";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  desktopNavContainer: {
    width: "100%",
    background: "#3d1466",
    color: "#fff",
    height: 60,
  },

  desktopNavMainMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: "0 30px",
    height: 60,
    gap: "30px",
    "& > li": {
      wordBreak: "keep-all",
      width: "150px",
    },

    "@media (max-width: 1200px)": {
      padding: "0 20px",
    },

    "@media (max-width: 992px)": {
      padding: "0 15px",
    },
  },
  desktopNavMainMenuLeftSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  HamContainer: {
    backgroundColor: "",
    border: "0.5px solid white",
    width: "40px",
    height: "50px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    cursor: "pointer",
  },
  HamLine: {
    backgroundColor: "white",
    width: "80%",
    height: "1px",
    borderRadius: "7px",
  },
  liLink: { cursor: "pointer" },
});

interface PropsType {
  setShowMobileHeader: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: string;
  showLangDropDown: boolean;
  setLangDropDown: (selectedLanguage: string) => void;
  setShowLangDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderMobileNavBar({
  selectedLanguage,
  showLangDropDown,
  setLangDropDown,
  setShowLangDropDown,
  setShowMobileHeader,
}: PropsType) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div className={classes.desktopNavContainer}>
        <ul className={classes.desktopNavMainMenu}>
          <div className={classes.desktopNavMainMenuLeftSection}>
            <li className={classes.liLink} onClick={() => navigate("/")}>
              {t(NavigationPageTranslation.HomeTitle)}
            </li>
            <LanguageDropDown
              selectedLanguage={selectedLanguage}
              showLangDropDown={showLangDropDown}
              setLangDropDown={setLangDropDown}
              setShowLangDropDown={setShowLangDropDown}
            />
          </div>

          <div
            className={classes.HamContainer}
            onClick={() => {
              setShowMobileHeader(true);
            }}
          >
            <div className={classes.HamLine}></div>
            <div className={classes.HamLine}> </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
