// toFixed() method word same as Math.round() do only the difference if it will return a string instead of return a number as Math.round() do. You will see Math.round() on next some lines
let balance = 120.43;
console.log(balance.toFixed())


// // Format a number into a currency string, using the locale settings.
// let hundred = 1000000;
// console.log(hundred.toLocaleString())

// // Always return positive value without regard whether the number is nagitive or positive
// console.log(Math.abs(-234.34))

// // Do all of this on your console and take better understanding how these motheds are work
// console.log(Math.round(4.4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))

// // here we will find min and max number from a number valriables
// let math = (2,3,4,5,4,5,6,8);
// console.log(Math.min(math))
// console.log(Math.max(math))



// // Some Time using Number maybe makes error so be active when you are using decimal number
// let met1 = 0.2 * 7;
// let met2 = 0.2 + 1.2;
// // if ()
// console.log(0.2 * 7)
// console.log(0.2 + 1.2)
// console.log(met1 === met2)

// // Math.random() always returns a number lower than 1.
// console.log(Math.random())

// //if you want random number 1 to N num to multiplay with Math.random with N 
// console.log(Math.random() * 100)

// // you want to ingnor decimal number use Math.round() or Math.floor() or Math.ceil() its depend on you what you want.
// console.log(Math.floor(Math.random() * 50))

// // also u want to ingnor 0 use addition + like underline
// console.log(Math.round(Math.random() * 100) + 1)

// // know you also want from n(minimum) number to n(Maximum) number randomlly so use min max formula

// let min = 20;
// let max = 90;
// console.log(Math.round(Math.random() * (max - min + 1)) + min) // Maybe this is deficult to understand so fro now just remember fromula or just look at this formula or when ever u need it then copy this formula from here. 


