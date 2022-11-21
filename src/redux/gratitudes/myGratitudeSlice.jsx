import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  myappreciations: [],
  loading: true,
  error: null,
  success: false,
};

export const getMyGratitudes = createAsyncThunk(
  "gratitudes/getMyGratitudes",
  async () => {
    try {
      const { data } = await axios.get("/api/v1/me/appreciations");
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const myGratitudesSlice = createSlice({
  name: "mygratitudes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyGratitudes.pending, (state) => {
      state.loading = true;
      state.myappreciations = [];
    });
    builder.addCase(getMyGratitudes.fulfilled, (state, action) => {
      state.loading = false;
      state.myappreciations = action.payload.appreciations;
      state.success = true;
    });
    builder.addCase(getMyGratitudes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
