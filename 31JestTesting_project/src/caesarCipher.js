// caesarCipher.js

const isLetter = (char) => {
  return char.toLowerCase() !== char.toUpperCase();
};

const shiftChar = (char, shift) => {
  const charCode = char.charCodeAt(0);
  let shiftedCharCode;

  if (char >= 'a' && char <= 'z') {
    shiftedCharCode = ((charCode - 97 + shift) % 26) + 97;
  } else if (char >= 'A' && char <= 'Z') {
    shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
  } else {
    return char;
  }

  return String.fromCharCode(shiftedCharCode);
};

export const caesarCipher = (str, shift) => {
  return str.split('').map(char => isLetter(char) ? shiftChar(char, shift) : char).join('');
};
