import { call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import {
  setLoading,
  setClearLoading,
  setError,
} from "../../Slice/LoadAndErrorSlice";
import { setOnlyLesson } from "../../Slice/LessonSlice/LessonSlice";
import type { LessonType } from "../../../utilities/Interfaces";

async function FetchLessonApi(id: string) {
  const response = await axios.get<LessonType>(
    `http://localhost:5100/api/lesson/${id}`,
  );

  return response.data;
}

function* FetchGetOnlyLesson(action: PayloadAction<string>): SagaIterator {
  try {
    yield put(setLoading());

    const lesson: LessonType = yield call(FetchLessonApi, action.payload);

    yield put(setOnlyLesson(lesson));
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

export function* WatchFetchGetOnlyLesson() {
  yield takeLatest("Fetch-ONLY-LESSON", FetchGetOnlyLesson);
}
