/* import { call, put, takeLatest } from "redux-saga/effects";

import type { SagaIterator } from "redux-saga";
import {
  setClearLoading,
  setError,
  setLoading,
} from "../../Slice/LoadAndErrorSlice";
import axios from "axios";
import { setQuestions } from "../../Slice/QuestionSlice/QuestionSlice";
import type { LessonQuestionsType } from "../../../utilities/Interfaces";

async function FetchQuestionsApi() {
  const response = await axios.get(`http://localhost:5100/api/questions`);

  return response.data.lessons;
}

function* FetchGetQuestions(): SagaIterator {
  try {
    yield put(setLoading());

    const questions: LessonQuestionsType[] = yield call(FetchQuestionsApi);

    yield put(setQuestions(questions));
  } catch (error) {
    let message = "Something went wrong";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(setError(message));
  } finally {
    yield put(setClearLoading());
  }
}

export function* WatchFetchGetQuestions() {
  yield takeLatest("Fetch-ALL-QUESTIONS", FetchGetQuestions);
}
 */
import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import axios from "axios";

import {
  setLoading,
  setClearLoading,
  setError,
} from "../../Slice/LoadAndErrorSlice";

import { setQuestions } from "../../Slice/QuestionSlice/QuestionSlice";
import type {
  LessonQuestionsType,
  QuestionsResponseType,
} from "../../../utilities/Interfaces";

async function fetchQuestionsApi(): Promise<LessonQuestionsType[]> {
  const response = await axios.get<QuestionsResponseType>(
    "http://localhost:5100/api/questions",
  );

  return response.data.lessons;
}

function* fetchQuestions(): SagaIterator {
  try {
    yield put(setLoading());

    const lessons: LessonQuestionsType[] = yield call(fetchQuestionsApi);

    yield put(setQuestions(lessons));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    yield put(setError(message));
  } finally {
    yield put(setClearLoading());
  }
}

export function* WatchFetchGetQuestions() {
  yield takeLatest("Fetch-ALL-QUESTIONS", fetchQuestions);
}
