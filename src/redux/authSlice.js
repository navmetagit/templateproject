import {createSlice} from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({    //read only and cant change from outside
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const authSlice = createSlice({
    name : 'auth',
    initialState:{
        authData: null,

        status : STATUSES.IDLE,

        reducers:{
            SignIn(state,action){
                state.authData = action.payload;
            },
            setStatus(state, action) {
                state.status = action.payload;
            },
            
        }
    },
})

export const {SignIn, setStatus} = authSlice.actions;

export default authSlice.reducer;

