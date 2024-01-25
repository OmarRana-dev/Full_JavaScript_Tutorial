// // 1. Write a JavaScript function to check if the value is a string or not.
// function is_string(value) {
//     return typeof value ==='string' ? true : false;
// }
// console.log(is_string(7869));
// console.log(is_string("Hello world"));

// // 2. Write a javascript function to check if the value is blank or not.
// function is_blank(value) {
//     return value === ''? true : false;
// }
// console.log(is_blank(""));
// console.log(is_blank("Hello world"));
// console.log(is_blank(2345));

// // 3. Write a javascript function to convert a string to a JavaScript array.
// function string_to_array(value) {
//     return value.split(" ");
// }
// console.log(string_to_array("Hello world"));
// console.log(string_to_array("Hello boy! I hope you well enough."));

// // 4. Write a JavaScript function to extract a specified number of character from a string.
// function truncate_string(input, value) {
//     return input.slice(0, value);
// }
// console.log(truncate_string("Omar Rana", 4))

// // 5. Write a JavaScript function to convert a string into abbreviated form.
// function abbrev_name(value) {
//     // Short Form of Code
//     let arr = value.split(" ");
//     if (arr.length > 1) {
//         return arr.at(0) + " " + arr.at(1).at(0).toUpperCase() + ".";
//     };
//     return arr.at(0);

//     // // Long Form of Code
//     // let arr = value.split(" ");
//     // let nSplitedValue1 = arr.at(0);
//     // let nSplitedValue2 = arr.at(1);
//     // let nSpVaShort = nSplitedValue2.at(0).toUpperCase();
//     // let abbrev = nSplitedValue1.concat(" ", nSpVaShort+".");
//     // return abbrev;
// };
// console.log(abbrev_name("Robin singh"))
// console.log(abbrev_name("Robin"))


// // 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// function protect_email(value) {
//   let container = value.includes("@");
//   if (container === true) {
//     let splitMail = value.split("@");
//     let part1 = splitMail.at(0).length / 2;
//     return splitMail
//       .at(0)
//       .slice(0, part1)
//       .concat("...@")
//       .concat(splitMail.at(1));
//   } else {
//     return "Please add valid mail.";
//   }
// }
// console.log(protect_email("robin_singh@example.com"));


// I will continue this after completing Arrays and functions.