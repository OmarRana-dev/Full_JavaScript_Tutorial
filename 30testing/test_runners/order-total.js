function orderTotal(order) {
  return order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export { orderTotal };
