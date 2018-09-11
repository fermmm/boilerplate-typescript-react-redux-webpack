import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { RouteComponentProps, withRouter } from "react-router";
const styles: any = require("./HelloWorld.scss"); 

/*
    This page example shows how to add react-router with typescript, if you don't need it in
    your component or want a more simple component that does not implement react-router then you can
    access the history object like this (change page example):
        App.history.push("/targetPage");

    Then you can delete RouteComponentProps<> and withRouter() from this example component.
*/

interface IProps { }
interface IState { }

class HelloWorld extends Component<RouteComponentProps<IProps>, IState> {
    public render(): JSX.Element {
        return (
            <h1 className={styles.helloWorld}> 
                This project is so beautiful at this point, keep codig beautifully.
            </h1>
        );
    }
}

// You can add the "connect" function here to implement redux.
export default hot(module)(withRouter(HelloWorld));
