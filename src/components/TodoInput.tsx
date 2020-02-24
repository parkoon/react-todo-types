import React, { useState } from "react";

type TodoInputProps = {
  onInsert: (text: string) => void;
};

function TodoInput({ onInsert }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;
    onInsert(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">추가</button>
      </form>
    </>
  );
}

export default TodoInput;
