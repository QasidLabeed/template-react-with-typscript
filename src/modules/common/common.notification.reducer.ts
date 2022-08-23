import * as types from './common.types';

const initialState = [];

export const notificationStore = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NOTIFICATION:
            return action.payload
        case types.CLEAR_NOTIFICATION:
            return []
        default:
            return state;
    }
}