import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Todos from "../components/Todos";

import { addTodo, toggleTodo, removeTodo } from "../modules/todos";
import { RootState } from "../modules";

function TodoContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleInsert = (text: string) => dispatch(addTodo(text));
  const handleRemove = (id: string) => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  const handleToggle = (id: string) => dispatch(toggleTodo(id));

  return (
    <Todos
      items={todos}
      onInsert={handleInsert}
      onRemove={handleRemove}
      onToggle={handleToggle}
    />
  );
}

export default TodoContainer;
