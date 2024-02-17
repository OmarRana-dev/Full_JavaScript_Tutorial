// // StopWatch
// class StopWatch {
//     constructor() {
//         let startTime, endTime, running, duration = 0;

//         this.start = function () {
//             if (running) {
//                 throw new Error("Already Started")
//             }
//             else {
//                 startTime = new Date();
//                 return running = true;
//             }
//         };

//         this.stop = function () {
//             if (running) {
//                 endTime = new Date();

//                 const second = (endTime.getTime() - startTime.getTime()) / 1000;
//                 duration += second

//                 return running = false
//             }
//             else {
//                 throw new Error("already Stoped")
//             }
//         }

//         Object.defineProperty(this, 'duration', {
//             get: function () { return duration; }
//         })
//     }
// }
// const sw = new StopWatch()


// // from w3resource
// // 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country.Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
// class Person {
//     constructor(name, age, country) {
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }

//     presonDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`
//     }
// }

// const omar = new Person("Omar", 20, "Pakistan")
// const hitech = new Person("Hitech", 30, "India")

// console.log(omar.presonDetails())
// console.log(hitech.presonDetails())



// // 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.Include two methods to calculate rectangle area and perimeter.Create an instance of the 'Rectangle' class and calculate its area and perimeter.
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     rectangleArea() {
//         return this.width * this.height;
//     }

//     perimeter() {
//         return (this.width + this.width) + (this.height + this.height)
//     }

// }

// const area = new Rectangle(12, 7)
// console.log(area.rectangleArea())
// console.log(area.perimeter())


// // 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
// class Vehicle {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     vehicleDetails() {
//         return `The Vehicles specifications:
//             Make: ${this.make},
//             Model: ${this.model},
//             Year: ${this.year}`
//     }
// }

// const vehicle = new Vehicle('Ford', 'F-150', 2020);
// console.log(vehicle.vehicleDetails());


// class Car extends Vehicle {
//     constructor(make, model, year, doors) {
//         super(make, model, year);
//         this.doors = doors;
//     }

//     vehicleDetails() {
//         return `The Vehicles specifications:
//             Make: ${this.make},
//             Model: ${this.model},
//             Year: ${this.year}
//             Doors: ${this.doors}`
//     }
// }

// const suzuke = new Car("Honda", "A Class G43", 2024, 4)
// console.log(suzuke.vehicleDetails())



// // 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance.Include methods to deposit and withdraw money from the account.Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
// class BandAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(balance) {
//         this.balance += balance;
//         console.log(`Now your balance is: ${this.balance}`)
//     }

//     withdraw(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount
//             console.log(`You withdraw amount is: ${amount}`)
//             console.log(`Your current balance is: ${this.balance}`)
//         }
//         else {
//             throw new Error("Your current balance is Insufficient.")
//         }
//     }

//     displayBalance() {
//         console.log(`Your current balance is: ${this.balance}`)
//     }
// }

// const omar = new BandAccount("ABL-2345345Ad087", 50000)
// omar.displayBalance()
// omar.withdraw(23600)
// omar.deposit(900)



// // 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.Create an instance of the 'Circle' class and calculate its area.Similarly, do the same for the 'Triangle' class.
// class Shape{

//     calculateArea(l, w) {
//         return l * w;
//     }

// }

// class Circle extends Shape {
//     constructor(radius) {
//         super()
//         this.radius = radius;
//     };

//     calculateArea() {
//         return Math.round(Math.PI * (Math.pow(this.radius, 2)))
//     };
// }
// const area1 = new Circle(80)
// console.log(area1.calculateArea())

// class Triangle extends Shape {
//     constructor(base, height) {
//         super()
//         this.base = base;
//         this.height = height;
//     }

//     calculateArea() {
//         return (this.base * this.height) / 2
//     }
// }
// const area2 = new Triangle(67, 5)
// console.log(area2.calculateArea())



// 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.Include a method to calculate annual salary.Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department.Override the annual salary calculation method to include bonuses for managers.Create two instances of the 'Manager' class and calculate their annual salary.



// 12. Write a JavaScript program that creates a class called University with properties for university name and departments.Include methods to add a department, remove a department, and display all departments.Create an instance of the University class and add and remove departments.
class University {
    constructor(name) {
        this.name = name;
        this.departments = []
    }

    addDepartment(name) {
        this.departments.push(name)
    }

    removeDepartment(name) {
        let index = this.departments.indexOf(name)
        if (index > -1) {
            this.departments.splice(index, 1)
        }
    }

    displayDepartments() {
        this.departments.forEach(name => {
            console.log(name)
        })
    }
}

const departments = new University("G.C.U")
departments.addDepartment("Iqbal Department")
departments.addDepartment("Qaid Department")
departments.addDepartment("Jinah Department")

// departments.displayDepartments();
departments.removeDepartment("Iqbal Department")
departments.displayDepartments();