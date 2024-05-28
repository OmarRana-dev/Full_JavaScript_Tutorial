import { Product, Order } from "./Order.js";
import { PricingCalculator } from "./PricingCalculator.js";
import { Invoice } from "./invoice.js";
import { PaymentProcess } from "./PaymentProcessor.js";

const product1 = new Product(1, "Laptop", 100);
const product2 = new Product(2, "Iphone", 200);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCalculate = new PricingCalculator();
const invoice = new Invoice();
const processPayment = new PaymentProcess();

const total = pricingCalculate.calculatePricing(order.getProducts());
invoice.generateInvoice(order.getProducts(), total);
processPayment.processPayment();