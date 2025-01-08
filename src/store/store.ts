import { configureStore } from '@reduxjs/toolkit';

//* return a sotre with the reducers
const myStore = configureStore({
  reducer: {
    // Add reducers here
  },
});

export default myStore;
