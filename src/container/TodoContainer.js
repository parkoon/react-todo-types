import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Todos from "../components/Todos";

import { addTodo, toggleTodo, removeTodo } from "../modules/todos";

function TodoContainer() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleInsert = text => dispatch(addTodo(text));
  const handleRemove = id => {
    console.log(id);
    dispatch(removeTodo(id));
  };
  const handleToggle = id => dispatch(toggleTodo(id));

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
