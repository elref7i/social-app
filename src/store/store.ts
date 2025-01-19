'use client';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user.slice';
import { PostReducer } from './features/post.slice';
//* return a sotre with the reducers
export const store = configureStore({
  reducer: {
    userReducer,
    PostReducer,
  },
});

type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;
// export type dispatchState = ReturnType<(typeof myStore)['dispatch']>;
export type AppDispatch = AppStore['dispatch'];
