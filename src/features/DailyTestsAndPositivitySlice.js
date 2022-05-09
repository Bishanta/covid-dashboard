import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
  { name: 'RT-PCR Tests', type: 'line', data: [] },
  { name: 'Positivity Rate', type: 'column', data: [] },
  { name: 'Antigen Tests', type: 'line', data: [] },
  { name: 'Total Tests', type: 'line', data: [] },
];

export const DailyTestsAndPositivitySlice = createSlice({
  name: 'DailyTestsAndPositivitySlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setDailyTestsAndPositivitySlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDailyTestsAndPositivitySlice } = DailyTestsAndPositivitySlice.actions;
export default DailyTestsAndPositivitySlice.reducer;
