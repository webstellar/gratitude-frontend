import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  hero: {},
  loading: true,
  error: null,
  success: false,
};

export const getHero = createAsyncThunk("hero/getHero", async (id) => {
  try {
    const { data } = await axios.get(`/api/v1/hero/${id}`);
    return data.hero;
  } catch (error) {
    return error.response.data.message;
  }
});

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHero.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHero.fulfilled, (state, action) => {
      state.loading = false;
      state.hero = action.payload;
      state.success = true;
    });
    builder.addCase(getHero.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});
