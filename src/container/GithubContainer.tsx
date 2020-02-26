import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GithubInfo from "../components/GithubInfo";
import GithubInput from "../components/GithubInput";
import { fetchUserInfo } from "../api/github";
import { GithubProfile, getUserInfo } from "../modules/github";
import { RootState } from "../modules";

function GithubContainer() {
  const { data, error, loading } = useSelector(
    (state: RootState) => state.github.userProfile
  );

  const dispatch = useDispatch();
  const onInsert = async (name: string) => {
    dispatch(getUserInfo(name));
  };

  return (
    <div>
      <GithubInput onInsert={onInsert} />
      <GithubInfo info={data} />
    </div>
  );
}

export default GithubContainer;
