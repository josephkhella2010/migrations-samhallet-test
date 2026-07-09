import DesktopNavigation from "./childComponent/DesktopNavigation";
import { useEffect, useState } from "react";
import MobileNavigation from "./childComponent/MobileNavigation";
import { useNavigate } from "react-router-dom";
import HeaderMobileNavBar from "./childComponent/HeaderMobileNavBar";

export default function NavigationContainer() {
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
    console.log(typeof lessonIdString);
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
  return (
    <div>
      {isMobile ? (
        <>
          {showMobileHeader ? (
            <MobileNavigation
              handleNavigate={handleNavigate}
              handleNavigateQuestion={handleNavigateQuestion}
              setLangDropDown={setLangDropDown}
              lessonsArr={lessonsArr}
              langDropDown={langDropDown}
              setShowLangDropDown={setShowLangDropDown}
              showLangDropDown={showLangDropDown}
              setShowMobileHeader={setShowMobileHeader}
            />
          ) : (
            <HeaderMobileNavBar
              setShowMobileHeader={setShowMobileHeader}
              selectedLanguage={langDropDown}
              showLangDropDown={showLangDropDown}
              setLangDropDown={setLangDropDown}
              setShowLangDropDown={setShowLangDropDown}
            />
          )}
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
