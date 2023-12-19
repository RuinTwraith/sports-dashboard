import { configureStore } from '@reduxjs/toolkit';
import sportsSlice from './sportsSlice';

export const store = configureStore({
  reducer: {
    sports: sportsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {sports: sportsSlice}
export type AppDispatch = typeof store.dispatch;
