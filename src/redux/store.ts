import { configureStore } from '@reduxjs/toolkit';
import currentTextIndexSlice from './slices/currentTextIndexSlice';
import practiceStateSlice from './slices/practiceStateSlice';
import practiceTextSlice from './slices/practiceTextSlice';
import practiceTimeSlice from './slices/practiceTimeSlice';
import typeInputSlice from './slices/typeInputSlice';

export const store = configureStore({
  reducer: {
    typeInput: typeInputSlice.reducer,
    practiceText: practiceTextSlice.reducer,
    currentTextIndex: currentTextIndexSlice.reducer,
    practiceState: practiceStateSlice.reducer,
    practiceTime: practiceTimeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
