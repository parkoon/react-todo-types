import React, { useState } from "react";

function TodoInput({ onInsert }) {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
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
