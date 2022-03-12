import actionTypes from './types';

export function showLoading() {
    return {
        type: actionTypes.SHOW_LOADING
    }
}

export function hideLoading() {
    return {
        type: actionTypes.HIDE_LOADING
    }
}

export function networkReachability(isOnline) {
    return {
        type: actionTypes.NETWORK_REACHABILITY,
        payload: isOnline
    }
}
