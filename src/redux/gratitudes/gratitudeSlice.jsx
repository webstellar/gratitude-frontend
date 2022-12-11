import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appreciation: {},
  loading: true,
  error: null,
  success: false,
};

export const getGratitude = createAsyncThunk(
  "gratitude/getGratitude",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/appreciation/${id}`);
      return data.appreciation;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const updateGratitude = createAsyncThunk(
  "gratitude/updatedGratitude",
  async (formData, id, toast, navigate) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.patch(
        `/api/v1/me/appreciation/${id}`,
        formData,
        config
      );
      toast.success("Your gratitude was edited successfully");
      navigate("/my-profile");
      return data.appreciation;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const gratitudeSlice = createSlice({
  name: "gratitude",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGratitude.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGratitude.fulfilled, (state, action) => {
      state.loading = false;
      state.appreciation = action.payload;
      state.success = true;
    });
    builder.addCase(getGratitude.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(updateGratitude.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateGratitude.fulfilled, (state, action) => {
      state.loading = false;
      state.appreciation = action.payload;
      state.success = true;
    });
    builder.addCase(updateGratitude.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});
