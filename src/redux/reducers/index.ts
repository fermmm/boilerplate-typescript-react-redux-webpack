import { ValueOf } from 'ts-essentials';
import { CompleteComponentStore } from '../actions/CompleteComponent/CompleteComponent';
import { StoreMiddlewares } from '../store';
import { completeComponentReducer } from './completeComponent/completeComponentReducer';

// Add new store props in these 3 elements:
export interface RootReducer {
   completeComponentState: Reducer<CompleteComponentStore>;
}

const rootReducer: RootReducer = {
   completeComponentState: completeComponentReducer,
};

export interface Store extends StoreMiddlewares {
   completeComponentState: CompleteComponentStore;
}

// Typings:
export interface DispatcherMessage<T> {
   type: string;
   payload: ValueOf<T>;
}
export type DispatcherCreator<T> = (payload: T) => { type: string; payload: T };
export type Reducer<T> = (state?: T, action?: DispatcherMessage<T>) => T;

export { rootReducer };
