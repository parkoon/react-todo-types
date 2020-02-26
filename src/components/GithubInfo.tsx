import React, { CSSProperties } from "react";
import { GithubProfile } from "../modules/github";

type GithubInfoType = {
  info: GithubProfile;
};

function GithubInfo({ info }: GithubInfoType) {
  const wrapperStyle: CSSProperties = {
    width: "200px",
    fontSize: "12px"
  };
  return (
    <div style={wrapperStyle}>
      <span>{JSON.stringify(info)}</span>
    </div>
  );
}

export default GithubInfo;
