import {createSlice} from '@reduxjs/toolkit'
import { useColorScheme } from 'react-native'
import {lightTheme,darkTheme} from '../Theme/Theme'
const themeSlice = createSlice({
    name:'theme',
    initialState:{
        currentTheme: useColorScheme()=='dark'?darkTheme:lightTheme
    },
    reducers:{
        ChangeTheme(state,action){
            console.log('see theme changed ',action.payload);
            state.currentTheme = action.payload;
        }
    }
})

export const {ChangeTheme}  = themeSlice.actions;

export default themeSlice.reducer;