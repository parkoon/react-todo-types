import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import TodoContainer from "./container/TodoContainer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById("root")
);
