import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type PracticeTextState = {
  value: string;
};

const initialState: PracticeTextState = {
  value: '',
};

const practiceTextSlice = createSlice({
  name: 'PracticeText',
  initialState,
  reducers: {
    setPracticeText: (state: { value: string }, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setPracticeText } = practiceTextSlice.actions;

export const PracticeText = (state: AppState) => state.practiceText.value;

export default practiceTextSlice;
