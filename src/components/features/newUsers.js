import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    initialState:{
        user:null
    },

    name:'new users',

    reducers:{
        login:(state,action)=>{

            state.user = action.payload;

        },
        logout:(state) =>{
            state.user = null;

        }
    }
})
export const {login,logout} = userSlice.actions;
export default userSlice.reducer;