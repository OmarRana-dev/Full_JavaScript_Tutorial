const fruits = ["Banana", "Maroon", "Olive", "Apple", "Mango"];
const fruits1 = ["Guava", "Pomegranate", "Peach", "Orange", "Graps"];

// // Basic Array Methods

// let result = fruits.at(3)
// console.log(result)

// fruits.pop()
// fruits.push("aaloo")

// fruits.shift()
// fruits.unshift("Bangan")

// let join = fruits.join(" *_* ")
// console.log(join)

// console.log(fruits.indexOf("Banana"))

// console.log(fruits.reverse())

// // copies element from index 0(is target) to index 3(start(where u start coping item)) 4(end(where u should to end))
// console.log(fruits1.copyWithin(0, 3, 4))

// console.log(fruits.constructor)

// // The entries() method returns a new Array Iterator object containing key/value pairs for each array index.
// let iterator = fruits.entries()
// for(let entry of iterator) {
//     console.log(entry)
// }

// // The every() method checks if all the array elements pass the given test function.
// const ageArray = [34, 23, 10, 26, 22];
// function checkAdult(age) {
//     return age >= 18;
// }
// let check = ageArray.every(checkAdult);
// console.log(check)

// // The fill() method returns an array by filling all elements with a specified value.
// console.log(fruits.fill("Cherry", 1));
// console.log(fruits.fill("Cherry", 2, 4));

// // The filter() method returns a new array with all elements that pass the test defined by the given function.
// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
// let newPrices = prices.filter((price) => (price > 2000 && !Number.isNaN(price)));
// console.log(newPrices);

// // Find the value of the first element with a value over 18
// const ages = [3, 10, 18, 20];
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.find(checkAge))

// // Find the first index no(element) with a value over 18
// const ages = [13, 10, 18, 20];
// console.log(ages.findIndex(checkAge));
// function checkAge(age) {
//   return age > 18;
// }

// // Find the value of the last element with a value over 18
// const ages = [30, 10, 19, 10];
// function checkAge(age) {
//   return age > 18;
// }
// console.log(ages.findLast(checkAge))


// // Find the last element with a value over 18
// const ages = [3, 17, 19, 12];
// console.log(ages.findLastIndex(checkAge));
// function checkAge(age) {
//   return age > 18;
// }


// // Create a new array with the sub-array elements concatenated
// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr.flat());

// const myArr = [1, 2, [3, [4, [5, 5], 6], 7], 8];
// console.log(myArr.flat(3));


// // The flatMap() method maps all array elements and creates a new flat array.
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr)

// // The forEach() method calls a function for each element in an array.
// fruits.forEach(myfunction)
// function myfunction(value) {
//     console.log("Hello" + value);
// }

// // The Array.from() method returns an array from any object with a length property.
// console.log(Array.from("ABCDEFG"))

// // The includes() method returns true if an array contains a specified value.
// console.log(fruits1.includes("Peach"))

// // The indexOf give the no of element
// console.log(fruits1.indexOf("Orange"))

// // value is Array or not
// let text = "ABCDEF";
// console.log(Array.isArray(text));
// console.log(Array.isArray(fruits1));


// // Create an Array Iterator object, containing the keys of the array
// const keys = Object.keys(fruits);
// let text = "";
// for (let x of keys) {
//   text += x + "<br>";
// }
// console.log(keys)


// // The lastIndexOf() method returns the last index (position) of a specified value.
// console.log(fruits.lastIndexOf("Apple"))


// // // map()
// // Return a new array with the square root of all element values
// const numbers = [4, 36, 16, 49];
// console.log(numbers.map(Math.sqrt))

// // Multiply all the values in an array with 10
// const numbers1 = [65, 44, 12, 4];
// const newArr = numbers1.map(myFunction)
// console.log(newArr)
// function myFunction(num) {
//   return num * 10;
// }

// // Create a new array from a numberof arguments.
// console.log(Array.of("Pante", "Shirt", "Pajama", "Jens", "Suite"))


// const numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc))
// function myFunc(total, num) {
//   return total - num;
// }

// console.log(fruits);
// fruits.sort();
// fruits.reverse();

// console.log(fruits.toString())

// // The valueOf() method returns the array itself.
// console.log(fruits.valueOf())


// // The with() method updates a specified array element.
// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths)

