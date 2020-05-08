import React, { FC } from 'react';
import { hot } from 'react-hot-loader';

// @ts-ignore
import styles from './SimpleComponent.scss';

interface SimpleComponentProps { }
interface SimpleComponentState { }

export const SimpleComponent: FC = () => {
    return (
        <div className={styles.simpleComponent}>
            Example of a simple component. No Redux, no router props.
        </div>
    );
}

export default hot(module)(SimpleComponent);
