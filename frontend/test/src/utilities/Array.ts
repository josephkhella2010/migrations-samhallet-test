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
    ar: "أسئلة إضافية 1",
    en: "Additional Questions 1",
    number: 14,
  },
  {
    sv: "Övriga frågor 2",
    ar: "أسئلة إضافية 2",
    en: "Additional Questions 2",

    number: 15,
  },
  {
    sv: "Övriga frågor 3",
    ar: "أسئلة إضافية 3",
    en: "Additional Questions 3",

    number: 16,
  },
  {
    sv: "Övriga frågor 4",
    ar: "أسئلة إضافية 4",
    en: "Additional Questions 4",

    number: 17,
  },
  {
    sv: "Övriga frågor 5",
    ar: "أسئلة إضافية 5",
    en: "Additional Questions 5",
    number: 18,
  },
  {
    sv: "Övriga frågor 6",
    ar: "أسئلة إضافية 6",
    en: "Additional Questions 6",
    number: 19,
  },
  {
    sv: "Övriga frågor 7",
    ar: "أسئلة إضافية 7",
    en: "Additional Questions 7",
    number: 20,
  },
  {
    sv: "Övriga frågor 8",
    ar: "أسئلة إضافية 8",
    en: "Additional Questions 8",
    number: 21,
  },
];
