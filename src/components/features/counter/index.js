import {createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState : 1,
    name:'counter',

    reducers:{
        increment:(state) =>state+1,
        dec:(state)=>state-1,


    },

})
export const {increment,dec} = counterSlice.actions;
export default counterSlice.reducer;