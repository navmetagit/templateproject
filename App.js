import React from 'react';
import { View ,useColorScheme} from 'react-native';
import Routes from './src/Navigation/Routes';
import { Provider  } from 'react-redux'
import {store,persistor} from './src/redux/store'
// import persistStore from 'redux-persist/es/persistStore'
import {PersistGate} from 'redux-persist/integration/react'

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
