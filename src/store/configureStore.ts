import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
import logger from 'redux-logger'
const initialState = {};
const middleware = [thunk,logger];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        /* preloadedState, */
         (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
    )
);
export default store;