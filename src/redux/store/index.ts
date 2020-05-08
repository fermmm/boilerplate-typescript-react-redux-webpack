
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import { rootReducer } from '../reducers';
import { createBrowserHistory, History } from 'history';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
    StoreEnhancer,
    Middleware,
    Store,
    StoreEnhancerStoreCreator,
} from 'redux';

declare global {
    // tslint:disable-next-line:interface-name
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION__: StoreEnhancer;
    }
}

// Webpack environment variable:
declare const __DEV__: boolean;

// Store configurations:
const storeEnhancers: (StoreEnhancer | StoreEnhancerStoreCreator)[] = [];
const middlewares: Middleware[] = [];

// History:
export const history: History = createBrowserHistory();

// Promise middleware to handle pending, failed and successful requests with promise resolving
// middlewares.push(promiseMiddleware);
// middlewares.push(authMiddleware);

// Apply middlewares
storeEnhancers.push(applyMiddleware(
    routerMiddleware(history),
    ...middlewares
));

// Add dev-tools storeEnhancer
if (__DEV__) {
    const debugEnhancer: StoreEnhancer | StoreEnhancerStoreCreator =
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(undefined);
    if (debugEnhancer) {
        storeEnhancers.push(debugEnhancer);
    }
}

export default function configureStore(): Store {
    // Base store configuration
    return createStore(
        combineReducers({ ...rootReducer, router: connectRouter(history) }),
        compose(...storeEnhancers),
    );
}

export interface StoreMiddlewares {
    router: RouterState;
}
