import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    appreciations: [],
    loading: true,
    error: null,
    success: false
}

export const getGratitudes = createAsyncThunk("gratitudes/getGratitudes", async () => {
    try {
        const { data } = await axios.get("/api/v1/appreciations");
        return data
    } catch (error) {
        return error.response.data.message
    }
}
)

export const gratitudesSlice = createSlice({
    name: "gratitudes",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getGratitudes.pending, (state, action) => {
            state.loading = true
            state.appreciations = []
        })
        builder.addCase(getGratitudes.fulfilled, (state, action) => {
            state.loading = false
            state.appreciations = action.payload.appreciations
            state.success = true
        })
        builder.addCase(getGratitudes.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


