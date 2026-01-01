import { configureStore } from '@reduxjs/toolkit'
import { swapiFatchSlice } from './rooteReducer.mjs'

export const store = configureStore({
    reducer:{swapi: swapiFatchSlice.reducer} 
})