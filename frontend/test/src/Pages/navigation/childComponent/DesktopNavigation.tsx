import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import NavigationPageTranslation from "../../../translation/Translations/NavigationPageTranslation";
import LanguageDropDown from "./LanguageDropDown";
import { clearAnswers } from "../../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionArr } from "../../../utilities/Array";
import { useEffect } from "react";

const useStyles = createUseStyles({
  desktopNavContainer: {
    width: "100%",
    background: "#39195a",
    color: "#fff",
    height: 60,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
  },

  desktopNavMainMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: "0 30px",
    height: 60,

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

  desktopNavSubMenuMainSection: {
    display: "flex",
    alignItems: "center",
    gap: 40,

    "@media (max-width: 992px)": {
      gap: 30,
    },
    "@media (max-width: 768px)": {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  desktopNavSubMenuMainContainer: {
    display: "flex",
    gap: 40,

    "@media (max-width: 1200px)": {
      gap: 25,
    },

    "@media (max-width: 992px)": {
      gap: 30,
      justifyContent: "flex-end",
    },

    "@media (max-width: 768px)": {
      width: "100%",
    },

    "@media (max-width: 500px)": {
      flexDirection: "column",
      alignItems: "stretch",
      width: "100%",
    },
  },

  desktopNavSubMenu: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 60,
    padding: "0 12px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    zIndex: 100,

    "&:hover $desktopNavSubList": {
      display: "flex",
      flexDirection: "column",
    },

    "@media (max-width: 992px)": {
      fontSize: 14,
      padding: "0 8px",
    },

    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  },

  desktopNavSubList: {
    display: "none",
    position: "absolute",
    top: "60px",
    left: 0,
    background: "#fff",
    color: "#222",
    borderRadius: 8,
    boxShadow: "0 8px 20px rgba(0,0,0,.15)",
    listStyle: "none",
    margin: 0,
    padding: 10,
    minWidth: 180,
    zIndex: 10000,

    "& li": {
      padding: "10px 12px",
      borderRadius: 6,
      cursor: "pointer",
    },

    "& li:hover": {
      background: "#f3f4f6",
    },

    "@media (max-width: 768px)": {
      left: "50%",
      transform: "translateX(-50%)",
      minWidth: 160,
    },
  },
  liLink: {
    cursor: "pointer",
  },
  opacity: {
    background: "#290949cd",
  },
});

interface PropsType {
  handleNavigate: (id: number | string) => void;
  handleNavigateQuestion: (id: number | string) => void;
  setLangDropDown: React.Dispatch<React.SetStateAction<string>>;
  lessonsArr: number[];
  langDropDown: string;
  setShowLangDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  showLangDropDown: boolean;
}
export default function DesktopNavigation({
  handleNavigate,
  handleNavigateQuestion,
  setLangDropDown,
  lessonsArr,
  langDropDown,
  setShowLangDropDown,
  showLangDropDown,
}: PropsType) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");

  /* functions */

  useEffect(() => {
    const navbar = document.querySelector(`.${classes.desktopNavContainer}`);
    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 60) {
        navbar.classList.add(classes.opacity);
      } else {
        navbar.classList.remove(classes.opacity);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={classes.desktopNavContainer}>
      <ul className={classes.desktopNavMainMenu}>
        <li className={classes.liLink} onClick={() => navigate("/")}>
          {t(NavigationPageTranslation.HomeTitle)}
        </li>

        <div className={classes.desktopNavSubMenuMainSection}>
          <div className={classes.desktopNavSubMenuMainContainer}>
            <div className={classes.desktopNavSubMenu}>
              <li>{t(NavigationPageTranslation.LinkOne)}</li>

              <ul className={classes.desktopNavSubList}>
                {lessonsArr.map((it) => (
                  <li
                    key={it}
                    onClick={() => {
                      handleNavigate(it);
                    }}
                  >
                    {t(NavigationPageTranslation.SubLinkLektion)} {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className={classes.desktopNavSubMenu}>
              <li>{t(NavigationPageTranslation.LinkTwo)}</li>

              <ul className={classes.desktopNavSubList}>
                {lessonsArr.map((it) => (
                  <li
                    key={it}
                    onClick={() => {
                      handleNavigateQuestion(it);
                      dispatch(clearAnswers());
                    }}
                  >
                    {t(NavigationPageTranslation.SubLinkTest)} {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.desktopNavSubMenu}>
              <li>{t(NavigationPageTranslation.SubLinkThree)} </li>
              <ul className={classes.desktopNavSubList}>
                {questionArr.map((it) => {
                  return (
                    <li
                      key={it.number}
                      onClick={() => {
                        handleNavigateQuestion(it.number);
                        dispatch(clearAnswers());
                      }}
                    >
                      {lang === "sv" ? it.sv : it.ar}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <LanguageDropDown
            selectedLanguage={langDropDown}
            showLangDropDown={showLangDropDown}
            setLangDropDown={setLangDropDown}
            setShowLangDropDown={setShowLangDropDown}
          />
        </div>
      </ul>
    </div>
  );
}
