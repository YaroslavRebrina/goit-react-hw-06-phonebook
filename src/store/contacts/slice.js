import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.find(contact => contact.name === action.payload.name)
      ) {
        alert(`${action.payload.name} is alrady in contacts.`);
        return;
      }

      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = persistedReducer;
