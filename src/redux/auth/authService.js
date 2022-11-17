import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  user: {},
  error: null,
  success: false,
};

export const googleSignIn = createAsyncThunk(
  "google/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post("/api/v1/authGoogle", formData, config);
      toast.success("Logged in successfully");
      navigate("/");
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const googleSignUp = createAsyncThunk(
  "google/signup",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post("/api/v1/register", formData, config);
      toast.success("Registered successfully");
      navigate("/");
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const googleSlice = createSlice({
  name: "authGoogle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(googleSignIn.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(googleSignIn.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    });
    builder.addCase(googleSignIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.user = null;
    });

    builder.addCase(googleSignUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(googleSignUp.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload.user;
    });
    builder.addCase(googleSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.user = null;
    });
  },
});
