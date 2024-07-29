// caesarCipher.test.js
import { caesarCipher } from "./caesarCipher";

test("shifts lowercase letters correctly", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("shifts uppercase letters correctly", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("keeps punctuation unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shift values", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});
