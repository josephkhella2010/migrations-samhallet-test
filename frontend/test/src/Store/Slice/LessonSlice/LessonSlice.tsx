import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LessonType } from "../../../utilities/Interfaces";

interface InitialStateType {
  lessons: LessonType[];
  lesson: LessonType | null;
}

const initialState: InitialStateType = {
  lessons: [],
  lesson: null,
};

const LessonSlice = createSlice({
  name: "LessonSlice",
  initialState,
  reducers: {
    setLessons: (state, action: PayloadAction<LessonType[]>) => {
      state.lessons = action.payload;
    },
    setOnlyLesson: (state, action: PayloadAction<LessonType>) => {
      state.lesson = action.payload;
    },
  },
});
export const { setLessons, setOnlyLesson } = LessonSlice.actions;

export default LessonSlice.reducer;
