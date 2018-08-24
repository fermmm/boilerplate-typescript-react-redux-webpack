import * as React from "react";
import { ConnectedRouter } from "react-router-redux";
import { History } from "history";
import { Route, Switch } from "react-router";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { HelloWorld } from "../pages/HelloWorld/HelloWorld";

const styles: any = require("./App.scss");

export interface IAppProps {
    history: History;
    // container props
    appTitle?: string;
}

class App extends React.Component<IAppProps> {
    public componentDidMount(): void {
        document.title = this.props.appTitle;
    }

    public render(): JSX.Element {
        const { history }: { history: History } = this.props;
        return (
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path={"/"} component={HelloWorld} />
                    </Switch>
                </ErrorBoundary>
            </ConnectedRouter>
        );
    }
}

export default App;
