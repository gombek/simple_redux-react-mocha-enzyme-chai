/**
 * Simple reducer
 */

import ActionTypes from '../Constants/ActionTypes';

// Initial/default state
const initialState = 0;

// Switch actions
export default function (state = initialState, action) {
    switch (action.type) {
    case ActionTypes.SIMPLE_SET:
        return simpleSet(state, action);
    }
    return state;
}

// Reducers implementation
function simpleSet(state, action) {
    const {value} = action;
    return value;
}
