import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appreciation: {},
  loading: true,
  error: null,
  success: false,
};

export const createGratitude = createAsyncThunk(
  "gratitude/createGratitude",
  async ({ formData, toast }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/appreciation/new", formData);
      toast.success("Your gratitude was created successfully");
      return response.data;
    } catch (err) {
      toast.error(err.response.data.errMessage);
      return rejectWithValue(err.response.data.errMessage);
    }
  }
);

export const createGratitudeSlice = createSlice({
  name: "newgratitude",
  initialState,
  reducers: {
    clearGratitude: (state) => {
      state.appreciation = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createGratitude.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createGratitude.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("gratitudes", JSON.stringify({ ...action.payload }));
      state.appreciation = action.payload;
      state.success = true;
      console.log(state.appreciation);
    });
    builder.addCase(createGratitude.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
      state.appreciation = null;
      state.success = false;
    });
  },
});

export const { clearGratitude } = createGratitudeSlice.actions;
