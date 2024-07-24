import { orderTotal } from "./order-total.js";

it(("works", () => {}));

if (
  orderTotal({
    items: [
      { name: "Drangon food", price: 200, quantity: 1 },
      { name: "Drangon cage (small)", price: 800, quantity: 2 },
    ],
  }) !== 1000
) {
  throw new Error("check fail: happy path (example 1)");
}

if (
  orderTotal({
    items: [
      { name: "Drangon collar", price: 20, quantity: 1 },
      { name: "Drangon chew toy", price: 80, quantity: 2 },
    ],
  }) !== 100
) {
  throw new Error("check fail: happy path (example 2)");
}
