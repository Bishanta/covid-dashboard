import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
  { name: 'Rolling 7 day total positive cases', type: 'column', data: [] },
  { name: 'Rolling 7 day total tests', type: 'line', data: [] },
];

export const Rolling7daysSlice = createSlice({
  name: 'Rolling7daysSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setRolling7daysSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRolling7daysSlice } = Rolling7daysSlice.actions;
export default Rolling7daysSlice.reducer;
