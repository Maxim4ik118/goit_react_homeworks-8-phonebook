import { createReducer } from '@reduxjs/toolkit';
import {
  getUserDetailsRequest,
  userLogOutRequest,
  userSignInRequest,
  userSignUpRequest,
} from './userActions';

const initialState = {
  userData: null,
  isFetching: false,
  error: null,
};

export default createReducer(initialState, {
  [userSignUpRequest.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [userSignUpRequest.fulfilled]: (state, action) => {
    state.userData = action.payload;
    state.isFetching = false;
  },
  [userSignUpRequest.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },

  [userSignInRequest.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [userSignInRequest.fulfilled]: (state, action) => {
    state.userData = action.payload;
    state.isFetching = false;
  },
  [userSignInRequest.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },

  [userLogOutRequest.pending]: state => {
    state.isFetching = true;
    state.error = null;
  },
  [userLogOutRequest.fulfilled]: state => {
    state.userData = null;
    state.isFetching = false;
  },
  [userLogOutRequest.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },

   [getUserDetailsRequest.pending]: state => {
     state.isFetching = true;
     state.error = null;
   },
   [getUserDetailsRequest.fulfilled]: (state, action) => {
     state.userData = { user: action.payload };
     state.isFetching = false;
   },
  [getUserDetailsRequest.rejected]: (state, action) => {
    state.error = action.payload.message;
    state.isFetching = false;
  },
});
