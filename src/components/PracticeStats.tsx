import React from 'react';
import getPracticeStats from '../lib/getPracticeStats';
import { useAppSelector } from '../lib/hooks';

const PracticeStats = () => {
  const { startTime, endTime } = useAppSelector((state) => state.practiceTime.value);
  const correctCharacters = useAppSelector((state) => state.typeInput.value.correctCharacters);
  const incorrectCharacters = useAppSelector((state) => state.typeInput.value.incorrectCharacters);

  const { CPM, secondsElapsed } = getPracticeStats(correctCharacters, startTime, endTime);
  return (
    <div className="flex flex-col">
      <span>
        CPM: {CPM} (approx. {CPM / 5} WPM)
      </span>
      <span>Seconds elapsed: {secondsElapsed}</span>
      <span>Characters right: {correctCharacters}</span>
      <span>Characters wrong: {incorrectCharacters}</span>
    </div>
  );
};

export default PracticeStats;
