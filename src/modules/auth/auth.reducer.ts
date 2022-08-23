/*
 * Auth Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import * as actionTypes from './auth.types'
import { isEmpty} from 'lodash';


const initialState = {
    isAuthenticated: false,
    user: {},
    newUser: {},
    forgotPassword: {},

}

export const authStore = (state = initialState, action) => {
    switch (action.type) {
       
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
            //WIP on Register
        case actionTypes.REGISTER_USER:
            return {
                ...state,
                newUser: action.payload
            }
        default:
            return state;


    }
}
