import { createSlice } from '@reduxjs/toolkit'
import { fetchSwapiThunk } from './thunks/index'

export const swapiFatchSlice = createSlice({
  name: 'swapiFatchSlice',
  initialState: {
    swapi: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteSwapi: (state) => {
      state.swapi = null;
      state.error = null;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchSwapiThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSwapiThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.swapi = action.payload;
    });
    builder.addCase(fetchSwapiThunk.rejected, (state, action) => {
      state.isLoading = false;
      //state.error = action.payload;
      state.error = action.payload || action.error.message;
    });
  },
})

export const { deleteSwapi } = swapiFatchSlice.actions
