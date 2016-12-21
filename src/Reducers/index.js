/**
 * Reducers bundle / Root reducer
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Simple from './Simple';

export default combineReducers({
    Simple,
    routing: routerReducer
});
