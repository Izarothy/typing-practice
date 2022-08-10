import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type PracticeState = {
  value: {
    isOpen: boolean;
    reason: string;
  };
};

const initialState: PracticeState = {
  value: {
    isOpen: false,
    reason: '',
  },
};

const practiceStateSlice = createSlice({
  name: 'praciceState',
  initialState,
  reducers: {
    setPracticeState: (
      state: { value: { isOpen: boolean; reason: string } },
      action: PayloadAction<{ isOpen: boolean; reason: string }>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setPracticeState } = practiceStateSlice.actions;

export const PracticeState = (state: AppState) => state.practiceState.value;

export default practiceStateSlice;
