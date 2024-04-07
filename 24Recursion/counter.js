const counter = (number) => {
  while (number >= 0) {
    console.log(number);
    number--;
  }
};

// counter(5);

const recursionCounter = (num) => {
  if (num === 0) return;

  console.log(num);
  recursionCounter(num - 1);
};

// recursionCounter(5);

const nums = [1, 2, 3, 4, 5];
const sum = (array, index) => {
  if (index === array.length - 1) {
    console.log(`Base Case: Index ${index}`);
    return array[index];
  }

  console.log(`At index: ${index}`);
  const total = array[index] + sum(array, index + 1);
  console.log(`Total at index: ${index} is ${total}`);
  return total;
};

// const result = sum(nums, 0);
// console.log(result);

// ! Work under the hood
// sum(nums, 0);
//     1 + sum(nums, 1)
//         2 + sum(nums, 2)
//             3 + sum(nums, 3)
//                 4 + sum(nums, 4)
//                     5
//                     if(4 === 4) {
//                        return 5
//                     }
//                 return 4 + 5;
//             return 9 + 3;
//         return 12 + 2;
//     return 14 + 1;
// return 15;

function sumTo(n) {
  if (n <= 0) {
    return n;
  }

  return n + sumTo(n - 1);
}

// console.log(sumTo(100));

const main = {
  gold: 3,
  left: {
    gold: 2,
    left: {
      gold: 6,
    },
    right: {
      gold: 3,
    },
  },
  right: {
    gold: 5,
    right: {
      gold: 7,
      left: {
        gold: 34,
      },
    },
  },
};

const countGold = (level) => {
  let total = level.gold;

  if (level.left) total += countGold(level.left);

  if (level.right) total += countGold(level.right);

  return total;
};

const result = countGold(main);
console.log(result);

// ! How it's work under the hood;
// countGold(main)
//   total = 3;
//   total += countGold(left);
//     total = 2
//     total += countGold(left)
//       total = 6
//       return 6
//     total += countGold(right)
//       total = 3
//       return 3
//     return 11
//   total += countGold(right)
//     total = 5
//     total += countGold(right)
//       total = 7
//       total += countGold(left)
//         total = 34
//         return 34
//       return 41
//     return 46
//   return 60

function factorial(value) {
  if (value === 1) {
    return value;
  }
  console.log(`the current value: ${value}`);
  const total = value * factorial(value - 1);
  console.log(`now total is: ${total}`);
  return total;
}

// console.log(factorial(5));

function power(num1, num2) {
  let value = num1;
  if (num2 === 0) {
    return 1;
  }

  return value * power(num1, num2 - 1);
}

// console.log(power(2, 3));

// Question: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr.shift() * productOfArray(arr);
}

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
};

function contains(obj, value) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

// console.log(contains(nestedObject, "foo2"));

function all(array, callback) {
  if (array.length === 0) return true;

  if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  }
}

const arr = [2, 4, 1, 6];

const response = all(arr, function (num) {
  // console.log(num);
  return num < 7;
});
// console.log(response);

// Question: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
