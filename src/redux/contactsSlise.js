import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '' },

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
//export const { contactReducer } = contactsSlice.reducer;
export default contactsSlice.reducer;
