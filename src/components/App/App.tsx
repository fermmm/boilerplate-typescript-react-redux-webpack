import { createBrowserHistory, History } from 'history';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Router, Switch } from 'react-router';
import CompleteComponent from '../pages/CompleteComponent/CompleteComponent';
import SimpleComponent from '../pages/SimpleComponent/SimpleComponent';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';

const history: History = createBrowserHistory();

export const App: React.FC = () => {
   return (
      <ErrorBoundary>
         <Router history={history}>
            <Switch>
               <Route exact path={'/'} component={CompleteComponent} />
               <Route path={'/simple'} component={SimpleComponent} />
            </Switch>
         </Router>
      </ErrorBoundary>
   );
};

export default hot(module)(App);
