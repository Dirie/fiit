import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import personReducer from "./store/reducers/personReducer";
import Auth from "./containers/Auth/Auth";
const store = createStore(personReducer);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    <Auth />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
