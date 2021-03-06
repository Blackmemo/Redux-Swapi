import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// needed dependancies x
// applyMiddleware from redux x
// thunk from redux-thunk x
// logger from redux-logger x 
// rootReducer from ./reducers x

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
