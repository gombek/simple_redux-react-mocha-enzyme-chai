/**
 * Root store creator
 */

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../Reducers';

// Middlewares.
const logger = createLogger();
const router = routerMiddleware(browserHistory);

// Add store middleware.
const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
