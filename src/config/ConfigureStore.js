import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createMigrate} from 'redux-persist';

// reducer
import rootReducer from '../redux';

// encryptor
import encryptor from './Encryption';

// migration for future update
// const migrations = {
// 	1: state => {
// 		const { settings } = state;
// 		const mynewStructure = { ...settings, myNewKey: 'some value' };
// 		state.settings = mynewStructure;
// 		return state;
// 	}
// };

// persist config
const persistConfig = {
    key: 'root',
    storage,
    timeout: null,
    blacklist: ['common'],
    transforms: [encryptor],
    //version: 2,
    //migrate: createMigrate(migrations, { debug: false })
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk)),
    );
    let persistor = persistStore(store);

    return {store, persistor};
};
