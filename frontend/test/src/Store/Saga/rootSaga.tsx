import { all } from "redux-saga/effects";
import { WatchFetchGetLessons } from "./LessonSaga/FetchAllLesson";
import { WatchFetchGetOnlyLesson } from "./LessonSaga/FetchOnlyLessonSaga";
import { WatchFetchGetQuestions } from "./QuestionSaga/FetchAllQuestions";
import { WatchFetchGetOnlyQuestion } from "./QuestionSaga/FetchOnlyQuestionSaga";

export default function* RootSaga() {
  yield all([
    WatchFetchGetLessons(),
    WatchFetchGetOnlyLesson(),
    WatchFetchGetQuestions(),
    WatchFetchGetOnlyQuestion(),
  ]);
}
