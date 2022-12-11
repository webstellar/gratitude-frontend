import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  users: null,
  error: null,
  success: false,
};

export const allUsers = createAsyncThunk("auth/allUsers", async () => {
  try {
    const { data } = await axios.get("/api/v1/users");
    return data;
  } catch (error) {
    return error.response.data.errMessage;
  }
});

export const allUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    });
    builder.addCase(allUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
      state.users = null;
    });
  },
});
