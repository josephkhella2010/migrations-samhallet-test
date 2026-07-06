/* import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserAnswerType } from "../../../utilities/Interfaces";

interface UserAnswerWithTotalQuestions extends UserAnswerType {
  totalQuestions?: number | string;
  score: string | number;
  userAnswerLetter: string;
  isRadioChecked: boolean;
  testId: string | undefined;
}
interface UserAnswersState {
  userAnswers: UserAnswerWithTotalQuestions[];
  currentQuestionIndex: number;
  isRadioChecked: boolean;
}

const loadAnswers = (): UserAnswerWithTotalQuestions[] => {
  const saved = localStorage.getItem("userAnswers");

  if (!saved) return [];

  try {
    return JSON.parse(saved) as UserAnswerWithTotalQuestions[];
  } catch {
    return [];
  }
};
const storageCurrentQuestionIndex = localStorage.getItem(
  "currentQuestionIndex",
);
const parsedCurrentQuestionIndex = storageCurrentQuestionIndex
  ? JSON.parse(storageCurrentQuestionIndex)
  : 1;

const initialState: UserAnswersState = {
  userAnswers: loadAnswers(),
  currentQuestionIndex: parsedCurrentQuestionIndex,
  isRadioChecked: false,
};

const userAnswersSlice = createSlice({
  name: "userAnswers",
  initialState,
  reducers: {
    setAnswer: (
      state,
      action: PayloadAction<{
        index: number;
        questionTitle: string;
        userAnswer: string;
        userAnswerLetter: string;
        correctAnswer: string;
        isCorrect: boolean;
        totalQuestions: number | string;
        score: string | number;
        isRadioChecked: boolean;
        testId: string | undefined;
      }>,
    ) => {
      const {
        index,
        questionTitle,
        userAnswer,
        userAnswerLetter,
        correctAnswer,
        isCorrect,
        totalQuestions,
        score,
        isRadioChecked,
        testId,
      } = action.payload;

      state.userAnswers[index] = {
        questionTitle,
        userAnswer,
        userAnswerLetter,
        correctAnswer,
        isCorrect,
        totalQuestions,
        score,
        isRadioChecked,
        testId,
      };

      localStorage.setItem("userAnswers", JSON.stringify(state.userAnswers));
    },

    clearAnswers(state) {
      state.userAnswers = [];
      state.currentQuestionIndex = 1;
      localStorage.removeItem("userAnswers");
      localStorage.removeItem("currentQuestionIndex");
    },
    setCurrentQuestionIndex(state, action: PayloadAction<number>) {
      state.currentQuestionIndex = action.payload;
      localStorage.setItem(
        "currentQuestionIndex",
        JSON.stringify(action.payload),
      );
    },
  },
});

export const { setAnswer, clearAnswers, setCurrentQuestionIndex } =
  userAnswersSlice.actions;

export default userAnswersSlice.reducer;
 */

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
