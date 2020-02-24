import React from "react";
import { Todo } from "../modules/todos";

type TodoListProps = {
  todo: Todo;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
};

function TodoList({ todo, onRemove, onToggle }: TodoListProps) {
  const handleToggle = () => onToggle(todo.id);
  const handleRemove = () => onRemove(todo.id);

  const textStyle: React.CSSProperties = {
    textDecoration: todo.done ? "line-through" : "none"
  };

  return (
    <li style={textStyle}>
      {todo.text} <button onClick={handleToggle}>토글</button>
      <button onClick={handleRemove}>지우기</button>
    </li>
  );
}

export default TodoList;
