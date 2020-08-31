import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
// @ts-ignore
import styles from './SimpleComponent.scss';

interface SimpleComponentProps {
   // ... Your props here ...
}

export const SimpleComponent: FC<SimpleComponentProps> = () => {
   return <div className={styles.simpleComponent}>Example of the most simple component possible.</div>;
};

export default hot(module)(SimpleComponent);
