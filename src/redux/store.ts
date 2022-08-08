import { configureStore } from '@reduxjs/toolkit';
import practiceTextSlice from './slices/practiceTextSlice';
import typeInputSlice from './slices/typeInputSlice';

export const store = configureStore({
  reducer: {
    typeInput: typeInputSlice.reducer,
    practiceText: practiceTextSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
