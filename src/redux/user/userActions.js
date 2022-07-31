import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/api';

export const setFilterTerm = createAction('phonebook/setFilterTerm');

// export const getContatcts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/contacts`);
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContatct',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const res = await axios.delete(
//         `${process.env.REACT_APP_BASE_URL}/contacts/${contactId}`
//       );
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContatct',
//   async (body, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/contacts`,
//         {
//           body: JSON.stringify(body),
//         }
//       );
//       const data = await res.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const userSignUpRequest = createAsyncThunk(
  'user/userSignUpRequest',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await UserAPI.userSignUpRequest(formData);
      res?.token && localStorage.setItem('token', res.token);

      return await res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const userSignInRequest = createAsyncThunk(
  'user/userSignInRequest',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await UserAPI.userSignInRequest(formData);
      res?.token && localStorage.setItem('token', res.token);

      return await res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const userLogOutRequest = createAsyncThunk(
  'user/userLogOutRequest',
  async (_, { rejectWithValue }) => {
    try {
      const res = await UserAPI.userLogOutRequest();
      
      localStorage.removeItem('token', res.token);

      return await res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getUserDetailsRequest = createAsyncThunk(
  'user/getUserDetailsRequest',
  async (_, { rejectWithValue }) => {
    try {
      const res = await UserAPI.getUserDetailsRequest();

      return await res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

