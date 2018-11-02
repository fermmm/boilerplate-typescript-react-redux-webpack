import { IHelloProps } from "./../../components/pages/HelloWorld/HelloWorld";
import { IAppProps } from "./../../components/App/App";
import { appReducer } from "./app/appReducer";
import { helloWorldReducer } from "./helloWorld/helloWorldReducer";

export interface IRootReducer {
    appState: (state?: IAppProps, action?: IReduxAction) => IAppProps;
    helloWorldState: (state?: IHelloProps, action?: IReduxAction) => IHelloProps;
}

export interface IStore {
    appState: IAppProps;
    helloWorldState: IHelloProps;
}

const rootReducer: IRootReducer = {
    appState: appReducer,
    helloWorldState: helloWorldReducer,
};

export interface IReduxAction {
    type: string;
    payload: any;
}

export { rootReducer };
