const img = document.querySelector("img");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("submit", () => {
//   const value = input.value;
//   fetch(
//     `https://api.giphy.com/v1/gifs/translate?api_key=bEcOMA02AQjfm9J8dGzli3qaZaUIxp4D&s=${value}`,
//     { mode: "cors" }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       img.src = response.data.images.original.url;
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=bEcOMA02AQjfm9J8dGzli3qaZaUIxp4D&s=cars",
  { mode: "cors" }
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    img.src = response.data.images.original.url;
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

