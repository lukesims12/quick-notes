import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// The global Redux store
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});

// These help TypeScript infer correct types for hooks later
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
