import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setFilterTerm = createAction('phonebook/setFilterTerm');

export const getContatcts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/contacts`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContatct',
  async (contactId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/contacts/${contactId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContatct',
  async (body, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contacts`,
        {
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
