import { createUseStyles } from "react-jss";
import { languageDropDown } from "../../../utilities/Array";
import { useDispatch } from "react-redux";
import { setLang } from "../../../Store/Slice/LessonSlice/LanguageSlice";
import { useEffect, useRef } from "react";

const useStyles = createUseStyles({
  languageDropDownContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "50px",
    color: "black",
    zIndex: 3000,
  },

  selectedLanguage: {
    padding: "10px 14px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#fff",
    minWidth: "50px",
    textAlign: "center",
    fontSize: "17px",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: "0px",
    marginTop: "8px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "120px",
    zIndex: 3000,
    overflow: "hidden",
    fontWeight: "500",
  },

  dropdownItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 12px",
    cursor: "pointer",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },

  flag: {
    width: "22px",
    height: "22px",
    objectFit: "cover",
    borderRadius: "50%",
  },

  title: {
    margin: 0,
    fontSize: "14px",
  },
});

interface LangDropDownType {
  selectedLanguage: string;
  showLangDropDown: boolean;
  setLangDropDown: (selectedLanguage: string) => void;
  setShowLangDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LanguageDropDownTwo({
  selectedLanguage,
  showLangDropDown,
  setLangDropDown,
  setShowLangDropDown,
}: LangDropDownType) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  /* function */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLangDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLangDropDown]);

  return (
    <div className={classes.languageDropDownContainer} ref={dropdownRef}>
      <span
        className={classes.selectedLanguage}
        onClick={(e) => {
          e.stopPropagation();
          setShowLangDropDown((prev) => !prev);
        }}
      >
        {selectedLanguage}
      </span>

      {showLangDropDown && (
        <div className={classes.dropdownMenu}>
          {languageDropDown &&
            languageDropDown.map((lang, index) => (
              <div
                key={index}
                className={classes.dropdownItem}
                onClick={(e) => {
                  console.log("clicked", lang);

                  e.stopPropagation();

                  setLangDropDown(lang.title);
                  dispatch(setLang(lang.name as "sv" | "ar" | "en"));
                  setShowLangDropDown(false);
                }}
              >
                <img className={classes.flag} src={lang.url} alt={lang.name} />

                <p className={classes.title}>{lang.title}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
