import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  success: null,
};

export const deleteMyGratitude = createAsyncThunk(
  "gratitude/deleteMyGratitude",
  async ({ id, toast }) => {
    try {
      const { data } = await axios.delete(`/api/v1/me/appreciation/${id}`);
      toast.success("Gratitude deleted successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const deleteMyGratitudeSlice = createSlice({
  name: "deleteGratitude",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteMyGratitude.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMyGratitude.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      console.log(state.success);
    });
    builder.addCase(deleteMyGratitude.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    });
  },
});
