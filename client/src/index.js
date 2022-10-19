import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../src/reducers";
import "./index.css";

import App from "./App";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
// const container = document.getElementById('app');
// const root = createRoot(container);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
