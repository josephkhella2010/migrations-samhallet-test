import DesktopNavigation from "./childComponent/DesktopNavigation";
import { useEffect, useState } from "react";
import MobileNavigation from "./childComponent/MobileNavigation";
import HeaderMobileNavBar from "./childComponent/HeaderMobileNavBar";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mobileMainMenu: {
    position: "fixed",
    top: 0,
    left: "100%",
    width: "100%",
    height: "100dvh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "24px 20px",
    boxSizing: "border-box",
    transition: "left .3s ease",
    zIndex: 1000,
  },

  mobileNavVisible: {
    left: 0,
  },

  mobileNavHidden: {
    left: "100%",
  },

  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    transition: "left .3s ease",
    zIndex: 900,
  },

  headerVisible: {
    left: 0,
  },

  headerHidden: {
    left: "-100%",
  },
});

export interface ShowSubMenuType {
  lessonSubMenu: boolean;
  testSubMenu: boolean;
  testSubMenuTwo: boolean;
}

export default function NavigationContainer() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [langDropDown, setLangDropDown] = useState(() => {
    return localStorage.getItem("lang") || "sv";
  });

  // desktop dropdown
  const [showDesktopLangDropDown, setShowDesktopLangDropDown] = useState(false);

  // mobile dropdown
  const [showMobileLangDropDown, setShowMobileLangDropDown] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [showMobileHeader, setShowMobileHeader] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState({
    lessonSubMenu: false,
    testSubMenu: false,
    testSubMenuTwo: false,
  });

  const lessonsArr = Array.from({ length: 13 }, (_, i) => i + 1);

  const handleNavigate = (id: number | string) => {
    navigate(`/lesson-detail/${id}`);
  };

  const handleNavigateQuestion = (id: number | string) => {
    navigate(`/question-detail/${id}`);
  };

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const closeAllMenus = () => {
    setShowSubMenu({
      lessonSubMenu: false,
      testSubMenu: false,
      testSubMenuTwo: false,
    });

    setShowDesktopLangDropDown(false);
    setShowMobileLangDropDown(false);

    setShowMobileHeader(false);
  };

  return (
    <div>
      {isMobile ? (
        <>
          <div
            className={`${classes.mobileMainMenu} ${
              showMobileHeader
                ? classes.mobileNavVisible
                : classes.mobileNavHidden
            }`}
          >
            <MobileNavigation
              handleNavigate={handleNavigate}
              handleNavigateQuestion={handleNavigateQuestion}
              setLangDropDown={setLangDropDown}
              lessonsArr={lessonsArr}
              langDropDown={langDropDown}
              showLangDropDown={showMobileLangDropDown}
              setShowLangDropDown={setShowMobileLangDropDown}
              closeAllMenus={closeAllMenus}
              setShowSubMenu={setShowSubMenu}
              showSubMenu={showSubMenu}
              showMobileHeader={showMobileHeader}
            />
          </div>

          <div
            className={`${classes.header} ${
              showMobileHeader ? classes.headerHidden : classes.headerVisible
            }`}
          >
            <HeaderMobileNavBar
              setShowMobileHeader={setShowMobileHeader}
              selectedLanguage={langDropDown}
              showLangDropDown={showDesktopLangDropDown}
              setLangDropDown={setLangDropDown}
              setShowLangDropDown={setShowDesktopLangDropDown}
            />
          </div>
        </>
      ) : (
        <DesktopNavigation
          handleNavigate={handleNavigate}
          handleNavigateQuestion={handleNavigateQuestion}
          setLangDropDown={setLangDropDown}
          lessonsArr={lessonsArr}
          langDropDown={langDropDown}
          showLangDropDown={showDesktopLangDropDown}
          setShowLangDropDown={setShowDesktopLangDropDown}
        />
      )}
    </div>
  );
}
