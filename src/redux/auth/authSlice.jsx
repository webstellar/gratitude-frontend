import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initialState = {
  loading: true,
  user: null,
  token,
  error: null,
  success: false,
  isAuthenticated: false,
};

//login
export const login = createAsyncThunk(
  "auth/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let authVia = "login";
      const { data } = await axios.post(`/api/v1/${authVia}`, formData, config);
      toast.success("Logged in successfully");
      navigate("/my-profile");
      localStorage.setItem("token", JSON.stringify(data.token));
      return data;
    } catch (err) {
      toast.error(err.response.data.errMessage);
      return rejectWithValue(err.response.data);
    }
  }
);

//register
export const register = createAsyncThunk(
  "auth/register",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/v1/register", formData, config);
      toast.success("Registered successfully");
      navigate("/my-profile");
      return data;
    } catch (err) {
      toast.error(err.response.data.errMessage);
      return rejectWithValue(err.response.data.errMessage);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = null;
      state.isAutheniticated = false;
      state.success = false;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.success = true;
      state.loading = false;
    },
    setLogout: (state) => {
      localStorage.clear();
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
      state.user = null;
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
      state.success = true;
      state.isAuthenticated = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.errMessage;
      state.user = null;
    });
  },
});

export const { reset, setUser, setLogout } = authSlice.actions;
