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

  getGif(finalUrl);
}
fetchGif("random");

async function getGif(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    appendChild(data.data.images.original.url);
  } catch (error) {
    console.log("The error is here: " + error);
  }
}

const bodyEl = document.querySelector("body");
function appendChild(url) {
  const child = document.querySelector("img");
  bodyEl.removeChild(child);

  const img = document.createElement("img");
  img.setAttribute("src", `${url}`);

  bodyEl.appendChild(img);
}
