import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

const destinationSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setLoading(state, action) {
      
      state.loading = action.payload;

    },
    setItems(state, action) {
      state.items = action.payload;
      
    },
  },
});

export const { setLoading, setItems } = destinationSlice.actions;
export default destinationSlice.reducer;

//export default destinationSlice;
