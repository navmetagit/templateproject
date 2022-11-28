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

    },
    reducers:{
        SignIn(state,action){
            console.log('see signin: ',action.payload);
            state.authData = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        SignOut(state, action) {
            state.authData = null;
        }
        
    }
})

export const {SignIn, setStatus,SignOut} = authSlice.actions;

export default authSlice.reducer;

