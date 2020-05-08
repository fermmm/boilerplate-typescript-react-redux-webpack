// import '@babel/polyfill';    // Uncomment this line if you want to support Internet Explorer
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
// @ts-ignore
import './global-styles/index.scss';
import configureStore from './redux/store';

const RootComponent: React.ReactElement = (
   <Provider store={configureStore()}>
      <App />
   </Provider>
);

ReactDOM.render(RootComponent, document.getElementById('root'));
