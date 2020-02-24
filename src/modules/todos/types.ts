import { addTodo, toggleTodo, removeTodo } from "./actions";

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type TodoState = Todo[];
