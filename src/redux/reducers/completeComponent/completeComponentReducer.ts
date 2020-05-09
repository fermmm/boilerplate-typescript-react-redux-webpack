import {
   CHANGE_HELLO_NUMBER,
   CHANGE_HELLO_TEXT,
   CompleteComponentStore,
} from '../../actions/CompleteComponent/CompleteComponent';
import { Reducer } from '../index';

const initialState: CompleteComponentStore = {
   reduxTextLine: '',
   reduxNumber: 0,
};

export const completeComponentReducer: Reducer<CompleteComponentStore> = (
   state = initialState,
   action,
) => {
   switch (action.type) {
      case CHANGE_HELLO_TEXT:
         return { ...state, reduxTextLine: action.payload as string };
      case CHANGE_HELLO_NUMBER:
         return { ...state, reduxNumber: action.payload as number };
      default: {
         return state;
      }
   }
};
