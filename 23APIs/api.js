const lastUpdate = document.querySelector("#lastUpdate");

fetch(
  "https://api.weatherapi.com/v1/current.json?key=989e8d4d83124f15a0772835241603&q=hafizabad"
)
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
    lastUpdate.textContent = data.current.last_updated;

  })
  .catch((reject) => {
    console.log(reject);
  });
