import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
// @ts-ignore
import './global-styles/index.scss';

const RootComponent: React.ReactElement = <App />;

ReactDOM.render(RootComponent, document.getElementById('root'));
