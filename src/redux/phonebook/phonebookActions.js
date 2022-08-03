import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/api';

export const setFilterTerm = createAction('phonebook/setFilterTerm');

export const getContatcts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue, signal }) => {
    try {
      const res = await ContactsAPI.getContactsRequest(signal);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContatct',
  async (contactId, { rejectWithValue }) => {
    try {
      await ContactsAPI.deleteContactRequest(contactId);

      return contactId;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContatct',
  async (contactData, { rejectWithValue }) => {
    try {
      const res = await ContactsAPI.addContactRequest(contactData);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
