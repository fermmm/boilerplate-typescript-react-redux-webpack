import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from "./../../actions/index";
import { IHelloProps } from "../../../components/pages/HelloWorld/HelloWorld";
import { IReduxAction } from "..";

const initial: IHelloProps = {
    reduxTextLine: "",
    reduxNumber: 0,
};

function helloWorldReducer(state: IHelloProps = initial, action: IReduxAction<string | number> = { type: "", payload: null }): IHelloProps {
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

export { helloWorldReducer };
