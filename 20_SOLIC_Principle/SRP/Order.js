// Single Responsibility Principal:
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
class Order {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
  removeProduct(productId) {
    this.products = this.products.filter(
      (product) => product.id !== productId
    );
  }
  
}

export { Product, Order };
