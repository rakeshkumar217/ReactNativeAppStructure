/**
 * Auth Redux Actions
 */
import {Platform} from 'react-native';
import {showLoading, hideLoading} from '../common/actions';
import RestClient from '../../utils/RestClientV2';
import moment from 'moment';
import {
    SERVER_ERROR,
    USER_DASHBOARD_OFFLINE,
    USER_TASKS_OFFLINE,
    USER_OFFLINE_SHIFT_DETAIL,
    USER_NOTES_OFFLINE,
    USER_DASHBOARD_NOTIFICATIONS
} from './types';

export function getDashboardData(payload, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, payload.endPoint, params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Data != null && result.Status.IsSuccess) {
                    //dispatch(saveDashboardData(result.Data));
                    if (result.Data && result.Data.Appointments) {
                        callback(true, result.Data.Appointments);
                    } else {
                        callback(true, []);
                    }
                } else {
                    callback(false, result.Message);
                }
            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}


export function getShiftDetailDB(scheduleId, callback) {
    return (dispatch, getState) => {
        const offlineDataList = getState().offline.Data || [];

        let data = offlineDataList.find(obj => obj.ScheduleSlotId === scheduleId);
        if (data && data.jobDetail) {
            callback(true, data.jobDetail);
        } else {
            callback(false, undefined);
        }
    };
}

export function updateDbFrom14Days() {
    return (dispatch, getState) => {
        const offlineDataList = getState().offline.Data || [];
        let assignedOfflineData = getState().dashboard.assignedOfflineData || [];//14 days data
        debugger;
        if (offlineDataList && offlineDataList.length > 0 && assignedOfflineData && assignedOfflineData.length > 0) {
            offlineDataList.forEach(data => {
                if (data && data.jobDetail) {
                    let jobDetail = data.jobDetail;
                    let slotId = data.ScheduleSlotId;//ScheduleSlotId
                    let element = assignedOfflineData.find(obj0 => obj0.ScheduleSlotId == slotId);
                    if (element && element.TimeThresholdAfterArrival) {
                        const updatedData = offlineDataList.map(obj => {
                            if (obj.ScheduleSlotId == slotId) {
                                console.log("UPDATING.." + slotId);
                                let AllowClockOutIfDMAS90NotUpdated = jobDetail.AllowClockOutIfDMAS90NotUpdated;
                                if (element.AllowClockOutIfDMAS90NotUpdated && element.AllowClockOutIfDMAS90NotUpdated == true) {
                                    AllowClockOutIfDMAS90NotUpdated = element.AllowClockOutIfDMAS90NotUpdated;
                                }
                                //check online feedback--
                                let CanAddFeedback = jobDetail.CanAddFeedback;
                                if (element.CanAddFeedback && element.CanAddFeedback == 2) {
                                    CanAddFeedback = element.CanAddFeedback;
                                }
                                //check online injury status--
                                let InjuryStatus = jobDetail.InjuryStatus;
                                if (element.InjuryStatus && element.InjuryStatus == 2) {
                                    InjuryStatus = element.InjuryStatus;
                                }
                                //check online already checked-in--
                                let IsAlreadyCheckIn = jobDetail.IsAlreadyCheckIn;
                                if (element.IsAlreadyCheckIn && element.IsAlreadyCheckIn == true) {
                                    IsAlreadyCheckIn = element.IsAlreadyCheckIn;
                                }
                                //check online already checked-out--
                                let IsAlreadyCheckOut = jobDetail.IsAlreadyCheckOut;
                                if (element.IsAlreadyCheckOut && element.IsAlreadyCheckOut == true) {
                                    IsAlreadyCheckOut = element.IsAlreadyCheckOut;
                                }
                                debugger;
                                return {
                                    ...data,
                                    jobDetail: {
                                        ...data.jobDetail,
                                        AllowClockOutIfDMAS90NotUpdated: AllowClockOutIfDMAS90NotUpdated,
                                        CanAddFeedback: CanAddFeedback,
                                        InjuryStatus: InjuryStatus,
                                        IsAlreadyCheckIn: IsAlreadyCheckIn,
                                        IsAlreadyCheckOut: IsAlreadyCheckOut,
                                        TimeThresholdAfterArrival: element.TimeThresholdAfterArrival,
                                        TimeThresholdAfterDeparture: element.TimeThresholdAfterDeparture,
                                        TimeThresholdBeforeArrival: element.TimeThresholdBeforeArrival,
                                        TimeThresholdBeforeDeparture: element.TimeThresholdBeforeDeparture,
                                        TimeDifference: element.TimeDifference,
                                        StartTime: element.StartTime,//
                                        EndTime: element.EndTime,//12/28/2019 06:15 AM
                                        ConvertedStartDate: element.ConvertedStartDate,
                                        ConvertedEndDate: element.ConvertedEndDate,
                                        ConvertedStartTime: element.ConvertedStartTime,
                                        ConvertedEndTime: element.ConvertedEndTime,
                                        DigitalSignatureAllowed: element.DigitalSignatureAllowed,
                                        //update other fields if any
                                    }
                                };
                            } else {
                                return obj;
                            }
                        });
                        dispatch(saveData(updatedData));
                    }
                }
            });
        }
    };
}




//offline function
export function getDashboardOfflineData(callback) {
    return (dispatch, getState) => {
        //dispatch(showLoading());
        var assignedOfflineData = getState().dashboard.assignedOfflineData || [];
        //debugger;
        if (assignedOfflineData && assignedOfflineData.length > 0) {
            let now = moment();
            var jobDetail = null;
        debugger;
            for (var i = 0; i < assignedOfflineData.length; i++) {
                var element = assignedOfflineData[i];
                let endTime = moment(element.EndTime);//TimeThresholdAfterDeparture
                if (element.TimeThresholdAfterDeparture) {
                    //endTime = moment(element.EndTime).add(element.TimeThresholdAfterDeparture, 'minutes');
                }
                if (now <= endTime) {
                    console.log(now.format('yyyy-DD-mm HH:mm:ss') + "==>" + endTime.format('yyyy-DD-mm HH:mm:ss'));
                debugger;
                    jobDetail = element;
                    jobDetail.ScheduleSlotID = element.ScheduleSlotId;
                    break;
                } else {
                    console.log("========>" + endTime.format('yyyy-DD-mm HH:mm:ss'));
                }
                //debugger;
            }
        debugger;
            //let result = undefined;
            let Appointments = [];
            if (jobDetail) {
                Appointments.push(jobDetail);
                callback(jobDetail, Appointments);
            }
            //dispatch(saveDashboardFilteredData(Appointments));
        }
        //debugger;
        //let AssignedOffline= [];
        // if(active){
        //     dispatch(updateOfflineList(AssignedOffline));
        // }else{
        //     if(caregiverScheduleDTO && caregiverScheduleDTO.length>0){
        //         caregiverScheduleDTO.forEach(element => {
        //             //debugger;
        //             element.isSelected = 'false';
        //             if (element.StartDateTime.includes(selectedDate)){
        //                 AssignedOffline.push(element);
        //                 //debugger;
        //             }
        //         });
        //     }
        //     dispatch(updateOfflineList(AssignedOffline));
        //     //debugger;
        // }
    };
}

// function saveDashboardFilteredData(dashboardData) {
//     return {
//         type: USER_DASHBOARD_FILTERED,
//         payload: {  dashboardData }
//     };
// }

//online function
export function getOfflineData(payload, endPoint, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, endPoint, params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Status.IsSuccess) {
                    if (result.Data != null) {
                        //debugger;
                        dispatch(saveDashboardOfflineData(result.Data));
                    }
                    callback(true);
                } else {
                    callback(false, result.Message);
                }

            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}

function saveDashboardOfflineData(dashboardOfflineData) {
    return {
        type: USER_DASHBOARD_OFFLINE,
        payload: {
            dashboardOfflineData
        }
    };
}

//online funtion
export function getOfflineTasks(payload, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, 'CaregiverHybrid/Native_GetQuestionaireAndTaskForOffline', params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Status.IsSuccess) {
                    if (result.Data != null) {
                        //debugger;
                        dispatch(saveDashboardOfflineTasks(result.Data));
                    }
                    callback(true);
                } else {
                    callback(false, result.ErrorMessage);
                }

            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}

function saveDashboardOfflineTasks(dashboardOfflineTasks) {
    return {
        type: USER_TASKS_OFFLINE,
        payload: {
            dashboardOfflineTasks
        }
    };
}

//online
export function getOfflineNotes(payload, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, 'OfflineSync/Native_GetScheduleNotesOffline', params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Status.IsSuccess) {
                    if (result.Data != null) {
                        //debugger;
                        dispatch(saveOfflineNotes(result.Data));
                    }
                    callback(true);
                } else {
                    callback(false, result.ErrorMessage);
                }

            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}

//save locally
function saveOfflineNotes(offlineNotes) {
    return {
        type: USER_NOTES_OFFLINE,
        payload: {
            offlineNotes
        }
    };
}

//online
export function getShiftDetailSettings(payload, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, 'Calendar/Native_Offline_FetchClientScheduleDetailByID', params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Status.IsSuccess) {
                    callback(true);
                    if (result.Data != null) {
                        //debugger;
                        dispatch(saveOfflineShiftDetail(result.Data));
                    }
                } else {
                    callback(false, result.ErrorMessage);
                }

            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}

//save locally
function saveOfflineShiftDetail(offlineShiftDetail) {
    return {
        type: USER_OFFLINE_SHIFT_DETAIL,
        payload: {
            offlineShiftDetail
        }
    };
}

//online funtion
export function getNotifications(payload, sessionId, callback) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        let params = {
            ...payload,
            MType: Platform.OS === "ios" ? "iphone" : "Android"
        };
        //debugger;
        RestClient.PostRequest(getState, 'Dashboard/GetAlertList', params, "", sessionId)
            .then(result => {
                //debugger;
                console.log("result", result);
                dispatch(hideLoading());
                if (result.Status.IsSuccess) {
                    if (result.Data != null) {
                        //debugger;
                        dispatch(saveNotification(result.Data));
                    }
                    callback(true);
                } else {
                    callback(false, result.Status.Message);
                }

            })
            .catch(error => {
                console.log("error", error);
                //debugger;
                dispatch(hideLoading());
            });
    };
}

function saveNotification(notificationsList) {
    return {
        type: USER_DASHBOARD_NOTIFICATIONS,
        payload: {
            notificationsList
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





