import { call, put, takeLatest } from "redux-saga/effects";

import type { SagaIterator } from "redux-saga";
import {
  setClearLoading,
  setError,
  setLoading,
} from "../../Slice/LoadAndErrorSlice";
import { setLessons } from "../../Slice/LessonSlice/LessonSlice";
import axios from "axios";

async function FetchLessonsApi() {
  const response = await axios.get(
    `https://backend-service-migrations-samhallet-test.onrender.com/api/lessons`,
  );

  const { lessons } = response.data;
  return lessons;
}

function* FetchGetLessons(): SagaIterator {
  try {
    yield put(setLoading());

    const lessons = yield call(FetchLessonsApi);

    yield put(setLessons(lessons));
  } catch (error: unknown) {
    let message = "Something went wrong";

    if (error instanceof Error) {
      message = error.message;
    }

    yield put(setError(message));
  } finally {
    yield put(setClearLoading());
  }
}

export function* WatchFetchGetLessons() {
  yield takeLatest("Fetch-ALL-LESSONS", FetchGetLessons);
}
