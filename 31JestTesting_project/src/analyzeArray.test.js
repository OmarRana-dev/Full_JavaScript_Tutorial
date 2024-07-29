import { analyzeArray } from "./analyzeArray";

test("analyzes an array of numbers correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("returns null for non-array inputs", () => {
  expect(analyzeArray("not an array")).toBe(null);
  expect(analyzeArray(123)).toBe(null);
  expect(analyzeArray(null)).toBe(null);
  expect(analyzeArray(undefined)).toBe(null);
});

test("returns null for an empty array", () => {
  expect(analyzeArray([])).toBe(null);
});
