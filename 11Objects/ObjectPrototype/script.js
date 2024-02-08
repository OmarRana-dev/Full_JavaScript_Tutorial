// // The First thing if you want to learn prototype in easy way so check this this video its pretty straightforward! and he will teach you very easlly link is here: https://youtu.be/uMI5cNeHTOc?si=pUFvH6A7dAckKtSB


// // constracter function who its work

// function Player(name, team) {
//     this.name = name;
//     this.team = team;

//     myfunction = function () {
//         return `The Player is: ${this.name} and the team of the player: ${this.team}`
//     }
// }


// // // if we make object like so the 2nd object will overwrite the previous object values. 
// // const playerOne = Player("Otis Khan", "Pakitan");
// // const playerTwo = Player("Sunil Chhetri", "India");

// // so when we put here a new keyword it will make a newly created object not overwrite the previous object.
// const player1 = new Player("Imran Kayani", "Pakitan");
// const player2 = new Player("S.A Samad", "India");




// // let myName = "john    "
// // let fatherName = "Macdonald     "

// // // if you want to put this method in prototype and want to access for trim the string so 
// // console.log(myName.trueLength);


// let myHeros = ["thor", "spiderman"]


// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function () {
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.john = function () {
//     console.log(`john is present in all objects`);
// }

// Array.prototype.peter = function () {
//     console.log(`peter says hello`);
// }

// heroPower.john()
// myHeros.john()
// myHeros.peter()
// heroPower.peter()

// inheritance

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function () {
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh ".trueLength()
// "  iceTea".trueLength()




// Recommended method for prototypal inheritance
// Now, how do you utilize Prototypal Inheritance ? What do you need to do to use it ? Just as we use Object.getPrototypeOf() to ‘get’ or view the prototype of an object, we can use Object.setPrototypeOf() to ‘set’ or mutate it.Let’s see how it works by adding a Person Object Constructor to the Player example, and making Player inherit from Person!

function Person(name) {
    this.name = name;
}

// we put a function into Person constractor
// this value is not accessable until we put it into Object prototype.
Person.prototype.sayName = function () {
    console.log(`Hello, I'm ${this.name}`)
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function () {
    console.log(`My Marker is ${this.marker}`)
}

console.log(Object.getPrototypeOf(Player.prototype))
Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype))

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'