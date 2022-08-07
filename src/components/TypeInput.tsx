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
    <input type="text" className="fixed bg-secondary-dark" onChange={(e) => handleTypeInput(e)} />
  );
};

export default TypeInput;
