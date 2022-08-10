import React from 'react';
import { useAppSelector } from '../lib/hooks';

const CharacterCount = () => {
  const practiceText = useAppSelector((state) => state.practiceText.value);
  const currentTextIndex = useAppSelector((state) => state.currentTextIndex.value);

  return (
    <div>
      {currentTextIndex}/{practiceText.length}
    </div>
  );
};

export default CharacterCount;
