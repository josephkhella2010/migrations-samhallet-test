import { createUseStyles } from "react-jss";
import { useTranslation } from "../../../translation/context/useTranslation";
import NavigationPageTranslation from "../../../translation/Translations/NavigationPageTranslation";
import { useDispatch, useSelector } from "react-redux";
import { clearAnswers } from "../../../Store/Slice/QuestionSlice/UserAnswerSlice";
import { useNavigate } from "react-router-dom";
import { questionArr } from "../../../utilities/Array";
import { IoClose } from "react-icons/io5";
import type { RootState } from "../../../Store/store";
import type { ShowSubMenuType } from "../NavigationContainer";
import LanguageDropDownTwo from "./LanguageDropDownTwo";
import { useEffect, useRef } from "react";

const useStyles = createUseStyles({
  mainMobileNavContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  mobileNavMainMenu: {
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
  },

  mobileNavSectionMenu: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
    overflowX: "visible",
    position: "relative",

    WebkitOverflowScrolling: "touch",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },

  closeMainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },

  closeSection: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#ddd",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    cursor: "pointer",
  },

  menuItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",

    fontSize: "22px",
    fontWeight: 600,

    marginBottom: "32px",

    cursor: "pointer",
  },

  submenuContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    paddingBottom: "24px",
  },

  submenu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  submenuTitle: {
    fontSize: "22px",
    fontWeight: 700,
    cursor: "pointer",
  },

  submenuList: {
    display: "none",
    flexDirection: "column",
    gap: "15px",
    paddingLeft: "20px",
    //paddingTop: "5px",
    //paddingBottom: "10px",
    letterSpacing: "3px",
  },

  showSubmenu: {
    display: "flex",
  },

  subItem: {
    cursor: "pointer",
    fontSize: "18px",

    "&:hover": {
      color: "red",
    },
  },
});

interface PropsType {
  handleNavigate: (id: number | string) => void;

  handleNavigateQuestion: (id: number | string) => void;

  setLangDropDown: React.Dispatch<React.SetStateAction<string>>;

  setShowLangDropDown: React.Dispatch<React.SetStateAction<boolean>>;

  closeAllMenus: () => void;

  setShowSubMenu: React.Dispatch<React.SetStateAction<ShowSubMenuType>>;
  showLangDropDown: boolean;
  lessonsArr: number[];
  langDropDown: string;
  showSubMenu: ShowSubMenuType;
  showMobileHeader: boolean;
}

export default function MobileNavigation({
  handleNavigate,
  handleNavigateQuestion,
  setLangDropDown,
  setShowLangDropDown,
  closeAllMenus,
  setShowSubMenu,
  lessonsArr,
  langDropDown,
  showLangDropDown,
  showSubMenu,
  showMobileHeader,
}: PropsType) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const { lang } = useSelector((state: RootState) => state.languageSlice);

  useEffect(() => {
    if (!showMobileHeader) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      document.removeEventListener("mousedown", handleClick);
    };
  }, [showMobileHeader]);

  return (
    <div
      className={classes.mainMobileNavContainer}
      ref={menuRef}
      onClick={closeAllMenus}
    >
      <div className={classes.mobileNavMainMenu}>
        <div
          className={classes.mobileNavSectionMenu}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.closeMainSection}>
            <div className={classes.closeSection} onClick={closeAllMenus}>
              <IoClose size={32} />
            </div>

            <LanguageDropDownTwo
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

          <div className={classes.submenuContainer}>
            {/* LESSON */}

            <div
              className={classes.submenu}
              onClick={() => {
                setShowSubMenu((prev) => ({
                  ...prev,

                  lessonSubMenu: !prev.lessonSubMenu,
                }));
              }}
            >
              <div className={classes.submenuTitle}>
                {t(NavigationPageTranslation.LinkOne)}
              </div>

              <div
                className={`${classes.submenuList}
${showSubMenu.lessonSubMenu ? classes.showSubmenu : ""}`}
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

            {/* TEST */}

            <div
              className={classes.submenu}
              onClick={() => {
                setShowSubMenu((prev) => ({
                  ...prev,

                  testSubMenu: !prev.testSubMenu,
                }));
              }}
            >
              <div className={classes.submenuTitle}>
                {t(NavigationPageTranslation.LinkTwo)}
              </div>

              <div
                className={`${classes.submenuList}
${showSubMenu.testSubMenu ? classes.showSubmenu : ""}`}
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

            {/* THIRD MENU */}

            <div
              className={classes.submenu}
              onClick={() => {
                setShowSubMenu((prev) => ({
                  ...prev,

                  testSubMenuTwo: !prev.testSubMenuTwo,
                }));
              }}
            >
              <div className={classes.submenuTitle}>
                {t(NavigationPageTranslation.SubLinkThree)}
              </div>

              <div
                className={`${classes.submenuList}
${showSubMenu.testSubMenuTwo ? classes.showSubmenu : ""}`}
              >
                {questionArr.map((item) => {
                  const currentLanguage =
                    lang === "sv" ? item.sv : lang === "en" ? item.en : item.ar;

                  return (
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
                      {currentLanguage}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
