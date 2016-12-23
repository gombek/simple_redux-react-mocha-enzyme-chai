/**
 * Simple actions
 */

import ActionTypes from '../Constants/ActionTypes';

export function set(simpleData) {
    return {
        type: ActionTypes.SIMPLE_SET,
        simpleData
    };
}

export function clearIfOdd() {
    return function (dispatch, getState) {
        const { value } = getState().Simple;
        if (value % 2 === 0) return;

        dispatch(set({ value: 0 }));
    };
}