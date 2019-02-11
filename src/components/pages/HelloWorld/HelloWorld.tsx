import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { IStore, DispatchFunction } from "../../../redux/reducers";
import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from "../../../redux/actions";

// @ts-ignore
import styles from "./HelloWorld.scss";

/*    
    You can access the history object with a static constant like this (change page example):
        App.history.push("/targetPage");
*/
export interface IHelloProps { 
    reduxTextLine: string;
    reduxNumber: number;
    onNewReduxText?(text: string): void;
    onNewReduxNumber?(newNumber: number): void;
}
export interface IHelloState { }

class HelloWorld extends Component<IHelloProps, IHelloState> {
    public componentDidMount(): void {

        // Send stuff to redux so we can test that redux is working:
        this.props.onNewReduxText("And this second text line was stored and retreived from redux.");
        this.props.onNewReduxNumber(555);
    }

    public render(): JSX.Element {
        return (
            <h1 className={styles.helloWorld}> 
                It's working. <br />
                {this.props.reduxTextLine} <br />
                Also this number: <br />
                {this.props.reduxNumber}
            </h1>
        );
    }
}

/**
 * 
 * REDUX CONNECTORS. (Remove when redux is not needed)
 * 
 */
function mapStateToProps(state: IStore): Partial<IHelloProps> {
    return {
        reduxTextLine: state.helloWorldState.reduxTextLine,
        reduxNumber: state.helloWorldState.reduxNumber,
    };
}

function mapDispatchToProps(dispatch: DispatchFunction<string | number>): Partial<IHelloProps> {
    return {
        onNewReduxText: (text: string) => dispatch({type: CHANGE_HELLO_TEXT, payload: text}),
        onNewReduxNumber: (newNumber: number) => dispatch({type: CHANGE_HELLO_NUMBER, payload: newNumber}),
    };
}

export default connect<{}, {}, IHelloProps>(mapStateToProps, mapDispatchToProps)(hot(module)(HelloWorld));
