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

sumRangeRecursively(5, 2);
