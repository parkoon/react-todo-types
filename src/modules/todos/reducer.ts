import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";
import { TodoState, TodoAction } from "./types";

const initialState: TodoState = [];

function todos(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      });
    case REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload;
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}

export default todos;
