/*
 * @file: index.js
 * @description: Combining all the reducers into one.
 * @date: 4th June 2019
 * @author: Rakesh
 */

import { combineReducers } from 'redux';
import authReducer from './auth';
import commonReducer from './common';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  // dashboard: dashboardReducer,
  // calendar: calendarReducer,
  // jobDetail: jobDetailReducer,
  // databaseReducer: databaseReducer,
  // keyDocuments: keyDocumentsReducer,
  // compliance: complainceReducer,
  // offline: offlineReducer,
  // SMSLog: SMSLogReducer,
  // clients: clientsReducer,
  // unavailable: unavailabilityReducer,

});

export default rootReducer;
