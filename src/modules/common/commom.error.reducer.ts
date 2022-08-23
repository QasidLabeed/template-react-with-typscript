import * as commonActionTypes from './common.types';

const initialState = {}

export const errorStore = (state = initialState, action) => {
    switch (action.type) {
        case commonActionTypes.GET_ERRORS:
            return action.payload;
        case commonActionTypes.CLEAR_ERRORS:
            return {};
        default:
            return state
    }
}