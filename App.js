import React from 'react';
import { View, useColorScheme, StatusBar } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
// import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalFont from 'react-native-global-font'
const App = () => {
  
  // React.useEffect(() => {
  //   let fontName = 'NexaLight'
  //  GlobalFont.applyGlobal(fontName)
 
  // }, [])
  

  return (
    // <View style={{ flex: 1, paddingTop: 0 }}>

      <Provider store={store}>
    
        <PersistGate persistor={persistor}>

          <Routes />
        </PersistGate>
      </Provider>

   

  );
};

export default App;
