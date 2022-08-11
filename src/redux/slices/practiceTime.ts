import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type PracticeTimeState = {
  value: {
    startTime: number | null;
    endTime: number | null;
  };
};

const initialState: PracticeTimeState = {
  value: {
    startTime: null,
    endTime: null,
  },
};

const practiceTimeSlice = createSlice({
  name: 'PracticeTime',
  initialState,
  reducers: {
    setStartTime: (
      state: { value: { startTime: number | null; endTime: number | null } },
      action: PayloadAction<number>
    ) => {
      state.value.startTime = action.payload;
    },
    setEndTime: (
      state: { value: { startTime: number | null; endTime: number | null } },
      action: PayloadAction<number>
    ) => {
      state.value.startTime = action.payload;
    },
  },
});

export const { setStartTime, setEndTime } = practiceTimeSlice.actions;

export const PracticeTime = (state: AppState) => state.practiceTime.value;

export default practiceTimeSlice;
