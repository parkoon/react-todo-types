import { combineReducers } from "redux";
import todos from "./todos/index";

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
