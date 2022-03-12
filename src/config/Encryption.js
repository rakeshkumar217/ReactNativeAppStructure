/**
 * Redux Encryptor
 */
import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
    secretKey: 'appstructure-secret-key-360'
});

export default encryptor;
