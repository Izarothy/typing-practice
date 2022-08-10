import React from 'react';
import { useAppSelector } from '../lib/hooks';

const PracticeText = () => {
  const practiceText = useAppSelector((state) => state.practiceText.value);
  return (
    <div className="inline-flex gap-[3px]">
      {practiceText.split('').map((letter, idx) => (
        <span key={idx} id={`L${idx.toString()}`}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default PracticeText;
