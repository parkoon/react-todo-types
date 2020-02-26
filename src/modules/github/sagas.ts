import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import {
  GET_USER_INFO,
  GET_USER_INFO_FAILURE,
  getUserInfo,
  GET_USER_INFO_SUCCESS
} from "./actions";
import { fetchUserInfo } from "../../api/github";
import { GithubAction, GithubProfile } from "./types";

function* github(action: ReturnType<typeof getUserInfo>) {
  try {
    const res: GithubProfile = yield call(fetchUserInfo, action.payload);
    yield put({
      type: GET_USER_INFO_SUCCESS,
      payload: res
    });
  } catch (err) {
    yield put({
      type: GET_USER_INFO_FAILURE,
      payload: err
    });
  }
}

function* watchGithub() {
  yield takeEvery(GET_USER_INFO, github);
}

export function* githubSaga() {
  yield all([fork(watchGithub)]);
}
