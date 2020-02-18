import { put, takeLatest, call } from "redux-saga/effects";
import { GET_PROFILE_REQUEST } from "./types";
import fetchProfile from "./services";
import { receiveProfileSuccess, receiveProfileError } from "./actions";
import { get } from "lodash";

export function* getProfileRequest() {
  try {
    const profile = yield call(fetchProfile);
    yield put(receiveProfileSuccess(get(profile, "data", null)));
  } catch (error) {
    yield put(receiveProfileError(get(error, "message", "Network Error!")));
  }
}

export function* watchGetProfileRequest() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfileRequest);
}
