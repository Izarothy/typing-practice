const getPracticeStats = (characterCount: number, startTime: number, endTime: number) => {
  const secondsElapsed = Math.floor((endTime - startTime) / 1000);

  const CPM = (characterCount / secondsElapsed) * 60;
  return { CPM, secondsElapsed };
};
export default getPracticeStats;
