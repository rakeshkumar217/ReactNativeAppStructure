import { PURGE } from 'redux-persist';
import actionTypes from "./types";

// initial state
const INIT_STATE = {
    loading: false,
    isOnline: undefined
};

export default function commonReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case actionTypes.SHOW_LOADING:
            return {
                ...state,
                loading: true
            };

        case actionTypes.HIDE_LOADING:
            return {
                ...state,
                loading: false
            };

        case actionTypes.NETWORK_REACHABILITY:

            return {
                ...state,
                isOnline: action.payload
            }

        case PURGE:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}
