export const getNextEvents = (currentEvent: number): number[] => {
  return [currentEvent * 2, currentEvent * 2 + 1];
};
