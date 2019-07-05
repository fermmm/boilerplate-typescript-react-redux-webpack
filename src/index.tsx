// import '@babel/polyfill';    // Uncomment this line if you want to support Internet Explorer
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { StoreAndHistory } from './redux/store';
import App from './components/App/App';

// @ts-ignore
import './global-styles/index.scss';

const { store, history }: StoreAndHistory = configureStore({});

const RootComponent: JSX.Element = (
    <Provider store={store}>
        <App history={history} />
    </Provider>
);

ReactDOM.render(RootComponent, document.getElementById('root'));
