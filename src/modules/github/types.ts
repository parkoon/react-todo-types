import { getUserInfo, getUserInfoSuccess, getUserInfoFailure } from "./actions";
import { AxiosError } from "axios";

export type GithubProfile = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
} | null;

export type GithubState = {
  userProfile: {
    loading: boolean;
    data: GithubProfile | null;
    error: AxiosError | null;
  };
};

export type GithubAction =
  | ReturnType<typeof getUserInfo>
  | ReturnType<typeof getUserInfoSuccess>
  | ReturnType<typeof getUserInfoFailure>;