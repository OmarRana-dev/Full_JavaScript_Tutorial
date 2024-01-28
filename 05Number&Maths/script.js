// Numbers

// // --in javascript numbers are stored as a floating point numbers
// console.log(23 === 23.0)

// // Some Time using Number maybe makes error so be active when you are using decimal number
// // JavaScript Stores number in 64 bits
// console.log(0.2 + 0.1)
// console.log((0.2 + 0.1) === 0.3)

// // To solve the problem above, it helps to multiply and divide:
// console.log((0.2 * 10 + 0.1 * 10) / 10)


// // --Different ways of writting a number 
// let billion = 1000000000;

// // writting in this way maybe more readable
// let billion1 = 1_000_000_000;
// console.log(billion1)

// // after e "n" number represent the "n" zero after 1
// let billion2 = 1e9;
// console.log(billion2)

// // in this value -6 represent the numbers after decimel.  
// let billion3 = 4354e-6;
// console.log(billion3)


// // --Writting numbers in different bases

// // variable with binery number and console get it as a decimel number.
// let x = 0b111111111;
// console.log(x)

// // variable with octal number and console get it as a decimel number
// let y = 0o3455;
// console.log(y)

// // variable with hexadecimel number again console get it as a decimel number
// let z = 0x4f3;
// console.log(z)


// // --Converting a number to string 
// let num1 = 225;
// console.log(num1.toString())

// // We can also convert the base of the number with .toString()
// // By default, JavaScript displays numbers as base 10 decimals.
// // But you can use the toString() method to output numbers from base 2 to base 36.
// // Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
// let num = 334;
// console.log(`Hexatrigesimal (base 36): ${num.toString(36)}`); 
// console.log(`Duotrigesimal (base 32): ${num.toString(32)}`); 
// console.log(`Hexadecimal (base 16): ${num.toString(16)}`);
// console.log(`Duodecimal (base 12): ${num.toString(12)}`); 
// console.log(`Decimal (base 10): ${num.toString(10)}`); 
// console.log(`Octal (base 8): ${num.toString(8)}`); 
// console.log(`Binary (base 2): ${num.toString(2)}`); 




// // toFixed() method word same as Math.round() do only the difference if it will return a string instead of return a number as Math.round() do. You will see Math.round() on next some lines
// let balance = 120.43;
// console.log(balance.toFixed())


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



