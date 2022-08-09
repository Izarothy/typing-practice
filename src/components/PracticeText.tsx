import React from 'react';
import { useAppSelector } from '../lib/hooks';

const PracticeText = () => {
  const practiceText = useAppSelector((state) => state.practiceText.value);
  return <div>{practiceText}</div>;
};

export default PracticeText;
