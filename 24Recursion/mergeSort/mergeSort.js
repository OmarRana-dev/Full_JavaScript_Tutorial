#!/usr/bin/env node

//* Iterative Approach
const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fibArray = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
};

// // Testing the function
// console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(fibs(5)); // Output: [0, 1, 1, 2, 3]
// console.log(fibs(1)); // Output: [0]
// console.log(fibs(0)); // Output: []

//* Recursive Approach
const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibArray = fibsRec(n - 1);
  fibArray.push(
    fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
  );
  return fibArray;
};

// // Testing the function
// console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
// console.log(fibsRec(5)); // Output: [0, 1, 1, 2, 3]
// console.log(fibsRec(1)); // Output: [0]
// console.log(fibsRec(0)); // Output: []

//* Merge Sort Implementation
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// Testing the function
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
console.log(mergeSort([1])); // Output: [1]
console.log(mergeSort([])); // Output: []
