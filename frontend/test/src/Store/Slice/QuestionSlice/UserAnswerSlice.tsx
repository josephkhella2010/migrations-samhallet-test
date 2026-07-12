/* 

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserAnswerType } from "../../../utilities/Interfaces";

export interface UserAnswerWithExtras extends UserAnswerType {
  index: number;
  totalQuestions: number;
  score: number;
  userAnswerLetter: string;
  isRadioChecked: boolean;
  testId?: string;
}

interface UserAnswersState {
  userAnswers: UserAnswerWithExtras[];
  currentQuestionIndex: number;
}

const loadAnswers = (): UserAnswerWithExtras[] => {
  const saved = localStorage.getItem("userAnswers");

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved) as UserAnswerWithExtras[];
  } catch {
    return [];
  }
};

const loadCurrentQuestionIndex = (): number => {
  const saved = localStorage.getItem("currentQuestionIndex");

  if (!saved) {
    return 0;
  }

  try {
    return JSON.parse(saved) as number;
  } catch {
    return 0;
  }
};

const initialState: UserAnswersState = {
  userAnswers: loadAnswers(),
  currentQuestionIndex: loadCurrentQuestionIndex(),
};

const userAnswersSlice = createSlice({
  name: "userAnswers",
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<UserAnswerWithExtras>) {
      const {
        index,
        questionTitle,
        userAnswer,
        correctAnswer,
        isCorrect,
        score,
        totalQuestions,
        userAnswerLetter,
        isRadioChecked,
        testId,
      } = action.payload;

      state.userAnswers[index] = {
        index,
        questionTitle,
        userAnswer,
        correctAnswer,
        isCorrect,
        score,
        totalQuestions,
        userAnswerLetter,
        isRadioChecked,
        testId,
      };

      localStorage.setItem("userAnswers", JSON.stringify(state.userAnswers));
    },

    setCurrentQuestionIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;

      localStorage.setItem(
        "currentQuestionIndex",
        JSON.stringify(action.payload),
      );
    },

    clearAnswers(state) {
      state.userAnswers = [];
      state.currentQuestionIndex = 0;

      localStorage.removeItem("userAnswers");
      localStorage.removeItem("currentQuestionIndex");
    },
  },
});

export const { setAnswer, setCurrentQuestionIndex, clearAnswers } =
  userAnswersSlice.actions;

export default userAnswersSlice.reducer;
 */
/* 
  questionTitle: string;
  questionTitleAr: string;
  userAnswer: string;
  userAnswerAr: string;
  correctAnswer: string;
  correctAnswerAr: string;
  isCorrect: boolean;
*/

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserAnswerType } from "../../../utilities/Interfaces";

export interface UserAnswerWithExtras extends UserAnswerType {
  index: number;
  totalQuestions: number;
  score: number;
  isRadioChecked: boolean;
  testId?: string;
}

interface UserAnswersState {
  userAnswers: UserAnswerWithExtras[];
  currentQuestionIndex: number;
}

const loadAnswers = (): UserAnswerWithExtras[] => {
  const saved = localStorage.getItem("userAnswers");

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved) as UserAnswerWithExtras[];
  } catch {
    return [];
  }
};

const loadCurrentQuestionIndex = (): number => {
  const saved = localStorage.getItem("currentQuestionIndex");

  if (!saved) {
    return 0;
  }

  try {
    return JSON.parse(saved) as number;
  } catch {
    return 0;
  }
};

const initialState: UserAnswersState = {
  userAnswers: loadAnswers(),
  currentQuestionIndex: loadCurrentQuestionIndex(),
};

const userAnswersSlice = createSlice({
  name: "userAnswers",
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<UserAnswerWithExtras>) {
      const {
        index,
        questionTitle,
        userAnswer,
        correctAnswer,
        isCorrect,
        score,
        totalQuestions,
        isRadioChecked,
        testId,
        questionTitleAr,
        userAnswerAr,
        correctAnswerAr,
         questionTitleEn,
        userAnswerEn,
        correctAnswerEn,
      } = action.payload;

      state.userAnswers[index] = {
        index,
        questionTitle,
        userAnswer,
        correctAnswer,
        isCorrect,
        score,
        totalQuestions,
        isRadioChecked,
        testId,
        questionTitleAr,
        userAnswerAr,
        correctAnswerAr,
        questionTitleEn,
        userAnswerEn,
        correctAnswerEn,
      };

      localStorage.setItem("userAnswers", JSON.stringify(state.userAnswers));
    },

    setCurrentQuestionIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;

      localStorage.setItem(
        "currentQuestionIndex",
        JSON.stringify(action.payload),
      );
    },

    clearAnswers(state) {
      state.userAnswers = [];
      state.currentQuestionIndex = 0;

      localStorage.removeItem("userAnswers");
      localStorage.removeItem("currentQuestionIndex");
    },
  },
});

export const { setAnswer, setCurrentQuestionIndex, clearAnswers } =
  userAnswersSlice.actions;

export default userAnswersSlice.reducer;
