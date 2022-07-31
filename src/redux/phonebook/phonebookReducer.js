import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContatcts,
  setFilterTerm,
} from './phonebookActions';


const initialState = {
  contacts: [],
  filterTerm: '',
  isFetching: false,
  error: null,
};

export default createReducer(initialState, {
  [setFilterTerm]: (state, action) => {
    state.filterTerm = action.payload;
  },
  [getContatcts.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [getContatcts.fulfilled]: (state, action) => {
    state.contacts = action.payload;
    state.isFetching = false;
  },
  [getContatcts.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },
  [deleteContact.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [deleteContact.fulfilled]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
    state.isFetching = false;
  },
  [deleteContact.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },
  [addContact.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [addContact.fulfilled]: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
    state.isFetching = false;
  },
  [addContact.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },
});
