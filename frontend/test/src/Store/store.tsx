import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Saga/rootSaga";
import LessonSliceReducer from "./Slice/LessonSlice/LessonSlice.js";
import LoadAndErrorSliceReducer from "./Slice/LoadAndErrorSlice.js";
import languageSliceReducer from "./Slice/LessonSlice/LanguageSlice.js";
import QuestionSliceReducer from "./Slice/QuestionSlice/QuestionSlice.js";
import userAnswersSliceReducer from "./Slice/QuestionSlice/UserAnswerSlice.js";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    lessonsSlice: LessonSliceReducer,
    questionsSlice: QuestionSliceReducer,
    LoadAndErrorSlice: LoadAndErrorSliceReducer,
    userAnswersSlice: userAnswersSliceReducer,
    languageSlice: languageSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
