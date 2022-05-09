import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const CovidByAgeSlice = createSlice({
  name: 'CovidByAgeSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setCovidByDeath: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCovidByDeath } = CovidByAgeSlice.actions;
export default CovidByAgeSlice.reducer;
