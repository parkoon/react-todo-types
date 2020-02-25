import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import TodoContainer from "./container/TodoContainer";
import GithubProfileLoader from "./container/GithuProfileLoader";

import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <GithubProfileLoader />
  </Provider>,
  document.getElementById("root")
);
