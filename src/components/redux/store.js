import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";


<<<<<<< HEAD

export default configureStore({
    reducer: {
        user: authSlice,
    },

    

=======
export default configureStore({
    reducer: {
        auth: authSlice,
    },

>>>>>>> apurbo
})