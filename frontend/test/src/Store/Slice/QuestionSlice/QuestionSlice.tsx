/* import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LessonQuestionsType } from "../../../utilities/Interfaces";

interface InitialStateType {
  questions: LessonQuestionsType[];
  question: LessonQuestionsType | null;
}

const initialState: InitialStateType = {
  questions: [],
  question: null,
};

const QuestionSlice = createSlice({
  name: "QuestionSlice",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<LessonQuestionsType[]>) {
      state.questions = action.payload;
    },

    setOnlyQuestion(state, action: PayloadAction<LessonQuestionsType>) {
      state.question = action.payload;
    },
  },
});

export const { setQuestions, setOnlyQuestion } = QuestionSlice.actions;

export default QuestionSlice.reducer;
 */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LessonQuestionsType } from "../../../utilities/Interfaces";

interface InitialStateType {
  questions: LessonQuestionsType[];
  question: LessonQuestionsType | null;
}

const initialState: InitialStateType = {
  questions: [],
  question: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<LessonQuestionsType[]>) {
      state.questions = action.payload;
    },

    setOnlyQuestion(state, action: PayloadAction<LessonQuestionsType>) {
      state.question = action.payload;
    },
  },
});

export const { setQuestions, setOnlyQuestion } = questionSlice.actions;

export default questionSlice.reducer;
