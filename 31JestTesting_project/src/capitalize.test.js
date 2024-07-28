import { capitalize } from "./capitalize";

test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns an empty string when given an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("returns the same string if the first character is already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("handles single character strings", () => {
  expect(capitalize("a")).toBe("A");
});

test("handles non-string inputs gracefully", () => {
  expect(capitalize(123)).toBe(123);
  expect(capitalize(null)).toBe(null);
  expect(capitalize(undefined)).toBe(undefined);
});