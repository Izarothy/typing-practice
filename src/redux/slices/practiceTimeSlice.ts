import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type PracticeTimeState = {
  value: {
    startTime: number;
    endTime: number;
  };
};

const initialState: PracticeTimeState = {
  value: {
    startTime: 0,
    endTime: 0,
  },
};

const practiceTimeSlice = createSlice({
  name: 'PracticeTime',
  initialState,
  reducers: {
    setStartTime: (
      state: { value: { startTime: number; endTime: number } },
      action: PayloadAction<number>
    ) => {
      state.value.startTime = action.payload;
    },
    setEndTime: (
      state: { value: { startTime: number; endTime: number } },
      action: PayloadAction<number>
    ) => {
      state.value.startTime = action.payload;
    },
  },
});

export const { setStartTime, setEndTime } = practiceTimeSlice.actions;

export const PracticeTime = (state: AppState) => state.practiceTime.value;

export default practiceTimeSlice;
