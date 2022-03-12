import React, { Component } from "react";
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/config/ConfigureStore';
import AppNavigator from './src/config/AppNavigator';
import AppLoader from './src/common/components/AppLoader';

const {store, persistor} = configureStore();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigator />
            <AppLoader />
          </PersistGate>
        </Provider>
    );
  }
}
