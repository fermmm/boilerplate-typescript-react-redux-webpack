import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// @ts-ignore
import styles from './SimpleComponent.scss';

export interface SimpleComponentProps { }
export interface SimpleComponentState { }

class SimpleComponent extends Component<SimpleComponentProps, SimpleComponentState> {
    static defaultProps: Partial<SimpleComponentProps> = {
        
    };
    
    public render(): JSX.Element {
        return (
            <div className={styles.simpleComponent}>
                Example of a simple component. No Redux, no router props.
            </div>
        );
    }
}

export default hot(module)(SimpleComponent);
