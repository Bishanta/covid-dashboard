import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
{ estimated: [], reported: [], categories: [] },
];

export const EstimatedAndReported = createSlice({
  name: 'EstimatedAndReported',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setEstimatedAndReported: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEstimatedAndReported } = EstimatedAndReported.actions;
export default EstimatedAndReported.reducer;
