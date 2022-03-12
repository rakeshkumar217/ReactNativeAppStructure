import { PURGE } from 'redux-persist';
import {
  SAVE_USER_PROFILE,
  USER_CANNOT_LOGIN,
  SECURITY_ANSWER,
  SAVE_FCM_TOKEN,
  UPDATE_PASSWORD,
  USER_LOGIN,
} from './types';

const INIT_STATE = {
  profile: null,
  user: null,
  fcmToken: '',
};

export default function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.loginData,
      };
    case SAVE_USER_PROFILE:
      return {
        ...state,
        profile: action.data,
      };
    case SAVE_FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload,
      };
    case USER_CANNOT_LOGIN:
      return {
        ...state,
        fcmToken: action.payload,
      };
    case SECURITY_ANSWER:
      return {
        ...state,
        fcmToken: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        user: action.payload.resetData,
      };

    case PURGE:
      return INIT_STATE;

    default:
      return state;
  }
}
