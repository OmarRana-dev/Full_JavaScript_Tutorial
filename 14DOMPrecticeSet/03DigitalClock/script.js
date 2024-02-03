let clock = document.querySelector("#clock");


setInterval(function () {
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();

}, 1000)