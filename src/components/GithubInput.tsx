import React, { useState } from "react";

type GithubInputType = {
  onInsert: (name: string) => void;
};

function GithubInput({ onInsert }: GithubInputType) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    onInsert(name);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="github name..."
        value={name}
        onChange={handleChange}
      />
      <button type="submit">입력</button>
    </form>
  );
}

export default GithubInput;
