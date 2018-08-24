import { IReduxAction } from "../interfaces";
import { IAppState } from "./interfaces";

const initial: IAppState = {
    appTitle: "App Title",
};

function AppReducer(state: IAppState = initial, action: IReduxAction = { type: "", payload: null }): IAppState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export { AppReducer };
