import { ConnectedRouterProps } from 'connected-react-router';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useExampleApiRequest } from '../../../api/example';
import {
   changeHelloNumber,
   changeHelloText,
} from '../../../redux/actions/CompleteComponent/CompleteComponent';
import { Store } from '../../../redux/reducers';
// @ts-ignore
import styles from './CompleteComponent.scss';

interface CompleteComponentProps extends ConnectedRouterProps {
   // ... Props types here ...
}

export const CompleteComponent: FC<CompleteComponentProps> = ({ history }) => {
   const reduxTextLine: string = useSelector<Store, string>(
      state => state.completeComponentState.reduxTextLine
   );
   const reduxNumber: number = useSelector<Store, number>(
      state => state.completeComponentState.reduxNumber
   );
   const dispatch: Dispatch = useDispatch();
   const [requestResponse, sendRequest] = useExampleApiRequest();

   React.useEffect(() => {
      // Send stuff to redux when mounting the component only to show that redux is working:
      dispatch(changeHelloText('And this second text line was stored and retrieved from redux.'));
      dispatch(changeHelloNumber(555));
      // Send example request
      sendRequest();
   }, []);
   return (
      <div className={styles.completeComponent}>
         {/* Show the redux data. */}
         It's working. <br />
         {reduxTextLine} <br />
         Also the following number: <br />
         {reduxNumber}
         <br />
         Styled using CSS Modules.
         <br />
         <button onClick={() => history.push('/simple/')}>Show a more simple component.</button>
         <br />
         <br />
         {/* Show an example request. */}
         The following is an example of an axios http request, this list of movie titles comes from the
         Star Wars open API:
         <br />
         <br />
         {requestResponse.isLoading && 'Making a request to an example URL...'}
         {requestResponse.isError && requestResponse.errorMessage}
         {requestResponse.data?.results?.map(r => (
            <div key={r.episode_id}>{r.title}</div>
         ))}
      </div>
   );
};

export default hot(module)(CompleteComponent);
