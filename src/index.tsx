import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { Store } from "redux";
import { History } from "history";
import App from "./components/App/App";

// GLOBAL STYLES
// @ts-ignore
import "./assets/global-styles/styles.scss";

// REDUX STORE
const { store, history }: { store: Store, history: History } = configureStore({});

const root: HTMLElement = document.getElementById("root");
const RootComponent: JSX.Element = (
    <Provider store={store}>
        <App history={history} />
    </Provider>
);

ReactDOM.render(RootComponent, root);
