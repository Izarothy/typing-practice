import React from 'react';
import getPracticeStats from '../lib/getPracticeStats';
import { useAppSelector } from '../lib/hooks';

const PracticeStats = () => {
  const { startTime, endTime } = useAppSelector((state) => state.practiceTime.value);
  const practiceText = useAppSelector((state) => state.practiceText.value);

  const characterCount = practiceText.length;

  const { CPM, secondsElapsed } = getPracticeStats(characterCount, startTime, endTime);
  return (
    <div>
      CPM: {CPM} <br /> Seconds elapsed: {secondsElapsed}
    </div>
  );
};

export default PracticeStats;
