import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const covidNewCasesSlice = createSlice({
  name: 'covidNewCasesSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setCovidNewCases: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCovidNewCases } = covidNewCasesSlice.actions;
export default covidNewCasesSlice.reducer;
