// import your function
import { myName, info } from "./myName";
import css from "./style.css";

function component() {
  const element = document.createElement("h1");

  // use your function!
  element.textContent = myName("UMAR");
  return element;
}

document.body.appendChild(component());

function summry() {
  const element = document.createElement("p");

  element.textContent = info;
  return element;
}

document.body.appendChild(summry());
