import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const covidPositiveSlice = createSlice({
  name: 'covidPositiveSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setCovidPositive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCovidPositive } = covidPositiveSlice.actions;
export default covidPositiveSlice.reducer;
