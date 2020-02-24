import { createReducer } from "typesafe-actions";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodoState, TodoAction } from "./types";

const initialState: TodoState = [];

// function todos(state: TodoState = initialState, action: TodoAction): TodoState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false
//       });
//     case REMOVE_TODO:
//       return state.filter(todo => {
//         return todo.id !== action.payload;
//       });
//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//       );

//     default:
//       return state;
//   }
// }

const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false
    }),
  [REMOVE_TODO]: (state, action) =>
    state.filter(todo => {
      return todo.id !== action.payload;
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    )
});

export default todos;
