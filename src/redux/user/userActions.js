import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/api';

export const userSignUpRequest = createAsyncThunk(
  'user/userSignUpRequest',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await UserAPI.userSignUpRequest(formData);
      res?.token && localStorage.setItem('token', res.token);

      return res;
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

      return res;
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

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserDetailsRequest = createAsyncThunk(
  'user/getUserDetailsRequest',
  async (_, { rejectWithValue, signal }) => {
    try {
      const res = await UserAPI.getUserDetailsRequest(signal);

      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
