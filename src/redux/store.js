import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './authSlice'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
let persistConfig = {
    key:'root',
    storage:AsyncStorage,
}

let rootReducer = combineReducers({
    auth : AuthReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer :persistedReducer
});
// const store = configureStore({
//     reducer :{
//         auth : AuthReducer,
//     }
// });
export const persistor = persistStore(store)
