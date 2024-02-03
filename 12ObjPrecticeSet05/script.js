// // 1. Write a javaScript program to list the properties of a javascript object.
// let student = {
//   name: "Haseeb",
//   sclass: "VI",
//   rollno: 23,
// };

// console.log(Object.keys(student))

// // 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// let student = {
//   name: "Haseeb",
//   sclass: "VI",
//   rollno: 23,
// };

// console.log(student)
// delete student.name;
// console.log(student)

// // 3. Write a JavaScript program to get the length of a JavaScript object.
// let student = {
//   name: "Haseeb",
//   sclass: "VI",
//   rollno: 23,
// };

// let lenNum = Object.keys(student);
// console.log(lenNum.length);

// // 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// let library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus) {
//     console.log(`You Read the Book ${library[i].title} by ${library[i].author}`)
//   }
//   else {
//   console.log(
//     `You not Read yet the Book ${library[i].title} by ${library[i].author}`
//   );
//   }
// }

// // 5. Write a bubble sort algorithm in JavaScript.
// let data = [6, 4, 0, 3, -2, 1];
// data.sort((a, b) => {
//   return b - a;
// });

// console.log(data)

// // Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// function library(title, aut_name, genre, pages, readORNot) {
//   this.title = title;
//   this.aut_name = aut_name;
//   this.genre = genre;
//   this.pages = pages;
//   this.readORNot = readORNot;
//   this.info = function () {
//     if (this.readORNot) {
//       console.log(
//         `${this.title} by ${this.aut_name}, a ${this.genre}, ${this.pages} pages, is readed`
//       );
//     } else {
//       console.log(
//         `${this.title} by ${this.aut_name}, a ${this.genre}, ${this.pages} pages, not read yet`
//       );
//     }
//   };
// }

// const richDadPoorDad = new library(
//   "Rich Dad Poor Dad",
//   "Robert Kiyosaki",
//   "Self-help",
//   336,
//   true
// );
// const thinkandGrowRich = new library(
//   "Think and Grow Rich",
//   "Napoleon Hill",
//   "Self-help",
//   238,
//   false
// );

// richDadPoorDad.info();
// thinkandGrowRich.info();
