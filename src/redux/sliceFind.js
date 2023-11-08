const { createSlice } = require('@reduxjs/toolkit');

const initialState = { filter: '' };

export const findSlice = createSlice({
  name: 'find',
  initialState: initialState,
  reducers: {
    getFindValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { getFindValue } = findSlice.actions;
export const selectFind = state => state.find.filter;
export const findReduser = findSlice.reducer;
