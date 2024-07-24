const someOrder = {
  items: [
    { name: "Drangon food", price: 200, quantity: 1 },
    { name: "Drangon cage (small)", price: 800, quantity: 2 },
    { name: "Shipping", price: 50, shipping: true },
  ],
};

const orderTotal = (order) => {
  const itemsTotals = order.items
    .filter((x) => !x.shipping)
    .reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
  const shippingItem = order.items.find((x) => !!x.shipping);
  const shipping = itemsTotals > 3000 ? 0 : shippingItem.price;
  return itemsTotals + shipping;
};

let result = orderTotal(someOrder);
console.log(result);
