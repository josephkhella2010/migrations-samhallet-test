/* import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  setLoading,
  setClearLoading,
  setError,
} from "../../Slice/LoadAndErrorSlice";

import type { LessonQuestionsType } from "../../../utilities/Interfaces";
import { setOnlyQuestion } from "../../Slice/QuestionSlice/QuestionSlice";

async function FetchQuestionApi(id: string) {
  const response = await axios.get<LessonQuestionsType>(
    `http://localhost:5100/api/question/${id}`,
  );

  return response.data;
}

function* FetchGetOnlyQuestion(action: PayloadAction<string>): SagaIterator {
  try {
    yield put(setLoading());

    const question: LessonQuestionsType = yield call(
      FetchQuestionApi,
      action.payload,
    );

    yield put(setOnlyQuestion(question));
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

export function* WatchFetchGetOnlyQuestion() {
  yield takeLatest("Fetch-ONLY-QUESTION", FetchGetOnlyQuestion);
}
 */
/* import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  setLoading,
  setClearLoading,
  setError,
} from "../../Slice/LoadAndErrorSlice";

import type { LessonQuestionsType } from "../../../utilities/Interfaces";
import { setOnlyQuestion } from "../../Slice/QuestionSlice/QuestionSlice";

async function FetchQuestionApi(id: string) {
  const response = await axios.get<LessonQuestionsType>(
    `http://localhost:5100/api/question/${id}`,
  );

  return response.data;
}

function* FetchGetOnlyQuestion(action: PayloadAction<string>): SagaIterator {
  try {
    yield put(setLoading());

    const question: LessonQuestionsType = yield call(
      FetchQuestionApi,
      action.payload,
    );

    yield put(setOnlyQuestion(question));
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

export function* WatchFetchGetOnlyQuestion() {
  yield takeLatest("Fetch-ONLY-QUESTION", FetchGetOnlyQuestion);
}
 */
import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  setLoading,
  setClearLoading,
  setError,
} from "../../Slice/LoadAndErrorSlice";

import { setOnlyQuestion } from "../../Slice/QuestionSlice/QuestionSlice";
import type { LessonQuestionsType } from "../../../utilities/Interfaces";

async function fetchQuestionApi(id: string): Promise<LessonQuestionsType> {
  const response = await axios.get<LessonQuestionsType>(
    `https://backend-service-migrations-samhallet-test.onrender.com/api/question/${id}`,
  );

  return response.data;
}

function* fetchOnlyQuestion(action: PayloadAction<string>): SagaIterator {
  try {
    yield put(setLoading());

    const lesson: LessonQuestionsType = yield call(
      fetchQuestionApi,
      action.payload,
    );

    yield put(setOnlyQuestion(lesson));
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";

    yield put(setError(message));
  } finally {
    yield put(setClearLoading());
  }
}

export function* WatchFetchGetOnlyQuestion() {
  yield takeLatest("Fetch-ONLY-QUESTION", fetchOnlyQuestion);
}
