import {createAsyncThunk} from "@reduxjs/toolkit"
import { fetchSwapiAPI } from "../../api"

export const fetchSwapiThunk = createAsyncThunk(
    "fetchSwapiThunk",
  async (endpoint, { rejectWithValue }) => {
    try {
      const data = await fetchSwapiAPI(endpoint);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)