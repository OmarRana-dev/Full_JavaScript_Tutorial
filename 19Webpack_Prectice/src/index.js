import generateJoke from "./generateJoke.js";
import "./style/main.scss";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  generateJoke();
});
