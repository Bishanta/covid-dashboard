import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const covidDeathSlice = createSlice({
  name: 'covidDeathSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setCovidDeath: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCovidDeath } = covidDeathSlice.actions;
export default covidDeathSlice.reducer;
