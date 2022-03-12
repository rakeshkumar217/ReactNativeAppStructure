import { PURGE } from "redux-persist";
import {
    USER_DASHBOARD_OFFLINE, USER_TASKS_OFFLINE, USER_OFFLINE_SHIFT_DETAIL, 
    USER_NOTES_OFFLINE, USER_DASHBOARD_NOTIFICATIONS
} from "./types";

const INIT_STATE = {
    //Appointments: [],
    caregiverScheduleDTO: [],    
    caregiverScheduleTasks: [],
    questionaireListWithSchedules: [],
    questionaireLists: [],
    offlineClientLists: [],
    assignedOfflineData: [],
    imagesList: [],
    notes:[],
    notificationsList:[],
};

export default function dashboardReducer(state = INIT_STATE, action) {

    switch (action.type) {

        // case USER_DASHBOARD: 
        //     return {
        //         ...state,
        //         Appointments: action.payload.dashboardData.Appointments,
        //     };
            //USER_DASHBOARD_NOTIFICATIONS
        case USER_DASHBOARD_NOTIFICATIONS:
                //debugger;
                return {
                    ...state,
                    notificationsList: action.payload.notificationsList,
                };   
        //USER_DASHBOARD_FILTERED
        // case USER_DASHBOARD_FILTERED:
        //     //debugger;
        //     return {
        //         ...state,
        //         Appointments: action.payload.dashboardData,
        //     };
            
        case USER_DASHBOARD_OFFLINE:
            //debugger;
            return {
                ...state,
                caregiverScheduleDTO: action.payload.dashboardOfflineData.caregiverScheduleDTO,
                offlineClientLists: action.payload.dashboardOfflineData.offlineClientLists,
            };

        case USER_OFFLINE_SHIFT_DETAIL:
            //debugger;
            var offlineList = action.payload.offlineShiftDetail.clientScheduleDetails;
            var imagesList = action.payload.offlineShiftDetail.Images;

            if(offlineList){
                offlineList.forEach(element => {
                    if(element.StartTime && element.StartTime.includes(' ')){//StartTime--EndTime
                        const dateTimeArray= element.StartTime.split(' ');
                        if(dateTimeArray.length>0){
                            element.StartDateTime = dateTimeArray[0];
                            element.ConvertedStartDate = dateTimeArray[0];
                        }
                        if(dateTimeArray.length>1){
                            element.ConvertedStartTime = dateTimeArray[1];
                        }
                        if(dateTimeArray.length>2){
                            element.ConvertedStartTime = dateTimeArray[1]+" "+dateTimeArray[2];
                        }
                    }
                    if(element.EndTime){//StartTime--EndTime
                        const dateTimeArray= element.EndTime.split(' ');
                        if(dateTimeArray.length>0){
                            element.EndDateTime = dateTimeArray[0];//ConvertedStartDate
                            element.ConvertedEndDate = dateTimeArray[0];
                        }
                        if(dateTimeArray.length>1){
                            element.ConvertedEndTime = dateTimeArray[1];
                        }
                        if(dateTimeArray.length>2){
                            element.ConvertedEndTime = dateTimeArray[1]+" "+dateTimeArray[2];
                        }
                    }
                });
            }
            //console.log("-=-=-=-=-=-=-=>"+offlineList[0].ConvertedEndTime);
            return {
                ...state,
                assignedOfflineData: offlineList,  
                imagesList: imagesList,                 
            };

        case USER_TASKS_OFFLINE:
            //debugger;
            return {
                ...state,
                caregiverScheduleTasks: action.payload.dashboardOfflineTasks.scheduleTaskLists,
                questionaireLists: action.payload.dashboardOfflineTasks.questionaireLists,
                questionaireListWithSchedules: action.payload.dashboardOfflineTasks.questionaireListWithSchedules,
            };

        case USER_NOTES_OFFLINE:
                //debugger;
                return {
                    ...state,
                    notes: action.payload.offlineNotes,
                };
            //
        case PURGE:
            return INIT_STATE;

        default:
            return state;
    }
}
