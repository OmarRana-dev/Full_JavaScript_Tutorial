const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#results");

    let BMIWeight = 0;

    if (
      (height === "" || height < 0 || isNaN(height) === true) ||
      (weight === "" || weight < 0 || isNaN(weight) === true)
    ) {
      result.innerHTML = "Plese give a valid Hight";
    }
    else {
        BMIWeight = (weight / ((height*height)/10000)).toFixed(2);
    }

    if (BMIWeight < 18.6) {
        result.innerHTML = `Under Weight: You Weight is ${BMIWeight}`
    }
    else if (BMIWeight >= 18.6 && BMIWeight <= 24.9) {
        result.innerHTML = `Normal Weight: You Weight is ${BMIWeight}`
    }
    else if (BMIWeight > 24.9){
        result.innerHTML = `Over-Weight: You Weight is ${BMIWeight}`
    }
});
