import { createUseStyles } from "react-jss";
import LanguageDropDown from "./LanguageDropDown";
import { useTranslation } from "../../../translation/context/useTranslation";
import NavigationPageTranslation from "../../../translation/Translations/NavigationPageTranslation";
import { useDispatch } from "react-redux";
import { clearAnswers } from "../../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useStyles = createUseStyles({
  mainMobileNavContainer: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    backgroundColor: "#fff",
    height: "100dvh",
    overflowY: "auto",
    padding: "24px 20px",
    boxSizing: "border-box",
  },

  desktopNavMainMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "20px",
    fontWeight: 600,
  },

  desktopNavSubMenuMainSection: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  desktopNavSubMenuMainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },

  // ===== Lessons =====
  desktopNavSubMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  desktopNavSubTitle: {
    fontSize: "22px",
    fontWeight: 700,
    cursor: "pointer",
  },

  desktopNavSubList: {
    display: "flex",
    flexDirection: "column",
  },

  desktopNavSubMainList: {
    flexDirection: "column",
    gap: "15px",
    paddingLeft: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "none",
    letterSpacing: "3px",
    cursor: "pointer",
  },

  // ===== Tests =====
  desktopNavSubMenuTwo: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  desktopNavSubListTwo: {
    display: "flex",
    flexDirection: "column",
  },

  subItem: {
    cursor: "pointer",
    fontSize: "18px",
    fontFamily: "system-ui, sans-serif",
    "&:hover": {
      color: "red",
    },
  },
  showSubmenu: {
    display: "flex",
  },
});

interface PropsType {
  handleNavigate: (id: number | string) => void;
  handleNavigateQuestion: (id: number | string) => void;
  setLangDropDown: React.Dispatch<React.SetStateAction<string>>;
  setShowLangDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobileHeader: React.Dispatch<React.SetStateAction<boolean>>;
  showLangDropDown: boolean;
  lessonsArr: number[];
  langDropDown: string;
}
interface ShowSubMenuType {
  lessonSubMenu: boolean;
  testSubMenu: boolean;
}

export default function MobileNavigation({
  handleNavigate,
  handleNavigateQuestion,
  setShowLangDropDown,
  setLangDropDown,
  setShowMobileHeader,
  lessonsArr,
  langDropDown,
  showLangDropDown,
}: PropsType) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSubMenu, setShowSubMenu] = useState<ShowSubMenuType>({
    lessonSubMenu: false,
    testSubMenu: false,
  });

  /* functions */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={classes.mainMobileNavContainer}
      onClick={() => {
        setShowMobileHeader(false);
      }}
    >
      <div
        className={classes.desktopNavMainMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.menuItem}>
          <p
            onClick={() => {
              navigate("/");
              setShowMobileHeader(false);
            }}
          >
            {t(NavigationPageTranslation.HomeTitle)}
          </p>

          <LanguageDropDown
            selectedLanguage={langDropDown}
            showLangDropDown={showLangDropDown}
            setLangDropDown={setLangDropDown}
            setShowLangDropDown={setShowLangDropDown}
          />
        </div>

        <div className={classes.desktopNavSubMenuMainSection}>
          <div className={classes.desktopNavSubMenuMainContainer}>
            {/* Lessons */}
            <div
              className={classes.desktopNavSubMenu}
              onClick={() => {
                setShowSubMenu((prev) => ({
                  ...prev,
                  lessonSubMenu: !showSubMenu.lessonSubMenu,
                }));
              }}
            >
              <div className={classes.desktopNavSubTitle}>
                {t(NavigationPageTranslation.LinkOne)}
              </div>

              <div
                className={`${classes.desktopNavSubMainList}  ${showSubMenu.lessonSubMenu ? classes.showSubmenu : ""} `}
              >
                {lessonsArr.map((lesson) => (
                  <div
                    key={lesson}
                    className={classes.subItem}
                    onClick={() => {
                      handleNavigate(lesson);
                      setShowSubMenu((prev) => ({
                        ...prev,
                        lessonSubMenu: false,
                      }));
                      setShowMobileHeader(false);
                    }}
                  >
                    {t(NavigationPageTranslation.SubLinkLektion)} {lesson}
                  </div>
                ))}
              </div>
            </div>

            {/* Tests */}
            <div
              className={classes.desktopNavSubMenu}
              onClick={() => {
                setShowSubMenu((prev) => ({
                  ...prev,
                  testSubMenu: !showSubMenu.testSubMenu,
                }));
              }}
            >
              <div className={classes.desktopNavSubTitle}>
                {t(NavigationPageTranslation.LinkTwo)}
              </div>

              <div
                className={`${classes.desktopNavSubMainList}  ${showSubMenu.testSubMenu ? classes.showSubmenu : ""} `}
              >
                {lessonsArr.map((lesson) => (
                  <div
                    key={lesson}
                    className={classes.subItem}
                    onClick={() => {
                      handleNavigateQuestion(lesson);
                      dispatch(clearAnswers());
                      setShowSubMenu((prev) => ({
                        ...prev,
                        testSubMenu: false,
                      }));
                      setShowMobileHeader(false);
                    }}
                  >
                    {t(NavigationPageTranslation.SubLinkTest)} {lesson}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
