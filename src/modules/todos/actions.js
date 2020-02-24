import uuid from "uuid/v1";

export const ADD_TODO = "todos/ADD_TODO";
export const REMOVE_TODO = "todos/REMOVE_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: uuid(), text }
});
export const removeTodo = id => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id });
