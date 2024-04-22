import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../service/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Async action creator for logging in user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await postApi('/api/login', loginData);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async action creator for verifying OTP
export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (otp, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await postApi('/api/otp-submit', { otp });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isLogin: false,
    token: "",
    user: "",
    message: "",
    error: null,
    otpVerified: false, // Adding a state to track OTP verification status
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("authUser");
      localStorage.removeItem("token");
      // Navigate to the home page or any other desired route after logout
      state.isLogin = false;
      state.token = "";
      state.user = "";
      toast.success("Login Successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.isLogin = false;
        state.error = null; // Clear any previous error
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message || "success";
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("authUser", JSON.stringify(action.payload.user));
        localStorage.setItem("role", JSON.stringify(action.payload.role));
        localStorage.setItem("isLogin", true);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        state.error = action.payload.error || "internal server error";
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous error
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.loading = false;
        state.otpVerified = true; // Update OTP verification status


      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error || "The OTP you entered is incorrect.";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
