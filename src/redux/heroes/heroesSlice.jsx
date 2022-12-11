import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  heroes: [],
  loading: true,
  error: null,
  success: false,
};

export const getHeroes = createAsyncThunk(
  "heroes/getHeroes",
  async (keyword = "") => {
    try {
      const { data } = await axios.get(`/api/v1/heroes?keyword=${keyword}`);
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeroes.pending, (state) => {
      state.loading = true;
      state.heroes = [];
    });
    builder.addCase(getHeroes.fulfilled, (state, action) => {
      state.loading = false;
      state.heroes = action.payload.heroes;
      state.success = true;
    });
    builder.addCase(getHeroes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
