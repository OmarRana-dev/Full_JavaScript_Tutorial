// Open-close principle
class PaymentProcessor {
  constructor(paymentProcessor) {
    this.processor = paymentProcessor;
  }
  processPayment(amount) {
    this.processor.processPayment(amount);
  }
}
class CreditCardProcessor {
  processPayment(amount) {
    console.log(`Processing credit card payment of ${amount}`);
  }
}
class PaypalProcessor {
  processPayment(amount) {
    console.log(`Processing paypal payment of ${amount}`);
  }
}
const creditCardProcessor = new CreditCardProcessor();
const paypalProcessor = new PaypalProcessor();
const processor = new PaymentProcessor(paypalProcessor);
processor.processPayment(100);
