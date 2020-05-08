import { ConnectedRouterProps } from 'connected-react-router';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { changeHelloNumber, changeHelloText } from '../../../redux/actions/CompleteComponent/CompleteComponent';
import { Store } from '../../../redux/reducers';
// @ts-ignore
import styles from './CompleteComponent.scss';

interface CompleteComponentProps extends ConnectedRouterProps {
   /// ... Your props here ....
}

export const CompleteComponent: FC<CompleteComponentProps> = ({ history }) => {
   const reduxTextLine: string = useSelector<Store, string>(state => state.completeComponentState.reduxTextLine);
   const reduxNumber: number = useSelector<Store, number>(state => state.completeComponentState.reduxNumber);
   const dispatch: Dispatch = useDispatch();

   React.useEffect(() => {
      // Send stuff to redux when mounting the component only to show that redux is working:
      dispatch(changeHelloText('And this second text line was stored and retrieved from redux.'));
      dispatch(changeHelloNumber(555));
   }, []);

   return (
      <div className={styles.completeComponent}>
         {/* Show the redux data. */}
         It's working. <br />
         {reduxTextLine} <br />
         Also the following number: <br />
         {reduxNumber}
         <br />
         <button onClick={() => history.push('/simple/')}>Show a more simple component.</button>
      </div>
   );
};

export default hot(module)(CompleteComponent);
