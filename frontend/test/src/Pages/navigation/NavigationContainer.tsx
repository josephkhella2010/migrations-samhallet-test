import DesktopNavigation from "./childComponent/DesktopNavigation";
import { useEffect, useRef, useState } from "react";
import MobileNavigation from "./childComponent/MobileNavigation";
import { useNavigate } from "react-router-dom";
import HeaderMobileNavBar from "./childComponent/HeaderMobileNavBar";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  mobileMainMenu: {
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
    transition: "left 0.3s  ease",
  },
  mobileNavVisible: {
    left: "0",
  },

  mobileNavHidden: {
    left: "100%",
  },

  headerVisible: {
    transform: "translateX(0)",
  },

  headerHidden: {
    transform: "translateX(100%)",
  },
});

export interface ShowSubMenuType {
  lessonSubMenu: boolean;
  testSubMenu: boolean;
  testSubMenuTwo: boolean;
}

export default function NavigationContainer() {
  const menuRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  const [langDropDown, setLangDropDown] = useState<string>(() => {
    return localStorage.getItem("lang") || "sv";
  });
  const [showLangDropDown, setShowLangDropDown] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileHeader, setShowMobileHeader] = useState<boolean>(false);
  const navigate = useNavigate();
  const lessonsLength = 13;
  const lessonsArr = Array.from({ length: lessonsLength }, (_, i) => i + 1);

  /* functions */
  const handleNavigate = (id: number | string) => {
    const lessonIdString = String(id);
    navigate(`/lesson-detail/${lessonIdString}`);
  };
  const handleNavigateQuestion = (id: number | string) => {
    const lessonIdString = String(id);
    navigate(`/question-detail/${lessonIdString}`);
  };
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [isMobile]);

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
    if (!showMobileHeader) return;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileHeader]);

  /*  */
  return (
    <div>
      {isMobile ? (
        <>
          <div
            className={`${
              showMobileHeader
                ? classes.mobileNavVisible
                : classes.mobileNavHidden
            } ${classes.mobileMainMenu}`}
            ref={menuRef}
            onClick={closeAllMenus}
          >
            <MobileNavigation
              handleNavigate={handleNavigate}
              handleNavigateQuestion={handleNavigateQuestion}
              setLangDropDown={setLangDropDown}
              lessonsArr={lessonsArr}
              langDropDown={langDropDown}
              setShowLangDropDown={setShowLangDropDown}
              showLangDropDown={showLangDropDown}
              closeAllMenus={closeAllMenus}
              setShowSubMenu={setShowSubMenu}
              showSubMenu={showSubMenu}
            />
          </div>

          <div
            className={
              showMobileHeader ? classes.headerHidden : classes.headerVisible
            }
          >
            <HeaderMobileNavBar
              setShowMobileHeader={setShowMobileHeader}
              selectedLanguage={langDropDown}
              showLangDropDown={showLangDropDown}
              setLangDropDown={setLangDropDown}
              setShowLangDropDown={setShowLangDropDown}
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
          setShowLangDropDown={setShowLangDropDown}
          showLangDropDown={showLangDropDown}
        />
      )}
    </div>
  );
}
