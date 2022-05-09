import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [
  { name: 'Antigen test and positive cases', type: 'column', data: [] },
  { name: 'Positivity Rate', type: 'line', data: [] },
  { name: 'Total Positive', type: 'line', data: [] },
];

export const WeeklyTestPositiveCases = createSlice({
  name: 'WeeklyTestPositiveCases',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setWeeklyTestPositiveCases: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWeeklyTestPositiveCases } = WeeklyTestPositiveCases.actions;
export default WeeklyTestPositiveCases.reducer;
