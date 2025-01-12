'use client';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user.slice';
//* return a sotre with the reducers
export const myStore = configureStore({
  reducer: {
    userReducer,
  },
});

type AppStore = typeof myStore;

export type RootState = ReturnType<AppStore['getState']>;
// export type dispatchState = ReturnType<(typeof myStore)['dispatch']>;
export type AppDispatch = AppStore['dispatch'];
