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