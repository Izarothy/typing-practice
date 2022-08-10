import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { incrementCurrentTextIndex } from '../redux/slices/currentTextIndexSlice';
import { setPracticeState } from '../redux/slices/practiceStateSlice';
import { setTypeInput } from '../redux/slices/typeInputSlice';

const TypeInput = () => {
  const dispatch = useDispatch();

  const practiceText = useAppSelector((state) => state.practiceText.value);
  const currentTextIndex = useAppSelector((state) => state.currentTextIndex.value);
  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Typing starts
    if (currentTextIndex === 0) {
      dispatch(setPracticeState({ isOpen: true, reason: 'Started' }));
    }

    dispatch(setTypeInput(e.target.value));
    dispatch(incrementCurrentTextIndex(1));

    if (practiceText[currentTextIndex] === ' ') return;

    const currEl = document.querySelector(`#L${currentTextIndex}`);

    // Color the HTML elements based on whether the text is matching
    if (e.target.value[currentTextIndex] === practiceText[currentTextIndex]) {
      currEl?.classList.add('text-green-500');
    } else {
      currEl?.classList.add('text-red-500');
    }

    // Typing ends
    if (currentTextIndex === practiceText.length - 1) {
      dispatch(setPracticeState({ isOpen: false, reason: 'Ended' }));
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
