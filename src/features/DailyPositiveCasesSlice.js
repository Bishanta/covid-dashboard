import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
  { name: 'Total Positive', type: 'column', data: [] },
  { name: '3 Day Average', type: 'line', data: [] },
  { name: '7 Day Average', type: 'line', data: [] },
];

export const DailyPositiveCasesSlice = createSlice({
  name: 'DailyPositiveCasesSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setDailyPositiveCasesSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDailyPositiveCasesSlice } = DailyPositiveCasesSlice.actions;
export default DailyPositiveCasesSlice.reducer;
