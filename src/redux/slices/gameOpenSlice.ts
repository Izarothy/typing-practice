import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type GameOpenSlice = {
  value: boolean;
};

const initialState: GameOpenSlice = {
  value: false,
};

const gameOpenSlice = createSlice({
  name: 'gameOpen',
  initialState,
  reducers: {
    setGameOpen: (state: { value: boolean }, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setGameOpen } = gameOpenSlice.actions;

export const GameOpenSlice = (state: AppState) => state.gameOpen.value;

export default gameOpenSlice;
