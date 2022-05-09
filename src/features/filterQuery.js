import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { province: '', district: '', date:'', age:'' };

export const filterQuery = createSlice({
  name: 'filterQuery',
  initialState: {
    query: initialStateValue,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetQuery: (state) => {
      state.query = initialStateValue;
    }
  }
});

export const { setQuery, resetQuery } = filterQuery.actions;
export default filterQuery.reducer;
