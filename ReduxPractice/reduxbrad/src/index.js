import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/results";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const rootReducers = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const loggger = store => {
  return next => {
    return action => {
      console.log("[Middlewere ..] dispatching..", action);
      const result = next(action);
      console.log("[Middlewere ..] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(loggger, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
