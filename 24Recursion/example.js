function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}
// console.log(sumRange(5));

function sumRangeRecursively(n, total = 0) {
  let i = total + n;
  console.log(`${n} + ${total} = ${i}`);
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursively(n - 1, total + n);
}
// sumRangeRecursively(5, 2);

function power(n, p) {
  if (p <= 0) {
    return 1;
  }

  return n * power(n, p - 1);
}
// console.log(power(3, 4));

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// console.log(factorial(6));

const all = (array, callback) => {
  if (array.length === 0) {
    return true;
  } else if (callback(array[0])) {
    array.shift();

    return all(array, callback);
  } else {
    return false;
  }
};

const allAreLessThenSeven = all([1, 3, 5], (num) => {
  return num < 7;
});
// console.log(allAreLessThenSeven);

const productOfArray = (array) => {
  if (array.length === 0) {
    return 1;
  }

  return array.shift() * productOfArray(array);
};
// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
  thing: {
    moreStuff: {
      magicNumber: 45,
      something: "dick",
    },
  },
};
function contains(tree, value) {
  if (typeof tree !== "object" || tree === null)
    return tree === value;
  for (const key of Object.values(tree)) {
    console.log(key);
    if (contains(key, value)) return true;
  }
  return false;
}
// console.log(contains(nestedObject, 44));
// console.log(contains(nestedObject, "dick"));

const totalIntegers = (array) => {
  if (array.length === 0) return 0;

  let total = 0;
  let first = array.shift();

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total++;
  }
  return total + totalIntegers(array);
};
// let array = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
// console.log(totalIntegers(array));

const SumSquares = (array) => {
  if (array.length === 0) return 0;

  let square;
  let first = array.shift();
  if (Array.isArray(first)) {
    square = SumSquares(first);
  } else if (Number.isInteger(first)) {
    square = first * first;
  }
  return square + SumSquares(array);
};
// var l = [1, 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

const replicate = (time, num) => {
  if (time <= 0) {
    return [];
  }

  return [num].concat(replicate(time - 1, num));
};
// console.log(replicate(6, 7));

// Sum All nonnegative intergers up to n
const sumAllNonNegative = (num) => {
  if (num <= 0) return 0;
  return num + sumAllNonNegative(num - 1);
};
// console.log(sumAllNonNegative(6));

// Implement findRange in a recursive fashion
const findRange = (from, to) => {
  if (to - from === 2) {
    return [from + 1];
  }

  let list = findRange(from, to - 1);
  list.push(to - 1);

  return list;
};
// console.log(findRange(2, 9));

// Write a JavaScript program to get the first n Fibonacci numbers.
const fibonacci_series = (n) => {
  if (n <= 1) return [0, 1];

  let list = fibonacci_series(n - 1);
  list.push(list[list.length - 1] + list[list.length - 2]);

  return list.slice(0, n);
};

console.log(fibonacci_series(10));
