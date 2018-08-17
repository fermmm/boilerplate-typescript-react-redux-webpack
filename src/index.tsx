import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { AppContainer } from "./components/App";

// GLOBAL STYLES
require("./assets/global-styles/styles.scss");

// REDUX STORE
const {store, history} = configureStore({});

const root = document.getElementById("root");
const RootComponent = (
  <Provider store={store}>
    <AppContainer history={history} />
  </Provider>
);

ReactDOM.render(RootComponent, root);
