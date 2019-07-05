import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from '../../actions/index';
import { ReduxAction } from '..';
import { CompleteComponentProps } from '../../../components/pages/CompleteComponent/CompleteComponent';

const initialState: CompleteComponentProps = {
    reduxTextLine: '',
    reduxNumber: 0,
};

export function completeComponentReducer(state: CompleteComponentProps = initialState, action: ReduxAction<string | number> = { type: '', payload: null }): CompleteComponentProps {
    switch (action.type) {
        case CHANGE_HELLO_TEXT:
            return {...state,  reduxTextLine: action.payload as string};
        case CHANGE_HELLO_NUMBER:
            return {...state,  reduxNumber: action.payload as number};
        default: {
            return state;
        }
    }
}
