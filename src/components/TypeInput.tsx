import React, { ChangeEvent, LegacyRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/hooks';
import { incrementCurrentTextIndex } from '../redux/slices/currentTextIndexSlice';
import { setPracticeState } from '../redux/slices/practiceStateSlice';
import { setEndTime, setStartTime } from '../redux/slices/practiceTimeSlice';
import {
  incrementCorrectCharacters,
  incrementInCorrectCharacters,
  setTypeInput,
} from '../redux/slices/typeInputSlice';

type TProps = {
  inputRef: LegacyRef<HTMLInputElement>;
};

const TypeInput = ({ inputRef }: TProps) => {
  const dispatch = useDispatch();

  const practiceText = useAppSelector((state) => state.practiceText.value);
  const currentTextIndex = useAppSelector((state) => state.currentTextIndex.value);

  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Typing starts
    if (currentTextIndex === 0) {
      dispatch(setPracticeState({ isOpen: true, reason: 'Started' }));
      dispatch(setStartTime(Date.now()));
    }

    dispatch(setTypeInput(e.target.value));
    dispatch(incrementCurrentTextIndex(1));

    if (practiceText[currentTextIndex] === ' ') return;

    const currEl = document.querySelector(`#L${currentTextIndex}`);

    // Color the HTML elements based on whether the text is matching
    if (e.target.value[currentTextIndex] === practiceText[currentTextIndex]) {
      dispatch(incrementCorrectCharacters());
      currEl?.classList.add('text-green-500');
    } else {
      dispatch(incrementInCorrectCharacters());
      currEl?.classList.add('text-red-500');
    }

    // Typing ends
    if (currentTextIndex === practiceText.length - 1) {
      dispatch(setEndTime(Date.now()));
      dispatch(setPracticeState({ isOpen: false, reason: 'Ended' }));
    }
  };

  return (
    <>
      <input
        type="text"
        autoFocus
        className="absolute -left-2 w-2 bg-white/0 text-white/0 caret-white focus:outline-none"
        onChange={(e) => handleTypeInput(e)}
        onKeyDown={(e) => {
          if (e.key === 'Backspace') e.preventDefault();
        }}
        ref={inputRef}
      />
    </>
  );
};

export default TypeInput;
