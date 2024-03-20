import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import counterSlice from "../features/counter/index"
import newUsers from "../features/newUsers"


export default configureStore({
    reducer :{
        user:userReducer,
        counters: counterSlice,
        newUser:newUsers,
    },
    
})