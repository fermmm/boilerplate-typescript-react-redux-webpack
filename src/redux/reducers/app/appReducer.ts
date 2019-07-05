import { AppProps } from '../../../components/App/App';
import { CHANGE_APP_SETTINGS } from '../../actions';
import { ReduxAction } from '..';

export function appReducer(state: AppProps = {}, action: ReduxAction<AppProps> = { type: '', payload: null }): AppProps {
    switch (action.type) {
        case CHANGE_APP_SETTINGS:
            return {...state, ...action.payload};
        default: {
            return state;
        }
    }
}
