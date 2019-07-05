
import createHistory from 'history/createHashHistory';
import { rootReducer } from '../reducers';
import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
    StoreEnhancer,
    Middleware,
    Store,
    DeepPartial,
    StoreEnhancerStoreCreator,
} from 'redux';

declare global {
    // tslint:disable-next-line:interface-name
    interface Window { 
        __REDUX_DEVTOOLS_EXTENSION__: StoreEnhancer;
    }
}

// WEBPACK ENVIRONMENT VARIABLE
declare const __DEV__: boolean;

// BROWSER HISTORY
const history: History = createHistory();

// STORE CONFIGURATIONS
const storeEnhancers: Array<StoreEnhancer | StoreEnhancerStoreCreator> = [];
const middlewares: Middleware[] = [];

// Add router middleware to sync redux with the routing history
middlewares.push(routerMiddleware(history));

// Promise middleware to handle pending, failed and successful requests with promise resolving
// middlewares.push(promiseMiddleware);
// middlewares.push(authMiddleware);

// Apply middlewares
storeEnhancers.push(applyMiddleware(...middlewares));

// Add dev-tools storeEnhancer
if (__DEV__) {
    const debugEnhancer: StoreEnhancer | StoreEnhancerStoreCreator =
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(undefined);
    if (debugEnhancer) {
        storeEnhancers.push(debugEnhancer);
    }
}

export default function configureStore(initialState: DeepPartial<{}>): StoreAndHistory {
    // Base store configuration
    const store: Store = createStore(
        combineReducers({ ...rootReducer, router: routerReducer }),
        initialState,
        compose(...storeEnhancers),
    );

    return { store, history };
}

export interface StoreAndHistory {
    store: Store; 
    history: History;
}
