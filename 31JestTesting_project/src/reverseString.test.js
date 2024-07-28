// reverseString.test.js
import { reverseString } from "./reverseString.js";

test("reverses a regular string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverses a single character string", () => {
  expect(reverseString("a")).toBe("a");
});

test("returns an empty string when given an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("handles palindromes correctly", () => {
  expect(reverseString("madam")).toBe("madam");
});

test("handles non-string inputs gracefully", () => {
  expect(reverseString(123)).toBe(123);
  expect(reverseString(null)).toBe(null);
  expect(reverseString(undefined)).toBe(undefined);
});
