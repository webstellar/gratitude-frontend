import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  success: null,
};

export const deleteMyHeroes = createAsyncThunk(
  "heroes/deleteMyHero",
  async ({ id, toast }) => {
    try {
      const { data } = await axios.delete(`/api/v1/me/hero/${id}`);
      toast.success("Hero deleted successfully");
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return error.response.data.message;
    }
  }
);

export const deleteMyHeroSlice = createSlice({
  name: "deleteHeroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteMyHeroes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMyHeroes.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      console.log(state.success);
    });
    builder.addCase(deleteMyHeroes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    });
  },
});
