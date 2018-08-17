import { IAppState } from "../reducers/interfaces";

export interface IReduxAction {
  type: string;
  payload: any;
}

export interface IStore {
  appState: IAppState;
}
