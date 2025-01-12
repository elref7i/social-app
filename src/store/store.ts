'use client';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user.slice';
//* return a sotre with the reducers
export const store = configureStore({
  reducer: {
    userReducer,
  },
});

type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;
// export type dispatchState = ReturnType<(typeof myStore)['dispatch']>;
export type AppDispatch = AppStore['dispatch'];
