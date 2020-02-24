import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

// export type TodoAction =
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;

export type TodoAction = ActionType<typeof actions>;

export type TodoState = Todo[];
