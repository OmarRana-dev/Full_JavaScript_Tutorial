export const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  const length = arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, current) => acc + current, 0);
  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
};
