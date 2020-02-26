import { createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "./types";
import { AxiosError } from "axios";

// export const GET_USER_INFO = "github/GET_USER_INFO" as const;
// export const GET_USER_INFO_SUCCESS = "github/GET_USER_INFO_SUCCESS" as const;
// export const GET_USER_INFO_FAILURE = "github/GET_USER_INFO_FAILURE" as const;

export const GET_USER_INFO = "github/GET_USER_INFO";
export const GET_USER_INFO_SUCCESS = "github/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "github/GET_USER_INFO_FAILURE";

export const getUserInfoAsync = createAsyncAction(
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE
)<string, GithubProfile, AxiosError>();

// export const getUserInfo = (username: string) => ({
//   type: GET_USER_INFO,
//   payload: username
// });

// export const getUserInfoSuccess = (payload: GithubProfile) => ({
//   type: GET_USER_INFO_SUCCESS,
//   payload
// });

// export const getUserInfoFailure = (payload: AxiosError) => ({
//   type: GET_USER_INFO_FAILURE,
//   payload
// });
