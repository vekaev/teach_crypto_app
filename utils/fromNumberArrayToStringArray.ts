export const fromNumberArrayToStringArray = (arr: number[]) => {
  return arr
    .filter(item => Number.isInteger(item))
    .map(item => item.toString());
};
