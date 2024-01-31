// object literals

// // here is how to define a symbol property in object
// const mySym = Symbol("SymbolValue");

// const JsUser = {
//   name: "Omar Rana",
//   [mySym]: "ValueKey1", //only way of defining symbol in obj
//   age: 28,
//   from: "Pakistan",
//   designation: "Full Stack-Developer",
//   email: "omarchodry234@duck.com",
//   experties: ["Back-end", "Front-end", "Data-Base"],
// };

// console.log(JsUser.name);
// console.log(JsUser["experties"]); // the good way of calling a obj property
// console.log(JsUser[mySym]) //the only way of calling symbol property in obj

// want a full array of object keys
// console.log(Object.keys(JsUser));

// now change the object key value
// Object.freeze(JsUser)// after freeze a object you are not able to change values in obj

// JsUser.email = "rumar234@gmail.com"
// console.log(JsUser["email"])
// console.log(JsUser);

// add function in obj
// JsUser.greeting = function () {
//   return `Hello JS User: ${this.name}! `
// }

// console.log(JsUser.greeting())
// console.log(JsUser)

// Part 2
// singleton Object
// const singleton = new Object()

// // so know want ot marge to objects
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// // another way of marging objects
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

// const userArr = [
//   {
//     id: "Jahid",
//     email: "jahid34@gmail.com",
//   },
//   {
//     id: "Aror",
//     email: "aror234@gmail.com",
//   },
//   {
//     id: "Gajan",
//     email: "ganj34@gmail.com",
//   },
//   {
//     id: "Moroo",
//     email: "moroo65@gmail.com",
//   },
// ];

// console.log(userArr[1].email);

// const JsUser2 = {
//   name: "Omar Rana",
//   [mySym]: "ValueKey1", //only way of defining symbol in obj
//   age: 28,
//   from: "Pakistan",
//   designation: "Full Stack-Developer",
//   email: "omarchodry234@duck.com",
//   experties: ["Back-end", "Front-end", "Data-Base"],
// };

// // want to check is a property avalibal in object or not
// console.log(JsUser2.hasOwnProperty("login"))
// console.log(JsUser2.hasOwnProperty("name"))
// console.log(Object.values(JsUser2))
// console.log(Object.keys(JsUser2))

// Part 3

// const college = {
//   name: "Punjab Group of Colleges",
//   class: "ICS 1st Year",
//   section: "BA.C",
//   Room: 20,
// }

// console.log(college["name"])

// const {class: nameofclass} = college
// console.log(nameofclass)


