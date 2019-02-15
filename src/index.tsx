import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore, { IStoreAndHistory } from "./redux/store";
import App from "./components/App/App";

// @ts-ignore
import "./global-styles/index.scss";

const { store, history }: IStoreAndHistory = configureStore({});

const root: HTMLElement = document.getElementById("root");
const RootComponent: JSX.Element = (
    <Provider store={store}>
        <App history={history} />
    </Provider>
);

ReactDOM.render(RootComponent, root);
