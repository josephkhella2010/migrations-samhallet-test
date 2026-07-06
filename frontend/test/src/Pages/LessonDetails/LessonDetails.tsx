import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../Store/store";
import type { SectionInsideType } from "../../utilities/Interfaces";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Maincontainer: {
    padding: "70px 30px",
  },
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.8,
  },

  lessonTitle: {
    fontSize: "38px",
    fontWeight: "bold" as const,
    color: "#1f2937",
    marginBottom: "40px",
    textAlign: "center" as const,
    "@media (max-width: 500px)": {
      fontSize: 22,
    },
  },

  section: {
    padding: "30px 10px",
  },

  title: {
    fontSize: "30px",
    fontWeight: "bold" as const,
    color: "#0f172a",
    marginBottom: "18px",
    wordBreak: "break-word",
    "@media (max-width: 500px)": {
      fontSize: 20,
    },
  },

  subtitle: {
    fontSize: "20px",
    fontWeight: 600 as const,
    color: "#808590",
    marginBottom: "20px",
    "@media (max-width: 500px)": {
      fontSize: 16,
    },
  },

  text: {
    fontSize: "18px",
    color: "#374151",
    whiteSpace: "pre-line" as const,
    marginBottom: "18px",
    "@media (max-width: 500px)": {
      fontSize: 14,
    },
  },

  list: {
    paddingLeft: "35px",
    marginBottom: "22px",
    "@media (max-width: 500px)": {
      fontSize: 14,
    },
  },

  listItem: {
    fontSize: "18px",
    color: "#374151",
    marginBottom: "10px",
    "@media (max-width: 500px)": {
      fontSize: 14,
    },
  },

  divider: {
    border: "none",
    borderTop: "4px solid #d1d5db",
    margin: "35px 0",
  },
});
export default function LessonDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const { lesson } = useSelector((state: RootState) => state.lessonsSlice);
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.languageSlice.lang);
  const currentLanguage = language === "sv" ? "swedish" : "arabic";
  const sections = lesson?.sections?.[currentLanguage] ?? [];
  useEffect(() => {
    if (id) {
      dispatch({ type: "Fetch-ONLY-LESSON", payload: id });
    }
  }, [dispatch, id]);

  return (
    <div className={classes.Maincontainer}>
      <div className={classes.container}>
        <h1 className={classes.lessonTitle}>
          {language === "sv"
            ? lesson?.lessonTitle.swedish || `Lesson ${id}`
            : lesson?.lessonTitle.arabic || `Lesson ${id}`}
        </h1>

        {sections?.map((section: SectionInsideType, index: number) => (
          <div key={index}>
            <div className={classes.section}>
              <h2 className={classes.title}>{section.title}</h2>

              {section.subtitle && (
                <h3 className={classes.subtitle}>{section.subtitle}</h3>
              )}

              {section.text && <p className={classes.text}>{section.text}</p>}

              {section.list && (
                <ul className={classes.list}>
                  {section.list.map((item: string, i: number) => (
                    <li key={i} className={classes.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.text2 && <p className={classes.text}>{section.text2}</p>}

              {section.list2 && (
                <ul className={classes.list}>
                  {section.list2.map((item: string, i: number) => (
                    <li key={i} className={classes.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.text3 && <p className={classes.text}>{section.text3}</p>}

              {section.list3 && (
                <ul className={classes.list}>
                  {section.list3.map((item: string, i: number) => (
                    <li key={i} className={classes.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {index !== sections.length - 1 && (
              <hr className={classes.divider} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
