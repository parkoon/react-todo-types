import uuid from "uuid/v1";

const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: uuid(), text }
});
export const removeTodo = id => ({ type: REMOVE_TODO, payload: id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, payload: id });

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
