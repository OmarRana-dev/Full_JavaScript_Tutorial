const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=bEcOMA02AQjfm9J8dGzli3qaZaUIxp4D&s=iron man",
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
