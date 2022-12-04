import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  message: "",
};

//forgot
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let authVia = "password/forgot";
      const { data } = await axios.post(`/api/v1/${authVia}`, formData, config);
      navigate("/");
      return data;
    } catch (err) {
      toast.error(err.response.data.errMessage);
      return rejectWithValue(err.response.data);
    }
  }
);

export const authPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
    });
  },
});
