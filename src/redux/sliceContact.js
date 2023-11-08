import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

import { addNewContact, deleteContact, fetchAllContacts } from './operations';

const initialState = {
  items: [
    {
      id: nanoid(),
      name: '',
      number: '',
    },
  ],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      });
  },
});

export const fetchAll = state => state.contacts;

export const contactsReducer = contactSlice.reducer;
