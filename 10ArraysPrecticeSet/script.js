// // 1. Write a JavaScript function to check whether an 'input' is and array or not.
// function is_array(value) {
//     return Array.isArray(value);
// }
// console.log(is_array("w3resource"));
// console.log(is_array([1, 2, 3]));

// // 2. Write a JavaScript function to clone an array.
// function array_clone(value) {
//     return value.slice(0);
// }
// console.log(array_clone([1, 2, 3, 0]))
// console.log(array_clone([1, 2, [4, 5]]))

// // .3 Write a JavaScript function ot get the first element of an array. Passing the 'n' will return the first 'n' element of the array.
// function first(arr, n = 1) {
//   if (n < 0) {
//     return [];
//   } else if (n > arr.length) {
//     return arr;
//   } else {
//     return arr.slice(0, n);
//   }
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// // 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// function last(arr, n) {
//     if (n == null) {
//         return arr.at(-1)
//     }
//     if (n > 0) {
//         return arr.slice(-n)
//     }

// }

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],2));
// console.log(last([7, 9, 0, -2],3));

// // 5. Write a simple JavaScript program to join all elements of the following array into a string.
// let myColor = ["Red", "Green", "White", "Black"];
// function join_arr(value, element) {
//     return value.join(element)
// }
//                 //  value, joing element
// console.log(join_arr(myColor, ","))

// // 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 425468 the output should be 4-254-6-8.
// function sort_even(value) {
//     let str = value.toString();
//     let result = [str[0]];
//     console.log(result)

//     for(let i = 1; i < str.length; i++) {
//         if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
//             result.push("-", str[i]);
//         }else {
//             result.push(str[i])
//         }
//     }
//     return result.join("");
// }

// console.log(sort_even(425468))

// // 7. Write a JavaScript program to find the most frequent item in an array.
// function most_freqnt(value) {

//   let myObject = {};
//   value.forEach((element) => {
//     if (myObject.hasOwnProperty(`${element}`)) {
//       myObject[element] += 1;
//     } else {
//       myObject[element] = 1;
//     }
//   });

//   const keyWithLargestValue = Object.entries(myObject).reduce(
//     (largest, [key, value]) => {
//       return value > largest[1] ? [key, value] : largest;
//     },
//   );

//   return `${keyWithLargestValue.at(0)} ( ${keyWithLargestValue.at(1)} Time )`
// }

// let arr1 = [3, "a", "a", "a", 2, 2, 2, 2, 2, 3, "a", 3, "a", 2, 4, 9, 9, 9, 9, 9, 9, 9, 9, 3];
// console.log(most_freqnt(arr1));

// // 8. Write a new function called swapCase that takes a string and uses .map, change the case to opposite and return the resulting string.
// function swapCase(value) {
//     return [...value].map(element => ((element === element.toUpperCase() ? element.toLowerCase(): element.toUpperCase()))).join("");
// }

// let valuebe = "The Quick Brown Fox"
// console.log(swapCase(valuebe));
// console.log(valuebe);

// // 9. Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// function capitalize_sting(value) {
//     return [...value].map(element => element.toUpperCase()).join("");

// }

// console.log(capitalize_sting("hello chodry"))
// console.log(capitalize_sting("woohoo"))

// // 10. Write a JavaScript program that prints the elements of the following array.
// // Note: Use nested for loops.
// const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (let i in arr) {
//     console.log("Row: " + (Number(i)+1));

//     for (let value of arr.at(i)) {
//         console.log(value)
//     }
// }

// // 11. Write a JavaScript program to find the sum of squares of a numerical vector.
// function find_sum(value) {
//     let sum = 0
//     value.forEach(element => {
//         sum += Math.pow(element, 2)
//         console.log(Math.pow(element, 2))

//     });

//     return sum
// }

// console.log(find_sum([1,2,3,4,5,6]))

// // 12. Write a JavaScript program to compute the sum and product of an array of integer.
// function sum_comp(arr) {
//     let sum = 0;
//     let product = 1;
//     arr.forEach(element => {
//         sum += element;
//         product *= element
//     });

//     return `The final sum is ${sum} and the product is ${product}`
// }

// console.log(sum_comp([1,2,3,4,5,6]))


// Find Exercises from W3resource https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
