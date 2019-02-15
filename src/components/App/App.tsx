import * as React from "react";
import { hot } from "react-hot-loader";
import { History } from "history";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";
import { IStore, DispatchFunction } from "../../redux/reducers";
import { CHANGE_APP_SETTINGS } from "../../redux/actions";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import CompleteComponent from "../pages/CompleteComponent/CompleteComponent";
import SimpleComponent from "../pages/SimpleComponent/SimpleComponent";

export interface IAppProps {
    history?: History;
    appTitle?: string;
    onNewAppProps?: (newProps: Partial<IAppProps>) => void;
}

export interface IAppState {}

class App extends React.Component<IAppProps> {
    public static history: History;
    
    public componentDidMount(): void {
        App.history = this.props.history;
        this.props.onNewAppProps({appTitle: "App Title"});
    }

    public render(): JSX.Element {
        const { history }: Partial<IAppProps> = this.props;

        document.title = this.props.appTitle;
        return (
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path={"/"} component={CompleteComponent} />
                        <Route exact path={"/simple"} component={SimpleComponent} />
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
function mapStateToProps(state: IStore): Partial<IAppProps> {
    return {...state.appState};
}

function mapDispatchToProps(dispatch: DispatchFunction<IAppProps>): Partial<IAppProps> {
    return {
        onNewAppProps: (newProps: Partial<IAppProps>) => dispatch({type: CHANGE_APP_SETTINGS, payload: newProps}),
    };
}
export default connect<{}, {}, IAppProps>(mapStateToProps, mapDispatchToProps)(hot(module)(App));
