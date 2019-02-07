import React from "react";
import App from "./view";
import { Provider } from "react-redux";
import getStore from "./state/reducers";

const store = getStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
