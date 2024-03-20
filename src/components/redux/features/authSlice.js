import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

<<<<<<< HEAD

=======
>>>>>>> apurbo
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


<<<<<<< HEAD

const authSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isLoggedIn: false,
=======
// export const regUser = createAsyncThunk(
//     "auth/regUser",
//     async (regData, { rejectWithValue, fulfillWithValue }) => {
//         try {
//             // Perform the POST request to the login endpoint
//             const response = await axios.post("http://127.0.0.1:8000/api/login", regData);
//             // console.log("lllllllllllllllllll", response)
//             // Return the response data upon successful login
//             return fulfillWithValue(response.data);
//         } catch (error) {
//             // Return the error data upon encountering an error
//             // You might want to handle different types of errors more explicitly here
//             return rejectWithValue(error.response.data);
//         }
//     }
// );









const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
>>>>>>> apurbo
        token: "",
        user: "",
        message: "",
        error: null,
    },
<<<<<<< HEAD
=======
    reducers: {
        logout() {
            localStorage.removeItem("token");

        }
    },
>>>>>>> apurbo
    extraReducers: (builder) => {

        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
<<<<<<< HEAD
                state.isLoggedIn = true;
=======
>>>>>>> apurbo
                state.message = action.payload.message || "success";
                localStorage.setItem("token", action.payload.token);
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload.error || "internal server error"
            })

    }


});



<<<<<<< HEAD




=======
>>>>>>> apurbo
export default authSlice.reducer;