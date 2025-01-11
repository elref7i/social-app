'use client';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user.slice';
//* return a sotre with the reducers
const myStore = configureStore({
  reducer: {
    userReducer,
  },
});

export default myStore;
