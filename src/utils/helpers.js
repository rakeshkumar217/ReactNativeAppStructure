import {Platform, StatusBar, Dimensions} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';

export const isDocumentTypeImage = type => {
  const allowedImageTypes = ['jpg', 'jpeg', 'png'];
  return allowedImageTypes.includes(type.toLowerCase());
};

export const keyDocumentsFilePath = fileName => {
  const dirs = RNFetchBlob.fs.dirs;
  return `${dirs.DocumentDir}/keyDocuments/${fileName}`;
};

export const complianceFilePath = fileName => {
  const dirs = RNFetchBlob.fs.dirs;
  return `${dirs.DocumentDir}/compliance/${fileName}`;
};

export const writeFileAtPath = (filePath, data, type = 'base64') => {
  return RNFetchBlob.fs.writeFile(filePath, data, type);
};

/**
 * @function getKeyboardOffset
 * @description Returns offset for setting in KeyboardAvoidingView
 */
export const getKeyboardOffset = () => {
  if (Platform.OS === 'android') {
    return 56 + StatusBar.currentHeight;
  }
  const {height} = Dimensions.get('window');
  if (height >= 812) {
    return 88;
  }
  return 64;
};

/**
 * @function formatDate
 * @param date - can be date object or time stamp
 * @param placeholder - String to be return if date is not present defult ""
 * @description format date to show into input field
 */
export const formatDate = (date, placeholder = '') => {
  if (!date) return placeholder;

  return moment(date).format('MMM DD, YYYY');
};

export const shortDate = (date, placeholder = '') => {
  if (!date) return placeholder;

  return moment(date).format('MM/DD/YYYY');
};
