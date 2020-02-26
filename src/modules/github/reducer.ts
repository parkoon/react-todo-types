import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
} from "./actions";

const intialState: GithubState = {
  userProfile: {
    data: null,
    error: null,
    loading: false
  }
};

const github = createReducer<GithubState, GithubAction>(intialState, {
  [GET_USER_INFO]: (state, action) => ({
    ...state,
    userProfile: {
      data: null,
      loading: true,
      error: null
    }
  }),
  [GET_USER_INFO_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      data: action.payload,
      loading: true,
      error: null
    }
  }),
  [GET_USER_INFO_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      data: null,
      loading: false,
      error: action.payload
    }
  })
});

// function github(
//   state: GithubState = intialState,
//   action: GithubAction
// ): GithubState {
//   switch (action.type) {
//     case GET_USER_INFO:
//       return {
//         ...state,
//         userProfile: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };

//     case GET_USER_INFO_SUCCESS:
//       return {
//         ...state,
//         userProfile: {
//           loading: false,
//           error: null,
//           data: action.payload
//         }
//       };
//     case GET_USER_INFO_FAILURE:
//       return {
//         ...state,
//         userProfile: {
//           loading: false,
//           error: action.payload,
//           data: null
//         }
//       };

//     default:
//       return state;
//   }
// }

export default github;
