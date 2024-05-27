export class Invoice {
  generateInvoice(products, total) {
    console.log(`
    Invoice Date: ${new Date().toDateString()}
    -------------------------------
    Product Name\tPrice`);
    products.forEach((product) => {
      console.log(`\t${product.name}\t\t\t${product.price}`);
    });
    console.log("-----------------------------------");
    console.log(`Total: ${total}`);
  }
}
