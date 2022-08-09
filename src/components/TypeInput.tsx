import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { setTypeInput } from '../redux/slices/typeInputSlice';

const TypeInput = () => {
  const dispatch = useDispatch();

  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTypeInput(e.target.value));
  };

  const input = useAppSelector((state) => state.typeInput.value);

  return (
    <input
      type="text"
      className="absolute left-8 bg-white/0 text-white/0 focus:outline-none"
      onChange={(e) => handleTypeInput(e)}
    />
  );
};

export default TypeInput;
