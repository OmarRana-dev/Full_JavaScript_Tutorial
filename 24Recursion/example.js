function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
    console.log(`index: ${i} = total: ${total}`);
  }
  return total;
}
// sumRange(5);

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

console.log(replicate(6, 6));