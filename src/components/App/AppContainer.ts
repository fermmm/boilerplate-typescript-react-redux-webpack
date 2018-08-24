import { connect, MapStateToPropsParam } from "react-redux";
import App, { IAppProps } from "./App";
import { hot } from "react-hot-loader";
import { IStore } from "../../redux/interfaces";

const mapStateToProps: MapStateToPropsParam<{}, {}, {}> = (state: IStore) => ({
    appTitle: state.appState.appTitle,
});

export const AppContainer: React.ComponentType<IAppProps> = hot(module)(connect(mapStateToProps)(App));
