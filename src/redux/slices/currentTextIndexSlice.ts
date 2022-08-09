import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type CurrentTextIndexSlice = {
  value: number;
};

const initialState: CurrentTextIndexSlice = {
  value: 0,
};

const currentTextIndexSlice = createSlice({
  name: 'currentTextIndex',
  initialState,
  reducers: {
    incrementCurrentTextIndex: (state: { value: number }, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementCurrentTextIndex } = currentTextIndexSlice.actions;

export const CurrentTextIndexSlice = (state: AppState) => state.currentTextIndex.value;

export default currentTextIndexSlice;
