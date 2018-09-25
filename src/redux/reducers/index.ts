import { AppReducer } from "./AppReducer";
import { IAppState } from "./interfaces";
import { IReduxAction } from "../interfaces";

const rootReducer: IRootReducer = {
    appState: AppReducer,
};

export interface IRootReducer {
    appState: (state?: IAppState, action?: IReduxAction) => IAppState;
}

export { rootReducer };
