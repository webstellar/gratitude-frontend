import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  hero: {},
  error: null,
  success: false,
};

export const createHero = createAsyncThunk(
  "hero/createHero",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post("/api/v1/hero/new", formData, config);
      toast.success("Your hero was successfully");
      navigate("/give-gratitude");
      return response.data;
    } catch (err) {
      toast.error(err.response.data.errMessage);
      return rejectWithValue(err.response.data.errMessage);
    }
  }
);

export const createHeroSlice = createSlice({
  name: "newhero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createHero.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createHero.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("heroes", JSON.stringify({ ...action.payload }));
      state.hero = action.payload;
      state.success = true;
    });
    builder.addCase(createHero.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
      state.hero = null;
      state.success = false;
    });
  },
});
