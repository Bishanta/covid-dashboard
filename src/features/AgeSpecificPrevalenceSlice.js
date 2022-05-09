import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const AgeSpecificPrevalenceSlice = createSlice({
  name: 'AgeSpecificPrevalenceSlice',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setCovidByAgeSpecific: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCovidByAgeSpecific } = AgeSpecificPrevalenceSlice.actions;
export default AgeSpecificPrevalenceSlice.reducer;
