import { createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "github/GET_USER_PROFILE_FAILURE";

// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(
//   GET_USER_PROFILE_SUCCESS
// )<GithubProfile>();
// export const getUserProfileFailure = createStandardAction(
//   GET_USER_PROFILE_FAILURE
// )<AxiosError>();

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
)<undefined, GithubProfile, AxiosError>();
