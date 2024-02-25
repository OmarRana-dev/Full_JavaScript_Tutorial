import { getDadjoke } from "random-jokes";

function generateJoke() {
  getDadjoke().then((joke) => {
    document.querySelector("#joke").innerHTML = joke;
  });
}
// generateJoke();
export default generateJoke;
