import { put, takeLatest, call } from "redux-saga/effects";
import { GET_PROFILE_REQUEST, GET_PROFILE_FAILURE } from "./types";
import fetchProfile from "./services";
import { requestProfile } from "./actions";
import {
  receiveProfileSuccess,
  receiveProfileError,
  receiveProfileFailure
} from "./actions";
import get from 'lodash.get';
import Swal from "sweetalert2";
import store from "../../store";

export function* getProfileRequest() {
  try {
    const profile = yield call(fetchProfile);
    const data = get(profile, "data", null);
    if (data) {
      yield put(receiveProfileSuccess(data));
    } else {
      yield put(receiveProfileFailure());
    }
    // yield put(receiveProfileFailure());
  } catch (error) {
    yield put(receiveProfileError(get(error, "message", "Network Error!")));
  }
}

export function* getProfileFailure() {
  yield call(() =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      html:
        "<span>We asked for a profile...but they ghosted us! &#128542</span>",
      confirmButtonText: "Try Again!",
      preConfirm: () => {
        store.dispatch(requestProfile());
      }
    })
  );
}

export function* watchGetProfileRequest() {
  yield takeLatest(GET_PROFILE_REQUEST, getProfileRequest);
}

export function* watchGetProfileFailure() {
  yield takeLatest(GET_PROFILE_FAILURE, getProfileFailure);
}
