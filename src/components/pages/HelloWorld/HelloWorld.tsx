import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { IStore, DispatchFunction } from "../../../redux/reducers";
import { CHANGE_HELLO_TEXT, CHANGE_HELLO_NUMBER } from "../../../redux/actions";

// @ts-ignore
import styles from "./HelloWorld.scss";

/*
    This page example shows how to add react-router and redux to a component with typescript, if you 
    don't need it in your component you can remove all and create a more simple starting component.
    
    You can also access the history object with a static constant like this (change page example):
        App.history.push("/targetPage");

    So you don't need the RouteComponentProps<any> in the class declaration if you are only using 
    the history property.
*/

export interface IHelloProps { 
    reduxTextLine: string;
    reduxNumber: number;
    onNewReduxText?(text: string): void;
    onNewReduxNumber?(newNumber: number): void;
}
export interface IHelloState { }

class HelloWorld extends Component<IHelloProps & RouteComponentProps<any>, IHelloState> {
    public componentDidMount(): void {

        // Send stuff to redux so we can test that redux is working:
        this.props.onNewReduxText("And this second text line was stored and retreived from redux.");
        this.props.onNewReduxNumber(665);
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
 * Redux connectors.
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

export default connect<{}, {}, IHelloProps>(mapStateToProps, mapDispatchToProps)(hot(module)(withRouter(HelloWorld)));
