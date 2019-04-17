import React, { Component } from "react";
import { hot } from "react-hot-loader";

// @ts-ignore
import styles from "./SimpleComponent.scss";

export interface ISimpleComponentProps { }
export interface ISimpleComponentState { }

class SimpleComponent extends Component<ISimpleComponentProps, ISimpleComponentState> {
    public render(): JSX.Element {
        return (
            <div className={styles.simpleComponent}>
                Example of a simple component. No Redux, no router props.
            </div>
        );
    }
}

export default hot(module)(SimpleComponent);
