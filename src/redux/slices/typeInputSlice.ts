import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type typeInputState = {
  value: string;
};

const initialState: typeInputState = {
  value: '',
};

const typeInputSlice = createSlice({
  name: 'typeInput',
  initialState,
  reducers: {
    setTypeInput: (state: { value: string }, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTypeInput } = typeInputSlice.actions;

export const TypeInput = (state: AppState) => state.typeInput.value;

export default typeInputSlice;
