import type { LanguageDropDownType, QuestionArrType } from "./Interfaces";

export const languageDropDown: LanguageDropDownType[] = [
  { name: "sv", title: "SV", url: "/foto/sv.webp" },
  { name: "ar", title: "AR", url: "/foto/eg.webp" },
  { name: "en", title: "EN", url: "/foto/en.webp" },
].sort((a, b) => b.title.localeCompare(a.title));

export const chapterTitles = [
  "Landet Sverige",
  "Sveriges demokratiska system",
  "Så här styrs Sverige",
  "Politiska val och partier",
  "Lag och rätt",
  "Mediernas roll",
  "Mänskliga rättigheter",
  "Arbetsmarknad och privatekonomi",
  "Välfärdssamhället",
  "Sveriges moderna historia",
  "Sverige och omvärlden",
  "En sekulär stat och ett mångreligiöst land",
  "Traditioner och högtider",
];

export const questionArr: QuestionArrType[] = [
  {
    sv: "Övriga frågor 1",
    ar: "أسئلة متنوعة 1",
    en: "Various Questions 1",
    number: 14,
  },
  {
    sv: "Övriga frågor 2",
    ar: "أسئلة متنوعة 2",
    en: "Various Questions 2",

    number: 15,
  },
  {
    sv: "Övriga frågor 3",
    ar: "أسئلة متنوعة 3",
    en: "Various Questions 3",

    number: 16,
  },
  {
    sv: "Övriga frågor 4",
    ar: "أسئلة متنوعة 4",
    en: "Various Questions 4",

    number: 17,
  },
  {
    sv: "Övriga frågor 5",
    ar: "أسئلة متنوعة 5",
    en: "Various Questions 5",
    number: 18,
  },
  {
    sv: "Övriga frågor 6",
    ar: "أسئلة متنوعة 6",
    en: "Various Questions 6",
    number: 19,
  },
  {
    sv: "Övriga frågor 7",
    ar: "أسئلة متنوعة 7",
    en: "Various Questions 7",
    number: 20,
  },
  {
    sv: "Övriga frågor 8",
    ar: "أسئلة متنوعة 8",
    en: "Various Questions 8",
    number: 21,
  },
  {
    sv: "Övriga frågor 9",
    ar: "أسئلة متنوعة 9",
    en: "Various Questions 9",
    number: 22,
  },
  {
    sv: "Övriga frågor 10",
    ar: "أسئلة متنوعة 10",
    en: "Various Questions 10",
    number: 23,
  },  {
    sv: "Övriga frågor 11",
    ar: "أسئلة متنوعة 11",
    en: "Various Questions 11",
    number: 24,
  },
];
