import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const DistrictsNewCases = createSlice({
  name: 'DistrictsNewCases',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setDistrictNewCases: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDistrictNewCases } = DistrictsNewCases.actions;
export default DistrictsNewCases.reducer;
