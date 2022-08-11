import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type typeInputState = {
  value: {
    typeInput: string;
    correctCharacters: number;
    incorrectCharacters: number;
  };
};

const initialState: typeInputState = {
  value: {
    typeInput: '',
    correctCharacters: 0,
    incorrectCharacters: 0,
  },
};

const typeInputSlice = createSlice({
  name: 'typeInput',
  initialState,
  reducers: {
    setTypeInput: (state: typeInputState, action: PayloadAction<string>) => {
      state.value.typeInput = action.payload;
    },
    incrementCorrectCharacters: (state: typeInputState) => {
      state.value.correctCharacters += 1;
    },
    incrementInCorrectCharacters: (state: typeInputState) => {
      state.value.incorrectCharacters += 1;
    },
  },
});

export const { setTypeInput, incrementCorrectCharacters, incrementInCorrectCharacters } =
  typeInputSlice.actions;

export const TypeInput = (state: AppState) => state.typeInput.value;

export default typeInputSlice;
