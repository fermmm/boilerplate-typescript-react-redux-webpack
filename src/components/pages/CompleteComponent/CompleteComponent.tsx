import { History } from 'history';
import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { useHistory } from 'react-router-dom';
import { useExampleApiRequest } from '../../../api/example';
// @ts-ignore
import styles from './CompleteComponent.scss';

interface CompleteComponentProps {
   // ... Props types here ...
}

export const CompleteComponent: FC<CompleteComponentProps> = () => {
   const history: History = useHistory();
   const [requestResponse, sendRequest] = useExampleApiRequest();
   React.useEffect(() => {
      sendRequest();
   }, []);

   return (
      <div className={styles.completeComponent}>
         It's working. <br />
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
         {requestResponse.isLoading
            ? 'Making a request to an example URL...'
            : requestResponse.isError
            ? requestResponse.errorMessage
            : requestResponse.data?.results.map(r => <div key={r.episode_id}>{r.title}</div>)}
      </div>
   );
};

export default hot(module)(CompleteComponent);
