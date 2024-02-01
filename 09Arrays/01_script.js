// // High Order Arrays Methods "Filter", "Map", "reduce"

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10];

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

// // We also define multiple methods on one array
// const newnum1 = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 50);
// console.log(newnum1);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1951, edition: 2006 },
//   { title: "Book Two", genre: "Science", publish: 1981, edition: 2004 },
//   { title: "Book Three", genre: "Non-Fiction", publish: 1999, edition: 2013 },
//   { title: "Book Four", genre: "History", publish: 1974, edition: 1990 },
//   { title: "Book Five", genre: "Fiction", publish: 1954, edition: 2012 },
//   { title: "Book Six", genre: "Science", publish: 1986, edition: 1995 },
//   { title: "Book Seven", genre: "History", publish: 1998, edition: 2006 },
//   { title: "Book Eight", genre: "Non-Fiction", publish: 1912, edition: 1954 },
//   { title: "Book Nine", genre: "Fiction", publish: 1990, edition: 2016 },
// ];

// let userBooks = books.filter((book) => book.genre === "Science");

// userBooks = books.filter((book) => book.publish > 1980);
// console.log(userBooks);

// // Array.reduce()
// // in a readable way
// const arr1 = [1, 2, 3, 4];
// const total = arr1.reduce(function (acc, curVal) {
//   console.log(`${acc} - ${curVal}`);
//   return acc + curVal;
// }, 2);// we give 2 here to start the expresion
// console.log(total);

// const arr2 = [1,2,3,4,5,6,7,8,7,8,9]
// // in a shorter way
// const total2 = arr2.reduce((acc, curVal) => (acc + curVal), 0)
// console.log(total2)

const cart = [
  {
    itemName: "VIVO Y11 Mobile",
    price: 19000,
  },
  {
    itemName: "Note 10pro Mobile",
    price: 30000,
  },
  {
    itemName: "Personal Computer",
    price: 32000,
  },
];

const totalValue = cart.reduce((acc, curVal) => acc + curVal.price, 0);
console.log(totalValue);
