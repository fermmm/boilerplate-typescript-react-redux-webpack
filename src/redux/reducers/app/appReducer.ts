import { IAppProps } from "../../../components/App/App";
import { CHANGE_APP_SETTINGS } from "../../actions";
import { IReduxAction } from "..";

function appReducer(state: IAppProps = {}, action: IReduxAction = { type: "", payload: null }): IAppProps {
    switch (action.type) {
        case CHANGE_APP_SETTINGS:
            return {...state, ...action.payload};
        default: {
            return state;
        }
    }
}

export { appReducer };
