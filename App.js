import React from 'react';
import { View } from 'react-native';
import Routes from './src/Navigation/Routes';
import { Provider  } from 'react-redux'
import {store,persistor} from './src/redux/store'
// import persistStore from 'redux-persist/es/persistStore'
import {PersistGate} from 'redux-persist/integration/react'
// let persistor  = persistStore(store)
const App = () => {

  return (


    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>

        <Routes />
        </PersistGate>
      </Provider>
    </View>

  );
};

export default App;
