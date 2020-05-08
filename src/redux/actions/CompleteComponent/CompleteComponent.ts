import { DispatcherCreator } from '../../reducers';

// Identifiers:
export const CHANGE_HELLO_TEXT: string = 'CHANGE_HELLO_TEXT';
export const CHANGE_HELLO_NUMBER: string = 'CHANGE_HELLO_NUMBER';

// Dispatcher creators:
export const changeHelloText: DispatcherCreator<string> = (payload: string) => ({
   type: CHANGE_HELLO_TEXT,
   payload,
});

export const changeHelloNumber: DispatcherCreator<number> = (payload: number) => ({
   type: CHANGE_HELLO_NUMBER,
   payload,
});

// Typing:
export interface CompleteComponentStore {
   reduxTextLine: string;
   reduxNumber: number;
}
