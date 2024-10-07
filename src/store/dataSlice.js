import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      console.log("setItems action received:", action.payload);
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      console.log("setLoading action received:", action.payload);
      state.loading = action.payload;
    },
    setError: (state, action) => {
      console.log("setError action received:", action.payload);
      state.error = action.payload;
    },
  },
});

export const { setItems, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;
