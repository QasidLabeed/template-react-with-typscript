import { combineReducers } from 'redux';
import { authStore } from '../modules/auth/auth.reducer';
import { routerReducer } from "react-router-redux";
import {
    errorStore
} from "../modules/common/commom.error.reducer";
import {
    notificationStore
} from "../modules/common/common.notification.reducer";
import {loadingStore} from '../modules/common/common.loading.reducer'


const reducer = combineReducers({
    routing: routerReducer,
    authStore,
    notificationStore,
    errorStore,
    loadingStore
})

export default reducer;
