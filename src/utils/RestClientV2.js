import axios from 'axios';
import { baseUrl } from './urls';
import { NativeModules, Platform } from 'react-native';
//import RNCryptor from 'react-native-rncryptor';

export default class RestClient {
  /**
   * us-plove-Elderly123!---22
   *
   * Sends POST request to admin api, which is then forwarded to the correct customer api endpoint.
   * The request is validated in the admin api before forwarding.
   * @param {function} getState
   * @param {string} endPoint
   * @param {string} sessionId
   */
  static async GetRequest(getState, endPoint, sessionId = null) {
    if (typeof getState !== 'function') {
      throw new Error('getState parameter must be a function.');
    }
    const url = `${baseUrl}/${endPoint}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (sessionId) {
      headers.SessionId = sessionId;
    }
    try {
      const response = await fetch(url, { headers });
      const jsonResponse = await response.json();
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Sends POST request to admin api, which is then forwarded to the correct customer api endpoint.
   * The request is validated in the admin api before forwarding.
   * @param {function} getState
   * @param {string} endPoint
   * @param {object} params
   */
  static async PostRequest(getState, endPoint, params, keyName, sessionId) {
    if (typeof getState !== 'function') {
      throw new Error('getState parameter must be a function.');
    }
    let url = `${baseUrl}/${endPoint}`;
    //AgencyId
    if (keyName != null && keyName.length > 0) {
      const key = '29xdVi33L5W32SL2';
      const myObjStr = JSON.stringify(params);
      debugger;
      NativeModules.AES128.AESEncryptWithPassphrase(
        key,
        myObjStr,
        async (error, encryptedbase64) => {
          //this.setState({ isOn: isOn});
          //console.log(error)
          debugger;
          //alert(error + "=>Encryption:->  " + encryptedbase64);
          if (encryptedbase64 != null && encryptedbase64.length > 0) {
            params = { keyName: encryptedbase64 };

            let rawResponse = await axios.post(url, params, {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            });
            //debugger;
            try {
              return Promise.resolve(rawResponse.data);
            } catch (error) {
              return Promise.reject(error);
            }
          } else {
            return Promise.reject(error);
          }
        },
      );

      // RNCryptor.encrypt(params, key).then(async (encryptedbase64)=>{
      //   console.log(encryptedbase64)
      //
      // }).catch((error)=>{
      //   console.log(error)
      //   debugger;
      //   return Promise.reject(error);
      // })
    } else {
      var header = {};
      if (sessionId == null) {
        header = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };
      } else {
        header = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          SessionId: sessionId,
        };
      }
      //debugger;

      let rawResponse = await axios.post(url, params, { headers: header });
      console.log('URL:-' + url);
      console.log('Input:-' + JSON.stringify(params));
      console.log('RES:-' + rawResponse);
      //debugger;
      try {
        return Promise.resolve(rawResponse.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }

  static async PostMultipart(getState, endPoint, file, params) {
    if (typeof getState !== 'function') {
      throw new Error('getState parameter must be a function.');
    }
    const url = `${baseUrl}/${endPoint}`;
    const { SID } = getState().auth.user;
    const { UID } = getState().auth.user;

    // const updatedFile = {
    //   ...file,
    //   uri: Platform.OS === 'ios' ? file.uri.replace('file://', '') : file.uri,
    // };

    const formData = new FormData();
    if (file)
      formData.append('file', {
        name: file.fileName,
        type: file.type,
        uri:
          Platform.OS === 'android'
            ? file.uri
            : file.uri.replace('file://', ''),
      });
    formData.append('ParamData', JSON.stringify(params));
    console.log('URL:-' + url);
    console.log('Input:-' + JSON.stringify(formData));
    debugger;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          SessionId: SID,
        },
        body: formData,
      });
      const jsonResponse = await response.json();
      debugger;
      console.log('OUTPUT:-' + JSON.stringify(jsonResponse));
      debugger;
      return Promise.resolve(jsonResponse);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
