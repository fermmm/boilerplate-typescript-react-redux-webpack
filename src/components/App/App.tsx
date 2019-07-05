import * as React from 'react';
import { hot } from 'react-hot-loader';
import { History } from 'history';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { IStore, DispatchFunction } from '../../redux/reducers';
import { CHANGE_APP_SETTINGS } from '../../redux/actions';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import CompleteComponent from '../pages/CompleteComponent/CompleteComponent';
import SimpleComponent from '../pages/SimpleComponent/SimpleComponent';

export interface AppProps {
    history?: History;
    appTitle?: string;
    onNewAppProps?: (newProps: Partial<AppProps>) => void;
}

export interface AppState {}

class App extends React.Component<AppProps> {
    public static history: History;
    
    public componentDidMount(): void {
        App.history = this.props.history;
        this.props.onNewAppProps({appTitle: 'React app'});
    }

    public render(): JSX.Element {
        const { history }: Partial<AppProps> = this.props;

        document.title = this.props.appTitle;
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

/**
 * 
 * REDUX CONNECTORS. (Remove when redux is not needed)
 * 
 */
function mapStateToProps(state: IStore): Partial<AppProps> {
    return {...state.appState};
}

function mapDispatchToProps(dispatch: DispatchFunction<AppProps>): Partial<AppProps> {
    return {
        onNewAppProps: (newProps: Partial<AppProps>) => dispatch({type: CHANGE_APP_SETTINGS, payload: newProps}),
    };
}
export default connect<{}, {}, AppProps>(mapStateToProps, mapDispatchToProps)(hot(module)(App));
