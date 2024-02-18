// // Lexical scoping
// // on any condition childe always get values from parents but parents are not abel to access values from childe, and also siblings are not share values with eachother. that's the rule of lexical environment.

// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();


// // Closure
// // when you return a function in closure it will return the hole lexical scope of the function not only function like undre in this example.
// function makeAdding(firstNumber) {
//     // "first" is scoped within the makeAdding function
//     const first = firstNumber;

//     // here return value return the hole lexical scoped function to add5 so that way add5 abel to add to in function of resultion as a secondNumber,
//     return function resulting(secondNumber) {
//         // "second" is scoped within the resulting function
//         const second = secondNumber;
//         return first + second;
//     }
// }

// const add5 = makeAdding(5);
// console.log(add5(2)) // logs 7


// // Here is a prectical example of closure
// const orange = document.querySelector("#orange")
// const green = document.querySelector("#green")

// // what if someone told you apply different 100 colores or more so how you will do it also we are not using closure. definitely no.
// // orange.onclick = function() {
// //     document.body.style.backgroundColor = "orange"
// // }
// // green.onclick = function() {
// //     document.body.style.backgroundColor = "green"
// // }

// function clickHundler(color) {
//     // if we do this, this will automaticly execute this function
//     // document.body.style.backgroundColor = `${color}`

//     // so here we use closure
//     return function () {
//         document.body.style.backgroundColor = `${color}`
//     }
// }

// green.onclick = clickHundler("green");
// orange.onclick = clickHundler("orange");



// // Factory functions

// // constructur function here we every thing access by this key word and making more objects with new key word. so that way they are not good 
// const User = function (name) {
//     this.name = name;
//     this.discordName = "@" + name;
// }
// // hey, this is a constructor - 
// // then this can be refactored into a factory!

// function createUser(name) {
//     const discordName = "@" + name;
//     return { name, discordName };
// }
// // and that's very similar, except since it's just a function,
// // we don't need a new keyword


// // The Object shorthand notation
// const name = "Bob";
// const age = 19;
// const color = "red";

// const newFancyObject = { name, age, color };
// console.log(name, age, color) // just variable
// console.log({ name, age, color }) // it will make object

// // Destructuring
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// // This creates two variables, a and b,
// // which are equivalent to
// // const a = obj.a;
// // const b = obj.b;

// const array = [1, 2, 3, 4, 5];
// const [zerothEle, firstEle] = array;
// // This creates zerothEle and firstEle, both of which point
// // to the elements in the 0th and 1st indices of the array



// // Private variables and functions
// function createUser(name) {
//     const discordName = "@" + name;

//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;

//     return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//     discordName: josh.discordName,
//     reputation: josh.getReputation()
// });


// // Prototypal inheritance with factories
// function createPlayer(name, level) {
//     const { getReputation, giveReputation } = createUser(name)

//     const increaseLevel = () => level++;
//     return {name, getReputation, giveReputation, increaseLevel}
// }

// // here is another way of doing this
// function createPlayer1(name, level) {
//     const user = createUser(name);

//     const increaseLevel = () => level++;
//     return Object.assign({}, user, { increaseLevel })
// }


// // The module pattern - IIFEs
// // This pattern of wrapping a factory function inside an IIFE is called the module pattern.
// const calculator = (function () {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
// })();

// console.log(calculator.add(3, 5)); // 8
// console.log(calculator.sub(6, 2)); // 4
// console.log(calculator.mul(14, 5534)); // 77476


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


// // Module Pattern in JavaScript

// const SomeModule = (function () {
//     console.log("HEllo".toUpperCase())
// }());

// const Formatter = (function () {
//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

//     const makeUppercase = (text) => {
//         log("Making uppercase");
//         return text.toUpperCase();
//     };

//     return {
//         makeUppercase,
//     }
// })();

// console.log(Formatter.makeUppercase("tomek"));


// // Modules can house not only functions, but arrays, objects and primitives as well.
// const Formatter = (function () {
//     let timesRun = 0;

//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//     const setTimesRun = () => {
//         log("Setting times run");
//         ++timesRun;
//     }

//     const makeUppercase = (text) => {
//         log("Making uppercase");
//         setTimesRun();
//         return text.toUpperCase();
//     };

//     return {
//         makeUppercase,
//         // timesRun,
//     }
// })();

// // Let’s execute it:
// console.log(Formatter.makeUppercase("tomek"));
// console.log(Formatter.timesRun);
// // As expected, 0 is shown.But note that this can be overwritten from outside.
// Formatter.timesRun = 10;
// console.log(Formatter.timesRun);

// // Now console logs 10. This shows that everything publicly exposed can be changed from the outside.This is one of the biggest module pattern drawbacks.

// // Reference types works differently.Here, you can define it and it will be populated as you go.
// const Formatter1 = (function () {
//     const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//     const timesRun = [];

//     const makeUppercase = (text) => {
//         log("Making uppercase");
//         timesRun.push(null);
//         return text.toUpperCase();
//     };

//     return {
//         makeUppercase,
//         timesRun,
//     }
// })();

// console.log(Formatter1.makeUppercase("tomek"));
// console.log(Formatter1.makeUppercase("tomek"));
// console.log(Formatter1.makeUppercase("tomek"));
// console.log(Formatter1.timesRun.length);


// // factory funciton with scrimba.com
// // constrctor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayName = function () {
//     console.log(this.name)
// }

// const jeff = new Person('Jeff', 33);

// jeff.sayName();

// // factory Function
// const personFactory = (name, age) => {
//     const sayHello = () => console.log('hello!');
//     return { name, age, sayHello };
// };

// const jeff1 = personFactory('jeff', 27);
// const john2 = personFactory('John', 23)

// console.log(jeff1.name);
// console.log(john2.name)

// jeff1.sayHello();
// john2.sayHello()


// const name = "Maynard";
// const color = "red";
// const number = 23;
// const food = "rice";

// console.log({ name, color, number, food })


// const FactoryFunction = string => {
//     const capitalizeString = () => string.toUpperCase();
//     const printString = () => console.log(`----${capitalizeString()}----`);
//     return { printString };
// };

// const taco = FactoryFunction('taco');

// // taco.capitalizeString(); //we have not return this function that way it's not access able
// taco.printString();


// const counterCreator = () => {
//     let count = 0;
//     return () => {
//         console.log(count);
//         count++;
//     };
// };

// const counter = counterCreator();

// counter();
// counter();
// counter();


// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName = () => name;
//     const die = () => {
//         // uh oh
//     };
//     const damage = x => {
//         health -= x;
//         if (health <= 0) {
//             die();
//         }
//     };
//     const attack = enemy => {
//         if (level < enemy.getLevel()) {
//             damage(1);
//             console.log(`${enemy.getName()} has damaged ${name}`);
//         }
//         if (level >= enemy.getLevel()) {
//             enemy.damage(1);
//             console.log(`${name} has damaged ${enemy.getName()}`);
//         }
//     };
//     return { attack, damage, getLevel, getName };
// };

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);


// const Person = (name) => {
//     const sayName = () => console.log(`my name is ${name}`);
//     return {sayName};
//   }
  
//   const Nerd = (name) => {
//     const {sayName} = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return {sayName, doSomethingNerdy};
//   }
  
//   const jeff = Nerd('jeff');
  
//   jeff.sayName();
//   jeff.doSomethingNerdy(); 

//   const Nerd1 = (name) => {
//     const prototype = Person(name);
//     const doSomethingNerdy = () => console.log('nerd stuff');
//     return Object.assign({}, prototype, {doSomethingNerdy});
//   }