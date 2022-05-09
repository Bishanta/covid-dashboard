import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const NumberOfActiveCase = createSlice({
  name: 'NumberOfActiveCase',
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setNumberOfActiveCase: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNumberOfActiveCase } = NumberOfActiveCase.actions;
export default NumberOfActiveCase.reducer;
