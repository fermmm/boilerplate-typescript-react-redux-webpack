import { AppProps } from './../../components/App/App';
import { appReducer } from './app/appReducer';
import { completeComponentReducer } from './completeComponent/completeComponentReducer';
import { CompleteComponentProps } from '../../components/pages/CompleteComponent/CompleteComponent';

const rootReducer: RootReducer = {
    appState: appReducer,
    completeComponentState: completeComponentReducer,
};

export interface RootReducer {
    appState: (state?: AppProps, action?: ReduxAction<AppProps>) => AppProps;
    completeComponentState: (state?: CompleteComponentProps, action?: ReduxAction<string | number>) => CompleteComponentProps;
}

export interface IStore {
    appState: AppProps;
    completeComponentState: CompleteComponentProps;
}

export interface ReduxAction<T> {
    type: string;
    payload: T;
}

export type DispatchFunction<T> = (v: ReduxAction<Partial<T>>) => void;

export { rootReducer };
