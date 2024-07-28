export const calculator = {
  add: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return false;
    }
    return x + y;
  },
  subtract: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return false;
    }
    return x - y;
  },
  divide: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return false;
    }
    return x / y;
  },
  multiply: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return false;
    }
    return x * y;
  },
};
