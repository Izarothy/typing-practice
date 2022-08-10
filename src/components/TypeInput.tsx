import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { incrementCurrentTextIndex } from '../redux/slices/currentTextIndexSlice';
import { setGameOpen } from '../redux/slices/gameOpenSlice';
import { setTypeInput } from '../redux/slices/typeInputSlice';

const TypeInput = () => {
  const dispatch = useDispatch();

  const practiceText = useAppSelector((state) => state.practiceText.value);
  const currentTextIndex = useAppSelector((state) => state.currentTextIndex.value);
  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentTextIndex === 0) dispatch(setGameOpen(true));

    dispatch(setTypeInput(e.target.value));
    dispatch(incrementCurrentTextIndex(1));

    if (practiceText[currentTextIndex] === ' ') return;

    const currEl = document.querySelector(`#L${currentTextIndex}`);

    if (e.target.value[currentTextIndex] === practiceText[currentTextIndex]) {
      currEl?.classList.add('text-green-500');
      return;
    }
  };

  return (
    <>
      <input
        type="text"
        autoFocus
        className="absolute left-8 bg-white/0 text-white/0 focus:outline-none"
        onChange={(e) => handleTypeInput(e)}
        onKeyDown={(e) => {
          if (e.key === 'Backspace') e.preventDefault();
        }}
      />
    </>
  );
};

export default TypeInput;
