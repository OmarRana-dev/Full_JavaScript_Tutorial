// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//       console.log("Async task is completed");
//       resolve()
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// //
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("async task 2")
//         resolve()
//     }, 1000);
// }).then(() => {
//     console.log("Async 2 resolved")
// })

// const promiseThird = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//       resolve({
//           username: "omarsharif",
//           email: "omarrana190@gmail.com"
//     })
//   }, 1000);
// })

// promiseThird.then(function (user) {
//     console.log(user)

// })

// // 
// const promiseFouth = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "omardev",
//         password: "password123",
//       });
//     } else {
//       reject("ERROR: Something went wrong.");
//     }
//   }, 1000);
// });

// promiseFouth
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((myusername) => {
//     console.log(myusername);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is done.");
//   });

// // 
// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "JSdeveloper",
//         password: "password123StrongOne",
//       });
//     } else {
//       reject("ERROR: JS went wrong.");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const responce = await promiseFive;
//     console.log(responce);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// // with async
// async function getAllUsers() {
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

// // with promise
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


