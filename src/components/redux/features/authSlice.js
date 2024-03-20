import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (loginData, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, loginData);

            console.log(loginData);

            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



const authSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isLoggedIn: false,
        token: "",
        user: "",
        message: "",
        error: null,
    },
    extraReducers: (builder) => {

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.message = action.payload.message || "success";
                localStorage.setItem("token", action.payload.token);
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload.error || "internal server error"
            })

    }


});







export default authSlice.reducer;