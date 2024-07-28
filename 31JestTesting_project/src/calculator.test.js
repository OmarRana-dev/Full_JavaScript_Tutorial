import { calculator } from "./calculator";

test("add the numbers", () => {
  expect(calculator.add(3, 5)).toEqual(8);
});

test("subtract the numbers", () => {
  expect(calculator.subtract(5, 2)).toEqual(3);
});

test("divide the numbers", () => {
  expect(calculator.divide(100, 10)).toEqual(10);
});

test("Multiply the numbers", () => {
  expect(calculator.multiply(5, 10)).toEqual(50);
});

test("handles non-string inputs gracefully", () => {
  expect(calculator.add("helo", 34)).toBeFalsy();
  expect(calculator.add(null)).toBeFalsy();
  expect(calculator.add(undefined)).toBeFalsy();
});
