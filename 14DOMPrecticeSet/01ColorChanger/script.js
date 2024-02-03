const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach((e) => {
    e.addEventListener("click", (btn) => {
        const btnInfo = btn.target.id
        if (btnInfo) {
            document.querySelector("body").style.background = btnInfo
        }
    })
})
