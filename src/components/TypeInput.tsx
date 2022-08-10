import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { incrementCurrentTextIndex } from '../redux/slices/currentTextIndexSlice';
import { setTypeInput } from '../redux/slices/typeInputSlice';

const TypeInput = () => {
  const dispatch = useDispatch();

  const practiceText = useAppSelector((state) => state.practiceText.value);
  const currentTextIndex = useAppSelector((state) => state.currentTextIndex.value);

  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTypeInput(e.target.value));

    if (e.target.value[currentTextIndex] === practiceText[currentTextIndex]) console.log('');
    dispatch(incrementCurrentTextIndex(1));
  };

  return (
    <input
      type="text"
      autoFocus
      className="absolute left-8 text-white/0 focus:outline-none"
      onChange={(e) => handleTypeInput(e)}
    />
  );
};

export default TypeInput;
