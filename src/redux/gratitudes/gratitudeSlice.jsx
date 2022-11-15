import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    appreciation: {},
    loading: true,
    error: null,
    success: false
}


export const getGratitude = createAsyncThunk("gratitude/getGratitude", async (id, thunkAPI) => {
    try {
        const { data } = await axios.get(`/api/v1/appreciation/${id}`)
        return data.appreciation
    } catch (error) {
        return error.response.data.message
    }
})


export const gratitudeSlice = createSlice({
    name: "gratitude",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getGratitude.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getGratitude.fulfilled, (state, action) => {
            state.loading = false
            state.appreciation = action.payload
            state.success = true
        })
        builder.addCase(getGratitude.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
    }
})