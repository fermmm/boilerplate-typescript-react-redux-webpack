import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from "../../actions/index";
import { IReduxAction } from "..";
import { ICompleteComponentProps } from "../../../components/pages/CompleteComponent/CompleteComponent";

const initial: ICompleteComponentProps = {
    reduxTextLine: "",
    reduxNumber: 0,
};

export function completeComponentReducer(state: ICompleteComponentProps = initial, action: IReduxAction<string | number> = { type: "", payload: null }): ICompleteComponentProps {
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
