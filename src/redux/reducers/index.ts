import { AppReducer } from "./AppReducer";
import { IAppState } from "./interfaces";
import { IReduxAction } from "../interfaces";

const rootReducer: { appState: (state?: IAppState, action?: IReduxAction) => IAppState } = {
    appState: AppReducer,
};

export { rootReducer };
