import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import CompleteComponent from '../pages/CompleteComponent/CompleteComponent';
import SimpleComponent from '../pages/SimpleComponent/SimpleComponent';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../redux/store';

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path={'/'} component={CompleteComponent} />
                        <Route path={'/simple'} component={SimpleComponent} />
                    </Switch>
                </ErrorBoundary>
            </ConnectedRouter>
        );
    }
}

export default hot(module)(App)
