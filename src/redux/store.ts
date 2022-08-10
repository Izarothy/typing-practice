import { configureStore } from '@reduxjs/toolkit';
import currentTextIndexSlice from './slices/currentTextIndexSlice';
import gameOpenSlice from './slices/gameOpenSlice';
import practiceTextSlice from './slices/practiceTextSlice';
import typeInputSlice from './slices/typeInputSlice';

export const store = configureStore({
  reducer: {
    typeInput: typeInputSlice.reducer,
    practiceText: practiceTextSlice.reducer,
    currentTextIndex: currentTextIndexSlice.reducer,
    gameOpen: gameOpenSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
