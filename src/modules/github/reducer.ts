import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
} from "./actions";

const initialState: GithubState = {
  userProfile: {
    loading: false,
    data: null,
    error: null
  }
};

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_USER_PROFILE_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default github;
