import uuid from "uuid/v1";

export const ADD_TODO = "todos/ADD_TODO" as const;
export const REMOVE_TODO = "todos/REMOVE_TODO" as const;
export const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { id: uuid(), text }
});
export const removeTodo = (id: string) => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = (id: string) => ({ type: TOGGLE_TODO, payload: id });
