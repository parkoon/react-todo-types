import React, { useState } from "react";
import "./GithubUsernameForm.css";

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChanage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="GithubUsernameForm">
      <input
        onChange={onChanage}
        value={input}
        placeholder="github 계정명을 입력하세요."
      />
      <button>조회</button>
    </form>
  );
}

export default GithubUsernameForm;
