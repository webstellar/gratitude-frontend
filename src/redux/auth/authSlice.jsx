import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    loading: true,
    user: null,
    error: null,
    success: false
}

export const login = createAsyncThunk("auth/login", async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let authVia = "login"
        const response = await axios.post(
            `/api/v1/${authVia}`,
            formData,
            config)
        toast.success("Logged in successfully")
        navigate("/")
        return response.data
    } catch (err) {
        toast.error(err.response.data.errMessage)
        return rejectWithValue(err.response.data)
    }
})


export const register = createAsyncThunk("auth/register", async ({ formData, toast, thunkAPI }, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(
            "/api/v1/register",
            formData,
        )
        toast.success("Registered successfully")
        return data.user
    } catch (error) {
        return error.response.data.message
    }
}
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }))
            state.user = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.errMessage
            state.user = null
        })

        builder.addCase(register.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.success = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
            state.user = null
        })
    }
})
