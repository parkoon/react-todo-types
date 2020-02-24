import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false
      });
    case REMOVE_TODO:
      return state.filter(todo => {
        console.log(todo);
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
