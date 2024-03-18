// // Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404

// // async/await version
// async function loadJson(url) {
//     const responce = await fetch(url);

//     if (!responce.ok) {
//         const data = await responce.json();
//         return data;
//     }

//     throw new Error(responce.json);

// }

// loadJson("https://javascript.info/no-such-user.json").catch(alert);



