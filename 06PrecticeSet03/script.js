// // 1. Write a JavaScript function ot generate a random integer.
// function rand(min, max) {
//     if ((min && max)){
//         return Math.round(Math.random() * (max - min) + min)
//     }
//     else if (!max && min) {
//         return Math.round(Math.random() * min + 1)
//     }else if (!min && !max){
//         return Math.round(Math.random())
//     }
// }

// // Test Data :
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand());


// // 2. Write a JavaScript function to convert a nubmer from one base to another.
// // Note: Both bases must be between 2 and 36.
// function base_convert(numbers, fromBase, toBase) {
//     if ((fromBase && toBase) < 2 || (fromBase && toBase) > 36) {
//         return "Base must be between 2 and 36";
//     }else {
//         return parseInt(numbers, fromBase).toString(toBase);
//     }
// };
 
// // Test Data :
// console.log(base_convert("234fff", 10, 32));
// console.log(base_convert('E164', 16, 8));
// console.log(base_convert(1000, 2, 8));


// // 3. Write a JavaScript function to convert a binary number to a decimal number.
// function bin_to_dec(binary) {
//     return parseInt(binary, 2)
// }

// // Test Data :
// console.log(bin_to_dec('110011'));
// console.log(bin_to_dec('100'));


// // 4. Write a JavaScript function to convert a decimal number to a binary, hexadecimal or octal number. 
// function dec_to_bho(decimal, change_base) {
//     let x = change_base.toUpperCase()
//     switch (x) {
//         case "O":
//             return decimal.toString(8);
//         case "H":
//             return decimal.toString(16);
//         case "B":
//             return decimal.toString(2);
//         default:
//             return "value must be between binary, hexadecimal or octal";
//     }
// }

// // Test Data :
// console.log(dec_to_bho(120,'B'));
// console.log(dec_to_bho(120,'H'));
// console.log(dec_to_bho(120,'O'));



// // 5. Write a JavaScript function to format a number up to specified cedimal places.
// function decimals(value, aDec_value) {
//     return Number(value).toFixed(aDec_value)
// }

// // Test Data :
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));
// console.log(decimals(2200, 2));
// console.log(decimals("3456", 1));


// // 6. Write a JavaScript function to find the highest value in an array.
// function max(arr) {
//     return Math.max(...arr);
// }

// // Test Data :
// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));



// // 7. Write a JavaScript function to find the lowest value in an array.
// function min(arr) {
//     return Math.min(...arr);
// }

// // Test Data:
// console.log(min([12,34,56,1]));
// console.log(min([-12,-34,0,-56,-1]));

