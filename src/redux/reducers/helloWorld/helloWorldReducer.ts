import { CHANGE_HELLO_TEXT } from "../../actions/index";
import { IHelloProps } from "../../../components/pages/HelloWorld/HelloWorld";
import { IReduxAction } from "..";

const initial: IHelloProps = {
    reduxTextLine: "",
};

function helloWorldReducer(state: IHelloProps = initial, action: IReduxAction = { type: "", payload: null }): IHelloProps {
    switch (action.type) {
        case CHANGE_HELLO_TEXT:
            return {...state,  reduxTextLine: action.payload};
        default: {
            return state;
        }
    }
}

export { helloWorldReducer };
