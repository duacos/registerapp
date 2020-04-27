import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./assets/styles/normalize.css";
import "./assets/styles/general.sass";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
