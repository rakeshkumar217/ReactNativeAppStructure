/**
 * Auth Redux Actions
 */
import { NativeModules, Platform } from "react-native";
import { showLoading, hideLoading } from "../common/actions";
import RestClient from '../../utils/RestClientV2';
import {
    USER_LOGIN,
    USER_CANNOT_LOGIN,
    SECURITY_ANSWER,
    UPDATE_PASSWORD,
    APP_VERSION,
    SAVE_USER_PROFILE
} from './types';

export function submitLoginDetail(payload, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //:
        //
        //debugger;
        const agencyId = payload.DomainURL;
        const key = "29xdVi33L5W32SL2";
        const myObjStr = JSON.stringify(params);
        //debugger;
        NativeModules.AES128.AESEncryptWithPassphrase(key, myObjStr, (error, encryptedbase64) => {

            if (encryptedbase64 != null && encryptedbase64.length > 0) {
                //debugger;

                let newParams = { "Login": encryptedbase64 };
                //debugger;
                RestClient.PostRequest(getState, "Authentication/Authenticate", newParams, "")
                    .then(result => {
                        //debugger;
                        console.log("result", result);
                        if (result != undefined) {
                            dispatch(hideLoading());
                            //debugger;
                            if (result.ErrorMessage != null && result.ErrorMessage.length > 0) {
                                callback(false, result.ErrorMessage);
                            } else {
                                result.AgencyId = agencyId;
                                dispatch(saveLoginDetail(result));
                                callback(true);
                            }
                        }

                    })
                    .catch(error => {
                        console.log("error", error);
                        //debugger;
                        dispatch(hideLoading());
                    });
            }

        });


    };
}

function saveLoginDetail(loginData) {
    return {
        type: USER_LOGIN,
        payload: {
            loginData,
            isCustomer: true
        }
    };
}

/**
 * @function getErrorMessage
 * @param error
 * @description Returns error string coming from server else returns null
 */
export const getErrorMessage = error => {
    if (error.response && error.response.data) {
        return error.response.data;
    }
    return null;
};


export function submitCanotLogin(payload, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        //debugger;
        RestClient.PostRequest(getState, "Account/ChangePasswordSubmitUsername", payload)
            .then(result => {
                //debugger;
                console.log("result", result);
                if (result.response.Data == null) {
                    callback(false, result.response.Status.Message);
                } else {
                    dispatch(cannotLogin(result.response.Data));
                    callback(true, result.response.Data);
                }
                dispatch(hideLoading());
            })
            .catch(error => {
                //debugger;
                console.log("error", error);
                dispatch(hideLoading());
            });
    };
}

function cannotLogin(profileData) {
    return {
        type: USER_CANNOT_LOGIN,
        payload: {
            profileData
        }
    };
}


export function verifyUserAnswer(params, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());

        RestClient.PostRequest(getState, "Account/ChangePasswordSubmitSecurityAnswer", params).then(
            result => {
                dispatch(hideLoading());
                //debugger;
                if (result.response.IsSuccess) {
                    callback(true, result.response.Message);
                } else {
                    //dispatch(verifyAnswer(result.response.Data));
                    callback(false, result.response.Message);
                }
            },
            error => {
                const errMsg = getErrorMessage(error);
                dispatch(hideLoading());
                callback(false, errMsg || "There was some error.");
            }
        );
    };
}


function verifyAnswer(verifyData) {
    return {
        type: SECURITY_ANSWER,
        payload: {
            verifyData
        }
    };
}


export function saveNewPassword(payload, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iOS" : "Android"
        };
        //debugger;
        const key = "29xdVi33L5W32SL2";
        const myObjStr = JSON.stringify(params);
        //debugger;
        NativeModules.AES128.AESEncryptWithPassphrase(key, myObjStr, (error, encryptedbase64) => {

            if (encryptedbase64 != null && encryptedbase64.length > 0) {
                //debugger;
                let newParams = { "request": encryptedbase64 };
                RestClient.PostRequest(getState, "Account/SubmitNewPassword", newParams, "").then(
                    result => {
                        //debugger;
                        dispatch(hideLoading());
                        if (result && result.Result) {
                            dispatch(newPassword(result));
                            callback(true);
                        } else {
                            callback(false, result.response.Message);
                        }
                    },
                    error => {
                        const errMsg = getErrorMessage(error);
                        dispatch(hideLoading());
                        callback(false, errMsg || "There was some error.");
                    }
                );
            }

        });


    };
}


function newPassword(resetData) {
    return {
        type: UPDATE_PASSWORD,
        payload: {
            resetData
        }
    };
}


export function validateAppVersion(payload, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        //inputs:-> AppVersion, MobileType
        RestClient.PostRequest(getState, "/api/ValidateVersion/ValidateAppVersion", payload)
            .then(result => {
                console.log("result", result);
                if (result.status.code == 300 || result.status.code == 400) {
                    callback(false, result.status.message);
                } else {
                    dispatch(appVersion(result.data));
                    callback(true);
                }
                dispatch(hideLoading());
            })
            .catch(error => {
                console.log("error", error);
                dispatch(hideLoading());
            });
    };
}

export function appVersion(token) {
    return {
        type: APP_VERSION,
        payload: token
    };
}

/**
 *
 */
export function fetchCaregiverProfile(caregiverID, sessionId) {

    return (dispatch, getState) => {

        let params = {
            CaregiverID: caregiverID
        }

        dispatch(showLoading());
        //debugger;
        //c6e34ce1-f8f3-40c9-9b0f-edf8c3f36aba
        RestClient.PostRequest(getState, 'CaregiverHybrid/GetCaregiverProfile', params, null, sessionId)
            .then(res => {
                if (res.Status && res.Status.IsSuccess && res.Status.IsAuthorized) {
                    dispatch(deserializeCaregiverProfile(res.Data));
                }
                dispatch(hideLoading())
            })
            .catch(err => {
                dispatch(hideLoading())
            })
    }
}

function deserializeCaregiverProfile(profile) {
    return {
        type: SAVE_USER_PROFILE,
        data: profile
    }
}
