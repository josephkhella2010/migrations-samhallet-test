export interface SectionInsideType {
  title: string;
  subtitle: string;
  text: string;
  list?: string[];
  text2?: string;
  list2?: string[];
  text3?: string;
  list3?: string[];
}

export interface LessonTitleType {
  swedish: string;
  arabic: string;
}
export interface SectionsType {
  swedish: SectionInsideType[];
  arabic: SectionInsideType[];
}
/*  

export interface AnswerQuestionType {
  text: string;
  correct: boolean;
  correctAnswer: string;
}

export interface QuestionInsideType {
  question: string;
  answers: AnswerQuestionType[];
  correctAnswer: string;
}

export interface LessonTitleType {
  swedish: string;
  arabic: string;
}

export interface QuestionsSectionType {
  swedish: QuestionInsideType[];
  arabic: QuestionInsideType[];
}

export interface LessonQuestionsType {
  lessonId: number;
  lessonTitle: LessonTitleType;
  questions: QuestionsSectionType;
}

export interface QuestionsResponseType {
  questions: LessonQuestionsType[];
}
export interface UserAnswerType {
  questionTitle: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

 */

/*  */
// =====================
// Answer
// =====================
export interface AnswerQuestionType {
  textSv: string;
  textAr: string;
  correct: boolean;
}

// =====================
// Question Text
// =====================
export interface QuestionTextType {
  sv: string;
  ar: string;
}

// =====================
// Question
// =====================
export interface QuestionInsideType {
  question: QuestionTextType;
  answers: AnswerQuestionType[];
  correctAnswerSv: string;
  correctAnswerAr: string;
}

// =====================
// Lesson Title
// =====================
export interface LessonTitleType {
  swedish: string;
  arabic: string;
}

// =====================
// Lesson
// =====================
export interface LessonQuestionsType {
  lessonId: number;
  lessonTitle: LessonTitleType;
  questions: QuestionInsideType[];
}

// =====================
// API Response
// =====================
export interface QuestionsResponseType {
  lessons: LessonQuestionsType[];
}

// =====================
// User Answer
// =====================
export interface UserAnswerType {
  questionTitle: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}
export interface LessonTitleType {
  sv: string;
  ar: string;
}
/*  */
export interface LessonType {
  lessonTitle: LessonTitleType;
  lessonId: number;
  sections: SectionsType;
}

export interface LanguageDropDownType {
  name: string;
  title: string;
  url: string;
}
export type LanguageType = "sv" | "ar";

export interface QuestionArrType {
  sv: string;
  ar: string;
  number: number;
}
