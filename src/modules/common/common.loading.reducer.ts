import * as commonActionTypes from './common.types';

const initialState = {
    waitingFor: []
}

export const loadingStore = (state = initialState, action) => {
    switch (action.type) {
        case commonActionTypes.ADD_LOADER:
            return {
                ...state,
                waitingFor: [...state.waitingFor, action.payload]
            }
        case commonActionTypes.REMOVE_LOADER:
            return {
                ...state,
                waitingFor: state.waitingFor.filter(l => l !== action.payload)
            }
        default:
            return state;
    }
}