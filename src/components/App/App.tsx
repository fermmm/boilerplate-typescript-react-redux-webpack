import * as React from "react";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch } from "react-router";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";
import { HelloWorld } from "../pages/HelloWorld/HelloWorld";

const styles = require("./App.scss");

interface IProps {
  history: any;
  // container props
  appTitle: string;
}

class App extends React.Component<IProps, any> {
  public componentDidMount() {
    document.title = this.props.appTitle;
  }

  public render() {
    const { history } = this.props;
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
