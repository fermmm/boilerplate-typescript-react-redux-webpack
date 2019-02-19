import { IAppProps } from "./../../components/App/App";
import { appReducer } from "./app/appReducer";
import { completeComponentReducer } from "./completeComponent/completeComponentReducer";
import { ICompleteComponentProps } from "../../components/pages/CompleteComponent/CompleteComponent";

const rootReducer: IRootReducer = {
    appState: appReducer,
    completeComponentState: completeComponentReducer,
};

export interface IRootReducer {
    appState: (state?: IAppProps, action?: IReduxAction<IAppProps>) => IAppProps;
    completeComponentState: (state?: ICompleteComponentProps, action?: IReduxAction<string | number>) => ICompleteComponentProps;
}

export interface IStore {
    appState: IAppProps;
    completeComponentState: ICompleteComponentProps;
}

export interface IReduxAction<T> {
    type: string;
    payload: T;
}

export type DispatchFunction<T> = (v: IReduxAction<Partial<T>>) => void;

export { rootReducer };
