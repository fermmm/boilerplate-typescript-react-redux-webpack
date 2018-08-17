import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { rootReducer } from "../reducers";

import createHistory from "history/createHashHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";

// WEBPACK ENVIRONMENT VARIABLE
declare const __DEV__: boolean;

// BROWSER HISTORY
const history = createHistory();

// STORE CONFIGURATIONS
const storeEnhancers: any = [];
const middlewares: any = [];

// Add router middleware to sync redux with the routing history
middlewares.push(routerMiddleware(history));

// Promise middleware to handle pending, failed and successful requests with promise resolving
// middlewares.push(promiseMiddleware);
// middlewares.push(authMiddleware);

// apply middlewares
storeEnhancers.push(applyMiddleware(...middlewares));

// add dev-tools storeEnhancer
if (__DEV__) {
  const debugEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
  if (debugEnhancer) {
    storeEnhancers.push(debugEnhancer);
  }
}

export default function configureStore(initialState: any) {
  // base store configuration
  const store = createStore(
    combineReducers({ ...rootReducer, router: routerReducer }),
    initialState,
    compose(...storeEnhancers),
  );

  return { store, history };
}
