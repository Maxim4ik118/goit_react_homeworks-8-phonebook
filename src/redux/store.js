import { configureStore } from '@reduxjs/toolkit';
import phonebook from './phonebook/phonebookReducer';
import user from './user/userReducer';

const store = configureStore({
  reducer: { phonebook, user },
});

export default store;
