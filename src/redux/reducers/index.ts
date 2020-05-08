import { completeComponentReducer } from './completeComponent/completeComponentReducer';
import { CompleteComponentProps } from '../../components/pages/CompleteComponent/CompleteComponent';

const rootReducer: RootReducer = {
    completeComponentState: completeComponentReducer,
};

export interface RootReducer {
    completeComponentState: (state?: CompleteComponentProps, action?: ReduxAction<string | number>) => CompleteComponentProps;
}

export interface IStore {
    completeComponentState: CompleteComponentProps;
}

export interface ReduxAction<T> {
    type: string;
    payload: T;
}

export type DispatchFunction<T> = (v: ReduxAction<Partial<T>>) => void;

export { rootReducer };
