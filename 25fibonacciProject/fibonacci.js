function fibs(num) {
  const fibonacciSequence = [];

  if (num === 0) return fibonacciSequence;
  if (num === 1) {
    fibonacciSequence.push(0);
    return fibonacciSequence;
  }

  let i = 0;

  let a = 0;
  let b = 1;
  while (i < num) {
    fibonacciSequence.push(a);
    const c = a + b;
    a = b;
    b = c;

    i++;
  }

  return fibonacciSequence;
}

// console.log(fibs(8));

function fibsRec(n) {
  const fibonacciSequence = [];

  let i = 0;
  while (i < n) {
    function fibonacci(n) {
      if (n < 2) return n;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacciSequence.push(fibonacci(i));
    i++;
  }

  return fibonacciSequence;
}

// console.log(fibsRec(9));

function mergeSort(numArray) {
  if (numArray.length <= 1) return numArray;

  const middle = Math.floor(numArray.length / 2);

  const leftHalf = numArray.slice(0, middle);
  const rightHalf = numArray.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  console.log(`Leftes: ${left} & Rightes: ${right}`);

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  console.log(`Merged: ${merged}`);
  return merged;
}

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 23]));
