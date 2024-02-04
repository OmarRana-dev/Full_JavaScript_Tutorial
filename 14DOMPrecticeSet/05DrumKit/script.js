document.addEventListener("keydown", (e) => {

    // console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`)
    btn.classList.add("style");

})


const keys = document.querySelectorAll(".btn");
keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== "transform") return;

        e.target.classList.remove("style")
    })
})