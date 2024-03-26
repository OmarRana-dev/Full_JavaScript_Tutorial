fetch(
  "https://api.weatherapi.com/v1/forecast.json?key=989e8d4d83124f15a0772835241603&q=Lahore&days=3"
)
  .then((resolve) => {
    console.log(resolve.status);
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
    const iconUrl = data.current.condition.icon;
    console.log(iconUrl);
    dayORnight(iconUrl);
  })
  .catch((reject) => {
    console.log(reject);
  });




function night(code) {



}