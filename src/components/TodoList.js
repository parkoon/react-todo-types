import React from "react";

function TodoList({ text, done, onRemove, onToggle }) {
  return (
    <li style={{ textDecoration: done ? "line-through" : "none" }}>
      {text} <button onClick={onToggle}>토글</button>
      <button onClick={onRemove}>지우기</button>
    </li>
  );
}

export default TodoList;
