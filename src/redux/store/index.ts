
import createHistory from "history/createHashHistory";
import { rootReducer } from "../reducers";
import { History } from "history";
import { routerMiddleware, routerReducer } from "react-router-redux";
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
    StoreEnhancer,
    Middleware,
    Store,
    DeepPartial,
} from "redux";

// WEBPACK ENVIRONMENT VARIABLE
declare const __DEV__: boolean;

// BROWSER HISTORY
const history: History = createHistory();

// STORE CONFIGURATIONS
const storeEnhancers: StoreEnhancer[] = [];
const middlewares: Middleware[] = [];

// Add router middleware to sync redux with the routing history
middlewares.push(routerMiddleware(history));

// Promise middleware to handle pending, failed and successful requests with promise resolving
// middlewares.push(promiseMiddleware);
// middlewares.push(authMiddleware);

// apply middlewares
storeEnhancers.push(applyMiddleware(...middlewares));

// add dev-tools storeEnhancer
if (__DEV__) {
    const debugEnhancer: StoreEnhancer =
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
    if (debugEnhancer) {
        storeEnhancers.push(debugEnhancer);
    }
}

export default function configureStore(initialState: DeepPartial<any>): { store: Store, history: History } {
    // base store configuration
    const store: Store = createStore(
        combineReducers({ ...rootReducer, router: routerReducer }),
        initialState,
        compose(...storeEnhancers),
    );

    return { store, history };
}
