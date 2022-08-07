import { configureStore } from '@reduxjs/toolkit';
import typeInputSlice from './slices/TypeInputSlice';

export const store = configureStore({
  reducer: {
    typeInput: typeInputSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
