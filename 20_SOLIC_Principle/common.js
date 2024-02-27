// ***Clean Code: S.O.L.I.D Design Principles

// **Single Responsibility Principle**
// The single responsibility principle says that a class or module should have only a single purpose.

// !Bad Way
class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ....
    }
  }
  verifyCredentials() {
    // ....
  }
}

// *Good Way
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ....
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ....
    }
  }
}

// **Open/Closed Principle**
// The open-closed principle says that code should be open for extension, but closed for modification.

// !Bad Way
class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    let range = this.fuelCapacity * this.fuelEfficiency;

    if (this instanceof HybridVehicle) {
      range += this.electricRange;
    }
    return range;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); // Outputs '150'
console.log(hybridVehicle.getRange()); // Outputs '200'


// *Good Way
// on any condition we will not modify our code
class Vehicle1 {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

class HybridVehicle1 extends Vehicle1 {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    getRange() {
        return (this.fuelCapacity * this.fuelEfficiency) + this.electricRange;
    }
}

const standardVehicle1 = new Vehicle1(10, 15);
const hybridVehicle1 = new HybridVehicle1(10, 15, 50);

console.log(standardVehicle1.getRange()); // Outputs '150'
console.log(hybridVehicle1.getRange()); // Outputs '200'



// **Liskov Substitution Principle**
// The Liskov substitution principle states that any class should be substitutable for its parent class without unexpected consequences.

// !BAD
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return `Width: ${this.width} - Height: ${this.height} = ${
      this.height * this.width
    }`;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function increaseRectangleWidth(area) {
  area.setWidth(area.width + 1);
}

const rectangle = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle);
increaseRectangleWidth(square);

console.log(rectangle.getArea());
console.log(square.getArea());



// *GOOD
class Shape {
  getArea() {
    return `Width: ${this.width} - Height: ${this.height} = ${
      this.height * this.width
    }`;
  }
}

class Rectangle_1 extends Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return `Width: ${this.width} - Height: ${this.height} = ${
      this.height * this.width
    }`;
  }
}

class Square_1 extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function increaseRectangleWidth(area) {
  area.setWidth(area.width + 1);
}

const rectangle1 = new Rectangle_1(10, 2);
const square1 = new Square_1(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(square1);

console.log(rectangle1.getArea());
console.log(square1.getArea());


// **Interface Segregation Principle** //
// The interface segregation principle states that an entity should never be forced to implement an interface that contains elements which it will never use.

// For example, a Penguin should never be forced to implement a Bird interface if that Bird interface includes functionality relating to flying, as penguins (spoiler alert) cannot fly.
// *GOOD
class Penguin {}

class Bird {}

const flyer = {
    fly() {
        console.log(`Flap flap, I'm flying!`);
    },
};

Object.assign(Bird.prototype, flyer);

const bird = new Bird();
bird.fly(); // Outputs 'Flap flap, I'm flying!'

const penguin = new Penguin();
penguin.fly(); // 'Error: penguin.fly is not a function'


// !BAD
// in this example both have the unuseabel functions. 
class Animal {
  flyer() {
    console.log(this.name + " can fly")
  }

  swim() {
    console.log(this.name + " can swim")
  }
}

class Penguin1 extends Animal {}

class Bird1 extends Animal {}


const bird1 = new Bird1();
bird.fly(); // Outputs 'Flap flap, I'm flying!'

const penguin1 = new Penguin1();
penguin.fly(); // 'Error: penguin.fly is not a function'



// **Dependency Inversion Principle** //
// The dependency injection principle states that high level code should never depend on low level interfaces, and should instead use abstractions. It’s all about decoupling code.
// !BAD
class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    // Complicated, PayPal specific logic goes here
    const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

    if (paymentSuccess) {
      // Do something
      return true;
    }

    // Do something
    return false;
  }
}


// *GOOD 
class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PaymentHandler.requestPayment(
      paymentDetails,
      amount
    );

    if (paymentSuccess) {
      // Do something
      return true;
    }

    // Do something
    return false;
  }
}

class PaymentHandler {
  requestPayment(paymentDetails, amount) {
    // Complicated, PayPal specific logic goes here
    return PayPal.requestPayment(paymentDetails, amount);
  }
}