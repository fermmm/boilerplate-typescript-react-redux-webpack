import { connect } from "react-redux";
import App from "./App";
import { hot } from "react-hot-loader";
import { IStore } from "../../redux/interfaces";

const mapStateToProps = (state: IStore) => ({
  appTitle: state.appState.appTitle,
});

export const AppContainer = hot(module)(connect(mapStateToProps)(App));
