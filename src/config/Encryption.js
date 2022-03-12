/**
 * Redux Encryptor
 */
import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
    secretKey: 'caresmartz-secret-key-360'
});

export default encryptor;
