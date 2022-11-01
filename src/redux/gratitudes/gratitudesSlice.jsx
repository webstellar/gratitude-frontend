import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchGratitudes = createAsyncThunk("all-gratitudes", async () => {
    try {
        const { data } = await axios.get("/api/v1/appreciations");
        return data
    } catch (error) {
        return error.response.data.message
    }
}
)

export const fetchSingleGratitude = createAsyncThunk("gratitudes/")

export const gratitudesSlice = createSlice({
    name: "gratitudes",
    initialState: {
        appreciations: [],
        loading: true,
        error: null,
        success: false
    },
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchGratitudes.pending, (state, action) => {
            state.loading = true
            state.appreciations = []
        })
        builder.addCase(fetchGratitudes.fulfilled, (state, action) => {
            state.loading = false
            state.appreciations = action.payload.appreciations
            state.success = true
        })
        builder.addCase(fetchGratitudes.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload

        })
    }
})