import { createUseStyles } from "react-jss";
import LanguageDropDown from "./LanguageDropDown";
import { useTranslation } from "../../../translation/context/useTranslation";
import NavigationPageTranslation from "../../../translation/Translations/NavigationPageTranslation";
import { useDispatch, useSelector } from "react-redux";
import { clearAnswers } from "../../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { questionArr } from "../../../utilities/Array";
import { IoClose } from "react-icons/io5";
import type { RootState } from "../../../Store/store";

const useStyles = createUseStyles({
  mainMobileNavContainer: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    width: "100%",
    height: "100dvh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "24px 20px",
    boxSizing: "border-box",
  },

  desktopNavMainMenu: {
    display: "flex",
    flexDirection: "column",

    flex: 1,
    minHeight: 0,
    gap: "24px",
  },
  desktopNavSectionMenu: {
    overflow: "auto",
    overflowY: "auto",
    overflowX: "hidden",
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    width: "100%",
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "32px",
    cursor: "pointer",
  },

  desktopNavSubMenuMainSection: {
    flex: 1,
    minHeight: 0,

    overflowY: "auto",
    overflowX: "hidden",

    WebkitOverflowScrolling: "touch",
  },

  desktopNavSubMenuMainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    paddingBottom: "24px",
  },

  desktopNavSubMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  desktopNavSubTitle: {
    fontSize: "22px",
    fontWeight: 700,
    cursor: "pointer",
    userSelect: "none",
  },

  desktopNavSubList: {
    display: "flex",
    flexDirection: "column",
  },

  desktopNavSubMainList: {
    display: "none",
    flexDirection: "column",

    gap: "15px",

    paddingLeft: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",

    letterSpacing: "3px",
    cursor: "pointer",
  },

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
  closeSection: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeMainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    cursor: "pointer",
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
  testSubMenuTwo: boolean;
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
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang } = useSelector((state: RootState) => state.languageSlice);
  const currentLanguage = lang === "sv" ? "sv" : "ar";
  const [showSubMenu, setShowSubMenu] = useState<ShowSubMenuType>({
    lessonSubMenu: false,
    testSubMenu: false,
    testSubMenuTwo: false,
  });

  const closeAllMenus = () => {
    setShowSubMenu({
      lessonSubMenu: false,
      testSubMenu: false,
      testSubMenuTwo: false,
    });

    setShowMobileHeader(false);
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const htmlOverflow = html.style.overflow;
    const bodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      html.style.overflow = htmlOverflow;
      body.style.overflow = bodyOverflow;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      className={classes.mainMobileNavContainer}
      ref={menuRef}
      onClick={closeAllMenus}
    >
      <div className={classes.desktopNavMainMenu}>
        <div
          className={classes.desktopNavSectionMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.closeMainSection}>
            <div
              className={classes.closeSection}
              onClick={() => closeAllMenus()}
              title="close"
            >
              <IoClose
                size={32}
                onClick={closeAllMenus}
                style={{ cursor: "pointer" }}
              />
            </div>
            <LanguageDropDown
              selectedLanguage={langDropDown}
              showLangDropDown={showLangDropDown}
              setLangDropDown={setLangDropDown}
              setShowLangDropDown={setShowLangDropDown}
            />
          </div>
          <div className={classes.menuItem}>
            <p
              onClick={() => {
                navigate("/");
                closeAllMenus();
              }}
            >
              {t(NavigationPageTranslation.HomeTitle)}
            </p>
          </div>

          <div className={classes.desktopNavSubMenuMainSection}>
            <div className={classes.desktopNavSubMenuMainContainer}>
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
                        closeAllMenus();
                      }}
                    >
                      {t(NavigationPageTranslation.SubLinkLektion)} {lesson}
                    </div>
                  ))}
                </div>
              </div>

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
                        closeAllMenus();
                      }}
                    >
                      {t(NavigationPageTranslation.SubLinkTest)} {lesson}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={classes.desktopNavSubMenu}
                onClick={() => {
                  setShowSubMenu((prev) => ({
                    ...prev,
                    testSubMenuTwo: !prev.testSubMenuTwo,
                  }));
                }}
              >
                <div className={classes.desktopNavSubTitle}>
                  {t(NavigationPageTranslation.SubLinkThree)}
                </div>

                <div
                  className={`${classes.desktopNavSubMainList} ${
                    showSubMenu.testSubMenuTwo ? classes.showSubmenu : ""
                  }`}
                >
                  {questionArr.map((item) => (
                    <div
                      key={item.number}
                      className={classes.subItem}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateQuestion(item.number);
                        dispatch(clearAnswers());
                        setShowSubMenu((prev) => ({
                          ...prev,
                          testSubMenuTwo: false,
                        }));
                        closeAllMenus();
                      }}
                    >
                      {currentLanguage === "sv" ? item.sv : item.ar}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
