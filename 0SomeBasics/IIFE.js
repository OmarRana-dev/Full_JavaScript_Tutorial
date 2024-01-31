// Immediately Invoked Function Expressions IIFE

//? so the question is way we use IIFE function?
// one for immediate executing and 2nd we don't want to pollute our function from global scope

// // for call this function need a call so we want to call it emmediately obviously we not wait to call it so that way we call it "Immediatedly"
// function computer() {
//     console.log("DB Connnected")
// }
// computer()

// // to call IIFE function we just need to wrap our function in Round brackets () like here
// (function computer() {
//   console.log("DB Connnected");
// })()// and now just look at the IIFE function the first () is function like> "function fun(){}" and the 2nd round bracket for calling to function. ()()

// //! IIFE function may some time give you the error so make sure to use semisolon ; to avoid this error like
// (function computer() {
//   console.log("DB Connnected two");
// })();

// // we also abel to define IIFE function with arrow function
// (() => {
//   console.log("Function Executed")
// })();

// // we also abel to give him argoment or perameter like.
// let userName = "Omar Rana"
  
// ((name) => {
//   console.log(`Hello, Welcome ${name}`);
// })("Omar Rana")
  
// (() => {
//   console.log("Function Executed")
// })()

//! two important thing about IIFE 1st one when ever you will make a IIFE function make sure before your IIFE function located value end with semicolen ";". and 2nd make sure your IIFE function after call endwith semicolen ";" if you not do this it will throw you a error check up<


// // solved version 

// let userName = "Omar Rana";

// ((name) => {
//   console.log(`Hello, Welcome ${name}`);
// })("Omar Rana");

// (() => {
//   console.log("Function Executed")
// })();
