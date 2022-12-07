import {configureStore,getDefaultMiddleWare} from '@reduxjs/toolkit'
import AuthReducer from './authSlice'
import ThemeReducer from './themeSlice'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
let persistConfig = {
    key:'root',
    storage:AsyncStorage,
}

let rootReducer = combineReducers({
    auth : AuthReducer,
    theme : ThemeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer :persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// const store = configureStore({
//     reducer :{
//         auth : AuthReducer,
//     }
// });
export const persistor = persistStore(store)
