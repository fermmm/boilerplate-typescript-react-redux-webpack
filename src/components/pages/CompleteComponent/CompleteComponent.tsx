import { History } from 'history';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { useHistory } from 'react-router-dom';
// @ts-ignore
import styles from './CompleteComponent.scss';

interface CompleteComponentProps {
   /// ... Your props here ....
}

export const CompleteComponent: FC<CompleteComponentProps> = () => {
   const history: History = useHistory();

   return (
      <div className={styles.completeComponent}>
         {/* Show the redux data. */}
         It's working. <br />
         <br />
         <button onClick={() => history.push('/simple/')}>Show a more simple component.</button>
      </div>
   );
};

export default hot(module)(CompleteComponent);
