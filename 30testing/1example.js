const someOrder = {
  items: [
    { name: "Drangon food", price: 8, quantity: 8 },
    { name: "Drangon cage (small)", price: 800, quantity: 2 },
  ],
};

const orderTotal = (order) =>
  order.items.reduce(
    (prev, cur) => prev + cur.price * cur.quantity,
    0
  );

let result = orderTotal(someOrder);
console.log(result);
