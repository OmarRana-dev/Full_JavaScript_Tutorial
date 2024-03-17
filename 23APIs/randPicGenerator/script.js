const img = document.querySelector("img");

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input").value;

  fetchGif(input);
});

function fetchGif(option) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=bEcOMA02AQjfm9J8dGzli3qaZaUIxp4D&s=`;

  const finalUrl = url + option;
  console.log(finalUrl);

  fetch(finalUrl)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      appendChild(response.data.images.original.url);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchGif("random");

const bodyEl = document.querySelector("body");
function appendChild(url) {
  const child = document.querySelector("img");
  bodyEl.removeChild(child);

  const img = document.createElement("img");
  img.setAttribute("src", `${url}`);

  bodyEl.appendChild(img);
}
