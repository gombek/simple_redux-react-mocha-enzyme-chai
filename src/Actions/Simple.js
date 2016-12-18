/**
 * Simple actions
 */

import ActionTypes from '../Constants/ActionTypes';

export function set(value) {
    return {
        type: ActionTypes.SIMPLE_SET,
        value
    };
}