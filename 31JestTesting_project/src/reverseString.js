// reverseString.js
export const reverseString = (str) => {
  if (typeof str !== "string") {
    return str;
  }
  return str.split("").reverse().join("");
};
